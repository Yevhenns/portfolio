<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <AppHeader />

  <RouterView />

  <AppFooter />
  <a class="download" href="/public/CV.pdf" download="Front-End Developer - Yevhen Ziuskin"
    >PDF CV</a
  >
</template>

<style scoped>
.download {
  position: fixed;
  right: 60px;
  bottom: 60px;
  background-color: green;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  border-radius: 50%;
  -webkit-animation: loader 5s infinite;
  animation: loader 5s infinite;
  font-size: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  transition: all 250ms linear;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.7);
  }
}

@keyframes loader {
  0% {
    -webkit-transform: rotate(0deg) scale(1);
    transform: rotate(0deg) scale(1);
  }
  50% {
    -webkit-transform: rotate(180deg) scale(1.2);
    transform: rotate(180deg) scale(1.2);
  }
  100% {
    -webkit-transform: rotate(360deg) scale(1);
    transform: rotate(360deg) scale(1);
  }
}
</style>
