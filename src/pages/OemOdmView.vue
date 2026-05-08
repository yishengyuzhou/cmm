<script setup lang="ts">
import { computed } from 'vue';
import CTASection from '@/components/CTASection.vue';
import ContactBanner from '@/components/ContactBanner.vue';
import ResponsiveImageBlock from '@/components/ResponsiveImageBlock.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import SupplyBadge from '@/components/SupplyBadge.vue';
import { useI18n } from '@/i18n';

const { t, tm } = useI18n();
const solutions = computed(() => tm<string[]>('oem.solutions'));
const privateItems = computed(() => tm<string[]>('oem.privateItems'));
const formulas = computed(() => tm<string[]>('oem.formulas'));
</script>

<template>
  <section class="page-hero">
    <div class="container page-hero__inner">
      <div>
        <p class="eyebrow">{{ t('oem.hero.eyebrow') }}</p>
        <h1>{{ t('oem.hero.title') }}</h1>
        <p>{{ t('oem.hero.description') }}</p>
      </div>
      <ResponsiveImageBlock image-key="oemLabel" :alt="t('oem.hero.title')" />
    </div>
  </section>

  <section class="section">
    <div class="container oem-grid">
      <div>
        <SectionTitle :title="t('oem.solutionsTitle')" :description="t('oem.solutionsDescription')" />
        <div class="solution-list">
          <article v-for="(solution, index) in solutions" :key="solution">
            <SupplyBadge :label="String(index + 1).padStart(2, '0')" :tone="index % 3 === 0 ? 'gold' : 'green'" />
            <h3>{{ solution }}</h3>
          </article>
        </div>
      </div>
      <ResponsiveImageBlock image-key="giftPack" :alt="t('oem.solutionsTitle')" />
    </div>
  </section>

  <section class="section private-section">
    <div class="container private-grid">
      <ResponsiveImageBlock image-key="wellnessDrink" :alt="t('oem.privateTitle')" />
      <div>
        <SectionTitle :title="t('oem.privateTitle')" :description="t('oem.privateDescription')" />
        <ul class="check-list">
          <li v-for="item in privateItems" :key="item">{{ item }}</li>
        </ul>
        <ContactBanner class="private-contact" />
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <SectionTitle :title="t('oem.formulaTitle')" :description="t('oem.formulaNote')" align="center" />
      <div class="formula-grid">
        <article v-for="(formula, index) in formulas" :key="formula">
          <SupplyBadge :label="String(index + 1).padStart(2, '0')" :tone="index % 2 ? 'teal' : 'clay'" />
          <h3>{{ formula }}</h3>
        </article>
      </div>
    </div>
  </section>

  <CTASection :title="t('oem.ctaTitle')" :description="t('oem.ctaDescription')" />
</template>

<style scoped lang="scss">
.oem-grid,
.private-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(340px, 0.82fr);
  gap: 42px;
  align-items: center;
}

.private-grid {
  grid-template-columns: minmax(340px, 0.82fr) minmax(0, 1fr);
}

.solution-list,
.formula-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.solution-list article,
.formula-grid article {
  min-height: 136px;
  border: 1px solid rgba(228, 218, 200, 0.82);
  border-radius: var(--radius-md);
  padding: 18px;
  background: rgba(255, 255, 255, 0.86);
  box-shadow: var(--shadow-card);
}

.solution-list h3,
.formula-grid h3 {
  margin: 22px 0 0;
  color: var(--color-forest-2);
  line-height: 1.42;
}

.private-section {
  background:
    linear-gradient(180deg, rgba(223, 234, 221, 0.46), rgba(255, 255, 255, 0.84)),
    #fff;
}

.check-list {
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.check-list li {
  position: relative;
  border: 1px solid rgba(228, 218, 200, 0.82);
  border-radius: var(--radius-sm);
  padding: 14px 14px 14px 44px;
  background: rgba(255, 255, 255, 0.8);
  color: var(--color-forest-2);
  font-weight: 800;
  line-height: 1.45;
}

.check-list li::before {
  content: "";
  position: absolute;
  top: 18px;
  left: 18px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-gold);
}

.private-contact {
  margin-top: 24px;
}

.formula-grid {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}

@media (max-width: 980px) {
  .oem-grid,
  .private-grid,
  .solution-list,
  .formula-grid {
    grid-template-columns: 1fr;
  }

  .private-grid :deep(.responsive-image) {
    order: 2;
  }
}
</style>
