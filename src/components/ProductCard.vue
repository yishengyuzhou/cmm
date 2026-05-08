<script setup lang="ts">
import { computed } from 'vue';
import EmailPopupLink from '@/components/EmailPopupLink.vue';
import ResponsiveImageBlock from '@/components/ResponsiveImageBlock.vue';
import SupplyBadge from '@/components/SupplyBadge.vue';
import type { Product } from '@/data/products';
import { useI18n } from '@/i18n';

const props = defineProps<{
  product: Product;
}>();

const { locale, t } = useI18n();

const name = computed(() => props.product.name[locale.value]);
const description = computed(() => props.product.shortDescription[locale.value]);
const moqText = computed(() => props.product.moqText[locale.value]);
const theme = computed(() => props.product.theme[locale.value]);
</script>

<template>
  <article class="product-card">
    <ResponsiveImageBlock :image-key="product.imageKey" :alt="name" compact />

    <div class="product-card__body">
      <div>
        <h3>{{ name }}</h3>
        <p v-if="product.latinName" class="product-card__latin">{{ product.latinName }}</p>
        <p class="product-card__description">{{ description }}</p>
      </div>

      <div class="product-card__meta">
        <p>
          <strong>{{ t('common.supplyForm') }}:</strong>
          {{ product.supplyForms.join(' / ') }}
        </p>
        <p>
          <strong>{{ t('common.moq') }}:</strong>
          {{ moqText }}
        </p>
        <p>
          <strong>{{ t('common.supplyType') }}:</strong>
          {{ theme }}
        </p>
      </div>

      <div class="product-card__badges">
        <SupplyBadge v-for="(tag, index) in product.tags" :key="tag" :label="tag" :tone="index % 2 ? 'gold' : 'green'" />
      </div>

      <EmailPopupLink class="btn btn--outline product-card__button" :aria-label="t('common.inquiryByEmail')">
        {{ t('common.inquiryByEmail') }}
      </EmailPopupLink>
    </div>
  </article>
</template>

<style scoped lang="scss">
.product-card {
  display: grid;
  min-height: 100%;
  overflow: hidden;
  border: 1px solid rgba(228, 218, 200, 0.82);
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.86);
  box-shadow: var(--shadow-card);
}

.product-card :deep(.responsive-image) {
  border: 0;
  border-radius: 0;
  box-shadow: none;
}

.product-card__body {
  display: grid;
  gap: 16px;
  padding: 20px;
}

h3 {
  margin: 0;
  color: var(--color-forest);
  font-size: 1.18rem;
}

.product-card__latin {
  margin: 4px 0 0;
  color: var(--color-amber);
  font-size: 0.88rem;
  font-style: italic;
  font-weight: 750;
}

.product-card__description,
.product-card__meta p {
  color: var(--color-muted);
  line-height: 1.65;
}

.product-card__description {
  margin: 12px 0 0;
}

.product-card__meta {
  display: grid;
  gap: 8px;
  border-top: 1px solid var(--color-line);
  padding-top: 14px;
}

.product-card__meta p {
  margin: 0;
  font-size: 0.92rem;
}

.product-card__meta strong {
  color: var(--color-forest-2);
}

.product-card__badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.product-card__button {
  width: 100%;
}
</style>
