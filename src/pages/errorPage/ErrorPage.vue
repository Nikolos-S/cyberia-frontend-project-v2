<script setup>
import { useI18n } from 'vue-i18n';
import MainLayout from '../../layouts/MainLayout.vue';

const { t } = useI18n({ useScope: 'global' });
</script>
<template>
  <MainLayout>
    <div style="display: flex; place-content: center">
      <h1 style="color: DimGray">{{ t('translation.errorPAge.notFound') }}</h1>
      <router-link
        to="/"
        style="
          text-align: center;
          margin: auto 10px;
          font-size: 24px;
          color: #696969;
        "
      >
        {{ t('translation.errorPAge.onMain') }}
      </router-link>
    </div>
  </MainLayout>
</template>
