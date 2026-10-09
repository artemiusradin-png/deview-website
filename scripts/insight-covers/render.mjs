// Renders the insight cover drawings to the webp files the site serves:
// 1200×675 (article hero + og:image) and 600×338 (cards).
// Run from the repo root: node scripts/insight-covers/render.mjs
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const here = path.dirname(new URL(import.meta.url).pathname);
const out = path.join(here, "../../public/images/insights");

for (const file of await readdir(here)) {
  if (!file.endsWith(".svg")) continue;
  const svg = await readFile(path.join(here, file));
  const name = file.replace(/\.svg$/, "");
  for (const [width, height] of [[1200, 675], [600, 338]]) {
    await sharp(svg, { density: 300 })
      .resize(width, height, { fit: "cover" })
      .webp({ quality: 90 })
      .toFile(path.join(out, `${name}-${width}.webp`));
  }
  console.log(`rendered ${name}`);
}
