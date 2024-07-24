<script setup>
import MainHeader from './components/MainHeader.vue';
</script>

<template>
  <div>
    <MainHeader />
    <main :class="$style.main">
      <slot>
        <!-- <Main /> -->
      </slot>
    </main>
    <footer style="height: 396px; background-color: var(--rectangle)">
      hgfd
    </footer>
  </div>
</template>

<style module>
.main {
  min-height: 100vh;
}
</style>
