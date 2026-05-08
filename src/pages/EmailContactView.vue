<script setup lang="ts">
import { ref } from 'vue';
import ResponsiveImageBlock from '@/components/ResponsiveImageBlock.vue';
import { CONTACT_EMAIL } from '@/data/site';
import { useI18n } from '@/i18n';

const { t } = useI18n();
const copied = ref(false);

const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=Wholesale%20Herbal%20Inquiry`;

const copyEmail = async () => {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(CONTACT_EMAIL);
  } else {
    const textarea = document.createElement('textarea');
    textarea.value = CONTACT_EMAIL;
    textarea.setAttribute('readonly', 'true');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }

  copied.value = true;
  window.setTimeout(() => {
    copied.value = false;
  }, 1800);
};

const closeWindow = () => {
  window.close();
};
</script>

<template>
  <main class="email-page">
    <section class="email-card" aria-labelledby="email-page-title">
      <ResponsiveImageBlock image-key="contactDesk" :alt="t('emailPage.title')" compact />

      <div class="email-card__body">
        <p class="eyebrow">{{ t('common.emailLabel') }}</p>
        <h1 id="email-page-title">{{ t('emailPage.title') }}</h1>
        <p class="email-card__hint">{{ t('emailPage.hint') }}</p>

        <a class="email-card__address" :href="mailtoLink">{{ CONTACT_EMAIL }}</a>

        <div class="button-row">
          <button class="btn btn--primary" type="button" @click="copyEmail">
            {{ copied ? t('emailPage.copied') : t('emailPage.copy') }}
          </button>
          <a class="btn btn--outline" :href="mailtoLink">{{ t('emailPage.openEmailApp') }}</a>
        </div>

        <button class="email-card__close" type="button" @click="closeWindow">
          {{ t('emailPage.close') }}
        </button>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.email-page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
  background:
    radial-gradient(circle at 20% 10%, rgba(215, 173, 85, 0.22), transparent 18rem),
    linear-gradient(145deg, var(--color-forest-2), var(--color-teal));
}

.email-card {
  width: min(100%, 520px);
  overflow: hidden;
  border: 1px solid rgba(255, 248, 236, 0.28);
  border-radius: var(--radius-md);
  background: rgba(255, 248, 236, 0.98);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.24);
}

.email-card :deep(.responsive-image) {
  border: 0;
  border-radius: 0;
  box-shadow: none;
}

.email-card__body {
  display: grid;
  gap: 16px;
  padding: 24px;
}

.eyebrow {
  margin-bottom: 0;
}

h1 {
  margin: 0;
  color: var(--color-forest-2);
  font-size: clamp(1.9rem, 8vw, 2.8rem);
  line-height: 1.08;
  letter-spacing: 0;
}

.email-card__hint {
  margin: 0;
  color: var(--color-muted);
  line-height: 1.7;
}

.email-card__address {
  display: block;
  border: 1px solid rgba(23, 75, 53, 0.16);
  border-radius: var(--radius-sm);
  padding: 16px;
  background: #fff;
  color: var(--color-forest);
  font-size: clamp(1.05rem, 5vw, 1.42rem);
  font-weight: 950;
  overflow-wrap: anywhere;
}

.email-card__close {
  width: fit-content;
  border: 0;
  padding: 0;
  background: transparent;
  color: var(--color-muted);
  font-weight: 850;
  text-decoration: underline;
}

@media (max-width: 560px) {
  .email-page {
    padding: 14px;
  }

  .email-card__body {
    padding: 18px;
  }
}
</style>
