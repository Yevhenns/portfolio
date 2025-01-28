<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 10px;
    width: auto;
  }

  @media (min-width: 769px) and (max-width: 1279px) {
    padding: 0 32px;
    width: 769px;
  }

  @media (min-width: 1280px) {
    padding: 0 16px;
    width: 1280px;
  }
}
</style>
