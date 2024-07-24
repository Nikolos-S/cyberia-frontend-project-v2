<script setup>
import buttonExit from '../assets/img/menuExit.svg';
import { useSnackStore } from '../stores/snackStore.js';
import { computed } from 'vue';

const store = useSnackStore();

const isShow = computed(() => (store.isShow ? 'block' : 'none'));
const color = computed(() => `${store.color}`);
const message = computed(() => store.message);
const close = () => {
  store.close();
};
</script>
<template>
  <div :class="$style.toast">
    <div :class="$style.row">
      <div style="width: 200px; word-wrap: break-word">
        <p>{{ message }}</p>
      </div>
      <button :class="$style.button" @click="close()">
        <img :src="buttonExit" alt="Кнопка" />
      </button>
    </div>
  </div>
</template>
<style module>
.toast {
  display: v-bind(isShow);
  position: fixed;
  top: 20px;
  right: 10%;
  background-color: v-bind(color);
  border-radius: 20px;
  animation: show 0.3s ease 1 forwards;
}

@keyframes show {
  0% {
    transform: translateX(100%);
  }
  40% {
    transform: translateX(-5%);
  }
  80% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-10%);
  }
}
.row {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 250px;
  margin: auto;
}
.button {
  border: none;
  background: none;
  background-size: cover;

  padding: 0;
  margin-left: 10px;
  flex: 0 0 25px;
  overflow: hidden;
}
.button img {
  max-width: 100%;
}
.button:hover {
  cursor: pointer;
  opacity: 0.8;
}
</style>
