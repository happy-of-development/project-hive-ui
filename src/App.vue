<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import GnbMenu from './components/GnbMenu.vue'
</script>

<template>
  <div id="app">
    <GnbMenu />
    <RouterView />
  </div>
</template>

<style scoped>

</style>
