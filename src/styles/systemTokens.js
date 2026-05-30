// ────────────────────────────────────────────────────────────────
// SYSTEM TOKENS — single source of truth for the "Solo Leveling System"
// visual language across fercontreras.com. Import these, never hardcode.
// Docs + rollout status: /DESIGN.md
// ────────────────────────────────────────────────────────────────

export const sys = {
  color: {
    bgDeep: '#05070D',          // page void
    panel: 'rgba(10, 18, 34, 0.72)', // glass panel fill
    panelSolid: '#0A1222',
    cyan: '#38BDF8',            // System core
    cyanBright: '#7DD3FC',      // highlight / text-on-dark
    cyanDeep: '#0EA5E9',        // pressed / depth
    shadow: '#6D5DD3',          // monarch shadow accent
    amber: '#7DD3FC',           // (all-blue) mvp / secondary → cyan bright (kept name for compat)
    text: '#E8F1FF',            // primary text (never pure white)
    muted: '#94A8C4',           // secondary text
    line: 'rgba(56, 189, 248, 0.32)', // default border
  },
  // border bevel size for the "System window" cut
  bevel: '14px',
  bevelSm: '6px',
  font: {
    mono: "'JetBrains Mono', 'Fira Code', monospace",
    heading: "'Poppins', -apple-system, sans-serif",
    body: "'Inter', -apple-system, sans-serif",
  },
  glow: {
    soft: '0 0 14px rgba(56, 189, 248, 0.28)',
    mid: '0 0 22px rgba(56, 189, 248, 0.45)',
    strong: '0 0 30px rgba(56, 189, 248, 0.7)',
    amber: '0 0 16px rgba(56, 189, 248, 0.5)',
  },
  // reusable clip-path window cut (bevel top-left + bottom-right)
  windowClip: (b = '14px') =>
    `polygon(${b} 0, 100% 0, 100% calc(100% - ${b}), calc(100% - ${b}) 100%, 0 100%, 0 ${b})`,
};

export default sys;
