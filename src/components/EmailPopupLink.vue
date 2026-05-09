<script setup lang="ts">
defineProps<{
  ariaLabel?: string;
}>();

const openDialog = () => {
  window.dispatchEvent(new Event('open-contact-email-dialog'));
};
</script>

<template>
  <a
    href="#contact-email"
    :aria-label="ariaLabel"
    @click.prevent="openDialog"
  >
    <slot />
  </a>
</template>
