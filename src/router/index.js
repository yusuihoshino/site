import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Works from '@/views/Works.vue';
import History from '@/views/History.vue';
import Request from '@/views/Request.vue';    
import Portfolio from '@/views/Portfolio.vue';
import { generateDetailRoutes } from '@/data/works';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/works',
    name: 'Works',
    component: Works
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },  
  {
    path: '/request',
    name: 'Request',
    component: Request
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  ...generateDetailRoutes()//worksにある関数を実行
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;