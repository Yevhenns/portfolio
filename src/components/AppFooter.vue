<script setup lang="ts">
import AppContainer from './AppContainer.vue'
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <AppContainer>
      <p class="footer__copy">&copy; Yevhen Ziuskin, {{ currentYear }}. All rights reserved.</p>
    </AppContainer>
  </footer>
</template>

<style scoped>
.footer {
  padding-block: 1.125rem;
  background-color: #045d69;
  border-top: 1px solid #000;
  text-align: center;
}
.footer__copy {
  line-height: 1.3;
  color: #ffffff;
}
</style>
