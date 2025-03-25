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
        :category="work.category"
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
        { value: 'all', label: 'すべて' },
        { value: 'art', label: 'アート' },
        { value: 'drawing', label: 'イラスト' },
        { value: 'photo', label: '写真' },
        { value: 'product', label: 'プロダクト' },
        { value: 'poster', label: 'ポスター' },
        { value: 'modeling', label: 'モデリング' },
        { value: 'logo', label: 'ロゴ' },
        { value: 'other', label: 'その他' }
      ],
      works
    };
  },
  computed: {
    selectedCategory: {
      get() {
        return this.$route.query.category || 'all';
      },
      set(value) {
        this.$router.replace({ query: { category: value === 'all' ? null : value } });
      }
    },
    filteredWorks() {
      if (this.selectedCategory === 'all') {
        return this.works;
      }
      return this.works.filter(work => work.category === this.selectedCategory);
    }
  }
};
</script>

<style scoped>
.category-selecter {
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: left;
  gap: 20px;
  text-align: center;
  padding:100px 0 0px;

  button {
    padding: 4px 8px;
    border: none;
    border-radius: 0px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: none;
    color: var(--font-black);
    border-radius: 100px;
    &:hover {
      background: var(--img-gray);
    }
  }

  button.active {
    background: var(--font-black);
    color: #ffffff;
  }
}

/* 暗い背景のとき */
:root[data-theme="dark"] .container .category-selecter button.active {
  background-color: #ffffff !important;
  color: #333333;
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

  .category-selecter {
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    
  }
}
</style>