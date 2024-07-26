import { createI18n } from 'vue-i18n';
import resourсes from './resourсes.js';

const i18n = createI18n({
  legacy: false,
  fallbackLocale: 'ru',
  messages: resourсes,
  locale: 'ru'
});

export default i18n;
