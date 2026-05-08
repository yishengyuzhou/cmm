<script setup lang="ts">
import EmailPopupLink from '@/components/EmailPopupLink.vue';
import ResponsiveImageBlock from '@/components/ResponsiveImageBlock.vue';
import { CONTACT_EMAIL } from '@/data/site';
import { useI18n } from '@/i18n';

const { t } = useI18n();
</script>

<template>
  <section class="home-hero">
    <div class="container home-hero__inner">
      <div class="home-hero__content">
        <p class="eyebrow">{{ t('home.hero.eyebrow') }}</p>
        <h1 class="hero-title">{{ t('home.hero.title') }}</h1>
        <p class="lead">{{ t('home.hero.subtitle') }}</p>
        <div class="button-row">
          <EmailPopupLink class="btn btn--primary" :aria-label="t('common.contactWholesale')">
            {{ t('common.contactWholesale') }}
          </EmailPopupLink>
          <RouterLink class="btn btn--secondary" to="/products">{{ t('common.viewProducts') }}</RouterLink>
        </div>
        <div class="home-hero__highlight">
          <span>{{ t('home.hero.highlight') }}</span>
          <EmailPopupLink class="email-link" :aria-label="t('common.emailLabel')">{{ CONTACT_EMAIL }}</EmailPopupLink>
        </div>
      </div>

      <ResponsiveImageBlock image-key="heroHerbs" :alt="t('home.hero.imageAlt')" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.home-hero {
  position: relative;
  overflow: hidden;
  padding: 92px 0 92px;
  background:
    linear-gradient(135deg, rgba(15, 55, 42, 0.98), rgba(23, 75, 53, 0.92) 52%, rgba(53, 124, 116, 0.84)),
    var(--color-forest);
  color: var(--color-cream);
}

.home-hero::after {
  content: "";
  position: absolute;
  inset: auto -12% -42% 52%;
  width: 600px;
  height: 600px;
  border: 1px solid rgba(215, 173, 85, 0.28);
  border-radius: 50%;
}

.home-hero__inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(360px, 0.82fr);
  gap: 52px;
  align-items: center;
}

.home-hero__content {
  max-width: 790px;
}

.lead {
  max-width: 690px;
  margin: 24px 0 30px;
}

.home-hero__highlight {
  display: grid;
  gap: 8px;
  max-width: 620px;
  margin-top: 28px;
  border: 1px solid rgba(255, 248, 236, 0.18);
  border-radius: var(--radius-md);
  padding: 16px 18px;
  background: rgba(255, 248, 236, 0.1);
  color: rgba(255, 248, 236, 0.82);
  font-weight: 850;
  overflow-wrap: anywhere;
}

@media (max-width: 980px) {
  .home-hero {
    padding: 66px 0 72px;
  }

  .home-hero__inner {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .home-hero {
    padding: 50px 0 58px;
  }
}
</style>
