<script setup lang="ts">
import ResponsiveImageBlock from '@/components/ResponsiveImageBlock.vue';
import type { ImagePromptKey } from '@/data/imagePrompts';

defineProps<{
  title: string;
  description: string;
  imageKey: ImagePromptKey;
  to?: string;
}>();
</script>

<template>
  <RouterLink v-if="to" class="category-card" :to="to">
    <ResponsiveImageBlock :image-key="imageKey" :alt="title" compact />
    <div class="category-card__body">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </RouterLink>

  <article v-else class="category-card">
    <ResponsiveImageBlock :image-key="imageKey" :alt="title" compact />
    <div class="category-card__body">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </article>
</template>

<style scoped lang="scss">
.category-card {
  display: grid;
  min-height: 100%;
  overflow: hidden;
  border: 1px solid rgba(228, 218, 200, 0.82);
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.78);
  box-shadow: var(--shadow-card);
  transition:
    transform 0.18s ease,
    border-color 0.18s ease;
}

.category-card:hover {
  border-color: rgba(215, 173, 85, 0.72);
  transform: translateY(-4px);
}

.category-card :deep(.responsive-image) {
  border: 0;
  border-radius: 0;
  box-shadow: none;
}

.category-card__body {
  padding: 20px;
}

h3 {
  margin: 0 0 10px;
  color: var(--color-forest);
  font-size: 1.12rem;
}

p {
  margin: 0;
  color: var(--color-muted);
  line-height: 1.65;
}
</style>
