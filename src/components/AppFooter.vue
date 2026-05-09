<script setup lang="ts">
import { computed } from 'vue';
import EmailPopupLink from '@/components/EmailPopupLink.vue';
import { BRAND_NAME, CONTACT_EMAIL } from '@/data/site';
import { useI18n } from '@/i18n';

const { t } = useI18n();

const year = new Date().getFullYear();
const catalogueLinks = computed(() => [
  { to: '/products', label: t('nav.products') },
  { to: '/bulk-supply', label: t('nav.bulk') },
  { to: '/oem-odm', label: t('nav.oem') },
]);
const companyLinks = computed(() => [
  { to: '/about', label: t('nav.about') },
  { to: '/contact', label: t('nav.contact') },
]);
</script>

<template>
  <footer class="app-footer">
    <div class="container app-footer__grid">
      <section class="footer-brand">
        <div class="footer-brand__mark" aria-hidden="true"></div>
        <h2>{{ BRAND_NAME }}</h2>
        <p>{{ t('footer.tagline') }}</p>
        <EmailPopupLink class="footer-email" :aria-label="t('common.emailLabel')">{{ CONTACT_EMAIL }}</EmailPopupLink>
      </section>

      <section>
        <h3>{{ t('footer.sections.catalogue') }}</h3>
        <RouterLink v-for="link in catalogueLinks" :key="link.to" :to="link.to">
          {{ link.label }}
        </RouterLink>
      </section>

      <section>
        <h3>{{ t('footer.sections.company') }}</h3>
        <RouterLink v-for="link in companyLinks" :key="link.to" :to="link.to">
          {{ link.label }}
        </RouterLink>
      </section>

      <section>
        <h3>{{ t('footer.sections.contact') }}</h3>
        <p>{{ t('footer.notice') }}</p>
        <EmailPopupLink class="btn btn--primary" :aria-label="t('nav.contactUs')">
          {{ t('nav.contactUs') }}
        </EmailPopupLink>
      </section>
    </div>
    <div class="container app-footer__bottom">
      <span>© {{ year }} {{ BRAND_NAME }}. {{ t('footer.rights') }}</span>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.app-footer {
  background:
    linear-gradient(135deg, rgba(15, 55, 42, 0.96), rgba(23, 75, 53, 0.96)),
    var(--color-forest-2);
  color: var(--color-cream);
}

.app-footer__grid {
  display: grid;
  grid-template-columns: minmax(260px, 1.6fr) repeat(3, minmax(150px, 1fr));
  gap: 34px;
  padding: 58px 0 38px;
}

.app-footer h2,
.app-footer h3,
.app-footer p {
  margin-top: 0;
}

.app-footer h3 {
  color: var(--color-gold);
  font-size: 0.92rem;
  text-transform: uppercase;
}

.app-footer a {
  display: block;
  width: fit-content;
  margin: 12px 0;
  color: rgba(255, 248, 236, 0.86);
  font-weight: 750;
}

.app-footer p {
  color: rgba(255, 248, 236, 0.72);
  line-height: 1.75;
}

.footer-brand__mark {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background:
    linear-gradient(135deg, transparent 52%, var(--color-gold) 53%),
    radial-gradient(circle at 62% 30%, var(--color-gold), transparent 29%),
    var(--color-cream);
}

.footer-email {
  overflow-wrap: anywhere;
  color: var(--color-gold) !important;
  font-size: 1.04rem;
}

.app-footer .btn {
  color: var(--color-forest-2);
}

.app-footer__bottom {
  border-top: 1px solid rgba(255, 248, 236, 0.18);
  padding: 20px 0;
  color: rgba(255, 248, 236, 0.66);
  font-size: 0.9rem;
}

@media (max-width: 900px) {
  .app-footer__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .app-footer__grid {
    grid-template-columns: 1fr;
    padding-top: 44px;
  }
}
</style>
