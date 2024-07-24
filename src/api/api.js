import request from './request.js';

// получить список проектов;
export const getProjects = async () => request.get('/api/v1/projects');
// Получить список категорий проектов;
export const getCategories = async () =>
  request.get('/api/v1/project-categories');
// Отправить отзыв;
export const createFeedback = async (name, phone, email, message) =>
  request.post(
    `/api/v1/feedbacks?name=${name}phone=${phone}&email=${email}&message=${message}`
  );
