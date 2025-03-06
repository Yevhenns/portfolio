<script setup lang="ts">
import AppContainer from '@/components/AppContainer.vue'
import AppMain from '@/components/AppMain.vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
</script>

<template>
  <AppMain>
    <AppContainer>
      <h1>Hobbies</h1>
      <div class="wrapper">
        <h2>Hiking</h2>
        <Splide :options="{ rewind: true, autoplay: true }" aria-label="My Hiking Images">
          <SplideSlide>
            <img src="/images/hobbies/hiking/1.webp" alt="Sample 1" width="100%" />
          </SplideSlide>
          <SplideSlide>
            <img src="/images/hobbies/hiking/2.webp" alt="Sample 2" width="100%" />
          </SplideSlide>
        </Splide>

        <h2>Riding</h2>
        <Splide :options="{ rewind: true, autoplay: true }" aria-label="My Riding Images">
          <SplideSlide>
            <img src="/images/hobbies/riding/1.webp" alt="Sample 1" width="100%" />
          </SplideSlide>
          <SplideSlide>
            <img src="/images/hobbies/riding/2.webp" alt="Sample 2" width="100%" />
          </SplideSlide>
        </Splide>

        <h2>Playing the guitar</h2>
        <Splide :options="{ rewind: true, autoplay: true }" aria-label="My Music Images">
          <SplideSlide>
            <img src="/images/hobbies/music/1.webp" alt="Sample 1" width="100%" />
          </SplideSlide>
          <SplideSlide>
            <img src="/images/hobbies/music/2.webp" alt="Sample 2" width="100%" />
          </SplideSlide>
        </Splide>
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
