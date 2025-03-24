import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Art from '@/views/Art.vue';
import Drawing from '@/views/Drawing.vue';
import Photo from '@/views/Photo.vue';
import Modeling from '@/views/Modeling.vue';
import Gallery from '@/components/Gallery.vue';
import History from '@/views/History.vue';
import Request from '@/views/Request.vue';
import Portfolio from '@/views/Portfolio.vue';
import Product from '@/views/Product.vue';
import Poster from '@/views/Poster.vue';
import Logo from '@/views/Logo.vue';
import Other from '@/views/Other.vue';
import Thumnail from '@/views/Thumnail.vue';

// 詳細ページのルート設定
const detailRoutes = {
  art: [
    { id: 'ae1', title: 'デジタルアート1' },
    { id: 'ae2', title: 'デジタルアート2' },
    { id: 'ae3', title: 'デジタルアート3' },
    { id: 'ae4', title: 'デジタルアート4' },
    { id: 'ae5', title: 'デジタルアート5' },
    { id: 'ae6', title: 'デジタルアート6' },
    { id: 'p5-1', title: 'Processing作品1' },
    { id: 'p5-2', title: 'Processing作品2' },
    { id: 'jacket', title: 'ジャケットデザイン' }
  ],
  drawing: [
    { id: 'spain', title: 'スペイン旅行' },
    { id: 'shoes', title: 'シューズ' }
  ],
  photo: [
    { id: 'nature', title: '自然写真' },
    { id: 'street', title: '街並み' }
  ]
};

// 詳細ページのルートを生成する関数
function createDetailRoutes(category) {
  return detailRoutes[category].map(item => ({
    path: `/${category}/${item.id}`,
    name: `${category}${item.id}`,
    component: () => import(`@/views/details/${category}/${item.id}Detail.vue`),
    meta: {
      title: item.title
    }
  }));
}

// メインルート
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/art',
    name: 'Art',
    component: Art,
    meta: {
      title: 'Art'
    }
  },
  {
    path: '/drawing',
    name: 'Drawing',
    component: Drawing,
    meta: {
      title: 'Drawing'
    }
  },
  {
    path: '/photo',
    name: 'Photo',
    component: Photo,
    meta: {
      title: 'Photo'
    }
  },
  {
    path: '/modeling',
    name: 'Modeling',
    component: Modeling,
    meta: {
      title: 'Modeling'
    }
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
    meta: {
      title: 'Gallery'
    }
  },
  {
    path: '/history',
    name: 'History',
    component: History,
    meta: {
      title: 'History'
    }
  },
  {
    path: '/request',
    name: 'Request',
    component: Request,
    meta: {
      title: 'Request'
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    meta: {
      title: 'Portfolio'
    }
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
    meta: {
      title: 'Product'
    }
  },
  {
    path: '/poster',
    name: 'Poster',
    component: Poster,
    meta: {
      title: 'Poster'
    }
  },
  {
    path: '/logo',
    name: 'Logo',
    component: Logo,
    meta: {
      title: 'Logo'
    }
  },
  {
    path: '/other',
    name: 'Other',
    component: Other,
    meta: {
      title: 'Other'
    }
  },
  {
    path: '/thumnail',
    name: 'Thumnail',
    component: Thumnail,
    meta: {
      title: 'Thumnail'
    }
  },
  // 各カテゴリの詳細ページルートを追加
  ...createDetailRoutes('art'),
  ...createDetailRoutes('drawing'),
  ...createDetailRoutes('photo')
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

// タイトルを変更するナビゲーションガード
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Portfolio'
  next()
})

export default router;