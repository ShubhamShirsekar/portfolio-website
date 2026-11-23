// Generates SVG cover art for each project in the portfolio palette.
// Usage: node scripts/generate-project-images.mjs public/images/projects
import fs from 'fs';
import path from 'path';
const OUT = process.argv[2];
fs.mkdirSync(OUT, { recursive: true });
const W = 1200, H = 750;
const C = { blue: '#3b82f6', blueL: '#60a5fa', violet: '#8b5cf6', violetL: '#a78bfa', cyan: '#06b6d4', cyanL: '#22d3ee' };

// Seeded RNG so the art is reproducible
function rng(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }
function gauss(r) { let u = 0, v = 0; while (!u) u = r(); while (!v) v = r(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }

function frame(body, glows = [[250, 180, C.blue], [950, 560, C.violet], [700, 120, C.cyan]]) {
  const grid = [];
  for (let x = 60; x < W; x += 60) grid.push(`<line x1="${x}" y1="0" x2="${x}" y2="${H}"/>`);
  for (let y = 60; y < H; y += 60) grid.push(`<line x1="0" y1="${y}" x2="${W}" y2="${y}"/>`);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0a0a0f"/><stop offset="0.55" stop-color="#12121c"/><stop offset="1" stop-color="#1a1a2e"/></linearGradient>
  <linearGradient id="acc" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${C.blue}"/><stop offset="0.5" stop-color="${C.violet}"/><stop offset="1" stop-color="${C.cyan}"/></linearGradient>
  <linearGradient id="accV" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="${C.blue}"/><stop offset="1" stop-color="${C.cyan}"/></linearGradient>
  ${glows.map((g, i) => `<radialGradient id="g${i}"><stop offset="0" stop-color="${g[2]}" stop-opacity="0.35"/><stop offset="1" stop-color="${g[2]}" stop-opacity="0"/></radialGradient>`).join('')}
  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<rect width="${W}" height="${H}" fill="url(#bg)"/>
${glows.map((g, i) => `<circle cx="${g[0]}" cy="${g[1]}" r="380" fill="url(#g${i})"/>`).join('')}
<g stroke="#ffffff" stroke-opacity="0.04" stroke-width="1">${grid.join('')}</g>
${body}
</svg>`;
}

const art = {};

// 1. Stackmint: agent hub wired to integrations; long workflow bar collapsing to a short one
art['stackmint-agents'] = (() => {
  const cx = 600, cy = 360, R = 250, n = 6, parts = [];
  for (let i = 0; i < n; i++) {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / n;
    const x = cx + R * Math.cos(a), y = cy + R * 0.8 * Math.sin(a);
    const col = [C.blue, C.violet, C.cyan][i % 3];
    parts.push(`<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="${col}" stroke-opacity="0.45" stroke-width="2" stroke-dasharray="6 8"/>`);
    const mx = cx + (x - cx) * 0.55, my = cy + (y - cy) * 0.55;
    parts.push(`<circle cx="${mx}" cy="${my}" r="5" fill="${col}" filter="url(#glow)"/>`);
    parts.push(`<rect x="${x - 42}" y="${y - 42}" width="84" height="84" rx="20" fill="#12121c" stroke="${col}" stroke-opacity="0.8" stroke-width="2"/>`);
    parts.push(`<rect x="${x - 18}" y="${y - 10}" width="36" height="6" rx="3" fill="${col}" opacity="0.8"/><rect x="${x - 18}" y="${y + 4}" width="24" height="6" rx="3" fill="${col}" opacity="0.45"/>`);
  }
  parts.push(`<circle cx="${cx}" cy="${cy}" r="110" fill="none" stroke="url(#acc)" stroke-opacity="0.25" stroke-width="1"/>`);
  parts.push(`<rect x="${cx - 70}" y="${cy - 62}" width="140" height="124" rx="34" fill="#12121c" stroke="url(#acc)" stroke-width="3" filter="url(#glow)"/>`);
  parts.push(`<circle cx="${cx - 26}" cy="${cy - 6}" r="10" fill="${C.cyanL}"/><circle cx="${cx + 26}" cy="${cy - 6}" r="10" fill="${C.cyanL}"/>`);
  parts.push(`<rect x="${cx - 30}" y="${cy + 26}" width="60" height="6" rx="3" fill="${C.violetL}"/>`);
  parts.push(`<line x1="${cx}" y1="${cy - 62}" x2="${cx}" y2="${cy - 92}" stroke="${C.violetL}" stroke-width="3"/><circle cx="${cx}" cy="${cy - 98}" r="7" fill="${C.violetL}"/>`);
  parts.push(`<rect x="120" y="680" width="560" height="10" rx="5" fill="#ffffff" opacity="0.08"/>`);
  parts.push(`<rect x="120" y="700" width="90" height="10" rx="5" fill="url(#acc)"/>`);
  return frame(parts.join('\n'));
})();

// 2. SynthPanel: survey records clustered into personas
art['synthpanel'] = (() => {
  const r = rng(7), parts = [];
  const clusters = [[330, 260, C.blue], [820, 230, C.violet], [420, 540, C.cyan], [880, 520, C.blueL]];
  parts.push(`<path d="M330 260 Q600 120 820 230 M420 540 Q650 650 880 520 M330 260 L420 540 M820 230 L880 520" stroke="url(#acc)" stroke-opacity="0.35" stroke-width="2" fill="none"/>`);
  for (const [x, y, col] of clusters) {
    parts.push(`<ellipse cx="${x}" cy="${y}" rx="150" ry="105" fill="${col}" fill-opacity="0.05" stroke="${col}" stroke-opacity="0.5" stroke-width="1.5" stroke-dasharray="4 8"/>`);
    for (let i = 0; i < 70; i++) {
      const px = x + gauss(r) * 55, py = y + gauss(r) * 38;
      parts.push(`<circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="${(2 + r() * 3).toFixed(1)}" fill="${col}" opacity="${(0.35 + r() * 0.5).toFixed(2)}"/>`);
    }
    parts.push(`<circle cx="${x}" cy="${y}" r="26" fill="#12121c" stroke="${col}" stroke-width="3" filter="url(#glow)"/>`);
    parts.push(`<circle cx="${x}" cy="${y - 6}" r="7" fill="${col}"/><path d="M${x - 12} ${y + 14} q12 -14 24 0" stroke="${col}" stroke-width="4" fill="none" stroke-linecap="round"/>`);
  }
  return frame(parts.join('\n'));
})();

// 3. L'Oreal: product description tokens -> transformer blocks -> class probability bars
art['loreal-hackathon'] = (() => {
  const r = rng(11), parts = [];
  for (let row = 0; row < 7; row++) {
    let x = 90; const y = 170 + row * 62;
    while (x < 400) {
      const w = 30 + r() * 60;
      if (x + w > 420) break;
      parts.push(`<rect x="${x.toFixed(0)}" y="${y}" width="${w.toFixed(0)}" height="26" rx="13" fill="#ffffff" fill-opacity="${(0.06 + r() * 0.08).toFixed(2)}" stroke="#ffffff" stroke-opacity="0.12"/>`);
      x += w + 10;
    }
    parts.push(`<path d="M430 ${y + 13} C 470 ${y + 13}, 470 375, 500 375" stroke="${C.blueL}" stroke-opacity="0.35" stroke-width="1.5" fill="none"/>`);
  }
  const blockCols = [C.blue, C.violet, C.violet, C.cyan];
  for (let i = 0; i < 4; i++) {
    const y = 230 + i * 74;
    parts.push(`<rect x="510" y="${y}" width="180" height="56" rx="14" fill="#12121c" stroke="${blockCols[i]}" stroke-width="2.5" ${i === 1 ? 'filter="url(#glow)"' : ''}/>`);
    parts.push(`<rect x="534" y="${y + 24}" width="${70 + i * 18}" height="8" rx="4" fill="${blockCols[i]}" opacity="0.6"/>`);
  }
  const bars = [0.18, 0.79, 0.27, 0.12, 0.34, 0.08];
  bars.forEach((b, i) => {
    const y = 200 + i * 62, w = 360 * b, hi = i === 1;
    parts.push(`<path d="M700 375 C 730 375, 730 ${y + 13}, 760 ${y + 13}" stroke="${C.cyan}" stroke-opacity="0.3" stroke-width="1.5" fill="none"/>`);
    parts.push(`<rect x="770" y="${y}" width="360" height="26" rx="13" fill="#ffffff" fill-opacity="0.05"/>`);
    parts.push(`<rect x="770" y="${y}" width="${w.toFixed(0)}" height="26" rx="13" fill="${hi ? 'url(#acc)' : C.blueL}" fill-opacity="${hi ? 1 : 0.35}" ${hi ? 'filter="url(#glow)"' : ''}/>`);
  });
  return frame(parts.join('\n'), [[300, 380, C.blue], [600, 360, C.violet], [950, 260, C.cyan]]);
})();

// 4. Spotify reconstruction: mixed waveform split back into 4 users' playlists
art['spotify-reconstruction'] = (() => {
  const r = rng(23), parts = [], users = [C.blue, C.violet, C.cyan, C.blueL];
  const n = 72, bw = 10, gap = 4, x0 = (W - n * (bw + gap)) / 2;
  for (let i = 0; i < n; i++) {
    const h = 30 + Math.abs(Math.sin(i * 0.35) * 110) + r() * 60;
    const u = Math.floor(r() * 4);
    parts.push(`<rect x="${(x0 + i * (bw + gap)).toFixed(1)}" y="${(260 - h / 2).toFixed(1)}" width="${bw}" height="${h.toFixed(1)}" rx="5" fill="${users[u]}" opacity="0.85"/>`);
  }
  users.forEach((col, k) => {
    const y = 450 + k * 62;
    parts.push(`<circle cx="190" cy="${y + 12}" r="18" fill="#12121c" stroke="${col}" stroke-width="3" filter="url(#glow)"/>`);
    let x = 240;
    for (let j = 0; j < 9 + k; j++) {
      const w = 40 + r() * 50;
      if (x + w > 1040) break;
      parts.push(`<rect x="${x.toFixed(0)}" y="${y + 2}" width="${w.toFixed(0)}" height="20" rx="10" fill="${col}" opacity="${(0.35 + r() * 0.4).toFixed(2)}"/>`);
      x += w + 10;
    }
  });
  parts.push(`<path d="M600 370 L600 420" stroke="url(#accV)" stroke-width="3"/><path d="M588 408 L600 422 L612 408" stroke="${C.cyanL}" stroke-width="3" fill="none"/>`);
  return frame(parts.join('\n'));
})();

// 5. Spotify recommendation: record rings with matched (recommended) tracks
art['spotify-recommendation'] = (() => {
  const r = rng(31), parts = [], cx = 600, cy = 375;
  for (let k = 0; k < 8; k++) parts.push(`<circle cx="${cx}" cy="${cy}" r="${70 + k * 34}" fill="none" stroke="#ffffff" stroke-opacity="${0.05 + (k % 2) * 0.03}" stroke-width="1.5"/>`);
  const pts = [];
  for (let i = 0; i < 46; i++) {
    const rad = 104 + Math.floor(r() * 7) * 34, a = r() * Math.PI * 2;
    pts.push([cx + rad * Math.cos(a), cy + rad * Math.sin(a), r() < 0.2]);
  }
  pts.filter(p => p[2]).forEach(p => parts.push(`<line x1="${cx}" y1="${cy}" x2="${p[0].toFixed(1)}" y2="${p[1].toFixed(1)}" stroke="${C.violetL}" stroke-opacity="0.45" stroke-width="1.5"/>`));
  parts.push(`<circle cx="${cx}" cy="${cy}" r="62" fill="#12121c" stroke="url(#acc)" stroke-width="3" filter="url(#glow)"/><circle cx="${cx}" cy="${cy}" r="10" fill="${C.cyanL}"/>`);
  pts.forEach(p => parts.push(`<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="${p[2] ? 9 : 4}" fill="${p[2] ? C.violetL : C.blueL}" opacity="${p[2] ? 1 : 0.5}" ${p[2] ? 'filter="url(#glow)"' : ''}/>`));
  for (let i = 0; i < 14; i++) { const h = 20 + Math.abs(Math.sin(i * 0.9)) * 70; parts.push(`<rect x="${960 + i * 14}" y="${(690 - h).toFixed(0)}" width="8" height="${h.toFixed(0)}" rx="4" fill="url(#accV)" opacity="0.7"/>`); }
  return frame(parts.join('\n'), [[600, 375, C.violet], [200, 600, C.blue], [1000, 150, C.cyan]]);
})();

// 6. EventSphere: calendar grid with a ticket
art['eventsphere'] = (() => {
  const parts = [], x0 = 170, y0 = 170, cw = 92, ch = 78;
  const hi = { 3: C.blue, 9: C.violet, 17: C.cyan, 24: C.violet, 30: C.blue };
  parts.push(`<rect x="${x0 - 30}" y="${y0 - 70}" width="${7 * cw + 50}" height="${5 * ch + 110}" rx="28" fill="#12121c" fill-opacity="0.8" stroke="#ffffff" stroke-opacity="0.1"/>`);
  parts.push(`<rect x="${x0}" y="${y0 - 44}" width="160" height="14" rx="7" fill="url(#acc)"/>`);
  for (let i = 0; i < 35; i++) {
    const x = x0 + (i % 7) * cw, y = y0 + Math.floor(i / 7) * ch, col = hi[i];
    parts.push(`<rect x="${x}" y="${y}" width="${cw - 12}" height="${ch - 12}" rx="12" fill="${col || '#ffffff'}" fill-opacity="${col ? 0.25 : 0.04}" stroke="${col || '#ffffff'}" stroke-opacity="${col ? 0.9 : 0.08}" stroke-width="${col ? 2 : 1}"/>`);
    if (col) parts.push(`<circle cx="${x + 20}" cy="${y + 20}" r="6" fill="${col}"/>`);
  }
  const tx = 760, ty = 300;
  parts.push(`<g transform="rotate(-8 ${tx + 170} ${ty + 90})" filter="url(#glow)">
    <path d="M${tx} ${ty} h340 v66 a24 24 0 0 0 0 48 v66 h-340 v-66 a24 24 0 0 0 0 -48 z" fill="#12121c" stroke="url(#acc)" stroke-width="3"/>
    <line x1="${tx + 250}" y1="${ty + 14}" x2="${tx + 250}" y2="${ty + 166}" stroke="#ffffff" stroke-opacity="0.25" stroke-dasharray="6 8"/>
    <rect x="${tx + 36}" y="${ty + 44}" width="170" height="14" rx="7" fill="${C.violetL}"/>
    <rect x="${tx + 36}" y="${ty + 76}" width="120" height="10" rx="5" fill="#ffffff" opacity="0.3"/>
    <rect x="${tx + 36}" y="${ty + 100}" width="90" height="10" rx="5" fill="#ffffff" opacity="0.2"/>
    <rect x="${tx + 272}" y="${ty + 56}" width="46" height="68" rx="6" fill="${C.cyan}" opacity="0.6"/>
  </g>`);
  return frame(parts.join('\n'));
})();

// 7. IEA: energy trend lines with area fill
art['iea-analysis'] = (() => {
  const parts = [], x0 = 120, x1 = 1080, yb = 620, defs = [];
  parts.push(`<line x1="${x0}" y1="${yb}" x2="${x1}" y2="${yb}" stroke="#ffffff" stroke-opacity="0.25"/><line x1="${x0}" y1="140" x2="${x0}" y2="${yb}" stroke="#ffffff" stroke-opacity="0.25"/>`);
  const series = [[C.blue, 0.0, 420, 0.004], [C.violet, 1.3, 330, 0.006], [C.cyan, 2.1, 250, -0.002]];
  series.forEach(([col, ph, base, trend], k) => {
    const pts = [];
    for (let x = x0; x <= x1; x += 16) {
      const t = (x - x0) / (x1 - x0);
      pts.push([x, base - Math.sin(t * 7 + ph) * 40 - Math.sin(t * 17 + ph) * 12 - (x - x0) * trend * 30]);
    }
    const d = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0]} ${p[1].toFixed(1)}`).join(' ');
    defs.push(`<linearGradient id="a${k}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${col}" stop-opacity="0.25"/><stop offset="1" stop-color="${col}" stop-opacity="0"/></linearGradient>`);
    parts.push(`<path d="${d} L${pts[pts.length - 1][0]} ${yb} L${x0} ${yb} Z" fill="url(#a${k})"/>`);
    parts.push(`<path d="${d}" stroke="${col}" stroke-width="3" fill="none" filter="url(#glow)"/>`);
  });
  parts.push(`<path d="M1010 120 L960 230 L1000 230 L968 330 L1060 200 L1016 200 L1048 120 Z" fill="${C.cyanL}" opacity="0.85" filter="url(#glow)"/>`);
  return frame(`<defs>${defs.join('')}</defs>\n` + parts.join('\n'));
})();

// 8. BTC DCA vs Dip: price walk with evenly spaced DCA buys and dip buys at local lows
art['btc-dca-vs-dip'] = (() => {
  const r = rng(5), parts = [], pts = [];
  let y = 560;
  for (let x = 100; x <= 1100; x += 10) { y += gauss(r) * 16 - 2.4; y = Math.min(640, Math.max(150, y)); pts.push([x, y]); }
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0]} ${p[1].toFixed(1)}`).join(' ');
  parts.push(`<defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${C.violet}" stop-opacity="0.22"/><stop offset="1" stop-color="${C.violet}" stop-opacity="0"/></linearGradient></defs>`);
  parts.push(`<path d="${d} L1100 680 L100 680 Z" fill="url(#area)"/>`);
  parts.push(`<path d="${d}" stroke="url(#acc)" stroke-width="3" fill="none" filter="url(#glow)"/>`);
  for (let i = 4; i < pts.length; i += 10) parts.push(`<line x1="${pts[i][0]}" y1="${(pts[i][1] + 10).toFixed(1)}" x2="${pts[i][0]}" y2="700" stroke="${C.cyan}" stroke-opacity="0.2"/><circle cx="${pts[i][0]}" cy="${pts[i][1].toFixed(1)}" r="6" fill="${C.cyanL}"/>`);
  for (let i = 6; i < pts.length - 6; i++) {
    const win = pts.slice(i - 6, i + 7).map(p => p[1]);
    if (pts[i][1] === Math.max(...win)) parts.push(`<circle cx="${pts[i][0]}" cy="${pts[i][1].toFixed(1)}" r="11" fill="none" stroke="${C.violetL}" stroke-width="3" filter="url(#glow)"/>`);
  }
  return frame(parts.join('\n'));
})();

for (const [slug, svg] of Object.entries(art)) fs.writeFileSync(path.join(OUT, `${slug}.svg`), svg);

console.log(Object.keys(art).join('\n'));
