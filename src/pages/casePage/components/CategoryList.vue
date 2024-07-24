<script setup>
import { storeToRefs } from 'pinia';
import { usePostsStore } from '../../../stores/store.js';
import mobileСhevron from '../../../assets/img/mobileСhevron.svg';
import desctopСhevron from '../../../assets/img/desctopСhevron.svg';

const postStore = usePostsStore();
const { projectFilterList } = storeToRefs(postStore);
</script>
<template>
  <div :class="$style.row">
    <article
      v-for="(item, index) in projectFilterList"
      :key="index"
      :style="{ 'background-image': 'url(' + item.image + ')' }"
      :class="$style.item"
    >
      <div :class="$style.box">
        <p>{{ item.title }}</p>
      </div>
      <!--контент для десктопа-->
      <div :class="$style.chevron">
        <img alt="шеврон" :src="desctopСhevron" />
      </div>
      <!--контент для мобилки-->
      <div :class="$style.mobContent">
        <div :class="$style.mobChevron">
          <img alt="шеврон" :src="mobileСhevron" />
        </div>
        <div :class="$style.mobTittle">
          <p>{{ item.title }}</p>
        </div>
        <div :class="$style.mobSubtittle">
          <p>{{ item.description }}</p>
        </div>
      </div>
    </article>
  </div>
</template>
<style module>
.row {
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: 387px;
  height: 387px;
  background-size: cover;
  border-radius: 12px;

  position: relative;

  margin: 19.5px;
}

.box {
  width: 122px;
  height: 122px;
  position: absolute;
  right: 27px;
  top: 27px;
  border-radius: 7px;
  background-color: var(--white-550);

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.box p {
  font-size: 24px;
  font-weight: var(--weight-bold);
}

.chevron {
  display: block;
  width: 25px;
  height: 25px;
  position: absolute;
  right: 21px;
  top: 21px;
}
.mobContent {
  display: none;
  padding-left: 30px;
  padding-bottom: 10px;
}
.mobChevron {
  width: 17px;
  height: 17px;
}
.mobTittle {
  font-family: var(--mobile-menu-v2);
  font-size: 18px;
  font-weight: var(--weight-bold-mobile);
}
.mobSubtittle {
  font-family: var(--mobile-family);
  font-size: 13px;
  font-weight: 400;
}
@media (max-width: 892px) {
  .item {
    display: flex;
    flex-direction: column-reverse;
    margin: 10px;
    width: 327px;
    height: 320px;
    background-size: cover;
    position: static;
  }
  .box {
    display: none;
  }
  .chevron {
    display: none;
  }

  .mobContent {
    display: block;
  }
}
</style>
