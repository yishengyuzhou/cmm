<script setup lang="ts">
import EmailPopupLink from '@/components/EmailPopupLink.vue';
import { CONTACT_EMAIL } from '@/data/site';
import { useI18n } from '@/i18n';

defineProps<{
  title: string;
  description: string;
}>();

const { t } = useI18n();
</script>

<template>
  <section class="cta-section">
    <div class="container cta-section__inner">
      <div>
        <p class="eyebrow">{{ t('common.emailLabel') }}</p>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <EmailPopupLink class="email-link" :aria-label="t('common.emailLabel')">{{ CONTACT_EMAIL }}</EmailPopupLink>
      </div>
      <div class="button-row">
        <EmailPopupLink class="btn btn--primary" :aria-label="t('common.emailUs')">{{ t('common.emailUs') }}</EmailPopupLink>
        <RouterLink class="btn btn--secondary" to="/contact">{{ t('nav.contactUs') }}</RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.cta-section {
  padding: 76px 0;
  background:
    linear-gradient(135deg, rgba(23, 75, 53, 0.98), rgba(53, 124, 116, 0.88)),
    var(--color-forest);
  color: var(--color-cream);
}

.cta-section__inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 28px;
  align-items: center;
}

h2 {
  max-width: 720px;
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1.08;
}

p:not(.eyebrow) {
  max-width: 760px;
  color: rgba(255, 248, 236, 0.78);
  line-height: 1.75;
}

.email-link {
  display: inline-block;
  margin-top: 4px;
}

@media (max-width: 760px) {
  .cta-section__inner {
    grid-template-columns: 1fr;
  }
}
</style>
