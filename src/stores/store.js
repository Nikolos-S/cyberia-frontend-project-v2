import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useLoadingStore } from './loadingStore.js';
import { getProjects, getCategories, createFeedback } from '../api/api.js';
import { useSnackStore } from './snackStore.js';

export const usePostsStore = defineStore('posts', () => {
  const { apiCallWrapper } = useLoadingStore();
  const snackStore = useSnackStore();

  const projectList = ref([]);
  const categoriesList = ref([]);
  const projectFilterList = ref([]);
  const curCategory = ref(null);
  const feedbacks = ref({
    name: null,
    phone: null,
    email: null,
    message: null,
    ready: false
  });

  const loadData = async () => {
    const [projects, categories] = await Promise.all([
      apiCallWrapper(getProjects),
      apiCallWrapper(getCategories)
    ]);
    projectList.value =
      projects?.data.items.length === 0 ? null : projects?.data.items;
    projectFilterList.value =
      projects?.data.items.length === 0 ? null : projects?.data.items;

    categoriesList.value = categories?.data.items;
  };

  const addFeadBack = async () => {
    const { name, phone, email, message } = feedbacks.value;
    const response = await apiCallWrapper(
      createFeedback,
      name,
      phone,
      email,
      message
    );
    if (response?.status === 200) {
      snackStore.showInfo('Запрос отправлен!');
      feedbacks.value.name = null;
      feedbacks.value.phone = null;
      feedbacks.value.email = null;
      feedbacks.value.message = null;
      feedbacks.value.ready = false;
    }
  };

  const filterProjects = (idCategory) => {
    if (!idCategory) {
      projectFilterList.value = projectList.value;
    } else {
      projectFilterList.value = projectList.value.filter(({ categories }) =>
        categories.some(({ id }) => id === idCategory)
      );
    }
  };

  return {
    projectList,
    categoriesList,
    projectFilterList,
    curCategory,
    feedbacks,
    loadData,
    filterProjects,
    addFeadBack
  };
});
