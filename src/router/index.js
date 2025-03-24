import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Works from '@/views/Works.vue';
import History from '@/views/History.vue';
import Request from '@/views/Request.vue';    
import Portfolio from '@/views/Portfolio.vue';
// 作品データの定義
export const works = [
  {
    id: 'ae1',
    title: 'デジタルアート1',
    category: 'art',
    year: '2024',
    image: require('@/assets/img/art/ae1.webp'),
    link: '/works/ae1',
    description: 'デジタルアート作品の説明文'
  },
  {
    id: 'butterfly',
    title: '蝶',
    category: 'drawing',
    year: '2024',
    image: require('@/assets/img/drawing/蝶.png'),
    description: '蝶のイラストの説明文'
  }
  // 他の作品をここに追加
];

// 詳細ページを持つ作品のルートを自動生成
const detailRoutes = works
  .filter(work => work.link)
  .map(work => ({
    path: work.link,
    component: () => import('@/components/DetailPage.vue'),
    props: { work }
  }));

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
  ...detailRoutes
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;