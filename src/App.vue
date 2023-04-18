<template>
  <div id="app">
    <gnb-menu></gnb-menu>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import GnbMenu from './components/GnbMenu.vue';

export default {
  components: {
    GnbMenu,
  },
}
</script>

<style>

</style>
