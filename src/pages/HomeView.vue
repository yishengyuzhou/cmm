<script setup lang="ts">
import { computed } from 'vue';
import CTASection from '@/components/CTASection.vue';
import CategoryCard from '@/components/CategoryCard.vue';
import HeroSection from '@/components/HeroSection.vue';
import ProductCard from '@/components/ProductCard.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import SupplyBadge from '@/components/SupplyBadge.vue';
import TrustBar from '@/components/TrustBar.vue';
import type { ImagePromptKey } from '@/data/imagePrompts';
import type { Product } from '@/data/products';
import { featuredProductIds, products } from '@/data/products';
import { useI18n } from '@/i18n';

interface CategoryItem {
  title: string;
  description: string;
  imageKey: ImagePromptKey;
}

const { t, tm } = useI18n();

const trustItems = computed(() => tm<string[]>('home.trust'));
const categories = computed(() => tm<CategoryItem[]>('home.categories.items'));
const whyItems = computed(() => tm<string[]>('home.why.items'));
const themeItems = computed(() => tm<string[]>('home.themes.items'));
const featuredProducts = computed(() =>
  featuredProductIds
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is Product => Boolean(product)),
);
const categoryRoutes = ['/products?category=raw', '/products?category=tea', '/products?category=drinks', '/products?category=calm', '/products?category=oem', '/oem-odm'];
</script>

<template>
  <HeroSection />
  <TrustBar :items="trustItems" />

  <section class="section">
    <div class="container">
      <SectionTitle
        :eyebrow="t('home.categories.eyebrow')"
        :title="t('home.categories.title')"
        :description="t('home.categories.description')"
      />

      <div class="grid grid-3">
        <CategoryCard
          v-for="(category, index) in categories"
          :key="category.title"
          :title="category.title"
          :description="category.description"
          :image-key="category.imageKey"
          :to="categoryRoutes[index]"
        />
      </div>
    </div>
  </section>

  <section class="section section--featured">
    <div class="container">
      <SectionTitle
        :eyebrow="t('home.featured.eyebrow')"
        :title="t('home.featured.title')"
        :description="t('home.featured.description')"
        align="center"
      />

      <div class="grid grid-3">
        <ProductCard v-for="product in featuredProducts" :key="product.id" :product="product" />
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container why-grid">
      <div>
        <SectionTitle
          :eyebrow="t('home.why.eyebrow')"
          :title="t('home.why.title')"
          :description="t('home.why.description')"
        />
      </div>
      <div class="why-list">
        <article v-for="(item, index) in whyItems" :key="item" class="why-item">
          <SupplyBadge :label="String(index + 1).padStart(2, '0')" tone="gold" />
          <h3>{{ item }}</h3>
        </article>
      </div>
    </div>
  </section>

  <section class="section themes-section">
    <div class="container">
      <SectionTitle
        :eyebrow="t('home.themes.eyebrow')"
        :title="t('home.themes.title')"
        :description="t('home.themes.description')"
        align="center"
      />
      <div class="theme-pills">
        <span v-for="(item, index) in themeItems" :key="item" :class="`theme-pill theme-pill--${index % 5}`">
          {{ item }}
        </span>
      </div>
    </div>
  </section>

  <CTASection :title="t('home.cta.title')" :description="t('home.cta.description')" />
</template>

<style scoped lang="scss">
.section--featured {
  background:
    linear-gradient(180deg, rgba(223, 234, 221, 0.48), rgba(255, 255, 255, 0.8)),
    #fff;
}

.why-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
  gap: 44px;
  align-items: start;
}

.why-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.why-item {
  min-height: 144px;
  border: 1px solid rgba(228, 218, 200, 0.82);
  border-radius: var(--radius-md);
  padding: 20px;
  background: rgba(255, 255, 255, 0.86);
  box-shadow: var(--shadow-card);
}

.why-item h3 {
  margin: 26px 0 0;
  color: var(--color-forest-2);
  font-size: 1.12rem;
  line-height: 1.4;
}

.themes-section {
  background:
    radial-gradient(circle at 18% 24%, rgba(215, 173, 85, 0.18), transparent 18rem),
    linear-gradient(180deg, #fff8ec, #fff);
}

.theme-pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
  margin-top: 34px;
}

.theme-pill {
  display: inline-flex;
  min-height: 56px;
  align-items: center;
  border: 1px solid rgba(228, 218, 200, 0.78);
  border-radius: 999px;
  padding: 0 22px;
  background: #fff;
  box-shadow: var(--shadow-card);
  color: var(--color-forest);
  font-weight: 900;
}

.theme-pill--1 {
  color: #8b432a;
}

.theme-pill--2 {
  color: #1f5c55;
}

.theme-pill--3 {
  color: #7f5618;
}

@media (max-width: 900px) {
  .why-grid,
  .why-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .theme-pills {
    justify-content: stretch;
  }

  .theme-pill {
    width: 100%;
    justify-content: center;
  }
}
</style>
