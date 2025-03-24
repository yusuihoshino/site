import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Gallery from '../views/Gallery.vue';

import History from '../views/History.vue';
import Request from '../views/Request.vue';
import Portfolio from '../views/Portfolio.vue';
import Product from '../views/Product.vue';
import Poster from '../views/Poster.vue';
import Logo from '../views/Logo.vue';
import Other from '../views/Other.vue';
import Photo from '../views/Photo.vue';
import Drawing from '../views/Drawing.vue';
import Thumnail from '../views/Thumnail.vue';
import Modeling from '../views/Modeling.vue';
import Art from '../views/Art.vue';

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
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact'
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
    path: '/photo',
    name: 'Photo',
    component: Photo,
    meta: {
      title: 'Photo'
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
    path: '/thumnail',
    name: 'Thumnail',
    component: Thumnail,
    meta: {
      title: 'Thumnail'
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
    path: '/art',
    name: 'Art',
    component: Art,
    meta: {
      title: 'Art'
    }
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
    meta: {
      title: 'Gallery'
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// タイトルを変更するナビゲーションガード
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Portfolio'
  next()
})

export default router;