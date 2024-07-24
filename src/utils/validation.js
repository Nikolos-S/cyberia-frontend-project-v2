export const defaultValidation = [
  (value) => {
    if (value) return true;

    return 'Поле обязательное!';
  }
];

export const emailValidation = [
  (value) => {
    if (value) return true;

    return 'Поле обязательное!';
  },
  (value) => {
    return /^[^@]+@[^@.]+\.[^@]{2,}$/.test(value)
      ? true
      : 'Не корректная почта!';
  }
];

export const phoneValidation = [
  (value) => {
    if (value) return true;

    return 'Поле обязательное!';
  },
  (value) => {
    return /^\+?([0-9] ?){6,14}[0-9]$/.test(value)
      ? true
      : 'Не корректный номер телефона!';
  }
];
