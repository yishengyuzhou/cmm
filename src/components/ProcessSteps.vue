<script setup lang="ts">
defineProps<{
  steps: string[];
}>();
</script>

<template>
  <ol class="process-steps">
    <li v-for="(step, index) in steps" :key="step">
      <span>{{ String(index + 1).padStart(2, '0') }}</span>
      <strong>{{ step }}</strong>
    </li>
  </ol>
</template>

<style scoped lang="scss">
.process-steps {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  min-height: 150px;
  border: 1px solid rgba(228, 218, 200, 0.82);
  border-radius: var(--radius-md);
  padding: 18px;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: var(--shadow-card);
}

span {
  display: inline-flex;
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--color-forest);
  color: var(--color-gold);
  font-weight: 950;
}

strong {
  display: block;
  margin-top: 26px;
  color: var(--color-forest-2);
  font-size: 1.02rem;
  line-height: 1.42;
}

@media (max-width: 980px) {
  .process-steps {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .process-steps {
    grid-template-columns: 1fr;
  }

  li {
    min-height: auto;
  }

  strong {
    margin-top: 16px;
  }
}
</style>
