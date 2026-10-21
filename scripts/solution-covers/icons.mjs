// Line-drawing icons for the solution cover drawings, in the case-cover style (ink strokes,
// paper fills, one yellow accent). Each icon draws in a slot 300 wide whose bottom-left is the
// origin: x runs right, y runs up as negative numbers. compose.mjs places three per cover.
const PAPER = "#fffdf7";
const CREAM = "#f3eee2";
const ACC = "#ffc933";
const INK = "#171207";

const rot = (a, cx, cy, inner) => `<g transform="rotate(${a} ${cx} ${cy})">${inner}</g>`;

export const icons = {
  shop: () => `
    <path d="M0 -320h290l-24 -64H24z" fill="${ACC}"/>
    <path d="M0 -320c0 18 24 18 24 0 0 18 24 18 24 0 0 18 24 18 24 0 0 18 24 18 24 0 0 18 24 18 24 0 0 18 24 18 24 0 0 18 24 18 24 0 0 18 24 18 24 0 0 18 24 18 24 0 0 18 24 18 24 0 0 18 24 18 24 0 0 18 24 18 24 0" fill="${PAPER}"/>
    <rect x="20" y="-302" width="250" height="302" fill="${PAPER}"/>
    <rect x="120" y="-200" width="76" height="200" fill="${CREAM}"/><circle cx="180" cy="-98" r="5" fill="${INK}"/>
    <rect x="42" y="-270" width="62" height="70" fill="${CREAM}"/><rect x="212" y="-270" width="38" height="70" fill="${CREAM}"/>`,
  doc: () => `
    <path d="M36 -410h172l56 56v354H36z" fill="${PAPER}"/><path d="M208 -410v56h56"/>
    <path d="M76 -320h150M76 -274h120M76 -228h150M76 -182h100"/>
    <rect x="76" y="-130" width="90" height="34" fill="${CREAM}"/>
    <circle cx="226" cy="-60" r="52" fill="${ACC}"/><path d="M200 -60l18 20 34-42" stroke-width="5"/>`,
  bank: () => `
    <path d="M0 -270l150 -122 150 122z" fill="${PAPER}"/><circle cx="150" cy="-310" r="16" fill="${ACC}"/>
    <rect x="0" y="-270" width="300" height="30" fill="${PAPER}"/>
    <rect x="24" y="-240" width="34" height="190" fill="${PAPER}"/><rect x="99" y="-240" width="34" height="190" fill="${PAPER}"/>
    <rect x="167" y="-240" width="34" height="190" fill="${PAPER}"/><rect x="242" y="-240" width="34" height="190" fill="${PAPER}"/>
    <rect x="0" y="-50" width="300" height="26" fill="${PAPER}"/><rect x="-24" y="-24" width="348" height="24" fill="${PAPER}"/>`,
  card: () => `
    <rect x="10" y="-300" width="280" height="190" rx="18" fill="${PAPER}"/>
    <rect x="10" y="-260" width="280" height="44" fill="${INK}"/>
    <rect x="36" y="-190" width="58" height="44" rx="8" fill="${ACC}"/>
    <path d="M36 -120h130M200 -120h60"/>
    <rect x="50" y="-96" width="200" height="86" rx="14" fill="${PAPER}"/><path d="M80 -60h90M80 -36h60"/>`,
  phone: () => `
    <rect x="70" y="-400" width="160" height="400" rx="28" fill="${PAPER}"/>
    <path d="M125 -374h50"/>
    <circle cx="150" cy="-270" r="42" fill="${ACC}"/><path d="M132 -270l14 16 24 -30" stroke-width="5"/>
    <path d="M100 -190h100M100 -154h70M100 -118h90"/>
    <rect x="100" y="-80" width="100" height="36" rx="6" fill="${INK}"/>`,
  ledger: () => `
    <rect x="10" y="-60" width="280" height="60" fill="${PAPER}"/><path d="M50 -60v60M90 -30h160"/>
    <rect x="30" y="-130" width="240" height="70" fill="${PAPER}"/><path d="M70 -130v70M110 -95h130"/>
    <rect x="0" y="-210" width="300" height="80" fill="${ACC}"/><path d="M40 -210v80M80 -170h180"/>
    <path d="M60 -250h180M60 -290h120" />`,
  hub: () => {
    const sat = [0, 1, 2, 3, 4, 5].map((k) => {
      const a = (k * Math.PI) / 3 - Math.PI / 2;
      const x = 150 + 120 * Math.cos(a), y = -190 + 120 * Math.sin(a);
      return `<path d="M150 -190L${x.toFixed(0)} ${y.toFixed(0)}"/><circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="26" fill="${PAPER}"/>`;
    }).join("");
    return `${sat}<circle cx="150" cy="-190" r="52" fill="${ACC}"/><circle cx="150" cy="-190" r="16" fill="${PAPER}"/>`;
  },
  shield: () => `
    <path d="M150 -390L270 -340V-230C270 -130 210 -60 150 -10C90 -60 30 -130 30 -230V-340Z" fill="${PAPER}"/>
    <path d="M150 -330L220 -300V-230C220 -170 190 -120 150 -80C110 -120 80 -170 80 -230V-300Z" fill="${ACC}"/>
    <path d="M118 -210l24 26 44 -56" stroke-width="6"/>`,
  scales: () => `
    <path d="M150 -400V-16"/><rect x="80" y="-16" width="140" height="16" fill="${PAPER}"/>
    <path d="M30 -340H270"/><circle cx="150" cy="-350" r="14" fill="${ACC}"/>
    <path d="M30 -340L0 -240M30 -340L60 -240M270 -340L240 -240M270 -340L300 -240"/>
    <path d="M-4 -240h68c0 40 -68 40 -68 0z" fill="${ACC}"/><path d="M236 -240h68c0 40 -68 40 -68 0z" fill="${PAPER}"/>`,
  chart: () => `
    <path d="M0 0h300M0 0V-380"/>
    <rect x="30" y="-120" width="44" height="120" fill="${INK}"/><rect x="100" y="-190" width="44" height="190" fill="${INK}"/>
    <rect x="170" y="-150" width="44" height="150" fill="${ACC}"/><rect x="240" y="-250" width="44" height="250" fill="${INK}"/>
    <path d="M20 -250L120 -300 190 -230 270 -340" fill="none"/><circle cx="270" cy="-340" r="10" fill="${PAPER}"/>`,
  server: () => `
    <rect x="20" y="-300" width="260" height="84" fill="${PAPER}"/><rect x="20" y="-206" width="260" height="84" fill="${PAPER}"/><rect x="20" y="-112" width="260" height="84" fill="${PAPER}"/>
    <circle cx="56" cy="-258" r="9" fill="${ACC}"/><circle cx="56" cy="-164" r="9" fill="${ACC}"/><circle cx="56" cy="-70" r="9" fill="${PAPER}"/>
    <path d="M100 -258h140M100 -164h140M100 -70h140"/><path d="M0 0h300"/>`,
  cloud: () => `
    <path d="M70 -90C10 -90 10 -190 80 -190C90 -280 200 -290 222 -200C290 -200 300 -90 240 -90Z" fill="${PAPER}"/>
    <path d="M150 -150V-250m-30 30 30 -30 30 30"/><circle cx="150" cy="-40" r="14" fill="${ACC}"/><path d="M60 -40h56M184 -40h56"/>`,
  db: () => `
    <path d="M40 -300V-80a110 36 0 0 0 220 0V-300"  fill="${PAPER}"/>
    <path d="M40 -220a110 36 0 0 0 220 0M40 -150a110 36 0 0 0 220 0"/>
    <ellipse cx="150" cy="-300" rx="110" ry="36" fill="${ACC}"/>`,
  lock: () => `
    <path d="M100 -200V-270a50 50 0 0 1 100 0V-200" fill="none" stroke-width="12"/>
    <path d="M100 -200V-270a50 50 0 0 1 100 0V-200" fill="none" stroke="${PAPER}" stroke-width="6"/>
    <rect x="60" y="-200" width="180" height="200" rx="14" fill="${PAPER}"/>
    <circle cx="150" cy="-120" r="20" fill="${ACC}"/><path d="M150 -100v44"/>`,
  globe: () => `
    <circle cx="150" cy="-190" r="150" fill="${PAPER}"/>
    <ellipse cx="150" cy="-190" rx="64" ry="150"/><path d="M0 -190h300M20 -270h260M20 -110h260"/>
    <circle cx="190" cy="-250" r="20" fill="${ACC}"/>`,
  tower: () => {
    let w = "";
    for (let r = 0; r < 6; r++) for (let c = 0; c < 3; c++) w += `<rect x="${92 + c * 46}" y="${-370 + r * 54}" width="26" height="30" fill="${r === 2 && c === 1 ? ACC : CREAM}"/>`;
    return `<rect x="70" y="-400" width="160" height="400" fill="${PAPER}"/>${w}<rect x="128" y="-60" width="44" height="60" fill="${CREAM}"/><path d="M40 0h220"/>`;
  },
  gear: () => {
    let t = "";
    for (let k = 0; k < 8; k++) t += rot(k * 45, 150, -190, `<rect x="130" y="-312" width="40" height="44" fill="${PAPER}"/>`);
    return `${t}<circle cx="150" cy="-190" r="100" fill="${PAPER}"/><circle cx="150" cy="-190" r="40" fill="${ACC}"/>`;
  },
  magnifier: () => `
    <path d="M196 -140L280 -50" stroke-width="20"/><path d="M196 -140L280 -50" stroke="${PAPER}" stroke-width="12"/>
    <circle cx="120" cy="-240" r="100" fill="${PAPER}"/>
    <path d="M70 -240h100M70 -210h70"/><rect x="70" y="-282" width="60" height="20" fill="${ACC}"/>`,
  coins: () => [0, 1, 2, 3].map((k) => {
    const y = -30 - k * 52;
    return `<path d="M50 ${y}v40a100 30 0 0 0 200 0v-40" fill="${PAPER}"/><ellipse cx="150" cy="${y}" rx="100" ry="30" fill="${k === 3 ? ACC : PAPER}"/>`;
  }).join(""),
  vault: () => `
    <rect x="20" y="-340" width="260" height="320" rx="12" fill="${PAPER}"/><rect x="50" y="-20" width="30" height="20" fill="${PAPER}"/><rect x="220" y="-20" width="30" height="20" fill="${PAPER}"/>
    <circle cx="150" cy="-180" r="100" fill="${PAPER}"/><circle cx="150" cy="-180" r="58" fill="${ACC}"/>
    <path d="M150 -238v116M92 -180h116"/><circle cx="150" cy="-180" r="10" fill="${PAPER}"/>`,
  people: () => `
    <path d="M40 0V-110a110 110 0 0 1 220 0V0z" fill="${PAPER}"/><circle cx="150" cy="-250" r="56" fill="${PAPER}"/>
    <path d="M120 -110l30 40 30 -40" fill="${ACC}"/>`,
  wellhead: () => `
    <path d="M150 0V-380"/>
    <rect x="116" y="-100" width="68" height="64" fill="${PAPER}"/><rect x="124" y="-200" width="52" height="52" fill="${PAPER}"/>
    <path d="M70 -250h160"/><rect x="58" y="-272" width="20" height="44" fill="${PAPER}"/><rect x="222" y="-272" width="20" height="44" fill="${PAPER}"/>
    <path d="M150 -330v-40"/><circle cx="150" cy="-390" r="22" fill="${ACC}"/>`,
  separator: () => `
    <rect x="85" y="-300" width="130" height="300" rx="62" fill="${PAPER}"/>
    <path d="M85 -140h130v78a62 62 0 0 1 -62 62h-6a62 62 0 0 1 -62 -62z" fill="${ACC}"/>
    <path d="M85 -140h130M150 -300v-40M122 -340h56"/>`,
  rig: () => `
    <path d="M150 -400L30 0H270Z" fill="${PAPER}"/>
    <path d="M110 -280h80M82 -200h136M56 -120h188M110 -280L82 -200 130 -280M190 -280L218 -200 170 -280M82 -200L56 -120 100 -200M218 -200L244 -120 200 -200"/>
    <circle cx="150" cy="-414" r="16" fill="${ACC}"/><rect x="10" y="-16" width="280" height="16" fill="${PAPER}"/>`,
  meter: () => `
    <path d="M150 0v-90"/><rect x="100" y="-24" width="100" height="24" fill="${PAPER}"/>
    <circle cx="150" cy="-200" r="110" fill="${PAPER}"/>
    <path d="M70 -150l14 8M62 -200h18M72 -256l14 -8M150 -296v18M228 -256l-14 -8M238 -200h-18M230 -150l-14 8"/>
    <path d="M150 -200L204 -262" stroke="${INK}" stroke-width="5"/><circle cx="150" cy="-200" r="14" fill="${ACC}"/>`,
  pipeline: () => `
    <rect x="0" y="-110" width="300" height="46" fill="${PAPER}"/>
    <rect x="84" y="-124" width="16" height="74" fill="${PAPER}"/><rect x="200" y="-124" width="16" height="74" fill="${PAPER}"/>
    <path d="M150 -110V-200M112 -200h76"/><circle cx="150" cy="-160" r="22" fill="${ACC}"/>
    <path d="M20 -64v64M280 -64v64"/>`,
  report: () => `
    <rect x="20" y="-400" width="260" height="400" fill="${PAPER}"/><path d="M50 -360h120M50 -332h80"/>
    <path d="M50 -50h200" stroke-width="4"/>
    <rect x="58" y="-170" width="32" height="120" fill="${INK}"/><rect x="108" y="-210" width="32" height="160" fill="${INK}"/>
    <rect x="158" y="-130" width="32" height="80" fill="${ACC}"/><path d="M158 -210h32v80h-32z" stroke-dasharray="7 7"/>
    <rect x="208" y="-190" width="32" height="140" fill="${INK}"/>`,
  seismic: () => `
    <rect x="10" y="-340" width="280" height="340" fill="${PAPER}"/>
    <path d="M10 -250q50 -28 100 0t90 0t90 -10V-190q-40 20 -90 0t-90 0t-100 -10z" fill="${ACC}"/>
    <path d="M10 -310q50 -20 100 0t90 0t90 -8M10 -130q50 -26 100 0t90 0t90 -10M10 -70q50 -20 100 0t90 0t90 -8"/>
    <path d="M150 -340V-90" stroke-dasharray="9 9"/><circle cx="150" cy="-80" r="11" fill="${INK}"/>`,
  helmet: () => `
    <path d="M40 -120a110 110 0 0 1 220 0z" fill="${ACC}"/><rect x="132" y="-232" width="36" height="112" fill="${ACC}"/>
    <rect x="14" y="-120" width="272" height="30" rx="8" fill="${PAPER}"/>
    <path d="M60 -90v70h180v-70" fill="${PAPER}"/><path d="M100 -50h100"/>`,
  tablet: () => `
    <rect x="40" y="-400" width="220" height="400" rx="26" fill="${PAPER}"/><rect x="60" y="-376" width="180" height="340" fill="${CREAM}"/>
    <circle cx="112" cy="-310" r="34" fill="${PAPER}"/><path d="M80 -310a32 32 0 0 1 56 -22" stroke="${ACC}" stroke-width="10"/>
    <path d="M168 -330h56M168 -306h40M168 -282h50"/>
    <rect x="82" y="-220" width="18" height="18" fill="${PAPER}"/><path d="M116 -211h104"/>
    <rect x="82" y="-170" width="18" height="18" fill="${PAPER}"/><path d="M116 -161h84"/>
    <rect x="82" y="-120" width="18" height="18" fill="${ACC}"/><path d="M116 -111h96"/>`,
  factory: () => `
    <g transform="scale(0.82)">
      <rect x="290" y="-424" width="44" height="120" fill="${PAPER}"/>
      <path d="M0 0V-330l90 70V-330l90 70V-330l90 70V-330l90 70V0z" fill="${PAPER}"/>
      <rect x="30" y="-190" width="70" height="56" fill="${CREAM}"/><rect x="140" y="-190" width="70" height="56" fill="${CREAM}"/><rect x="250" y="-190" width="70" height="56" fill="${ACC}"/>
      <rect x="130" y="-100" width="110" height="100" fill="${CREAM}"/>
    </g>`,
  conveyor: () => `
    <g transform="scale(0.78)">
      <rect x="0" y="-90" width="380" height="32" fill="${PAPER}"/>
      <circle cx="30" cy="-30" r="18" fill="${PAPER}"/><circle cx="190" cy="-30" r="18" fill="${PAPER}"/><circle cx="350" cy="-30" r="18" fill="${PAPER}"/>
      <rect x="30" y="-160" width="70" height="70" fill="${PAPER}"/><rect x="150" y="-160" width="70" height="70" fill="${ACC}"/><rect x="270" y="-160" width="70" height="70" fill="${PAPER}"/>
      <path d="M30 -125h70M65 -160v70M270 -125h70M305 -160v70"/>
    </g>`,
  shelves: () => `
    <path d="M20 0V-400M280 0V-400"/>
    <path d="M20 -130h260M20 -260h260M20 -390h260"/>
    <rect x="40" y="-200" width="70" height="70" fill="${PAPER}"/><rect x="130" y="-190" width="60" height="60" fill="${ACC}"/><rect x="205" y="-210" width="60" height="80" fill="${PAPER}"/>
    <rect x="40" y="-330" width="90" height="70" fill="${PAPER}"/><rect x="160" y="-320" width="100" height="60" fill="${PAPER}"/>
    <rect x="50" y="-60" width="80" height="60" fill="${PAPER}"/><rect x="160" y="-70" width="70" height="70" fill="${PAPER}"/>`,
  box: () => `
    <path d="M150 -330L280 -270V-110L150 -50L20 -110V-270Z" fill="${PAPER}"/>
    <path d="M20 -270L150 -210L280 -270M150 -210V-50"/>
    <path d="M85 -300L215 -240V-190L195 -200V-244L65 -304Z" fill="${ACC}"/>`,
  field: () => {
    let rows = "";
    for (let i = 0; i < 5; i++) {
      const x0 = 30 + i * 60, x1 = 80 + i * 35;
      rows += `<path d="M${x0} -30L${x1} -210"/>`;
    }
    const plants = [[60, -70], [140, -70], [220, -70], [96, -130], [160, -130], [214, -130]].map(([x, y]) => `<path d="M${x} ${y}v-34M${x} ${y - 14}c-16 -2 -22 -12 -24 -22 14 0 22 10 24 22zM${x} ${y - 20}c14 -4 20 -12 22 -22 -14 2 -20 10 -22 22z"/>`).join("");
    return `<path d="M20 -20L280 -20L240 -210L60 -210Z" fill="${PAPER}"/>${rows}${plants}<circle cx="240" cy="-320" r="38" fill="${ACC}"/>`;
  },
  silo: () => `
    <rect x="80" y="-320" width="140" height="320" fill="${PAPER}"/><path d="M80 -320a70 46 0 0 1 140 0" fill="${PAPER}"/>
    <path d="M80 -250h140M80 -180h140M80 -110h140"/><rect x="80" y="-180" width="140" height="70" fill="${ACC}"/>
    <rect x="130" y="-60" width="40" height="60" fill="${CREAM}"/><path d="M240 -330v330M270 -330v330M240 -280h30M240 -220h30M240 -160h30M240 -100h30"/>`,
  sensor: () => `
    <rect x="95" y="-110" width="110" height="110" fill="${PAPER}"/><circle cx="150" cy="-55" r="14" fill="${ACC}"/>
    <path d="M150 -110v-90"/><circle cx="150" cy="-210" r="10" fill="${PAPER}"/>
    <path d="M100 -250a70 70 0 0 1 100 0M70 -290a110 110 0 0 1 160 0" /><path d="M123 -230a38 38 0 0 1 54 0"/>`,
  chip: () => {
    let pins = "";
    for (let k = 0; k < 4; k++) pins += `<path d="M${105 + k * 30} -290v-34M${105 + k * 30} -130v34M70 ${-255 + k * 30}h-34M230 ${-255 + k * 30}h34"/>`;
    return `${pins}<rect x="70" y="-290" width="160" height="160" fill="${PAPER}"/><rect x="108" y="-252" width="84" height="84" fill="${ACC}"/>`;
  },
  antenna: () => `
    <path d="M150 -300L70 0M150 -300L230 0M105 -150h90M125 -220h50"/><circle cx="150" cy="-310" r="14" fill="${ACC}"/>
    <path d="M100 -350a70 70 0 0 1 100 0M70 -390a110 110 0 0 1 160 0"/><rect x="40" y="-16" width="220" height="16" fill="${PAPER}"/>`,
  monitor: () => `
    <rect x="10" y="-330" width="280" height="210" fill="${PAPER}"/><rect x="26" y="-314" width="248" height="178" fill="${CREAM}"/>
    <path d="M44 -170l56 -50 44 26 60 -62 40 18"/><circle cx="244" cy="-208" r="9" fill="${ACC}"/>
    <path d="M44 -150h212"/><path d="M150 -120v70M90 -50h120"/><rect x="90" y="-50" width="120" height="14" fill="${PAPER}"/>`,
  alert: () => `
    <path d="M150 -390L290 -40H10Z" fill="${ACC}"/><path d="M150 -300V-170"/><circle cx="150" cy="-100" r="8" fill="${INK}"/>`,
  network: () => {
    const cols = [[-330, -190, -50], [-370, -250, -130, -10], [-300, -160]].map((c, i) => c.map((y) => [40 + i * 110, y]));
    let lines = "", nodes = "";
    for (let i = 0; i < cols.length - 1; i++) for (const [x1, y1] of cols[i]) for (const [x2, y2] of cols[i + 1]) lines += `<path d="M${x1} ${y1}L${x2} ${y2}" stroke-width="1.5"/>`;
    cols.forEach((c, i) => c.forEach(([x, y], j) => { nodes += `<circle cx="${x}" cy="${y}" r="20" fill="${i === 1 && j === 1 ? ACC : PAPER}"/>`; }));
    return lines + nodes;
  },
  eye: () => `
    <path d="M10 -190C70 -300 230 -300 290 -190C230 -80 70 -80 10 -190Z" fill="${PAPER}"/>
    <circle cx="150" cy="-190" r="62" fill="${ACC}"/><circle cx="150" cy="-190" r="24" fill="${INK}"/>`,
  mobileapp: () => `
    <rect x="60" y="-400" width="180" height="400" rx="30" fill="${PAPER}"/><path d="M122 -376h56"/>
    <rect x="86" y="-340" width="128" height="74" rx="10" fill="${ACC}"/><path d="M104 -316h60M104 -292h40"/>
    <path d="M90 -230h120M90 -196h90M90 -162h110"/><circle cx="150" cy="-86" r="26" fill="${PAPER}"/>`,
};

export const iconNames = Object.keys(icons);
