<script setup lang="ts">
import { computed } from 'vue';
import CTASection from '@/components/CTASection.vue';
import CategoryCard from '@/components/CategoryCard.vue';
import ProcessSteps from '@/components/ProcessSteps.vue';
import ResponsiveImageBlock from '@/components/ResponsiveImageBlock.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import SupplyBadge from '@/components/SupplyBadge.vue';
import type { ImagePromptKey } from '@/data/imagePrompts';
import { useI18n } from '@/i18n';

interface SupplyOption {
  title: string;
  description: string;
  imageKey: ImagePromptKey;
}

const { t, tm } = useI18n();
const options = computed(() => tm<SupplyOption[]>('bulk.options'));
const fitItems = computed(() => tm<string[]>('bulk.fitItems'));
const steps = computed(() => tm<string[]>('bulk.process'));
</script>

<template>
  <section class="page-hero">
    <div class="container page-hero__inner">
      <div>
        <p class="eyebrow">{{ t('bulk.hero.eyebrow') }}</p>
        <h1>{{ t('bulk.hero.title') }}</h1>
        <p>{{ t('bulk.hero.description') }}</p>
      </div>
      <ResponsiveImageBlock image-key="bulkSupply" :alt="t('bulk.hero.title')" />
    </div>
  </section>

  <section class="section">
    <div class="container">
      <SectionTitle :title="t('bulk.optionsTitle')" :description="t('bulk.optionsDescription')" />
      <div class="grid grid-3">
        <CategoryCard
          v-for="option in options"
          :key="option.title"
          :title="option.title"
          :description="option.description"
          :image-key="option.imageKey"
        />
      </div>
    </div>
  </section>

  <section class="section fit-section">
    <div class="container fit-grid">
      <div>
        <SectionTitle :title="t('bulk.fitTitle')" />
        <div class="fit-list">
          <article v-for="(item, index) in fitItems" :key="item">
            <SupplyBadge :label="String(index + 1).padStart(2, '0')" :tone="index % 2 ? 'teal' : 'gold'" />
            <strong>{{ item }}</strong>
          </article>
        </div>
      </div>
      <ResponsiveImageBlock image-key="mixedBatch" :alt="t('bulk.fitTitle')" />
    </div>
  </section>

  <section class="section">
    <div class="container">
      <SectionTitle :title="t('bulk.processTitle')" align="center" />
      <ProcessSteps :steps="steps" />
    </div>
  </section>

  <CTASection :title="t('bulk.ctaTitle')" :description="t('bulk.ctaDescription')" />
</template>

<style scoped lang="scss">
.fit-section {
  background:
    linear-gradient(180deg, rgba(223, 234, 221, 0.48), rgba(255, 248, 236, 0.74)),
    #fff;
}

.fit-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(340px, 0.82fr);
  gap: 42px;
  align-items: center;
}

.fit-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.fit-list article {
  min-height: 130px;
  border: 1px solid rgba(228, 218, 200, 0.82);
  border-radius: var(--radius-md);
  padding: 18px;
  background: rgba(255, 255, 255, 0.84);
  box-shadow: var(--shadow-card);
}

.fit-list strong {
  display: block;
  margin-top: 18px;
  color: var(--color-forest-2);
  line-height: 1.45;
}

@media (max-width: 900px) {
  .fit-grid,
  .fit-list {
    grid-template-columns: 1fr;
  }
}
</style>
