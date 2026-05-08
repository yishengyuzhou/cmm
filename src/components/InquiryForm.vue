<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { CONTACT_EMAIL } from '@/data/site';
import { useI18n } from '@/i18n';

const { t } = useI18n();
const showSuccess = ref(false);
const form = reactive({
  name: '',
  company: '',
  country: '',
  productInterest: '',
  estimatedQuantity: '',
  message: '',
});

const successMessage = computed(() => t('contact.success', { email: CONTACT_EMAIL }));

const onSubmit = () => {
  showSuccess.value = true;
  window.alert(successMessage.value);
};
</script>

<template>
  <form class="inquiry-form" @submit.prevent="onSubmit">
    <div class="inquiry-form__grid">
      <label>
        <span>{{ t('contact.fields.name') }}</span>
        <input v-model="form.name" type="text" :placeholder="t('contact.placeholders.name')" />
      </label>
      <label>
        <span>{{ t('contact.fields.company') }}</span>
        <input v-model="form.company" type="text" :placeholder="t('contact.placeholders.company')" />
      </label>
      <label>
        <span>{{ t('contact.fields.country') }}</span>
        <input v-model="form.country" type="text" :placeholder="t('contact.placeholders.country')" />
      </label>
      <label>
        <span>{{ t('contact.fields.productInterest') }}</span>
        <input v-model="form.productInterest" type="text" :placeholder="t('contact.placeholders.productInterest')" />
      </label>
      <label>
        <span>{{ t('contact.fields.estimatedQuantity') }}</span>
        <input v-model="form.estimatedQuantity" type="text" :placeholder="t('contact.placeholders.estimatedQuantity')" />
      </label>
      <label class="inquiry-form__message">
        <span>{{ t('contact.fields.message') }}</span>
        <textarea v-model="form.message" rows="5" :placeholder="t('contact.placeholders.message')"></textarea>
      </label>
    </div>

    <button class="btn btn--primary" type="submit">{{ t('contact.submit') }}</button>
    <p v-if="showSuccess" class="inquiry-form__success">{{ successMessage }}</p>
  </form>
</template>

<style scoped lang="scss">
.inquiry-form {
  display: grid;
  gap: 18px;
  border: 1px solid rgba(228, 218, 200, 0.82);
  border-radius: var(--radius-md);
  padding: 22px;
  background: rgba(255, 255, 255, 0.88);
  box-shadow: var(--shadow-card);
}

.inquiry-form__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

label {
  display: grid;
  gap: 8px;
}

span {
  color: var(--color-forest);
  font-size: 0.86rem;
  font-weight: 850;
}

input,
textarea {
  width: 100%;
  border: 1px solid rgba(23, 75, 53, 0.18);
  border-radius: var(--radius-sm);
  padding: 13px 14px;
  background: #fffdf8;
  color: var(--color-ink);
  outline: none;
  transition:
    border-color 0.18s ease,
    box-shadow 0.18s ease;
}

input:focus,
textarea:focus {
  border-color: var(--color-gold);
  box-shadow: 0 0 0 4px rgba(215, 173, 85, 0.14);
}

textarea {
  resize: vertical;
}

.inquiry-form__message {
  grid-column: 1 / -1;
}

.btn {
  width: fit-content;
}

.inquiry-form__success {
  margin: 0;
  border-radius: var(--radius-sm);
  padding: 12px 14px;
  background: rgba(75, 125, 90, 0.12);
  color: var(--color-forest);
  font-weight: 800;
  line-height: 1.55;
  overflow-wrap: anywhere;
}

@media (max-width: 680px) {
  .inquiry-form {
    padding: 16px;
  }

  .inquiry-form__grid {
    grid-template-columns: 1fr;
  }

  .btn {
    width: 100%;
  }
}
</style>
