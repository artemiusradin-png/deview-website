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
  // Half-card version for the split card (logo left, drawing right): the drawing cut to its own
  // bounds, scaled to one common size and centred on cream at 680×800, so every card matches.
  // Thicker strokes: the half version is shown smaller, so 3px lines would turn to hairlines.
  const bold = Buffer.from(svg.toString().replace(/stroke-width="3"/g, 'stroke-width="5"'));
  const full = await sharp(bold, { density: 200 }).resize(1360, 800).png().toBuffer();
  const { data, info } = await sharp(full).raw().toBuffer({ resolveWithObject: true });
  const drawing = await sharp(full)
    .extract(contentBox(data, info))
    .resize(500, 460, { fit: "inside" })
    .toBuffer({ resolveWithObject: true });
  const { width, height } = drawing.info;
  await sharp({ create: { width: 680, height: 800, channels: 3, background: "#f3eee2" } })
    .composite([{ input: drawing.data, left: Math.round((680 - width) / 2), top: Math.round((800 - height) / 2) }])
    .webp({ quality: 90 })
    .toFile(path.join(out, "half", `${name}.webp`));
  console.log(`rendered ${name}`);
}

/** The bounding box of everything that is not the cream background. */
function contentBox(data, { width, height, channels }) {
  let left = width, top = height, right = -1, bottom = -1;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      if (Math.abs(data[i] - 0xf3) + Math.abs(data[i + 1] - 0xee) + Math.abs(data[i + 2] - 0xe2) > 24) {
        if (x < left) left = x;
        if (x > right) right = x;
        if (y < top) top = y;
        if (y > bottom) bottom = y;
      }
    }
  }
  return { left, top, width: right - left + 1, height: bottom - top + 1 };
}
