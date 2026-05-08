<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string;
    title: string;
    description?: string;
    align?: 'left' | 'center';
  }>(),
  {
    align: 'left',
  },
);
</script>

<template>
  <div :class="['section-title', `section-title--${align}`]">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p v-if="description" class="section-title__description">{{ description }}</p>
  </div>
</template>

<style scoped lang="scss">
.section-title {
  max-width: 760px;
  margin-bottom: 34px;
}

.section-title--center {
  margin-inline: auto;
  text-align: center;
}

.section-title--center .eyebrow {
  justify-content: center;
}

h2 {
  margin: 0;
  color: var(--color-forest-2);
  font-size: clamp(2rem, 4vw, 3.15rem);
  line-height: 1.08;
  letter-spacing: 0;
}

.section-title__description {
  margin: 16px 0 0;
  color: var(--color-muted);
  font-size: 1.04rem;
  line-height: 1.8;
}

@media (max-width: 640px) {
  .section-title {
    margin-bottom: 24px;
  }

  h2 {
    font-size: 2rem;
  }
}
</style>
