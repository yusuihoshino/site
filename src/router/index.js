import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Works from '@/views/Works.vue';
import History from '@/views/History.vue';
import Request from '@/views/Request.vue';    
import Note from '@/views/Note.vue';    
import QR from '@/views/QR.vue';
import Portfolio from '@/views/Portfolio.vue';
import DetailPage from '@/components/DetailPage.vue';
import { works } from '@/data/works';

// 詳細ページのルートを生成（contentがある作品のみ）
const generateDetailRoutes = () => {
  return works
    .filter(work => work.content)
    .map(work => ({
      path: `/works/${work.id}`,
      name: `work-${work.id}`,
      component: DetailPage,
      props: route => ({
        id: work.id,
        category: route.query.category
      })
    }));
};

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
  {
      path: '/note',
      name: 'Note',
      component: Note
    },
  {
    path: '/qr',
    name: 'QR',
    component: QR
  },
  ...generateDetailRoutes()
];

const router = createRouter({
  history: createWebHistory('/site/'),
  routes
});

export default router;