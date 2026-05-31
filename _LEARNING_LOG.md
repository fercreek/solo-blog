# Learning Log — new-blog (fercontreras.com)

### 2026-05-31 · Rediseño Solo Leveling System + contenido + SEO

**Pros (qué salió bien):**
- Fuente de la verdad primero (`systemTokens.js` + `components/system` + `DESIGN.md`) → los agentes paralelos aplicaron formato sin divergencia. Patrón replicable.
- Multi-agente por vista (1 archivo c/u, sin overlap) escaló bien: 6 análisis + 4 reskins en paralelo.
- Flip de paleta vía tokens del theme + sed por archivo: 500+ hardcodes morado/warm → cian en minutos, build limpio.
- SEO completo en una pasada: JSON-LD + OG + llms.txt + prerender puppeteer CI-native, todo validado.
- og.png generado con Pillow desde script repetible (no asset manual).

**Cons (qué se atoró o sobrecomplicó):**
- **Perdí ~8 turnos persiguiendo un "cut" de mobile en About que NO existía** — confié en `chrome --headless --screenshot`, que renderiza ancho y aplasta, simulando texto cortado. Devtools reales (extensión Chrome) mostraron que todo estaba a ancho de viewport. Lección dura.
- styled-components v6: interpolar un `keyframes` dentro de un template string plano (no `css`) **lanza en runtime** y rompió el Home (error boundary). Build pasaba, fallaba en cliente.
- Preview MCP nunca arrancó (error de `nvm` en el spawn del profile) → tuve que levantar el server manual + screenshots ad-hoc.

**Consejo Claude Code (cómo prompteamos mejor):**
- Para validar responsive: usar **devtools reales (extensión Chrome) desde el inicio**, nunca `chrome --screenshot` como fuente de verdad de layout. Mide `scrollWidth`/`getBoundingClientRect`, no ojo sobre captura.
- Al interpolar `keyframes` condicional en styled-components, **siempre** envolver en `css\`...\``. Build verde ≠ runtime verde — verificar render real tras cambios de animación.

**Patrón nuevo capturado:**
- "Fuente de la verdad antes de paralelizar": montar tokens + primitivos + doc de rollout ANTES de lanzar agentes por vista → cero divergencia, cada agente importa lo mismo.
