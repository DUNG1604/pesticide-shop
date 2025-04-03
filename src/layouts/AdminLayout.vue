<script setup>
import Sidebar from "@/components/sidebar/Sidebar.vue";
import Header from "@/components/header/Header.vue";

</script>

<template>
  <section class="">
    <Sidebar />
    <Header></Header>
    <router-view />
  </section>
</template>
