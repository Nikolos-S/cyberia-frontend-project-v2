<script setup>
import { watch } from 'vue';
import { storeToRefs } from 'pinia';
import { usePostsStore } from '../../../stores/store.js';

const postStore = usePostsStore();
const { categoriesList, curCategory } = storeToRefs(postStore);

const onClick = (id) => {
  curCategory.value = curCategory.value === id ? null : id;
};

watch(curCategory, (newCategory) => {
  postStore.filterProjects(newCategory);
});
</script>
<template>
  <nav :class="$style.nav">
    <ul :class="$style.list">
      <li v-for="(item, index) in categoriesList" :key="index">
        <button
          :id="item.id"
          :style="{
            background: item.id === curCategory ? '#2d76f9' : ''
          }"
          @click="onClick(item.id)"
        >
          {{ item.name }}
        </button>
      </li>
    </ul>
  </nav>
</template>
<style module>
.nav {
  padding-bottom: 34px;
  margin: 0 36.5px;
}
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0;
}
.list li {
  margin: 0 3.5px 17px 3.5px;
}
.list button {
  width: 100%;
  background-color: var(--white-550);
  border: none;
  cursor: pointer;
  box-shadow: 8px 15px 29px 0px #171b2c69;

  border-radius: 7px;
  color: var(--width-200);

  font-family: var(--family);
  font-size: 24px;
  font-weight: var(--weight-normal);
  padding: 10px 29px;
}
.list button:hover {
  cursor: pointer;
  opacity: 0.8;
}
.list button:active {
  transform: scale(0.95);
}
@media (max-width: 1022px) {
  .list li {
    flex-basis: 158.7px;
  }
  .list button {
    background-color: var(--white-600);
    box-shadow: 0px 14px 61px 0px #171b2cbf;

    font-family: var(--mobile-family);
    font-size: 12px;
    font-weight: var(--weight-normal);
    padding: 10px 5px;
  }
}

@media (max-width: 767px) {
  .nameCategory {
    padding: 0 25px;
    font-family: var(--mobile-menu-v2);
    font-size: 21px;
    font-weight: var(--weight-bold-mobile);
    margin-bottom: 37px;
  }
  .nav {
    padding-bottom: 5px;
    margin: 0 21.5px;
  }
  .list {
    justify-content: start;
  }
}
</style>
