import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { currentLocale } from './i18n';
import './styles/main.scss';

document.documentElement.lang = currentLocale.value;

createApp(App).use(router).mount('#app');
