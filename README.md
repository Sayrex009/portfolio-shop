# Gobnikiki — E-commerce Next.js Template

Современный минималистичный шаблон для e‑commerce проекта на базе Next.js (App Router), Tailwind CSS и Framer Motion. Этот проект содержит готовую страницу входа (Login) в стиле fashion-бренда с адаптивным split-layout и аккуратными анимациями.

## Особенности

- Минималистичный, премиальный дизайн в стиле fashion.
- Полностью адаптивный layout: desktop (split 55/45), tablet (image above form), mobile (stack, image 35–45vh).
- Анимации через Framer Motion: появление изображения слева, формы справа, hover/scale для кнопки, мягкие эффекты фокуса для input.
- Доступность: семантические `label`, focus-states и aria-атрибуты.
- Использует `next/image` для оптимизированных изображений.

## Стек технологий

- Next.js (App Router)
- React (client components)
- Tailwind CSS
- Framer Motion

## Быстрый старт

1. Установите зависимости:

```bash
npm install
npm install framer-motion
```

2. Запустите dev-сервер:

```bash
npm run dev
# открыть http://localhost:3000/login
```

3. Построение и запуск в продакшене:

```bash
npm run build
npm run start
```

## Важные заметки по конфигурации

- В `next.config.mjs` настроено `images.remotePatterns` для загрузки изображений с Unsplash. Если вы хотите использовать локальное изображение, поместите картинку в `public/images/hero.jpg` и в `app/login/page.jsx` замените `src` на `/images/hero.jpg`.
- Tailwind конфигурация создаётся автоматически приложением; стили встроены через классы Tailwind — отдельные CSS файлы не используются.

## Структура проекта (основное)

- `app/login/page.jsx` — страница входа (component-driven, App Router).
- `components/LoginForm.jsx` — компонент формы с анимациями и доступностью.
- `next.config.mjs` — Next.js конфиг (image remotePatterns и пр.).
- `public/` — статические ресурсы (рекомендуется положить логотип и локальные изображения сюда).

## Как заменить изображение на локальное

1. Создайте папку `public/images`.
2. Сохраните файл, например, `hero.jpg` в `public/images`.
3. В `app/login/page.jsx` замените строку `src="https://images.unsplash.com/..."` на `src="/images/hero.jpg"`.

## Доступность и SEO

- Все поля формы имеют `label` и `aria` атрибуты.
- Заголовки семантически структурированы (`h1`).

## Дальше — предложения

- Добавить обработчик входа и интеграцию с API (Auth: NextAuth, Clerk или кастомный).
- Добавить тесты для компонентов и визуальное тестирование (Storybook, Chromatic).
- Подготовить CI/CD для деплоя (Vercel или Netlify).

## Команды Git (рекомендуется)

```bash
git add .
git commit -m "feat: add login page and initial layout"
git push origin main
```

---

Если хотите — смогу автоматически добавить локальное изображение в `public/` и обновить `app/login/page.jsx`, либо подготовлю ветку и коммиты. Файл с описанием интерфейса страницы: [app/login/page.jsx](app/login/page.jsx)
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
