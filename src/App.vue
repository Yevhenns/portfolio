<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import AppCVButton from './components/AppCVButton.vue'
</script>

<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
  <AppCVButton />
</template>

<style scoped></style>
