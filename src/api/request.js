import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: `${import.meta.env.BASE_URL}`,
  timeout: 5000
});

// Проверка перед запросом.
/*
axiosInstance.interceptors.request.use(
  (config) => {
    const headers = {};
    return { ...config, headers };
  },
  (error) => error,
);
*/

// ответ
axiosInstance.interceptors.response.use(
  (response) => response,
  async (err) => {
    if (err.isAxiosError && err.code === 'ECONNABORTED') {
      return Promise.reject(
        new Error('Сервер отвечает слишком долго. Запрос отменен')
      );
    }
    return Promise.reject(
      new Error(
        err.response?.data
          ? err.response.data.message
          : 'Непредвиденная ошибка сервера'
      )
    );
  }
);

export default axiosInstance;
