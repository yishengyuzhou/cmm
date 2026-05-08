import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/pages/HomeView.vue';
import ProductsView from '@/pages/ProductsView.vue';
import BulkSupplyView from '@/pages/BulkSupplyView.vue';
import OemOdmView from '@/pages/OemOdmView.vue';
import AboutView from '@/pages/AboutView.vue';
import ContactView from '@/pages/ContactView.vue';
import EmailContactView from '@/pages/EmailContactView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        titleKey: 'seo.homeTitle',
        descriptionKey: 'seo.homeDescription',
      },
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView,
      meta: {
        titleKey: 'seo.productsTitle',
        descriptionKey: 'seo.productsDescription',
      },
    },
    {
      path: '/bulk-supply',
      name: 'bulk-supply',
      component: BulkSupplyView,
      meta: {
        titleKey: 'seo.bulkTitle',
        descriptionKey: 'seo.bulkDescription',
      },
    },
    {
      path: '/oem-odm',
      name: 'oem-odm',
      component: OemOdmView,
      meta: {
        titleKey: 'seo.oemTitle',
        descriptionKey: 'seo.oemDescription',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        titleKey: 'seo.aboutTitle',
        descriptionKey: 'seo.aboutDescription',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        titleKey: 'seo.contactTitle',
        descriptionKey: 'seo.contactDescription',
      },
    },
    {
      path: '/email-contact',
      name: 'email-contact',
      component: EmailContactView,
      meta: {
        titleKey: 'emailPage.seoTitle',
        descriptionKey: 'emailPage.seoDescription',
        standalone: true,
      },
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
