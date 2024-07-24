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
    <textarea
      id="text"
      v-model="search"
      :placeholder="label"
      :type="type"
      @update:model-value="handleUpdate"
    >
    </textarea>
    <p v-show="search !== null && rule.length > 0">{{ rule[0] }}</p>
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
</style>
