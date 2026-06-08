# CLAUDE.md — Velovia Premium · Coming Soon

Контекст за Claude Code. Прочети този файл преди всяка задача в проекта.

## Какво строим
Една-единствена **"Coming Soon" / waitlist** страница за **VELOVIA PREMIUM — Cycling Camps** (премиум колоездачни лагери в Родопите, България). Целта: 1:1 визуално съответствие с референтния мокъп (`reference/wanted-ver.png`) + жив countdown + форма за ранен достъп.

## Tech stack (задължителен)
- **Next.js (App Router) + TypeScript**
- **Tailwind CSS v4**
- **lucide-react** за иконите
- Шрифтове през `next/font/google`: **Playfair Display** (заглавия, serif) + **Montserrat** (body / labels, sans)
- Без излишни зависимости. Деплой: **Vercel**.

## Брандинг
| Роля | Стойност |
|---|---|
| Primary (cerise/розово) | `#D6336C` |
| Primary тъмен (hover) | `#B82A59` |
| Page background (тъмно) | `#0E0F12` |
| Cream panel | `#F4F2EE` |
| Heading black | `#1A1A1A` |
| Body gray | `#4A4A4A` |
| White | `#FFFFFF` |

> Точният розов нюанс свери спрямо логото. Държи се консистентен чрез CSS променливи / Tailwind theme.

## Шрифтове
- **Playfair Display** — голямото заглавие "Something Exceptional Is Coming" (висококонтрастен serif, тежест 400–700).
- **Montserrat** — всичко останало: eyebrow, body, бутони, labels с `letter-spacing` за caps.

## Assets (вече в `public/images/`)
- `hero.png` — фонова снимка (колоездачи, планински път, златен час).
- `logo-dark.png` — лого тъмно+розово, прозрачен фон → **за светлия hero (горе вляво)**.
- `logo-light.png` — лого бяло+розово, прозрачен фон → за тъмни фонове.
- `logo-original.png` — оригинал на черен фон (референция).
- `chef-ivaylo.jpg` — портрет на Chef Ivaylo Petkov (за цитата).
- `reference/wanted-ver.png` — мокъпът, който възпроизвеждаме.

## Принципи
- Mobile-first, но desktop трябва да съвпада с мокъпа.
- Семантичен HTML, достъпни форми (labels, aria), добър контраст.
- Никакъв lorem ipsum — текстовете са фиксирани (виж промпта).
- Чисти, преизползваеми компоненти. Без localStorage хакове за бизнес логика.

---

## 🎛 Estetika layer (frontend-design skill)

Проектът включва **project-scoped skill** в `.claude/skills/frontend-design/`. Claude Code ще го активира автоматично при frontend задачи. Долният блок е дестилираната версия от Anthropic cookbook-а:

<frontend_aesthetics>
You tend to converge toward generic, "on distribution" outputs. In frontend design, this creates what users call the "AI slop" aesthetic. Avoid this: make creative, distinctive frontends that surprise and delight. Focus on:

Typography: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics.

Color & Theme: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes. Draw from IDE themes and cultural aesthetics for inspiration.

Motion: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions.

Backgrounds: Create atmosphere and depth rather than defaulting to solid colors. Layer CSS gradients, use geometric patterns, or add contextual effects that match the overall aesthetic.

Avoid generic AI-generated aesthetics:
- Overused font families (Inter, Roboto, Arial, system fonts)
- Clichéd color schemes (particularly purple gradients on white backgrounds)
- Predictable layouts and component patterns
- Cookie-cutter design that lacks context-specific character

Interpret creatively and make unexpected choices that feel genuinely designed for the context.
</frontend_aesthetics>

### ⚠️ GUARDRAIL — приоритет на верността пред креативността
Този проект **възпроизвежда фиксиран мокъп** (`reference/wanted-ver.png`). Естетичният skill по принцип тласка към „смело и нестандартно" — тук това НЕ важи за оформлението. Прилагай естетичните насоки САМО като слой за **качество на изпълнението**:

- ✅ **ДА:** изчистена типография (Playfair + Montserrat, точна разредка/контраст), една оркестрирана page-load анимация със staggered reveal, атмосферна дълбочина върху тъмния фон (фини градиенти, vignette, grain по желание), премислени hover/focus микровзаимодействия, пиксел-точни отстояния.
- ❌ **НЕ:** смяна на layout-а, цветовата палитра или шрифтовете спрямо мокъпа; „творческо" преаранжиране на секциите; добавяне на нерелевантни ефекти, които отвличат от waitlist целта.

С две думи: „смелостта" тук = безупречно изпълнение на съществуващия дизайн, не нов дизайн.
