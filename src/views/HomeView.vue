<script setup lang="ts">
import AppMain from '@/components/AppMain.vue'
import AppContainer from '@/components/AppContainer.vue'
import { onMounted } from 'vue'
import TechStackList from '@/components/about/TechStackList.vue'
import ContactInformation from '@/components/about/ContactInformation.vue'
import AboutMe from '@/components/about/AboutMe.vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <AppMain>
    <AppContainer>
      <h1>About</h1>
      <div class="info">
        <div class="info-wrapper">
          <AboutMe />
          <h2>Contact information</h2>
          <ContactInformation />
          <hr />
          <h2>Tech Stack</h2>
          <TechStackList />
        </div>
        <img class="image" src="/images/about/profile-img.webp" alt="profile photo" />
      </div>
    </AppContainer>
  </AppMain>
</template>

<style scoped>
.info {
  display: flex;
  gap: 24px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.info-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.image {
  width: 400px;
  height: 100%;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%;
  }
}
</style>
