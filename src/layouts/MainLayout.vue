<script setup>
import MainHeader from '../components/MainHeader.vue';
</script>

<template>
  <div>
    <MainHeader />
    <main class="main">
      <slot>
        <!-- <Main /> -->
      </slot>
    </main>
    <footer style="height: 396px; background-color: var(--rectangle)">
      hgfd
    </footer>
  </div>
</template>

<style scoped>
.main {
  min-height: 100vh;
}
</style>
