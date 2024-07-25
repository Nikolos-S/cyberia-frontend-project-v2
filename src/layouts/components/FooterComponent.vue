<script setup>
import footerLogo from '../../assets/img/footerLogo.svg';
</script>
<template>
  <div class="container">
    <div :class="$style.footer">
      <div :class="$style.item">
        <div :class="$style.logo">
          <img alt="Логотип" :src="footerLogo" />
        </div>
        <div :class="$style.subtitle">
          <p>Веб-разработка и усиление IT-команд</p>
        </div>
      </div>
      <div :class="$style.about">
        <div>
          <p>+7 999 123 45 67</p>
          <p>hello@cyberia.studio</p>
          <p>ул.Ярных, д.35, оф.10</p>
        </div>
        <div>
          <p>Агентство</p>
          <p>Услуги</p>
          <p>Кейсы</p>
        </div>
        <div>
          <p>Блог</p>
          <p>Контакты</p>
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
    font-size: 13px;
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
