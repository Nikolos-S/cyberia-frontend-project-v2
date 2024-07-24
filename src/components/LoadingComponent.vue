<template>
  <div :class="$style.row">
    <span :class="$style.loader"></span>
  </div>
</template>
<style module>
.row {
  display: flex;
  justify-content: center;
}
.loader {
  width: 60px;
  height: 60px;
  border: 5px solid white;
  border-bottom-color: #2d76f9;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
