import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cases',
      component: () => import('../pages/casePage/CasePage.vue'),
      meta: { pageCrumb: 'Кейсы', layout: 'MainLayout' }
    },
    {
      path: '/:pathMatch(.*)',
      name: 'errorPage',
      component: () => import('../pages/errorPage/ErrorPage.vue'),
      meta: { pageCrumb: 'EeeorPage', layout: 'MainLayout' }
    }
  ]
});

export default router;
