<template>
  <label :class="$style.checkbox">
    Согласие на обработку персональных данных
    <input type="checkbox" required />
    <span :class="$style.checkmark"></span>
  </label>
</template>
<style module>
.checkbox input {
  height: 0;
  width: 0;
}
.checkbox {
  display: block;
  position: relative;
  padding-left: 26px;
  font-size: 22px;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: transparent;
  border: 1.5px solid var(--white-200);
  cursor: pointer;
  margin-right: 13px;
}
</style>
