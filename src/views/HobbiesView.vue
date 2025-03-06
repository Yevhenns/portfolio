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
        <Splide :options="{ rewind: true, autoplay: true }" aria-label="My Favorite Images">
          <SplideSlide>
            <img src="../assets/images/hiking/100_7272.JPG" alt="Sample 1" width="100%" />
          </SplideSlide>
          <SplideSlide>
            <img src="../assets/images/hiking/2016-07-11.jpg" alt="Sample 2" width="100%" />
          </SplideSlide>
        </Splide>

        <h2>Riding</h2>
        <Splide :options="{ rewind: true, autoplay: true }" aria-label="My Favorite Images">
          <SplideSlide>
            <img
              src="../assets/images/riding/IMG_20240505_184859.jpg"
              alt="Sample 1"
              width="100%"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="../assets/images/riding/IMG_20240512_114025.jpg"
              alt="Sample 2"
              width="100%"
            />
          </SplideSlide>
        </Splide>

        <h2>Playing the guitar</h2>
        <Splide :options="{ rewind: true, autoplay: true }" aria-label="My Favorite Images">
          <SplideSlide>
            <img
              src="../assets/images/music/b2071ebc-9b84-4843-a071-6aa92eb846da.jfif"
              alt="Sample 1"
              width="100%"
            />
          </SplideSlide>
          <SplideSlide>
            <img src="../assets/images/music/IMG_20240325_211003.jpg" alt="Sample 2" width="100%" />
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
