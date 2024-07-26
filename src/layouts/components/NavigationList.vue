<script setup>
import { useI18n } from 'vue-i18n';
import { navigationList } from '../../utils/navigationList.js';

const { t } = useI18n({ useScope: 'global' });

const props = defineProps({
  isActive: Boolean,
  openNav: Function
});
const click = () => {
  if (props.isActive) {
    props.openNav();
  }
};
</script>
<template>
  <div :class="$style.menu">
    <ul :class="$style.list">
      <li v-for="({ name, route }, index) in navigationList" :key="index">
        <router-link :to="route" @click="click">
          {{ t(name) }}
        </router-link>
      </li>
    </ul>
    <div :class="$style.footerMenu">
      <div :class="$style.h">
        <p>{{ t('translation.navFooterHeading') }}</p>
      </div>
      <p>{{ t('translation.footer.phone') }}</p>
      <p>{{ t('translation.footer.mail') }}</p>
      <p>{{ t('translation.footer.address') }}</p>
    </div>
  </div>
</template>
<style module>
.menu {
  width: 100%;
}
.list {
  display: flex;
}
.list li {
  margin-left: 50px;
}
.list li:hover {
  cursor: pointer;
  opacity: 0.8;
}
.list li:active {
  transform: scale(0.95);
}
.footerMenu {
  display: none;
}
.h {
  margin-bottom: 48px;
}
.h p {
  color: #9aa8ba;
  font-family: var(--mobile-family);
}
.footerMenu > p {
  font-size: 16px;
  color: #9aa8ba;
}

@media (max-width: 767px) {
  .list {
    padding: 0 0 0 24px;
    display: block;
  }
  .list li {
    margin: 0 0 49px 0px;
  }
  .list li a {
    color: var(--white-200);
    font-family: var(--mobile-family);
  }
  .footerMenu {
    display: block;
    padding: 20px 0 28px 0;
    margin: 0 48px 0 24px;
    border-top: 2px solid var(--white-600);
    border-bottom: 2px solid var(--white-600);
  }
}
</style>
