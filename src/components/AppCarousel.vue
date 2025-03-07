<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'

defineProps<{
  images: {
    title: string
    path: string
    images: number[]
  }
  autoplay: boolean
}>()
</script>

<template>
  <Splide
    :options="{ rewind: true, autoplay: autoplay }"
    :key="images.title"
    :aria-label="`My ${images.title} Images`"
  >
    <SplideSlide v-for="img in images.images" :key="img">
      <img :src="`/${images.path}/${img}.webp`" :alt="`${images.title} ${img}`" width="100%" />
    </SplideSlide>
  </Splide>
</template>
