<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string;
    tone?: 'green' | 'gold' | 'teal' | 'clay';
  }>(),
  {
    tone: 'green',
  },
);
</script>

<template>
  <span :class="['supply-badge', `supply-badge--${tone}`]">{{ label }}</span>
</template>

<style scoped lang="scss">
.supply-badge {
  display: inline-flex;
  min-height: 28px;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 999px;
  padding: 0 10px;
  font-size: 0.78rem;
  font-weight: 850;
  line-height: 1;
  white-space: nowrap;
}

.supply-badge--green {
  background: rgba(75, 125, 90, 0.13);
  border-color: rgba(75, 125, 90, 0.2);
  color: var(--color-forest);
}

.supply-badge--gold {
  background: rgba(215, 173, 85, 0.18);
  border-color: rgba(215, 173, 85, 0.3);
  color: #7f5618;
}

.supply-badge--teal {
  background: rgba(53, 124, 116, 0.13);
  border-color: rgba(53, 124, 116, 0.22);
  color: #1f5c55;
}

.supply-badge--clay {
  background: rgba(180, 95, 61, 0.12);
  border-color: rgba(180, 95, 61, 0.22);
  color: #8b432a;
}
</style>
