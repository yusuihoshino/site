import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';

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
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
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
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/poster',
    name: 'Poster',
    component: Poster
  },
  {
    path: '/logo',
    name: 'Logo',
    component: Logo
  },
  {
    path: '/other',
    name: 'Other',
    component: Other
  },
  {
    path: '/photo',
    name: 'Photo',
    component: Photo
  },
  {
    path: '/drawing',
    name: 'Drawing',
    component: Drawing
  },
  {
    path: '/thumnail',
    name: 'Thumnail',
    component: Thumnail
  },
  {
    path: '/modeling',
    name: 'Modeling',
    component: Modeling
  },
  {
    path: '/art',
    name: 'Art',
    component: Art
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;