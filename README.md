# Velovia Premium — Coming Soon

Production-ready "Coming Soon" / waitlist страница за **Velovia Premium — Cycling Camps**
(премиум колоездачни лагери в Родопите). Една страница, един екран на desktop, напълно responsive.

Изградена с **Next.js (App Router) + TypeScript + Tailwind CSS v4 + lucide-react**.
Шрифтове: **Playfair Display** (заглавия) + **Montserrat** (текст) през `next/font/google`.

## Структура

```
velovia-coming-soon/
├── app/
│   ├── layout.tsx              # шрифтове, metadata
│   ├── globals.css             # design tokens (@theme), анимации, grain
│   ├── page.tsx                # композиция на страницата
│   └── api/subscribe/route.ts  # POST endpoint за имейл (валидира → { ok: true })
├── components/
│   ├── Hero.tsx                # фон, лого, eyebrow, заглавие, подзаглавие
│   ├── VeloviaBadge.tsx        # pill бадж „RIDE. RECOVER. BELONG."
│   ├── FeatureCards.tsx        # 5-те карти, наслагващи се върху hero
│   ├── LaunchPanel.tsx         # cream панелът с 3 колони
│   ├── CountdownTimer.tsx      # жив брояч (hydration-safe)
│   ├── PriorityForm.tsx        # CTA бутони + inline email форма
│   ├── Quote.tsx               # цитат на готвача
│   └── FeatureStrip.tsx        # долен ред с 4 предимства
├── lib/config.ts               # LAUNCH_DATE (таргет дата на брояча)
└── public/images/              # hero, лога, chef-ivaylo
```

## Стартиране

```bash
npm install
npm run dev
```

→ http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## Конфигурация

- **Дата на брояча** — `lib/config.ts → LAUNCH_DATE`. По подразбиране `now + 90 дни 12ч 48м`,
  така че броячът тръгва от ~`90 : 12 : 48` както в мокъпа. За фиксирана дата:
  ```ts
  export const LAUNCH_DATE = new Date("2026-09-06T00:00:00Z");
  ```
- **Имейл провайдър** — `app/api/subscribe/route.ts` засега само валидира и връща `{ ok: true }`.
  Виж `// TODO:` коментара къде да закачиш Resend / Mailchimp / Google Sheet. Ключове се четат
  от environment variables (не се комитват).
- **Снимки за картите** — по желание пусни изображения в `public/images/cards/`; текущо картите
  използват тъмен gradient overlay.

## Деплой на Vercel

1. Push към GitHub.
2. Във Vercel: **Add New → Project → Import** репото. Framework се разпознава автоматично (Next.js);
   build команда `next build`, без допълнителна конфигурация.
3. Ако по-късно добавиш имейл провайдър — сложи ключовете в **Project → Settings → Environment Variables**.
4. Deploy.
