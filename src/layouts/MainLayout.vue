<script setup>
import MainHeader from './components/MainHeader.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <div>
    <MainHeader />
    <main :class="$style.main">
      <slot>
        <!-- <Main /> -->
      </slot>
    </main>
    <footer :class="$style.footer">
      <FooterComponent />
    </footer>
  </div>
</template>

<style module>
.main {
  min-height: 100vh;
}
.footer {
  background-color: var(--rectangle);
}
</style>
