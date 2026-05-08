<script setup lang="ts">
import EmailPopupLink from '@/components/EmailPopupLink.vue';
import { CONTACT_EMAIL } from '@/data/site';
import { useI18n } from '@/i18n';

const { t } = useI18n();
</script>

<template>
  <aside class="contact-banner">
    <div>
      <span>{{ t('common.emailLabel') }}</span>
      <EmailPopupLink :aria-label="t('common.emailLabel')">{{ CONTACT_EMAIL }}</EmailPopupLink>
    </div>
    <RouterLink class="btn btn--primary" to="/contact">{{ t('nav.contactUs') }}</RouterLink>
  </aside>
</template>

<style scoped lang="scss">
.contact-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border: 1px solid rgba(215, 173, 85, 0.38);
  border-radius: var(--radius-md);
  padding: 18px;
  background:
    linear-gradient(135deg, rgba(255, 248, 236, 0.94), rgba(223, 234, 221, 0.82)),
    var(--color-card);
  box-shadow: var(--shadow-card);
}

span,
a {
  display: block;
}

span {
  margin-bottom: 4px;
  color: var(--color-muted);
  font-size: 0.78rem;
  font-weight: 850;
  text-transform: uppercase;
}

a:not(.btn) {
  color: var(--color-forest);
  font-size: clamp(1.05rem, 3vw, 1.34rem);
  font-weight: 950;
  overflow-wrap: anywhere;
}

@media (max-width: 640px) {
  .contact-banner {
    display: grid;
  }

  .btn {
    width: 100%;
  }
}
</style>
