<script setup lang="ts">
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import ContactEmailDialog from '@/components/ContactEmailDialog.vue';
import { useI18n } from '@/i18n';

const route = useRoute();
const { locale, t } = useI18n();
const isStandalone = computed(() => route.meta.standalone === true);

const updateSeo = () => {
  const titleKey = route.meta.titleKey as string | undefined;
  const descriptionKey = route.meta.descriptionKey as string | undefined;
  const title = titleKey ? t(titleKey) : 'Herbal East Supply';
  const description = descriptionKey ? t(descriptionKey) : t('seo.homeDescription');

  document.title = title;

  const descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
  const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');

  descriptionTag?.setAttribute('content', description);
  ogTitle?.setAttribute('content', title);
  ogDescription?.setAttribute('content', description);
};

watch([() => route.fullPath, locale], updateSeo, { immediate: true });
</script>

<template>
  <div :class="['app-shell', { 'app-shell--standalone': isStandalone }]">
    <AppHeader v-if="!isStandalone" />
    <main class="site-main" aria-live="polite">
      <RouterView />
    </main>
    <AppFooter v-if="!isStandalone" />
    <ContactEmailDialog v-if="!isStandalone" />
  </div>
</template>
