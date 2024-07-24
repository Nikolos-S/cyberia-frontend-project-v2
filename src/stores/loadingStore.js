import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useSnackStore } from './snackStore';

export const useLoadingStore = defineStore('loading', () => {
  const loading = ref(false);

  const apiCallWrapper = async (func, ...args) => {
    try {
      loading.value = true;
      const response = await func(...args);
      return response;
    } catch (e) {
      const snackStore = useSnackStore();
      snackStore.showError(e);
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    apiCallWrapper
  };
});
