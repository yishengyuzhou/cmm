# Herbal East Supply

Vue 3 + Vite + TypeScript static B2B website for Chinese herbal ingredients, herbal tea blends, bulk supply, loose cargo support and OEM / ODM herbal drink inquiry.

## Tech Stack

- Vue 3
- Vite
- TypeScript
- Vue Router
- SCSS
- Lightweight local i18n dictionary in `src/i18n/messages.ts`

Pinia is not included because this static catalogue site does not need complex shared state.

## Install

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

The site will run on the local Vite URL shown in the terminal, usually `http://localhost:5173`.

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```text
src/
  components/          Reusable UI components
  assets/
    products/          AI-generated product catalogue images
    images/            Local supporting SVG website illustrations
  data/
    products.ts        Product catalogue data
    imagePrompts.ts    AI image generation prompts for future asset replacement
    site.ts            Brand name and contact email
  i18n/
    messages.ts        English, Bahasa Indonesia, Malay, Thai and Vietnamese copy
    index.ts           Small translation helper
  pages/               Route pages
  router/              Vue Router setup
  styles/              Global SCSS
```

## Modify Product Data

Edit `src/data/products.ts`.

Each product includes:

- `id`
- `name`
- `category`
- `categories`
- `shortDescription`
- `supplyForms`
- `tags`
- `imageKey`
- `moqText`
- `theme`

Product names, descriptions, MOQ text and theme text are localized for all supported languages.

## Replace Images

The current project uses local SVG image assets in:

```text
src/assets/images/
```

Product cards use AI-generated catalogue images in:

```text
src/assets/products/
```

Supporting page visuals use original local SVG assets in:

```text
src/assets/images/
```

These images are project-owned assets created for this website, so there are no third-party image copyright risks. They cover the 12 product cards plus hero herbs, raw herbs, herbal tea, wellness drinks, calm tea, gift packs, OEM packaging, bulk shipping, carton packing, mixed batches, sorting process, quality check and contact inquiry scenes.

To replace them with generated or real owned assets:

1. Use the prompts in `src/data/imagePrompts.ts` to generate consistent visual assets.
2. Save product images into `src/assets/products/` and supporting images into `src/assets/images/`.
3. Update the `imageSources` map in `src/components/ResponsiveImageBlock.vue` to reference the new image files.

Keep the same style direction:

- Natural light
- Premium herbal product photography
- Warm beige background
- Green and gold accents
- Southeast Asian wellness lifestyle
- No readable brand text or third-party logos

## Modify Contact Email

Edit the email once in:

```text
src/data/site.ts
```

Current value:

```ts
export const CONTACT_EMAIL = 'kang341281k@gmail.com';
```

All header, footer, CTA, product inquiry and contact page mailto links use this value.

## Email Popup Page

Email-related buttons open a small popup webpage at:

```text
/email-contact
```

The popup displays the configured contact email, plus copy and email-app actions. The shared click behavior lives in:

```text
src/components/EmailPopupLink.vue
src/utils/emailWindow.ts
```

## Compliance Copy Notes

The website avoids medical treatment claims. Copy uses safer B2B and lifestyle language such as:

- daily wellness
- traditional botanical lifestyle
- calm evening routine
- herbal tea lifestyle
- merchant supply solution

Avoid adding claims such as cure, disease treatment, guaranteed medical effect, blood pressure reduction or blood sugar reduction.
