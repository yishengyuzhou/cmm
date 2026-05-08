<script setup lang="ts">
import { EMAIL_CONTACT_PATH, openEmailWindow } from '@/utils/emailWindow';

defineProps<{
  ariaLabel?: string;
}>();
</script>

<template>
  <a
    :href="EMAIL_CONTACT_PATH"
    target="herbalEastEmailContact"
    rel="noopener"
    :aria-label="ariaLabel"
    @click.prevent="openEmailWindow"
  >
    <slot />
  </a>
</template>
