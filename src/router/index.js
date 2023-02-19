import { createRouter, createWebHistory } from 'vue-router';
import HeaderView from '../views/HeaderView.vue';
import HomeView from '../views/HomeView.vue';
import FooterView from '../views/FooterView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        header: HeaderView,
        footer: FooterView,
      },
    },
  ],
});

export default router;
