<script setup>
import { ref, computed, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';
import formImage from '../../../assets/img/formImage.svg';
import CustomInput from '../../../components/CustomInput.vue';
import CustomTextarea from '../../../components/CustomTextarea.vue';
import CustomCheckbox from '../../../components/CustomCheckbox.vue';
import { useSnackStore } from '../../../stores/snackStore';
import { usePostsStore } from '../../../stores/store.js';
import {
  defaultValidation,
  emailValidation,
  phoneValidation
} from '../../../utils/validation.js';

const { t } = useI18n({ useScope: 'global' });

const snackStore = useSnackStore();
const postStore = usePostsStore();
const { feedbacks } = storeToRefs(postStore);

// Создаем реактивное свойство для текста кнопки
const buttonText = ref(t('translation.form.buttonDesctop'));

// Функция для обновления текста кнопки
const updateButtonText = (e) => {
  if (e.matches) {
    feedbacks.value.ready = true;
    buttonText.value = t('translation.form.buttonMobile');
  } else {
    buttonText.value = t('translation.form.buttonDesctop');
  }
};

// Используем хук onMounted для выполнения кода после монтирования компонента
onMounted(() => {
  // Создаем объект медиа-запроса
  const mediaQuery = window.matchMedia('(max-width: 889px)');
  // Первоначальная проверка медиа-запроса
  updateButtonText(mediaQuery);
  // Добавляем слушателя для медиа-запроса
  mediaQuery.addEventListener('change', updateButtonText);
});

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
  const isValid = [
    ...validName.value,
    ...validPhone.value,
    ...validEmail.value,
    ...validMessage.value
  ];
  if (isValid.length !== 0) {
    snackStore.showWarn('Проверьте правильность заполненных полей');
    return;
  }
  postStore.addFeadBack();
};
</script>
<template>
  <form :class="$style.feedback" @submit.prevent="submitForm">
    <div :class="$style.title">
      <div :class="$style.image">
        <img alt="Почта" :src="formImage" />
      </div>
      <p>{{ t('translation.form.about') }}</p>
    </div>
    <div :class="$style.row">
      <div :class="$style.inputContainer">
        <CustomInput
          v-model="feedbacks.name"
          type="text"
          :label="t('translation.form.nameLabel')"
          :rule="validName.map((rule) => t(rule))"
        />
      </div>
      <div :class="$style.inputContainer">
        <CustomInput
          v-model="feedbacks.email"
          :label="t('translation.form.mailLabel')"
          :rule="validEmail.map((rule) => t(rule))"
        />
      </div>
      <div :class="$style.inputContainer">
        <CustomInput
          v-model="feedbacks.phone"
          type="tel"
          :label="t('translation.form.phoneLabel')"
          :rule="validPhone.map((rule) => t(rule))"
        />
      </div>
    </div>
    <div :class="$style.textareaContainer">
      <CustomTextarea
        v-model="feedbacks.message"
        type="text"
        :label="t('translation.form.featbackLabel')"
        :rule="validMessage.map((rule) => t(rule))"
      />
    </div>
    <div :class="$style.checkboxContainer">
      <!--Подумать как управлять шириной и высотой квадратика для кастомизации-->
      <CustomCheckbox
        v-model="feedbacks.ready"
        type="checkbox"
        :label="t('translation.form.checkboxLabel')"
      />
    </div>
    <button
      type="submit"
      :class="$style.submitButton"
      :disabled="!feedbacks.ready"
    >
      {{ buttonText }}
    </button>
    <div :class="$style.contentText">
      <p>
        {{ t('translation.form.checkBoxMobile') }}
      </p>
    </div>
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
  width: 259px;
  height: 62px;
  font-size: 18px;
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
.submitButton:disabled {
  transform: scale(1);
  cursor: not-allowed;
}
.contentText {
  display: none;
  width: 274px;
  text-align: center;

  color: var(--white-200);
  font-family: var(--mobile-family);
  font-size: 13px;
}
@media (max-width: 889px) {
  .feedback {
    background-color: #252631;
    padding-top: 51px;
    margin-bottom: 0;
    padding-bottom: 32px;
  }
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
  .submitButton {
    width: 327px;
    height: 48px;
    margin: 0 auto 26px auto;

    font-family: var(--mobile-family);
    font-size: 13px;
    font-weight: 400;
  }

  .contentText {
    display: block;
    margin: 0 auto;
  }
}
</style>
