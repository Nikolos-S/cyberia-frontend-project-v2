<script setup>
import { useI18n } from 'vue-i18n';
import footerLogo from '../../assets/img/footerLogo.svg';

const { t } = useI18n({ useScope: 'global' });
</script>
<template>
  <div class="container">
    <div :class="$style.footer">
      <div :class="$style.item">
        <div :class="$style.logo">
          <img alt="Логотип" :src="footerLogo" />
        </div>
        <div :class="$style.subtitle">
          <p>{{ t('translation.footer.about') }}</p>
        </div>
      </div>
      <div :class="$style.about">
        <div>
          <p>{{ t('translation.footer.phone') }}</p>
          <p>{{ t('translation.footer.mail') }}</p>
          <p>{{ t('translation.footer.address') }}</p>
        </div>
        <div>
          <p>{{ t('translation.footer.first') }}</p>
          <p>{{ t('translation.footer.second') }}</p>
          <p>{{ t('translation.footer.third') }}</p>
        </div>
        <div>
          <p>{{ t('translation.footer.fourth') }}</p>
          <p>{{ t('translation.footer.fifth') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style module>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 781px;
  padding: 131px 40px 151px 40px;
}
.item {
  width: 196px;
}
.logo {
  overflow: hidden;
  margin-bottom: 29px;
}
.logo img {
  max-width: 100%;
}
.subtitle {
  flex: 0 0 196px;
  text-align: left;
}
.about {
  width: 428px;
  display: flex;
  justify-content: start;
  text-align: start;
}
.about div {
  margin-right: 54px;
}
@media (max-width: 767px) {
  .footer {
    display: block;
    margin: 0 auto;
  }
  .item {
    width: 100%;
    margin: 0 auto 38px 0;
  }
  .logo {
    width: 102px;
    height: 22px;
    overflow: hidden;
    margin: 0 auto 11px auto;
  }
  .subtitle {
    width: 207px;
    margin: 0 auto;
    font-family: var(--mobile-family);
    font-size: var(--fs-base);
    font-weight: 400;
    text-align: center;
    color: var(--white-200);
  }
  .about {
    width: auto;
    justify-content: space-between;
  }
  .about div {
    margin-right: 0;
  }
  .about p {
    font-family: var(--mobile-family);
    font-size: 13px;
    color: var(--white-200);
  }

  .footer {
    padding: 30px 40px 48px 40px;
  }
}
</style>
