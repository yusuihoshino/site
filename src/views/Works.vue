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
        { value: 'art', label: 'デジタルアート' },
        { value: 'drawing', label: 'イラスト' },
        { value: 'photo', label: '写真' },
        { value: 'product', label: 'プロダクト' },
        { value: 'poster', label: 'ポスター' },
        { value: 'modeling', label: '3Dモデリング' },
        { value: 'logo', label: 'ロゴ' },
        { value: 'other', label: 'その他' }
      ],
      works
    };
  },
  watch: {
    // カテゴリーが変更されたときにMasonryレイアウトを更新
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

<style scoped>
.galery-container {
  padding: 20px;
}

.category-filter {
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.category-filter button {
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  background: #f0f0f0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-filter button.active {
  background: #333;
  color: white;
}

#grid {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.grid-sizer,
.grid-item {
  width: calc(33.333% - 20px);
}

.gutter-sizer {
  width: 30px;
}

@media (max-width: 1024px) {
  .grid-sizer,
  .grid-item {
    width: calc(50% - 15px);
  }
}

@media (max-width: 768px) {
  .grid-sizer,
  .grid-item {
    width: 100%;
  }
  
  .gutter-sizer {
    width: 0;
  }
}
</style>