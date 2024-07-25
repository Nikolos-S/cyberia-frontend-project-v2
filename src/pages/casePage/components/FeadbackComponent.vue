<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import formImage from '../../../assets/img/formImage.svg';
import CustomInput from '../../../components/CustomInput.vue';
import CustomTextarea from '../../../components/CustomTextarea.vue';
import CustomCheckbox from '../../../components/CustomCheckbox.vue';
import { usePostsStore } from '../../../stores/store.js';
import {
  defaultValidation,
  emailValidation,
  phoneValidation
} from '../../../utils/validation.js';
const postStore = usePostsStore();
const { feedbacks } = storeToRefs(postStore);

const validName = computed(() =>
  defaultValidation
    .map((rule) => rule(feedbacks.value.name))
    .filter((rule) => rule !== true)
);

const validPhone = computed(() =>
  phoneValidation
    .map((rule) => rule(feedbacks.value.phone))
    .filter((rule) => rule !== true)
);
const validEmail = computed(() =>
  emailValidation
    .map((rule) => rule(feedbacks.value.email))
    .filter((rule) => rule !== true)
);
const validMessage = computed(() =>
  defaultValidation
    .map((rule) => rule(feedbacks.value.message))
    .filter((rule) => rule !== true)
);

const submitForm = () => {
  console.log(feedbacks.value.name);
};
</script>
<template>
  <form :class="$style.feedback" @submit.prevent="submitForm">
    <div :class="$style.title">
      <div :class="$style.image">
        <img alt="Почта" :src="formImage" />
      </div>
      <p>Расскажите о вашем проекте:</p>
    </div>
    <div :class="$style.row">
      <div :class="$style.inputContainer">
        <CustomInput
          v-model="feedbacks.name"
          type="text"
          label="Ваше имя"
          :rule="validName"
        />
      </div>
      <div :class="$style.inputContainer">
        <CustomInput
          v-model="feedbacks.email"
          type="email"
          label="Email"
          :rule="validEmail"
        />
      </div>
      <div :class="$style.inputContainer">
        <CustomInput
          v-model="feedbacks.phone"
          type="tel"
          label="Телефон"
          :rule="validPhone"
        />
      </div>
    </div>
    <div :class="$style.textareaContainer">
      <CustomTextarea
        v-model="feedbacks.message"
        type="text"
        label="Сообщение"
        :rule="validMessage"
      />
    </div>
    <div :class="$style.checkboxContainer">
      <!--Подумать как управлять шириной и высотой квадратика для кастомизации-->
      <CustomCheckbox
        v-model="feedbacks.ready"
        type="checkbox"
        label="Согласие на обработку персональных данных"
      />
    </div>
    <button type="submit" :class="$style.submitButton">Обсудить проект</button>
  </form>
</template>
<style module>
.feedback {
  margin-bottom: 100px;
}
.title {
  max-width: 361px;
  color: var(--white-200);
  font-size: 48px;
  font-weight: var(--weight-bold);
  text-align: left;
  margin: 0px 40px 89px 40px;
}
.image {
  display: none;
  width: 76px;
  height: 70px;
  margin-right: 28px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0px 20px;
}
.inputContainer {
  min-width: 326px;
  flex-grow: 1;
  margin: 0px 19px 11px 19px;
}
.textareaContainer {
  height: auto;
  min-width: 326px;
  padding: 0px 40px;
  margin-bottom: 9px;
}
.checkboxContainer {
  padding: 0px 40px;
  margin-bottom: 67px;
  display: flex;
  justify-content: start;
  align-items: center;
}
.submitButton {
  display: block;
  margin: 0 auto;
  padding: 20px 45px;
  width: 259px;
  height: 62px;

  border-radius: 85px;
  border: none;
  background-color: var(--button-color);
  color: white;
}
.submitButton:hover {
  cursor: pointer;
  opacity: 0.8;
}
.submitButton:active {
  transform: scale(0.95);
}
@media (max-width: 889px) {
  .title {
    display: flex;
    justify-content: start;
    align-items: center;
    max-width: 361px;
    font-size: 24px;
    font-family: var(--mobile-menu-v2);
    font-weight: var(--weight-bold-mobile);
    text-align: left;
    margin: 0 0 33px 0;
    padding: 0 25px;
  }
  .image {
    display: block;
  }
  .row {
    display: block;
    padding: 0 25px;
  }
  .inputContainer {
    margin: 0;
  }
  .textareaContainer {
    padding: 0 25px;
  }
  .checkboxContainer {
    display: none;
  }
}
</style>
