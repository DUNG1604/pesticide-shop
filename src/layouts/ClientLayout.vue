<script setup>
import HeaderClient from "@/components/header/HeaderClient.vue";
</script>

<template>
  <section class="min-h-screen">
    <HeaderClient></HeaderClient>
    <router-view />
  </section>
</template>

<style scoped></style>
