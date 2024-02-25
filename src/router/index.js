import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  base: '/',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('../layout/HomeLayout.vue')
    },
    {
      path: '/Content',
      name: 'ContentPage',
      redirect: '/',
      component: () => import('../layout/ContentLayout.vue'),
      children: [
        {
          path: 'Resume',
          name: 'Resume',
          component: () => import('../views/Resume.vue'),
        },
        {
          path: 'BrokerAndSignalR',
          name: 'BrokerAndSignalR',
          beforeEnter: (to, from, next) => {
            window.open("https://github.com/WangKevin-code/SQLBroker");
          },
        },
        {
          path: 'Calculator',
          name: 'Calculator',
          component: () => import('../views/Calculator.vue'),
        },
        {
          path: 'Weather',
          name: 'Weather',
          component: () => import('../views/Weather.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      redirect: '/',
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  },
})

export default router
