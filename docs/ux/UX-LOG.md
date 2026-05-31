# UX-LOG — fercontreras.com

## 2026-05-30 · Revisión general post-rediseño System (azul)

Método: screenshots headless (Chrome) mobile 390px + desktop 1280px de Home/Projects.
Fuente de verdad respetada: `src/components/system` + `src/styles/systemTokens.js`.

### Auditoría (1-5)
| Dimensión | Score | Nota |
|---|---|---|
| Hero / primer impacto | 3.5 | Limpio, System window, pero 100% texto — sin ancla visual/aura |
| Jerarquía | 4 | Kicker → nombre → tagline → CTAs clara |
| Contraste / legibilidad | 4 | Cian sobre void OK; títulos de sección se apagaban (fix) |
| Ritmo de scroll | 4 | Alternancia de paneles consistente |
| Espaciado | 4 | Respiración correcta |
| Tipografía | 4.5 | Mono/Poppins/Inter coherente, mono labels dan identidad |
| Motion | 4 | Sutil, reduced-motion respetado |
| Attract-factor | 3 | Falta foto/video real o aura — es lo que falta para "wow" |

### Fixes aplicados
- **Section titles** (`designSystem.js` SectionTitle): gradiente cian se apagaba a `#0EA5E9` en títulos grandes centrados → cambiado a `#7DD3FC→#38BDF8` (brillo uniforme) + underline más fino. Pop visible en "Featured Posts" / "Recent Projects". Pre/post mostrado a Fernando.

### Pendiente / bloqueado por assets
- **#1 alto impacto:** el hero es solo texto. Falta ancla visual — aura de partículas (tsparticles, ya recomendado en `_GLOWUP-SOLO-LEVELING.md`) o foto/avatar real. Es lo que separa "limpio" de "wow".
- About: el accordion dance podría colapsar más en mobile (mucho scroll de baile).
