<script setup lang="ts">
import { useI18n } from '@/i18n';
import type { LocaleCode } from '@/i18n/messages';

const { locale, locales, setLocale } = useI18n();

const onChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  setLocale(target.value as LocaleCode);
};
</script>

<template>
  <label class="language-switcher">
    <span class="language-switcher__icon" aria-hidden="true">A</span>
    <select :value="locale" aria-label="Select language" @change="onChange">
      <option v-for="option in locales" :key="option.code" :value="option.code">
        {{ option.shortLabel }} · {{ option.label }}
      </option>
    </select>
  </label>
</template>

<style scoped lang="scss">
.language-switcher {
  display: inline-flex;
  min-height: 42px;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(23, 75, 53, 0.16);
  border-radius: var(--radius-sm);
  padding: 0 10px;
  background: rgba(255, 248, 236, 0.78);
  color: var(--color-forest);
  font-weight: 800;
}

.language-switcher__icon {
  display: inline-grid;
  width: 22px;
  height: 22px;
  place-items: center;
  border-radius: 50%;
  background: var(--color-forest);
  color: var(--color-cream);
  font-size: 0.76rem;
}

select {
  max-width: 156px;
  border: 0;
  background: transparent;
  color: inherit;
  font-weight: inherit;
  outline: none;
}

@media (max-width: 780px) {
  .language-switcher {
    width: 100%;
    justify-content: space-between;
  }

  select {
    max-width: none;
    width: 100%;
  }
}
</style>
