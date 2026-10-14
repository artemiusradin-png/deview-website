// Renders the case study cover drawings to the webp files the site serves (1360×800, card ratio 1.7).
// Run from the repo root: node scripts/case-covers/render.mjs
import { mkdir, readdir, readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const here = path.dirname(new URL(import.meta.url).pathname);
const out = path.join(here, "../../public/images/cases/covers");
await mkdir(out, { recursive: true });

for (const file of await readdir(here)) {
  if (!file.endsWith(".svg")) continue;
  const svg = await readFile(path.join(here, file));
  const name = file.replace(/\.svg$/, "");
  await sharp(svg, { density: 200 })
    .resize(1360, 800, { fit: "cover" })
    .webp({ quality: 90 })
    .toFile(path.join(out, `${name}.webp`));
  console.log(`rendered ${name}`);
}
