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
    <textarea
      id="text"
      v-model="search"
      :placeholder="label"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    </textarea>
    <p v-show="modelValue !== null && rule.length > 0">{{ rule[0] }}</p>
  </div>
</template>
<style module>
.group {
  position: relative;
  min-height: 170px;
}
.group textarea {
  font-size: var(--fs-base);
  background: transparent;
  border-radius: 8px;
  border: 1.5px solid v-bind(inputColor);
  width: 100%;
  min-height: 139px;
  color: var(--white-200);
  padding: 20px;
  resize: vertical;
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
.group textarea::placeholder {
  color: transparent;
}
@media (max-width: 889px) {
  .group {
    position: static;
  }
  .group label {
    display: none;
  }
  .group textarea {
    font-family: var(--mobile-family);
    font-size: 13px;
    border: 0.9px solid v-bind(inputColor);
  }
  .group textarea::placeholder {
    color: var(--weight-200);
  }
}
</style>
