<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import EmailPopupLink from '@/components/EmailPopupLink.vue';
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';
import { BRAND_NAME, CONTACT_EMAIL } from '@/data/site';
import { useI18n } from '@/i18n';

const route = useRoute();
const { t } = useI18n();
const isOpen = ref(false);

const navItems = computed(() => [
  { to: '/', label: t('nav.home') },
  { to: '/products', label: t('nav.products') },
  { to: '/bulk-supply', label: t('nav.bulk') },
  { to: '/oem-odm', label: t('nav.oem') },
  { to: '/about', label: t('nav.about') },
  { to: '/contact', label: t('nav.contact') },
]);

const closeMenu = () => {
  isOpen.value = false;
};

watch(isOpen, (open) => {
  document.body.classList.toggle('menu-open', open);
});

watch(
  () => route.fullPath,
  () => closeMenu(),
);
</script>

<template>
  <header class="app-header">
    <div class="container app-header__inner">
      <RouterLink class="brand" to="/" aria-label="Herbal East Supply home">
        <span class="brand__mark" aria-hidden="true">
          <span></span>
        </span>
        <span>
          <strong>{{ BRAND_NAME }}</strong>
          <small>{{ t('home.hero.eyebrow') }}</small>
        </span>
      </RouterLink>

      <button
        class="menu-toggle"
        type="button"
        :aria-label="isOpen ? t('nav.close') : t('nav.menu')"
        :aria-expanded="isOpen"
        @click="isOpen = !isOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav :class="['nav-panel', { 'nav-panel--open': isOpen }]" aria-label="Primary navigation">
        <div class="nav-panel__links">
          <RouterLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="nav-link"
            active-class="nav-link--active"
          >
            {{ item.label }}
          </RouterLink>
        </div>

        <div class="nav-panel__actions">
          <LanguageSwitcher />
          <EmailPopupLink class="header-email" :aria-label="t('common.emailLabel')">
            <span>{{ t('common.emailLabel') }}</span>
            {{ CONTACT_EMAIL }}
          </EmailPopupLink>
          <RouterLink class="btn btn--primary header-cta" to="/contact">
            {{ t('nav.contactUs') }}
          </RouterLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  position: sticky;
  z-index: 50;
  top: 0;
  border-bottom: 1px solid rgba(228, 218, 200, 0.74);
  background: rgba(255, 248, 236, 0.92);
  backdrop-filter: blur(18px);
}

.app-header__inner {
  display: flex;
  min-height: 78px;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-width: 228px;
  color: var(--color-forest);
}

.brand__mark {
  display: inline-grid;
  width: 44px;
  height: 44px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 50%;
  background:
    radial-gradient(circle at 62% 28%, var(--color-gold), transparent 30%),
    var(--color-forest);
}

.brand__mark span {
  width: 18px;
  height: 28px;
  border-radius: 100% 0 100% 0;
  background: var(--color-cream);
  transform: rotate(34deg);
}

.brand strong,
.brand small {
  display: block;
}

.brand strong {
  font-size: 1.04rem;
}

.brand small {
  margin-top: 2px;
  color: var(--color-muted);
  font-size: 0.72rem;
  line-height: 1.25;
}

.nav-panel {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-panel__links,
.nav-panel__actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-link {
  border-radius: var(--radius-sm);
  padding: 10px 11px;
  color: var(--color-forest);
  font-size: 0.92rem;
  font-weight: 800;
  transition:
    background-color 0.18s ease,
    color 0.18s ease;
}

.nav-link:hover,
.nav-link--active {
  background: rgba(75, 125, 90, 0.12);
  color: var(--color-forest-2);
}

.header-email {
  display: inline-flex;
  max-width: 228px;
  flex-direction: column;
  border-left: 1px solid var(--color-line);
  padding-left: 12px;
  color: var(--color-forest);
  font-size: 0.85rem;
  font-weight: 900;
  overflow-wrap: anywhere;
}

.header-email span {
  color: var(--color-muted);
  font-size: 0.68rem;
  font-weight: 800;
  text-transform: uppercase;
}

.header-cta {
  min-height: 42px;
  padding-inline: 16px;
}

.menu-toggle {
  display: none;
  width: 44px;
  height: 44px;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: 1px solid rgba(23, 75, 53, 0.2);
  border-radius: var(--radius-sm);
  background: var(--color-card);
}

.menu-toggle span {
  display: block;
  width: 20px;
  height: 2px;
  border-radius: 99px;
  background: var(--color-forest);
}

@media (max-width: 1120px) {
  .app-header__inner {
    gap: 14px;
  }

  .nav-panel {
    gap: 10px;
  }

  .nav-link {
    padding-inline: 8px;
  }

  .header-email {
    display: none;
  }
}

@media (max-width: 900px) {
  .menu-toggle {
    display: inline-flex;
  }

  .nav-panel {
    position: fixed;
    inset: 78px 0 auto 0;
    display: grid;
    max-height: calc(100vh - 78px);
    grid-template-columns: 1fr;
    gap: 18px;
    border-bottom: 1px solid var(--color-line);
    padding: 18px 20px 24px;
    background: rgba(255, 248, 236, 0.98);
    box-shadow: var(--shadow-soft);
    opacity: 0;
    pointer-events: none;
    transform: translateY(-10px);
    transition:
      opacity 0.2s ease,
      transform 0.2s ease;
    overflow-y: auto;
  }

  .nav-panel--open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .nav-panel__links,
  .nav-panel__actions {
    display: grid;
    gap: 10px;
  }

  .nav-link {
    min-height: 46px;
    display: flex;
    align-items: center;
    padding: 0 14px;
    background: rgba(255, 255, 255, 0.74);
  }

  .header-email {
    display: flex;
    max-width: none;
    min-height: 56px;
    justify-content: center;
    border: 1px solid var(--color-line);
    border-radius: var(--radius-sm);
    padding: 8px 12px;
    background: #fff;
  }

  .header-cta {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .brand {
    min-width: 0;
  }

  .brand small {
    display: none;
  }
}
</style>
