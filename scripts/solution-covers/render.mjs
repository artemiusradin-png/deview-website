// Renders the solution cover drawings to the files the site serves:
//   public/images/solutions/<slug>.webp     1360×800, used on the page
//   public/images/solutions/<slug>-og.jpg   1200×630, used as the Open Graph image
// Sources: hand-drawn <slug>.svg files here, plus the icon triples in covers.mjs.
// Run from the repo root: node scripts/solution-covers/render.mjs
import { mkdir, readdir, readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { composeCover } from "./compose.mjs";
import { COVERS } from "./covers.mjs";

const here = path.dirname(new URL(import.meta.url).pathname);
const out = path.join(here, "../../public/images/solutions");
await mkdir(out, { recursive: true });

const sources = new Map();
for (const file of await readdir(here)) {
  if (file.endsWith(".svg")) sources.set(file.replace(/\.svg$/, ""), await readFile(path.join(here, file)));
}
for (const [slug, triple] of Object.entries(COVERS)) {
  if (sources.has(slug)) throw new Error(`${slug} has both an svg file and a COVERS entry`);
  sources.set(slug, Buffer.from(composeCover(triple)));
}

for (const [name, svg] of sources) {
  await sharp(svg, { density: 200 })
    .resize(1360, 800, { fit: "cover" })
    .webp({ quality: 90 })
    .toFile(path.join(out, `${name}.webp`));
  await sharp(svg, { density: 200 })
    .resize(1200, 630, { fit: "cover" })
    .flatten({ background: "#f3eee2" })
    .jpeg({ quality: 88 })
    .toFile(path.join(out, `${name}-og.jpg`));
  console.log(`rendered ${name}`);
}
