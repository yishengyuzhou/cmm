<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { CONTACT_EMAIL } from '@/data/site';
import { useI18n } from '@/i18n';

const { t } = useI18n();
const dialogRef = ref<HTMLDialogElement | null>(null);
const copied = ref(false);

const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=Wholesale%20Herbal%20Inquiry`;

const openDialog = () => {
  if (!dialogRef.value?.open) {
    dialogRef.value?.showModal();
  }
};

const closeDialog = () => {
  dialogRef.value?.close();
};

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

onMounted(() => {
  window.addEventListener('open-contact-email-dialog', openDialog);
});

onUnmounted(() => {
  window.removeEventListener('open-contact-email-dialog', openDialog);
});
</script>

<template>
  <dialog ref="dialogRef" class="contact-dialog" aria-labelledby="contact-dialog-title" @click.self="closeDialog">
    <div class="contact-dialog__panel">
      <button class="contact-dialog__close" type="button" :aria-label="t('emailPage.close')" @click="closeDialog">
        x
      </button>

      <p class="eyebrow">{{ t('common.emailLabel') }}</p>
      <h2 id="contact-dialog-title">{{ t('emailPage.title') }}</h2>
      <p class="contact-dialog__hint">{{ t('emailPage.hint') }}</p>

      <a class="contact-dialog__email" :href="mailtoLink">{{ CONTACT_EMAIL }}</a>

      <div class="contact-dialog__actions">
        <button class="btn btn--primary" type="button" @click="copyEmail">
          {{ copied ? t('emailPage.copied') : t('emailPage.copy') }}
        </button>
        <a class="btn btn--outline" :href="mailtoLink">{{ t('emailPage.openEmailApp') }}</a>
      </div>
    </div>
  </dialog>
</template>

<style scoped lang="scss">
.contact-dialog {
  width: min(calc(100% - 28px), 560px);
  border: 0;
  border-radius: var(--radius-md);
  padding: 0;
  background: transparent;
  color: var(--color-ink);
}

.contact-dialog::backdrop {
  background: rgba(15, 55, 42, 0.64);
  backdrop-filter: blur(6px);
}

.contact-dialog__panel {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(215, 173, 85, 0.34);
  border-radius: var(--radius-md);
  padding: 34px;
  background:
    radial-gradient(circle at 10% 4%, rgba(215, 173, 85, 0.22), transparent 12rem),
    linear-gradient(145deg, rgba(255, 248, 236, 0.98), rgba(223, 234, 221, 0.96));
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.28);
}

.contact-dialog__close {
  position: absolute;
  top: 14px;
  right: 14px;
  display: inline-grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border: 1px solid rgba(23, 75, 53, 0.16);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.84);
  color: var(--color-forest);
  font-size: 1.6rem;
  line-height: 1;
}

h2 {
  max-width: 420px;
  margin: 0;
  color: var(--color-forest-2);
  font-size: clamp(2rem, 7vw, 3.2rem);
  line-height: 1.05;
  letter-spacing: 0;
}

.contact-dialog__hint {
  max-width: 460px;
  margin: 16px 0 22px;
  color: var(--color-muted);
  font-size: 1rem;
  line-height: 1.75;
}

.contact-dialog__email {
  display: block;
  border: 2px solid rgba(215, 173, 85, 0.55);
  border-radius: var(--radius-sm);
  padding: 18px;
  background: #fff;
  color: var(--color-forest);
  font-size: clamp(1.35rem, 6vw, 2rem);
  font-weight: 950;
  line-height: 1.18;
  text-align: center;
  overflow-wrap: anywhere;
  box-shadow: 0 16px 34px rgba(23, 75, 53, 0.12);
}

.contact-dialog__actions {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 18px;
}

.contact-dialog__actions .btn {
  width: 100%;
}

@media (max-width: 560px) {
  .contact-dialog__panel {
    padding: 28px 18px 20px;
  }

  .contact-dialog__actions {
    grid-template-columns: 1fr;
  }
}
</style>
