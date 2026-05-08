<script setup lang="ts">
defineProps<{
  items: string[];
}>();
</script>

<template>
  <section class="trust-bar" aria-label="B2B supply highlights">
    <div class="container trust-bar__grid">
      <div v-for="item in items" :key="item" class="trust-bar__item">
        <span aria-hidden="true"></span>
        {{ item }}
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.trust-bar {
  position: relative;
  z-index: 2;
  margin-top: -30px;
}

.trust-bar__grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 10px;
  border: 1px solid rgba(228, 218, 200, 0.78);
  border-radius: var(--radius-md);
  padding: 12px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: var(--shadow-soft);
}

.trust-bar__item {
  display: flex;
  min-height: 62px;
  align-items: center;
  gap: 10px;
  border-radius: var(--radius-sm);
  padding: 12px;
  background: rgba(223, 234, 221, 0.58);
  color: var(--color-forest);
  font-weight: 850;
  line-height: 1.35;
}

.trust-bar__item span {
  width: 11px;
  height: 11px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: var(--color-gold);
  box-shadow: 0 0 0 5px rgba(215, 173, 85, 0.2);
}

@media (max-width: 980px) {
  .trust-bar__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 540px) {
  .trust-bar {
    margin-top: -16px;
  }

  .trust-bar__grid {
    grid-template-columns: 1fr;
  }
}
</style>
