<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AppContainer from './AppContainer.vue'
</script>

<template>
  <header class="header">
    <AppContainer>
      <nav class="links-list">
        <RouterLink class="link" to="/">About</RouterLink>
        <RouterLink class="link" to="/projects">Projects</RouterLink>
      </nav>
    </AppContainer>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #007b83;
  border-bottom: 2px solid #000;
  padding-block: 24px;
}

.links-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  -webkit-column-gap: 2.5rem;
  -moz-column-gap: 2.5rem;
  column-gap: 2.5rem;
  row-gap: 0.625rem;
}
.link {
  color: #ffffff;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 500;
  transition: all 250ms linear;

  &:hover {
    @media (min-width: 769px) {
      transform: translateY(-4px);
    }
  }

  &.router-link-active {
    border-bottom: 1px solid #ffffff;
  }
}
</style>
