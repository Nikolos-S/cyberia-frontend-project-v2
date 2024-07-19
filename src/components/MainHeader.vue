<script setup>
import logoHeader from '../assets/img/logoHeader.svg';
import NavigationList from './NavigationList.vue';
</script>
<template>
  <header>
    <div :class="$style.header">
      <div class="container">
        <div :class="$style.row">
          <div :class="$style.logo">
            <router-link to="/">
              <img alt="Логотип" :src="logoHeader" />
            </router-link>
          </div>
          <div>
            <nav>
              <NavigationList />
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<style module>
.header {
  margin-top: 63.5px;
}
.row {
  display: flex;
  align-items: center;

  padding: 4.5px 0px;
}
.logo {
  width: 131px;
  height: 27.59px;
  padding: 0px;
  margin-right: 200px;
  color: var(--white-200);
}
</style>
