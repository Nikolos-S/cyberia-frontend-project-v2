export const defaultValidation = [
  (value) => {
    if (value) return true;

    return 'translation.form.requiredErr';
  }
];

export const emailValidation = [
  (value) => {
    if (value) return true;

    return 'translation.form.requiredErr';
  },
  (value) => {
    return /^[^@]+@[^@.]+\.[^@]{2,}$/.test(value)
      ? true
      : 'translation.form.incorrectMail';
  }
];

export const phoneValidation = [
  (value) => {
    if (value) return true;

    return 'translation.form.requiredErr';
  },
  (value) => {
    return /^\+?([0-9] ?){6,14}[0-9]$/.test(value)
      ? true
      : 'translation.form.incorrectPhone';
  }
];
