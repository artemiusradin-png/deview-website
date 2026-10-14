// Renders the case study cover drawings to the webp files the site serves (1360×800, card ratio 1.7).
// Run from the repo root: node scripts/case-covers/render.mjs
import { mkdir, readdir, readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const here = path.dirname(new URL(import.meta.url).pathname);
const out = path.join(here, "../../public/images/cases/covers");
await mkdir(path.join(out, "half"), { recursive: true });

for (const file of await readdir(here)) {
  if (!file.endsWith(".svg")) continue;
  const svg = await readFile(path.join(here, file));
  const name = file.replace(/\.svg$/, "");
  await sharp(svg, { density: 200 })
    .resize(1360, 800, { fit: "cover" })
    .webp({ quality: 90 })
    .toFile(path.join(out, `${name}.webp`));
  // Half-card version for the split card (logo left, drawing right): the drawing trimmed to its
  // own bounds and centred on cream at 680×800, so nothing is cropped at the card edge.
  // Thicker strokes: the half version is shown smaller, so 3px lines would turn to hairlines.
  const bold = Buffer.from(svg.toString().replace(/stroke-width="3"/g, 'stroke-width="5"'));
  const drawing = await sharp(bold, { density: 200 })
    .resize(1360, 800)
    .trim({ background: "#f3eee2", threshold: 8 })
    .resize(632, 740, { fit: "inside" })
    .toBuffer({ resolveWithObject: true });
  const { width, height } = drawing.info;
  await sharp({ create: { width: 680, height: 800, channels: 3, background: "#f3eee2" } })
    .composite([{ input: drawing.data, left: Math.round((680 - width) / 2), top: Math.round((800 - height) / 2) }])
    .webp({ quality: 90 })
    .toFile(path.join(out, "half", `${name}.webp`));
  console.log(`rendered ${name}`);
}
