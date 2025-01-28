<script setup lang="ts">
import AppContainer from './AppContainer.vue'
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <AppContainer>
      <p class="footer__copy">&copy; Yevhen Ziuskin, {{ currentYear }}. Open-source on GitHub.</p>
    </AppContainer>
  </footer>
</template>

<style scoped>
.footer {
  padding-block: 12px;
  background-color: #045d69;
  border-top: 2px solid #000;
  text-align: center;
}
.footer__copy {
  color: #ffffff;
}
</style>
