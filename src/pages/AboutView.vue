<script setup lang="ts">
import { computed } from 'vue';
import ContactBanner from '@/components/ContactBanner.vue';
import ProcessSteps from '@/components/ProcessSteps.vue';
import ResponsiveImageBlock from '@/components/ResponsiveImageBlock.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import { useI18n } from '@/i18n';

const { t, tm } = useI18n();
const qualitySteps = computed(() => tm<string[]>('about.quality'));
</script>

<template>
  <section class="page-hero">
    <div class="container page-hero__inner">
      <div>
        <p class="eyebrow">{{ t('about.hero.eyebrow') }}</p>
        <h1>{{ t('about.hero.title') }}</h1>
        <p>{{ t('about.hero.description') }}</p>
      </div>
      <ResponsiveImageBlock image-key="aboutProcess" :alt="t('about.hero.title')" />
    </div>
  </section>

  <section class="section">
    <div class="container about-story">
      <div>
        <SectionTitle :title="t('about.storyTitle')" />
        <p>{{ t('about.story') }}</p>
      </div>
      <div>
        <SectionTitle :title="t('about.marketTitle')" />
        <p>{{ t('about.market') }}</p>
      </div>
    </div>
  </section>

  <section class="section quality-section">
    <div class="container">
      <SectionTitle
        :title="t('about.qualityTitle')"
        :description="t('about.qualityDescription')"
        align="center"
      />
      <div class="quality-visual">
        <ResponsiveImageBlock image-key="qualityCheck" :alt="t('about.qualityTitle')" />
      </div>
      <ProcessSteps :steps="qualitySteps" />
      <ContactBanner class="about-contact" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.about-story {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
}

.about-story > div {
  border: 1px solid rgba(228, 218, 200, 0.82);
  border-radius: var(--radius-md);
  padding: 28px;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: var(--shadow-card);
}

.about-story :deep(.section-title) {
  margin-bottom: 18px;
}

.about-story :deep(h2) {
  font-size: clamp(1.55rem, 3vw, 2.2rem);
}

.about-story p {
  margin: 0;
  color: var(--color-muted);
  font-size: 1.02rem;
  line-height: 1.82;
}

.quality-section {
  background:
    linear-gradient(180deg, rgba(223, 234, 221, 0.48), rgba(255, 255, 255, 0.8)),
    #fff;
}

.quality-visual {
  max-width: 780px;
  margin: 0 auto 30px;
}

.about-contact {
  margin-top: 34px;
}

@media (max-width: 780px) {
  .about-story {
    grid-template-columns: 1fr;
  }

  .about-story > div {
    padding: 20px;
  }
}
</style>
