<template>
  <div class="container">
    <TitlePage
      title="Works"
      description="作品集"
    />

    <div class="category-selecter">
      <button 
        v-for="cat in categories" 
        :key="cat.value"
        :class="{ active: selectedCategory === cat.value }"
        @click="selectedCategory = cat.value"
      >
        {{ cat.label }}
      </button>
    </div>

    <div id="grid">
      <div class="grid-sizer"></div>
      <div class="gutter-sizer"></div>
      <CardPage
        v-for="work in filteredWorks"
        :key="work.id"
        :id="work.id"
        :title="work.title"
        :image="work.image"
        :year="work.year"
        :categories="work.categories"
        :content="work.content"
        class="grid-item"
      />
    </div>
  </div>
</template>

<script>
import CardPage from '@/components/Card.vue';
import TitlePage from '@/components/Title.vue';
import { works } from '@/data/works';
import { masonryMixin } from '@/assets/scripts/masonry.js';

export default {
  name: 'WorksPage',
  components: {
    CardPage,
    TitlePage
  },
  mixins: [masonryMixin],
  data() {
    return {
      categories: [
        { value: 'product', label: 'Product' },
        { value: 'poster', label: 'Poster' },
        { value: 'logo', label: 'Logo' },
        { value: 'other', label: 'Other' },
        { value: 'photo', label: 'Photo' },
        { value: 'modeling', label: 'Modeling' },
        { value: 'drawing', label: 'Drawing' },
        { value: 'art', label: 'Art' },
        { value: 'thumbnail', label: 'Thumbnail' },
      ],
      works,
      lightbox: null
    };
  },
  computed: {
    selectedCategory: {
      get() {
        return this.$route.query.category || 'product';
      },
      set(value) {
        this.$router.replace({ query: { category: value } });
      }
    },
    filteredWorks() {
      return this.works.filter(work => work.categories.includes(this.selectedCategory));
    }
  },
  methods: {
    async initLightbox() {
      // 既存のインスタンスを破棄
      if (this.lightbox) {
        this.lightbox.destroy();
      }

      // GLightboxのCSSを追加
      if (!document.querySelector('link[href*="glightbox"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css';
        document.head.appendChild(link);
      }

      // GLightboxのJSを読み込み
      if (!window.GLightbox) {
        await new Promise((resolve) => {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js';
          script.onload = resolve;
          document.head.appendChild(script);
        });
      }

      // 初期化
      await new Promise((resolve) => {
        setTimeout(() => {
          this.lightbox = window.GLightbox({
            selector: '.glightbox',
            touchNavigation: true,
            loop: true,
            width: '90vw',
            height: '90vh',
            zoomable: false,
            draggable: false,
            autoplayVideos: true,
            closeButton: true,
            navigation: true,
            preload: true
          });
          resolve();
        }, 100);
      });
    }
  },
  async mounted() {
    await this.$nextTick();
    await this.initLightbox();
  },
  async activated() {
    await this.$nextTick();
    await this.initLightbox();
  },
  beforeUnmount() {
    if (this.lightbox) {
      this.lightbox.destroy();
      this.lightbox = null;
    }
  }
};
</script>

<style scoped>

/* 暗い背景のとき */
:root[data-theme="dark"] .container .category-selecter button.active {
  background-color: #ffffff !important;
  color: #333333;
}
.category-selecter {
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: start;
  text-align: center;
  padding: 100px 0 0px;
  flex-wrap: wrap;


  button {
    padding: 4px 16px;
    border: none;
    border-radius: 0px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: none;
    letter-spacing: 0.15rem;
    color: var(--font-black);
    &:hover {
      background: var(--img-gray);
    }
  }

  button.active {
    background: var(--font-black);
    /* font-weight: 400; */
    color: #ffffff;
  }
}


#grid {
  width: 100%;
  margin: 0 auto;
  font-size: 0; /* インラインブロック間の隙間を消す */

  .grid-sizer,
  .grid-item {
    width: calc(50% - 10px); /* 横の余白を調整 */
  }

  .gutter-sizer {
    width: 20px; /* 横の余白を調整 */
  }

  .grid-item {
    margin-bottom: 20px; /* 縦の余白を少し減らす */
    display: inline-block;
    font-size: 16px; /* フォントサイズを戻す */
    vertical-align: top; /* 上端揃えにする */
    transition: all 0.3s ease;

  }

  .grid-item img {
    width: 100%;
    height: auto;
    display: block; /* 画像下部の余白を消す */
    border: var(--img-gray) 1px solid;
  }
}

@media screen and (max-width: 768px) {
  .gallery-container {
    padding: 10px;
    padding-top: 80px; /* タイトルの高さ分の余白を維持 */
  }

  #grid {
    .grid-sizer,
    .grid-item {
      width: 100%;
      margin-bottom: 15px;
    }

    .gutter-sizer {
      width: 0;
    }
  }
}
</style>