<script setup>
//import { defineProps, defineEmits } from 'vue';
import { navigationList } from '../utils/navigationList.js';

//const props = defineProps({ style: Object, isOpen: Boolean });
//const emit = defineEmits(['update:modelValue']);

//const click = () => emit('update:modelValue', false);
</script>
<template>
  <ul :class="$style.list">
    <li v-for="({ name, route }, index) in navigationList" :key="index">
      <router-link :to="route">
        {{ name }}
      </router-link>
    </li>
  </ul>
</template>
<style module>
.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 35.39px;
  margin: 0;
  padding: 0px;
}
</style>
