# Design Critique + Solo Leveling Proposal — fercontreras.com

> Base: screenshots reales mobile 390px de las 6 vistas + tokens `systemTokens.js`.
> Regla: SUBIR el factor Solo Leveling conservando la paleta CIAN (cero morado/warm).
> Fecha: 2026-05-30

## Overall
El System format ya está parejo y se lee como Solo Leveling. Lo que falta para "wow":
(1) arreglar overflows mobile, (2) un ancla visual viva en el hero, (3) el lenguaje de
"notificación del Sistema" que es la firma del anime.

## Usability
| Finding | Sev | Fix |
|---|---|---|
| Section titles 2.5rem se cortan en mobile (About "Systems in Producti…", Now/Home) | 🔴 | `font-size: clamp(1.6rem, 7vw, 2.5rem)` en SectionTitle + `SystemsHead` |
| SystemBadge en activity cards de Now se sale del borde derecho | 🟡 | badge dentro del flujo (no absolute) o `max-width:100%`+wrap; padding card |
| SystemsSubtitle mono no hace wrap, se corta | 🟡 | `white-space:normal; overflow-wrap:anywhere` |
| Dead space grande bajo "Primary Focus Areas" en Now | 🟡 | revisar grid vacío / quitar min-height fantasma |

## Visual Hierarchy
- **Primer foco:** el nombre cian — correcto. Pero hero 100% texto → sin tensión visual.
- **Flujo:** kicker → nombre → tagline → CTAs → cards. Bien.
- **Falta:** un elemento que "respire" en el hero (aura/partículas o glow orbital).

## Consistency
| Elemento | Issue | Fix |
|---|---|---|
| Section titles | unos via designSystem (gradient), otros mono `▸` (Now/Impossible) | unificar: 1 estilo de título System para todo |
| Bevel | cards 14px, badges 6px — OK, pero hero usa 18px | tokenizar (sys.bevel) en todos |

## Accessibility
- **Contraste:** cian #38BDF8 sobre #05070D = AA OK. Muted #94A8C4 en body = ~AA, subir a #A8BDD8 en párrafos largos.
- **Touch targets:** CTAs 48px OK. Links nav mono ~OK.

## What works
- Paleta cian cohesiva, glass + bevel se lee premium.
- Badges `LV.XX` + `IN PRODUCTION` = sabor RPG real.
- Mono labels dan identidad "terminal del Sistema".

## Propuesta Solo Leveling — priorizada (impacto × esfuerzo)

### Tier 1 — quick wins (aplico ya, CSS puro, 0 libs)
1. **Fix overflows mobile** (titles clamp + badge flow + subtitle wrap). Impacto alto, esfuerzo bajo.
2. **`SystemNotice` component** — barra tipo `[ SYSTEM ]  Notification...` mono con corchetes + glow, arriba del hero. Firma visual SL sin assets. Reusable.
3. **Aura estática del hero** — capa CSS: radial-gradient cian + grid sutil + 2-3 "glow orbs" con `@keyframes float` (motion-safe). Da el ancla sin tsparticles.
4. **Unificar SectionTitle** — un solo título System (mono `▸` + glow underline) en todas las vistas.

### Tier 2 — estructural (necesita tu OK)
5. **Typing notification** en hero (`react-type-animation`, ~3KB): `[SYSTEM] You have entered Fernando's domain…`. Muy SL.
6. **tsparticles aura** (lazy, ~mobile-safe) reemplaza la aura estática si quieres partículas vivas.
7. **Hover "scan" en cards** — línea de escaneo horizontal al hover (ya hay sweep; sumar scanline).

### Tier 3 — con assets tuyos
8. **Foto/avatar real** estilizado (duotono cian) en hero — el avatar es dead code hoy.

## Recomendación #1
Empezar Tier 1 completo (overflows + SystemNotice + aura estática + título unificado).
Sube el factor SL notablemente, 100% CSS, sin libs ni assets. Luego decidir Tier 2.
