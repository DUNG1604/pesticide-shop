import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

import App from './App.vue'
import router from './router'
import { messages } from "@/locales/index.js"
import './assets/css/tailwind.css'

const app = createApp(App)
const pinia = createPinia()

const i18n = createI18n({
  legacy: false,
  locale: 'vi',
  fallbackLocale: 'en',
  messages,
  silentTranslationWarn: true,
  silentFallbackWarn: true
})

app.use(pinia)
app.use(router)
app.use(Antd)
app.use(i18n)

app.mount('#app')
