<script setup>
import { ref, computed } from 'vue';
import logoHeader from '../../assets/img/logoHeader.svg';
import menuBurger from '../../assets/img//menuBurger.svg';
import menuExit from '../../assets/img/menuExit.svg';
import NavigationList from './NavigationList.vue';

const isActive = ref(false);
const isActiveMenu = computed(() => (isActive.value ? 0 : `-100%`));

const onClick = () => {
  isActive.value = !isActive.value;
  const bodyHTML = document.querySelector('body');
  const navHTML = document.querySelector('#navScroll');
  if (isActive.value) {
    bodyHTML.classList.add('scrollLock');
    navHTML.scrollTo(0, 0);
  } else {
    bodyHTML.classList.remove('scrollLock');
  }
};
</script>
<template>
  <div>
    <header>
      <div :class="$style.header">
        <div class="container">
          <div :class="$style.row">
            <router-link :class="$style.logo" to="/">
              <img alt="Логотип" :src="logoHeader" />
            </router-link>
            <button :class="$style.buttonBurger" @click="onClick">
              <img :src="isActive ? menuExit : menuBurger" alt="Кнопка" />
            </button>
            <nav id="navScroll" :class="$style.row_nav">
              <NavigationList :is-active="isActive" :open-nav="onClick" />
            </nav>
          </div>
        </div>
      </div>
    </header>
    <div :class="$style.route">
      <div class="container">
        <div :class="$style.routeName">
          <p>
            Главная / <span>{{ $route.meta.pageCrumb }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style module>
.header {
  margin-top: 63.5px;
}
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 4.5px 40px;
  margin: 0 0 70px 0;
}
.row_nav {
  display: flex;
  margin-right: 418px;
}
.logo {
  width: auto;
  flex: 0 0 131px;
  overflow: hidden;
}
.logo img {
  max-width: 100%;
  color: var(--white-200);
}
.buttonBurger {
  display: none;
  border: none;
  background: none;
  background-size: cover;

  padding: 0;
  flex: 0 0 32px;
  overflow: hidden;
}
.buttonBurger img {
  max-width: 100%;
}
.buttonBurger:hover {
  cursor: pointer;
  opacity: 0.8;
}

.buttonBurger:active {
  transform: scale(0.95);
}
.route {
  margin-bottom: 135px;
}
.routeName {
  padding: 0 40px;
}
.route p {
  padding: 0;
  margin: 0;
  color: var(--white-500);
}
.route span {
  color: #c4d2e3;
}
@media (max-width: 767px) {
  .buttonBurger {
    display: block;
    z-index: 3;
  }
  .header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;

    margin-top: 0;
  }
  .header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #20212c;
    z-index: 1;
  }
  .row_nav {
    position: fixed;
    top: v-bind(isActiveMenu);
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--white-900);
    z-index: 2;
    padding: 62px 0px 0px 0px;
    transition: all 0.3s ease 0s;
    overflow: auto;
  }
  .row {
    position: relative;
    margin: 0;
    padding: 18px 18px 18px 25px;
  }
  .logo {
    flex: 0 0 93px;
    z-index: 1;
  }
  .route {
    padding-top: 122px;
    margin-bottom: 33px;
  }
  .routeName {
    padding: 0 25px;
  }
}
</style>
