import { createApp } from 'vue'
import router from './router'
import pinia from './plugins/Pinia'
import { createI18n } from 'vue-i18n';

import App from './App.vue'
import './assets/css/tailwind.css'
import { messages } from "@/locales/index.js";

const app = createApp(App)

const i18n = createI18n({
  legacy: false, // Sử dụng Composition API
  locale: 'vi', // Ngôn ngữ mặc định
  fallbackLocale: 'en', // Ngôn ngữ dự phòng
  messages,
});

app.use(pinia);
app.use(router);
app.use(i18n);

app.mount('#app')
