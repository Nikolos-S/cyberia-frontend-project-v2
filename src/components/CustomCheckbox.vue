<script setup>
import { ref, computed } from 'vue';

defineProps({
  type: String,
  label: String
});

const emit = defineEmits(['update:modelValue']);

const search = ref(false);

const colorLabel = computed(() => (search.value ? '#EFF3FF' : '#f44336'));

const handleUpdate = (v) => {
  emit('update:modelValue', v);
};
</script>
<template>
  <label :class="$style.checkbox">
    {{ label }}
    <input v-model="search" :type="type" @update:model-value="handleUpdate" />
    <span :class="$style.checkmark"></span>
  </label>
</template>
<style module>
.checkbox input {
  display: none;
}
.checkbox {
  display: block;
  position: relative;
  padding-left: 37px;
  font-weight: var(--weight-light);
  color: var(--white-200);
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: transparent;
  border: 1.5px solid var(--white-200);
  border-radius: 2px;
  cursor: pointer;
}
.checkmark:after {
  top: -3px;
  left: 5px;
  color: var(--white-200);
}
.checkbox::after {
  color: v-bind(colorLabel);
}
.checkbox input:checked ~ .checkmark:after {
  display: block;
}
.checkmark:after {
  content: '✓';
  position: absolute;
  display: none;
}
</style>
