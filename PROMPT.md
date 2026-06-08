# 🚴 Claude Code — Master Prompt: Velovia Premium "Coming Soon"

> Копирай целия този файл (или го отвори в Claude Code и кажи „изпълни PROMPT.md").
> Преди да започнеш: разгледай `reference/wanted-ver.png` — крайният резултат трябва да съвпада 1:1 с него на desktop.

---

## 🎯 Задача

Построй **production-ready "Coming Soon" / waitlist** страница за **Velovia Premium — Cycling Camps**. Една страница, един екран на desktop, напълно responsive. Визуално идентична с `reference/wanted-ver.png`.

## 🧱 Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- `lucide-react` за иконите
- Шрифтове през `next/font/google`: **Playfair Display** + **Montserrat**
- Скафолдни проекта в текущата папка (запази вече наличните `public/`, `reference/`, `CLAUDE.md`). НЕ изтривай assets-ите.

## 🎨 Дизайн система

Дефинирай като CSS променливи + Tailwind theme:

```
--velovia-pink:        #D6336C   /* primary, акценти, "Exceptional", CTA */
--velovia-pink-dark:   #B82A59   /* hover */
--velovia-dark:        #0E0F12   /* външен фон на страницата */
--velovia-cream:       #F4F2EE   /* долният панел */
--velovia-ink:         #1A1A1A   /* заглавия */
--velovia-gray:        #4A4A4A   /* body текст */
```

Шрифтове: `Playfair Display` за големите заглавия (serif, висок контраст); `Montserrat` за всичко останало. Главните букви (labels) са с `letter-spacing` ~0.12em.

## 🗂 Assets (вече в `public/images/`)

| Файл | Употреба |
|---|---|
| `hero.png` | Фон на hero секцията |
| `logo-dark.png` | Лого горе вляво (върху светлия hero) — **използвай този** |
| `logo-light.png` | Лого за тъмни фонове (footer и т.н.) |
| `chef-ivaylo.jpg` | Снимка до цитата на готвача |

Логата са с прозрачен фон. Използвай `next/image`.

---

## 📐 Структура на страницата (отгоре надолу)

Цялата композиция стои върху тъмен (`--velovia-dark`) външен фон с лек padding, така че да изглежда като „карта" с леко заоблени ъгли (както в мокъпа).

### 1. HERO (горните ~65%)
- Фон: `hero.png`, full-bleed, `object-cover`. Лек светъл градиент отляво за четимост на текста.
- **Горе вляво:** `logo-dark.png` (лого + "PREMIUM CYCLING CAMPS").
- **Горе вдясно:** малък pill бордер бадж с текст `RIDE. RECOVER. BELONG.` + миниатюрна планинска иконка.
- **Eyebrow** (розово, caps, letter-spacing): `PREMIUM CYCLING CAMPS IN BULGARIA`
- **Заглавие** (Playfair, огромно, ляво): три реда —
  `Something` (черно) / `Exceptional` (розово `--velovia-pink`) / `Is Coming` (черно).
- **Подзаглавие** (Montserrat, тъмносиво, до ~3 реда):
  `Premium Cycling Experiences in the Rhodope Mountains. Luxury accommodation. Professional coaching. Curated routes. Limited availability.`

### 2. FEATURE CARDS (ред от 5 карти, наслагват се върху долната част на hero)
5 карти с тъмен полупрозрачен фон + лек градиент, бяла линеарна икона горе и label долу. (Снимки във фон не са налични — използвай тъмен gradient overlay; остави възможност по-късно да се пуснат изображения в `public/images/cards/`.) Последните две икони да са в розово.

| # | Икона (lucide) | Label |
|---|---|---|
| 1 | `Mountain` | EXCLUSIVE ROUTES |
| 2 | `Home` (или `Building`) | LUXURY VILLAS |
| 3 | `UtensilsCrossed` | CHEF EXPERIENCES |
| 4 | `Flower2` (розово) | RECOVERY & WELLNESS |
| 5 | `Users` (розово) | SMALL PRIVATE GROUPS |

### 3. CREAM PANEL (долните ~35%, светъл `--velovia-cream`, заоблен горен ръб, наслагва се леко върху hero)
Три колони на desktop:

**Колона А — LAUNCHING SOON** (заглавие розово, caps). Чеклист с розови кръгчета-отметки (`CheckCircle2`):
- Early Access Registration
- 2026 Camp Calendar
- Exclusive Founder Offers
- Limited Rider Capacity
- Premium Member Benefits

**Колона Б — OPENING REGISTRATIONS IN** (заглавие розово, центрирано). Жив **countdown**: големи числа (Playfair) с разделители `:` в розово и labels отдолу — `DAYS` `HOURS` `MINUTES`.
- Таргет дата в `lib/config.ts` като константа `LAUNCH_DATE` (по подразбиране: `now + 90 дни`, така че началото да съвпада с мокъпа ~`90 : 12 : 48`). Клиентски `useEffect` тик на всяка минута (или секунда). При нула → показва `WE ARE LIVE`.

**Колона В — CTA + цитат:**
- Основен бутон (розов, пълен): иконка `Bike` + `JOIN THE PRIORITY LIST`.
- Вторичен бутон (outline): `BE THE FIRST TO KNOW` + стрелка `ChevronRight`.
- Под тях — цитат блок: голяма розова кавичка, текст
  `"Velovia is more than a camp. It's a journey of performance, connection & transformation."`
  подпис `Chef Ivaylo Petkov` (розово, италик) + кръгла/квадратна снимка `chef-ivaylo.jpg` вдясно.

### 4. FEATURE STRIP (долен ред в cream панела, 4 елемента с икона + текст на 2 реда)
| Икона | Текст |
|---|---|
| `UserRound` / coach | PROFESSIONAL CYCLING COACHES |
| `ChefHat` | MICHELIN-STYLE CULINARY EXPERIENCE |
| `BedDouble` | LUXURY ACCOMMODATION |
| `MountainSnow` | CAREFULLY SELECTED MOUNTAIN ROUTES |

---

## ⚙️ Функционалност

1. **Countdown** — реален, спрямо `LAUNCH_DATE`. Hydration-safe (изчисли на клиента, избегни SSR mismatch).
2. **Форма за email** — и двата бутона отварят/скролват към една и съща email форма (или inline поле). Валидация на имейл, success state ("You're on the list ✓"), disabled по време на изпращане.
   - Изпращането: `POST` към `app/api/subscribe/route.ts`, който засега само валидира и връща `{ ok: true }`. Остави ясен `// TODO:` коментар къде да се закачи реален провайдър (Resend / Mailchimp / Google Sheet). НЕ добавяй ключове.
3. Бутоните и линковете да са истински `<button>`/`<a>`, достъпни, с focus states.

## 📱 Responsive
- **Desktop (≥1280px):** както в мокъпа — широка композиция, 5 карти в ред, cream панел с 3 колони.
- **Tablet:** картите 3+2 или хоризонтален скрол; cream панелът пада на 2 колони.
- **Mobile:** всичко се стакира вертикално — лого → eyebrow → заглавие → подзаглавие → карти (2 в ред или скрол) → countdown → CTA → цитат → feature strip. Заглавието да остане ефектно, но да не прелива.

## ✨ Полиращ слой (frontend-design skill)
В проекта има активен skill `.claude/skills/frontend-design/` + блок `<frontend_aesthetics>` в `CLAUDE.md`. Прилагай го **само за качество на изпълнението**, НЕ за промяна на дизайна (виж GUARDRAIL в CLAUDE.md). Конкретно тук:
- Една оркестрирана **page-load анимация**: staggered reveal на eyebrow → заглавие → подзаглавие → карти (fade/slide с `animation-delay`).
- **Атмосфера** върху тъмния външен фон: фин градиент/vignette, по желание лек grain overlay (без да пречи на четимостта).
- **Микровзаимодействия**: hover lift + промяна на overlay при картите; hover на CTA (pink → pink-dark); видими focus states.
- Брояч: дискретна анимация при смяна на цифрите.
- Без да пипаш палитрата, шрифтовете или подредбата от мокъпа.

## ✅ Критерии за приемане
- [ ] Desktop изгледът съвпада с `reference/wanted-ver.png` (оформление, цветове, шрифтове, разредка).
- [ ] Логото горе вляво е четимо върху светлия hero (използван е `logo-dark.png`).
- [ ] Countdown работи и тръгва от ~`90 : 12 : 48`.
- [ ] Email формата валидира и показва success без реален бекенд.
- [ ] Чисто responsive без хоризонтален скрол на mobile.
- [ ] `npm run build` минава без грешки/warnings.
- [ ] Кодът е разбит на компоненти: `Hero`, `FeatureCards`, `LaunchPanel`, `CountdownTimer`, `PriorityForm`, `Quote`, `FeatureStrip`, `VeloviaBadge`.

## 🚀 Накрая
Дай ми кратки инструкции за стартиране (`npm install && npm run dev`) и за деплой на Vercel. Не комитвай нищо без да ме питаш.
