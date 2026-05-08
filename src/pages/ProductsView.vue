<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ContactBanner from '@/components/ContactBanner.vue';
import ProductCard from '@/components/ProductCard.vue';
import ResponsiveImageBlock from '@/components/ResponsiveImageBlock.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import type { ProductCategory } from '@/data/products';
import { products } from '@/data/products';
import { useI18n } from '@/i18n';

type FilterKey = ProductCategory | 'all';

const route = useRoute();
const router = useRouter();
const { t } = useI18n();

const validFilters: FilterKey[] = ['all', 'raw', 'tea', 'drinks', 'calm', 'soup', 'oem'];
const activeFilter = ref<FilterKey>('all');

const filters = computed<Array<{ key: FilterKey; label: string }>>(() => [
  { key: 'all', label: t('products.filters.all') },
  { key: 'raw', label: t('products.filters.raw') },
  { key: 'tea', label: t('products.filters.tea') },
  { key: 'drinks', label: t('products.filters.drinks') },
  { key: 'calm', label: t('products.filters.calm') },
  { key: 'soup', label: t('products.filters.soup') },
  { key: 'oem', label: t('products.filters.oem') },
]);

watch(
  () => route.query.category,
  (category) => {
    const value = typeof category === 'string' ? category : 'all';
    activeFilter.value = validFilters.includes(value as FilterKey) ? (value as FilterKey) : 'all';
  },
  { immediate: true },
);

const setFilter = (filter: FilterKey) => {
  router.replace({
    path: '/products',
    query: filter === 'all' ? {} : { category: filter },
  });
};

const filteredProducts = computed(() => {
  if (activeFilter.value === 'all') return products;

  return products.filter((product) => product.categories.includes(activeFilter.value as ProductCategory));
});
</script>

<template>
  <section class="page-hero">
    <div class="container page-hero__inner">
      <div>
        <p class="eyebrow">{{ t('products.hero.eyebrow') }}</p>
        <h1>{{ t('products.hero.title') }}</h1>
        <p>{{ t('products.hero.description') }}</p>
      </div>
      <ResponsiveImageBlock image-key="teaBlend" :alt="t('products.hero.title')" />
    </div>
  </section>

  <section class="section">
    <div class="container">
      <SectionTitle :title="t('products.listTitle')" :description="t('products.listDescription')" />

      <div class="product-filters" aria-label="Product filters">
        <button
          v-for="filter in filters"
          :key="filter.key"
          type="button"
          :class="['product-filters__button', { 'product-filters__button--active': activeFilter === filter.key }]"
          @click="setFilter(filter.key)"
        >
          {{ filter.label }}
        </button>
      </div>

      <div class="grid grid-3 products-grid">
        <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
      </div>

      <ContactBanner class="products-contact" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.product-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 28px;
}

.product-filters__button {
  min-height: 42px;
  border: 1px solid rgba(23, 75, 53, 0.18);
  border-radius: 999px;
  padding: 0 16px;
  background: rgba(255, 255, 255, 0.82);
  color: var(--color-forest);
  font-weight: 850;
  transition:
    background-color 0.18s ease,
    border-color 0.18s ease,
    color 0.18s ease;
}

.product-filters__button:hover,
.product-filters__button--active {
  border-color: var(--color-forest);
  background: var(--color-forest);
  color: var(--color-cream);
}

.products-grid {
  align-items: stretch;
}

.products-contact {
  margin-top: 34px;
}

@media (max-width: 560px) {
  .product-filters {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .product-filters__button {
    padding-inline: 10px;
  }
}
</style>
