<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  type: String,
  label: String,
  required: Boolean,
  rule: Array
});
const inputColor = computed(() =>
  search.value !== null && props.rule.length > 0 ? '#F44336' : '#eef3ff'
);
const emit = defineEmits(['update:modelValue']);

const search = ref(null);

const handleUpdate = (v) => {
  emit('update:modelValue', v);
};
</script>
<template>
  <div :class="$style.group">
    <label for="name">{{ label }}<sup>*</sup></label>
    <input
      id="name"
      v-model="search"
      :placeholder="label"
      :type="type"
      @update:model-value="handleUpdate"
    />
    <p v-show="search !== null && rule.length > 0">{{ rule[0] }}</p>
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
</style>
