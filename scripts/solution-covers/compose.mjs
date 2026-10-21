// Composes a cover drawing from three icons: a start, a middle and an end, joined by arrows.
import { icons } from "./icons.mjs";

const SLOTS = [110, 530, 950];
const GROUND = 650;

export function composeCover([a, b, c]) {
  for (const n of [a, b, c]) if (!icons[n]) throw new Error(`Unknown icon: ${n}`);
  const place = (name, x) => `<g transform="translate(${x} ${GROUND})">${icons[name]()}</g>`;
  const arrow = (x) => `<path d="M${x} 470h70m-14-14 14 14-14 14"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1360 800" fill="none">
  <rect width="1360" height="800" fill="#f3eee2"/>
  <g stroke="#171207" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M80 ${GROUND}h1200"/>
    ${place(a, SLOTS[0])}${place(b, SLOTS[1])}${place(c, SLOTS[2])}
    ${arrow(SLOTS[0] + 325)}${arrow(SLOTS[1] + 325)}
  </g>
</svg>`;
}
