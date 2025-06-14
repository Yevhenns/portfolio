<template>
  <a
    class="download"
    href="https://drive.google.com/drive/folders/1Yb2B_Q1V8S58nq7h4zc_0ba4o0dnBc5t?usp=drive_link"
    >Download<br />CV</a
  >
</template>

<style scoped>
.download {
  position: fixed;
  right: 60px;
  bottom: 60px;
  background-color: green;
  width: 120px;
  height: 120px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  border-radius: 50%;
  -webkit-animation: rotate 4s infinite;
  animation: rotate 4s infinite;
  font-size: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  transition: all 250ms linear;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.7);
  }
}

@-moz-keyframes rotate {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
