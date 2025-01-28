<script setup lang="ts">
import AppMain from '@/components/AppMain.vue'
import AppProjectCard from '@/components/AppProjectCard.vue'
import AppContainer from '@/components/AppContainer.vue'
import { projects } from '@/assets/projects'
</script>

<template>
  <AppMain>
    <AppContainer>
      <h1>Projects</h1>
      <AppProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </AppContainer>
  </AppMain>
</template>

<style></style>
