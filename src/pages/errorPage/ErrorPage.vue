<script setup>
import MainLayout from '../../layouts/MainLayout.vue';
</script>
<template>
  <MainLayout>
    <div style="display: flex; place-content: center">
      <h1 style="color: DimGray">Страница не найдена</h1>
      <button
        style="text-align: center; display: block"
        to="/cases"
        color="#696969"
      >
        На главную
      </button>
    </div>
  </MainLayout>
</template>
