<template>
  <NavBar />
  <RouterView />
  <global-footer />
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import GlobalFooter from './components/GlobalFooter.vue'
</script>
