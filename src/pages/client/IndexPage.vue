<template>
  <div class="font-sans">
    <h1>{{ $t('welcome') }}</h1>
    <button @click="changeLanguage('vi')">Tiếng Việt</button>
    <button @click="changeLanguage('en')">English</button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const changeLanguage = (lang) => {
  locale.value = lang;
};
</script>