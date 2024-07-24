import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSnackStore = defineStore('snack', () => {
  const isShow = ref(false);
  const message = ref('');
  const color = ref(null);

  const showError = (text) => {
    message.value = text;
    color.value = '#F44336';
    isShow.value = true;
    setTimeout(() => {
      close();
    }, 5000);
  };

  const showInfo = (text) => {
    message.value = text;
    color.value = '#4CAF50';
    isShow.value = true;
    setTimeout(() => {
      close();
    }, 5000);
  };

  const showWarn = (text) => {
    message.value = text;
    color.value = '#FF9800';
    isShow.value = true;
    setTimeout(() => {
      close();
    }, 5000);
  };

  const close = () => {
    isShow.value = false;
  };

  return {
    isShow,
    message,
    color,
    showError,
    showInfo,
    showWarn,
    close
  };
});
