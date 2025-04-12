<script setup>
import Sidebar from "@/components/sidebar/Sidebar.vue";
import Header from "@/components/header/Header.vue";

</script>

<template>
  <section class="flex flex-col h-screen bg-gray-200 font-roboto">
<!--    <Header class="w-full" />-->

    <div class="flex flex-1 overflow-hidden">
      <Sidebar />
      <main class="flex-1 p-4 overflow-x-hidden overflow-y-auto bg-gray-200">
        <router-view/>
      </main>
    </div>
  </section>
</template>

