import { authGuard } from '@/guards/auth';
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SliderView from '../views/SliderView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: { authRequired: false },
      component: SliderView
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      meta: { authRequired: false },
      component: () => import('../views/SignInView.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      meta: { authRequired: true },
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/loggedout',
      name: 'LoggedOut',
      meta: { authRequired: false },
      component: () => import('../views/LoggedOut.vue')
    },
    {
      path: '/game',
      name: 'Game',
      meta: { authRequired: false },
      component: () => import('../views/GameView.vue')
    }
  ]
});

router.beforeEach(authGuard);

export default router;
