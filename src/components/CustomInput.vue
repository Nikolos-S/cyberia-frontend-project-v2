<script setup>
import { computed } from 'vue';
// присобачить валидацию на  @blur
const props = defineProps({
  modelValue: String,
  type: String,
  label: String,
  rule: Array
});
const inputColor = computed(() =>
  props.modelValue !== null && props.rule.length > 0 ? '#F44336' : '#eef3ff'
);
defineEmits(['update:modelValue']);
</script>
<template>
  <div :class="$style.group">
    <label for="name">{{ label }}<sup>*</sup></label>
    <input
      id="name"
      :placeholder="label"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <p v-show="modelValue !== null && rule.length > 0">{{ rule[0] }}</p>
  </div>
</template>
<style module>
.group {
  position: relative;
  height: 90px;
}
.group input {
  font-size: var(--fs-base);
  background: transparent;
  padding: 18.5px;
  border-radius: 8px;
  border: 1.5px solid v-bind(inputColor);
  width: 100%;
  color: var(--white-200);
}
.group label {
  position: absolute;
  top: -15px;
  left: 20px;

  font-weight: var(--weight-light);
  color: var(--white-200);
  padding: 0 5px;
  backdrop-filter: blur(16em);
}
.group p {
  font-size: 14px;
  margin: 5px 0 0 0;
  color: #f44336;
}
.group input::placeholder {
  color: transparent;
}
@media (max-width: 889px) {
  .group {
    position: static;
    height: 75px;
  }
  .group label {
    display: none;
  }
  .group input {
    font-family: var(--mobile-family);
    font-size: 13px;
    height: 51px;
    padding: auto 13px;

    border: 0.9px solid v-bind(inputColor);
  }

  .group input::placeholder {
    color: var(--weight-200);
  }
}
</style>
