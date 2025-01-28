<script setup lang="ts">
import type { Project } from '@/@types/types'

defineProps<{
  project: Project
}>()
</script>

<template>
  <div class="project-card">
    <iframe v-if="project.id === 1" class="ifr" src="https://nostrra-pizzza.vercel.app"></iframe>
    <img
      v-if="project.id !== 1"
      class="image"
      :src="project.image"
      :alt="project.title"
      width="500"
      height="100%"
    />
    <div class="project-info">
      <div class="heading-wrapper">
        <h2><span class="text-heading">Title: </span>{{ project.title }}</h2>
        <img :src="project.techImage" width="48" />
      </div>
      <p><span class="text-heading">Description: </span>{{ project.description }}</p>
      <p><span class="text-heading">Tech Stack: </span>{{ project.techstack }}</p>
      <p><span class="text-heading">Role: </span>{{ project.role }}</p>
      <div class="links-wrapper">
        <a v-if="project.liveUrl" class="link" :href="project.liveUrl" target="_blank">
          <p>Live Demo</p>
          <i class="pi pi-external-link" style="color: slateblue"></i>
        </a>
        <a class="link" :href="project.githubUrl" target="_blank">
          <p>See on Github</p>
          <i class="pi pi-github" style="color: slateblue"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  display: flex;
  gap: 24px;
  padding: 24px 0;
  border-top: 1px solid black;

  @media (max-width: 1280px) {
    flex-direction: column;
  }

  .heading-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .ifr {
    min-width: 600px;

    @media (max-width: 1280px) {
      min-width: 100%;
      height: 400px;
    }
  }
  .project-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  .links-wrapper {
    display: flex;
    gap: 24px;
  }

  .image {
    width: 600px;
    height: 100%;

    @media (max-width: 1280px) {
      width: 100%;
    }
  }

  .link {
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid slateblue;
    transition: all 250ms linear;
    color: slateblue;

    p {
      font-weight: 600;
    }

    &:hover {
      @media (min-width: 769px) {
        transform: translateY(-4px);
      }
    }
  }
  .text-heading {
    font-weight: 500;
  }
}
</style>
