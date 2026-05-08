<script setup lang="ts">
import { computed } from 'vue';
import type { ImagePromptKey } from '@/data/imagePrompts';

const props = withDefaults(
  defineProps<{
    imageKey: ImagePromptKey;
    alt: string;
    label?: string;
    compact?: boolean;
  }>(),
  {
    compact: false,
  },
);

const imageSources: Record<ImagePromptKey, string> = {
  heroHerbs: new URL('../assets/images/hero-herbs.svg', import.meta.url).href,
  rawHerbs: new URL('../assets/images/raw-herbs.svg', import.meta.url).href,
  teaBlend: new URL('../assets/images/tea-blend.svg', import.meta.url).href,
  wellnessDrink: new URL('../assets/images/wellness-drink.svg', import.meta.url).href,
  sleepCalm: new URL('../assets/images/sleep-calm.svg', import.meta.url).href,
  giftPack: new URL('../assets/images/gift-pack.svg', import.meta.url).href,
  oemLabel: new URL('../assets/images/oem-label.svg', import.meta.url).href,
  bulkSupply: new URL('../assets/images/bulk-supply.svg', import.meta.url).href,
  cartonPacking: new URL('../assets/images/carton-packing.svg', import.meta.url).href,
  mixedBatch: new URL('../assets/images/mixed-batch.svg', import.meta.url).href,
  aboutProcess: new URL('../assets/images/about-process.svg', import.meta.url).href,
  qualityCheck: new URL('../assets/images/quality-check.svg', import.meta.url).href,
  contactDesk: new URL('../assets/images/contact-desk.svg', import.meta.url).href,
  productGojiBerry: new URL('../assets/products/goji-berry.jpg', import.meta.url).href,
  productPoria: new URL('../assets/products/poria.jpg', import.meta.url).href,
  productAstragalus: new URL('../assets/products/astragalus.jpg', import.meta.url).href,
  productChrysanthemum: new URL('../assets/products/chrysanthemum.jpg', import.meta.url).href,
  productDriedJujube: new URL('../assets/products/dried-jujube.jpg', import.meta.url).href,
  productTangerinePeel: new URL('../assets/products/tangerine-peel.jpg', import.meta.url).href,
  productCodonopsis: new URL('../assets/products/codonopsis.jpg', import.meta.url).href,
  productLicoriceRoot: new URL('../assets/products/licorice-root.jpg', import.meta.url).href,
  productLilyBulb: new URL('../assets/products/lily-bulb.jpg', import.meta.url).href,
  productLotusSeed: new URL('../assets/products/lotus-seed.jpg', import.meta.url).href,
  productHerbalSleepTea: new URL('../assets/products/herbal-sleep-tea.jpg', import.meta.url).href,
  productWellnessFlowerTea: new URL('../assets/products/wellness-flower-tea.jpg', import.meta.url).href,
};

const visualKindByKey: Record<ImagePromptKey, 'hero' | 'herbs' | 'tea' | 'packaging' | 'logistics' | 'process' | 'product'> = {
  heroHerbs: 'hero',
  rawHerbs: 'herbs',
  teaBlend: 'tea',
  wellnessDrink: 'tea',
  sleepCalm: 'tea',
  giftPack: 'packaging',
  oemLabel: 'packaging',
  bulkSupply: 'logistics',
  cartonPacking: 'logistics',
  mixedBatch: 'logistics',
  aboutProcess: 'process',
  qualityCheck: 'process',
  contactDesk: 'process',
  productGojiBerry: 'product',
  productPoria: 'product',
  productAstragalus: 'product',
  productChrysanthemum: 'product',
  productDriedJujube: 'product',
  productTangerinePeel: 'product',
  productCodonopsis: 'product',
  productLicoriceRoot: 'product',
  productLilyBulb: 'product',
  productLotusSeed: 'product',
  productHerbalSleepTea: 'product',
  productWellnessFlowerTea: 'product',
};

const imageSource = computed(() => imageSources[props.imageKey]);
const toneClass = computed(() => `responsive-image--${visualKindByKey[props.imageKey]}`);
</script>

<template>
  <figure :class="['responsive-image', toneClass, { 'responsive-image--compact': compact }]">
    <img :src="imageSource" :alt="alt" loading="lazy" decoding="async" />

    <figcaption v-if="label">{{ label }}</figcaption>
  </figure>
</template>

<style scoped lang="scss">
.responsive-image {
  position: relative;
  margin: 0;
  overflow: hidden;
  border: 1px solid rgba(228, 218, 200, 0.76);
  border-radius: var(--radius-md);
  background: var(--color-card);
  box-shadow: var(--shadow-card);
}

.responsive-image img {
  display: block;
  width: 100%;
  height: 100%;
  aspect-ratio: 1.36 / 1;
  object-fit: cover;
}

.responsive-image--compact img {
  aspect-ratio: 1.45 / 1;
}

.responsive-image--hero {
  border-color: rgba(255, 248, 236, 0.18);
  background: rgba(255, 248, 236, 0.1);
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.18);
}

.responsive-image--logistics,
.responsive-image--packaging {
  background: #fffdf7;
}

.responsive-image figcaption {
  position: absolute;
  right: 18px;
  bottom: 16px;
  left: 18px;
  border-radius: var(--radius-sm);
  padding: 10px 12px;
  background: rgba(23, 75, 53, 0.86);
  color: var(--color-cream);
  font-size: 0.84rem;
  font-weight: 800;
}
</style>
