<script setup>
import DotWave from '@/components/ui/loader/DotWave.vue';
import { useLayoutStore } from '@/stores/layout.store'

const store = useLayoutStore()
</script>

<template>
        <router-view />
        <DotWave v-if="store.statusLoading" />
</template>
