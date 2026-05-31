# DESIGN.md — Solo Leveling "System" design language

> Fuente única de verdad del rediseño de fercontreras.com.
> Todo componente nuevo importa de aquí. NO hardcodear hex/bevel/glow.
> Update: 2026-05-30

## 1. Concepto

El sitio se siente como una **"System window"** de Solo Leveling: paneles de
cristal azul-cian translúcido, esquinas biseladas (cortadas), bordes con glow
eléctrico, tipografía mono uppercase para datos/labels, badges tipo `LV.XX`.
No es decorativo random: refuerza la narrativa de **operador que sube de nivel
con disciplina sistémica**.

## 2. Tokens — `src/styles/systemTokens.js` (`sys`)

| Token | Valor | Uso |
|-------|-------|-----|
| `sys.color.bgDeep` | `#05070D` | fondo void de página |
| `sys.color.panel` | `rgba(10,18,34,0.72)` | relleno glass de panel |
| `sys.color.cyan` | `#38BDF8` | System core (bordes, acentos) |
| `sys.color.cyanBright` | `#7DD3FC` | highlight / texto sobre oscuro |
| `sys.color.cyanDeep` | `#0EA5E9` | profundidad / pressed |
| `sys.color.shadow` | `#6D5DD3` | acento "monarca de sombras" |
| `sys.color.amber` | `#FBBF24` | level-up / MVP / warning |
| `sys.color.text` | `#E8F1FF` | texto primario (NUNCA blanco puro) |
| `sys.color.muted` | `#94A8C4` | texto secundario |
| `sys.bevel` / `sys.bevelSm` | `14px` / `6px` | corte de esquina System |
| `sys.font.mono/heading/body` | JetBrains Mono / Poppins / Inter | — |
| `sys.glow.soft/mid/strong/amber` | box-shadows | glows estándar |
| `sys.windowClip(b)` | fn → clip-path | corte bisel reutilizable |

**Reglas de color:** cian = el lenguaje. Ámbar = solo para "level-up"/MVP/alerta.
Morado-sombra = acento puntual, no protagonista. Blanco puro prohibido (usar `text`).

## 3. Primitivos — `src/components/system/`

| Componente | Import | Props | Qué es |
|-----------|--------|-------|--------|
| `SystemPanel` | `from '../components/system'` | `$compact`, `$reduced`, `$interactive`, + motion | Panel glass biselado canónico (cualquier card). Riel superior animado + hover glow + light sweep. |
| `SystemBadge` | idem | `$variant: cyan\|amber\|shadow` | Pill de status mono con dot. |
| `SystemButton` | idem (o `../components/SystemButton`) | `variant: primary\|secondary`, `to\|href` | CTA System (bisel + sweep + glow). |
| `sys` | idem | — | tokens. |

Barrel: `import { SystemPanel, SystemBadge, SystemButton, sys } from '../components/system'`

**Accesibilidad:** todo primitivo respeta `prefers-reduced-motion` (pasar
`$reduced={useReducedMotion()}` y omitir animaciones de entrada).

## 4. Estado de rollout por vista

Aplicar **en orden**, vista por vista. Cada vista importa los primitivos — no
reinventa estilos.

| Orden | Vista | Estado | Notas |
|-------|-------|--------|-------|
| 1 | **Projects** | ✅ hecho | ProjectCard + hackathon cards = SystemPanel. LV badges, mono, cian. |
| 2 | **About** | ✅ v2 | Bio + hobbies + Systems-in-Production = SystemPanel. Accordion dance/exhibitions migrado a System (bevel, mono triggers, cyan stats). |
| 3 | **Contact** | ✅ | CTA System + cards de canal migradas (cian, bevel, mono labels, glow hover). |
| 4 | **Home** | ✅ | Hero = System window (kicker mono, name cian, rail). Copy reframed a PRESENTACIÓN (no venta / no job-seeking). CTAs → /projects + /about. Featured = 3 productos (Studio Link, Vayla, Cargo·Litebox) en PostCard System. |
| 5 | **Now** | ✅ | Activity cards + focus = SystemPanel, SystemBadge (DEV/ACTIVE/TRADING/DANCE), mono meta, location badge mono cian. |
| 6 | **Impossible List** | ✅ | Stats = mini System windows, items con accent stripe + SystemBadge (done cyan / in-progress shadow), search/filtros System. |

**Paleta unificada (2026-05-30):** todo el sitio = AZUL/cian. Tokens del theme (`soloLevelingTheme.js`) y ~500 hardcodes morado+warm → cian. Cero morado/dorado/naranja/ámbar en `src/`. MVP badge = cian outline (vs producción cian sólido).

Globales migrados: **Navbar** ✅ (mono + `▸` + glass), **Footer** ✅ (riel cian + mono).
Deuda técnica menor: `ProjectCard.jsx` tiene chrome propio (ya System) — podría basarse en `SystemPanel`. Accordion dance de About = About v2 pendiente.

## 5. Snippets canónicos

```js
// Panel System interactivo con reveal on-scroll
import { useReducedMotion } from 'framer-motion';
import { SystemPanel, SystemBadge, sys } from '../components/system';

const r = useReducedMotion();
<SystemPanel $reduced={r}
  initial={r ? false : { opacity: 0, y: 24 }}
  whileInView={r ? undefined : { opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}>
  <SystemBadge $variant="cyan">In Production</SystemBadge>
  ...
</SystemPanel>
```

## 6. Transferencia a otras landings (CC / Vayla / Studio Link)

La **técnica** System transfiere (bevel `clip-path`, glow-border, mono labels,
glass blur) pero **el color NO**: cada marca usa su paleta (CC azul `#1f4bff`,
SL su azul/slate, Vayla su kit). El cian es exclusivo de fercontreras.
Contexto detallado: `apocalipsis/angels/_LANDING-KNOWLEDGE-BRIDGE.md`.
