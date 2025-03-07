<script setup lang="ts">
import AppCarousel from '@/components/AppCarousel.vue'
import AppContainer from '@/components/AppContainer.vue'
import AppMain from '@/components/AppMain.vue'

const hobbies = [
  { title: 'Hiking', path: 'images/hobbies/hiking', images: [1, 2] },
  { title: 'Riding', path: 'images/hobbies/riding', images: [1, 2] },
  { title: 'Playing the guitar', path: 'images/hobbies/music', images: [1, 2] },
]
</script>

<template>
  <AppMain>
    <AppContainer>
      <h1>Hobbies</h1>
      <div class="wrapper">
        <h2>{{ hobbies[0].title }}</h2>
        <AppCarousel :images="hobbies[0]" />
        <h2>{{ hobbies[1].title }}</h2>
        <AppCarousel :images="hobbies[1]" />
        <h2>{{ hobbies[2].title }}</h2>
        <AppCarousel :images="hobbies[2]" />
      </div>
    </AppContainer>
  </AppMain>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 16px 0;
}
</style>
