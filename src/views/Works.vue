<template>
  <div class="galery-container container" in="container">
    <TitlePage
      title="Works"
      description="作品集"
    />

    <div class="category-filter">
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
      <Card
        v-for="work in works"
        :key="work.id"
        :id="work.id"
        :title="work.title"
        :image="work.image"
        :year="work.year"
        :category="work.category"
        :content="work.content"
        :selectedCategory="selectedCategory"
      />
    </div>
  </div>
  <Sidebar />
</template>

<script>
import Card from '@/components/Card.vue';
import Sidebar from '@/components/Sidebar.vue';
import { works } from '@/data/works';
import TitlePage from '@/components/Title.vue';
import { masonryMixin } from '@/assets/scripts/masonry.js';

export default {
  name: 'WorksPage',
  components: {
    Card,
    Sidebar,
    TitlePage
  },
  mixins: [masonryMixin],
  data() {
    return {
      selectedCategory: 'all',
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
  watch: {
    selectedCategory() {
      this.$nextTick(() => {
        if (this.masonry) {
          this.masonry.layout();
        }
      });
    }
  }
};
</script>