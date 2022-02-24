import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

import Resume from '../views/Resume.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
