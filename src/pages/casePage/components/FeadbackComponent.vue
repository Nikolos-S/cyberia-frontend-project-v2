<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
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
  <form @submit.prevent="submitForm">
    <div :class="$style.title">
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
        v-model="feedbacks.message"
        type="checkbox"
        label="Согласие на обработку персональных данных"
      />
    </div>
    <button type="submit">Обсудить проект</button>
  </form>
</template>
<style module>
.title {
  max-width: 361px;
  color: var(--white-200);
  font-size: 48px;
  font-weight: var(--weight-bold);
  text-align: left;
  margin: 0px 40px 89px 40px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0px 20px;
}
.inputContainer {
  min-width: 326px;
  margin: 0px 19px 11px 19px;
  flex: 0 0 387px;
}
.textareaContainer {
  height: auto;
  padding: 0px 40px;
  margin-bottom: 9px;
}
.checkboxContainer {
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
}
</style>
