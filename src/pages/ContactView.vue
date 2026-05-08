<script setup lang="ts">
import EmailPopupLink from '@/components/EmailPopupLink.vue';
import InquiryForm from '@/components/InquiryForm.vue';
import ResponsiveImageBlock from '@/components/ResponsiveImageBlock.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import { CONTACT_EMAIL } from '@/data/site';
import { useI18n } from '@/i18n';

const { t } = useI18n();
</script>

<template>
  <section class="page-hero">
    <div class="container page-hero__inner">
      <div>
        <p class="eyebrow">{{ t('contact.hero.eyebrow') }}</p>
        <h1>{{ t('contact.hero.title') }}</h1>
        <p>{{ t('contact.hero.description') }}</p>
        <div class="contact-hero__email">
          <span>{{ t('common.emailLabel') }}</span>
          <EmailPopupLink class="email-link" :aria-label="t('common.emailLabel')">{{ CONTACT_EMAIL }}</EmailPopupLink>
        </div>
      </div>
      <ResponsiveImageBlock image-key="contactDesk" :alt="t('contact.hero.title')" />
    </div>
  </section>

  <section class="section">
    <div class="container contact-grid">
      <div>
        <SectionTitle :title="t('contact.formTitle')" :description="t('contact.formDescription')" />
        <InquiryForm />
      </div>

      <aside class="contact-card">
        <ResponsiveImageBlock image-key="teaBlend" :alt="t('contact.hero.title')" compact />
        <div class="contact-card__body">
          <span>{{ t('contact.bottomNote') }}</span>
          <EmailPopupLink class="email-link" :aria-label="t('common.emailLabel')">{{ CONTACT_EMAIL }}</EmailPopupLink>
          <EmailPopupLink class="btn btn--primary" :aria-label="t('common.emailUs')">{{ t('common.emailUs') }}</EmailPopupLink>
        </div>
      </aside>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact-hero__email {
  display: grid;
  gap: 6px;
  max-width: 520px;
  margin-top: 24px;
  border: 1px solid rgba(255, 248, 236, 0.2);
  border-radius: var(--radius-md);
  padding: 16px;
  background: rgba(255, 248, 236, 0.1);
}

.contact-hero__email span {
  color: rgba(255, 248, 236, 0.7);
  font-size: 0.78rem;
  font-weight: 850;
  text-transform: uppercase;
}

.contact-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(300px, 0.42fr);
  gap: 32px;
  align-items: start;
}

.contact-card {
  position: sticky;
  top: 104px;
  overflow: hidden;
  border: 1px solid rgba(228, 218, 200, 0.82);
  border-radius: var(--radius-md);
  background: #fff;
  box-shadow: var(--shadow-card);
}

.contact-card :deep(.responsive-image) {
  border: 0;
  border-radius: 0;
  box-shadow: none;
}

.contact-card__body {
  display: grid;
  gap: 14px;
  padding: 20px;
}

.contact-card__body span {
  color: var(--color-muted);
  line-height: 1.7;
}

.contact-card .btn {
  width: 100%;
}

@media (max-width: 880px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .contact-card {
    position: static;
  }
}
</style>
