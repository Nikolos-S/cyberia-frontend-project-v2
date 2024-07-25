<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import MainLayout from '../../layouts/MainLayout.vue';
import LoadingComponent from '../../components/LoadingComponent.vue';
import NodataComponent from '../../components/NodataComponent.vue';
import NavComponent from './components/NavComponent.vue';
import CategoryList from './components/CategoryList.vue';
import FeadbackComponent from './components/FeadbackComponent.vue';
import { usePostsStore } from '../../stores/store.js';
import { useLoadingStore } from '../../stores/loadingStore';

const postStore = usePostsStore();
const { projectFilterList } = storeToRefs(postStore);
const loadingStore = useLoadingStore();
const { loading } = storeToRefs(loadingStore);

onMounted(() => postStore.loadData());
// #252631 колор для формы
</script>
<template>
  <MainLayout>
    <div class="container">
      <div :class="$style.nameCategory">
        <p>{{ $route.meta.pageCrumb }}</p>
      </div>
      <section>
        <NavComponent />
        <div v-if="!projectFilterList">
          <NodataComponent />
        </div>
        <div v-else-if="projectFilterList.length === 0 && loading">
          <LoadingComponent />
        </div>
        <div v-else :class="$style.categories">
          <CategoryList />
        </div>
      </section>
      <FeadbackComponent />
    </div>
  </MainLayout>
</template>
<style module>
.nameCategory {
  font-size: 48px;
  font-weight: 600;
  color: var(--white-200);
  margin-bottom: 65px;
  padding: 0 40px;
}
.categories {
  margin-bottom: 102px;
  padding: 0 20px;
}

@media (max-width: 767px) {
  .nameCategory {
    padding: 0 25px;
    font-family: var(--mobile-menu-v2);
    font-size: 21px;
    font-weight: var(--weight-bold-mobile);
    margin-bottom: 47px;
  }
  .categories {
    margin-bottom: 48px;
    padding: 0 15px;
  }
}
</style>
