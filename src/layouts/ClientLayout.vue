<script setup>
import HeaderClient from "@/components/header/HeaderClient.vue";
import Footer from "@/components/footer/Footer.vue";
</script>

<template>
  <section class="container">
    <HeaderClient></HeaderClient>
    <div class="w-full h-[100px] lg:h-[170px]"></div>
    <router-view />
    <Footer></Footer>
  </section>
</template>

<style scoped></style>
