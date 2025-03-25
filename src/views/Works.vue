<template>
  <div class="gallery-container container">
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
      <Card
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
  computed: {
    filteredWorks() {
      if (this.selectedCategory === 'all') {
        return this.works;
      }
      return this.works.filter(work => work.category === this.selectedCategory);
    }
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

<style scoped>
.gallery-container {
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.category-selecter {
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: left;
  gap:20px;
  text-align: center;
  button {
    padding: 8px 8px;
    border: none;
    border-radius: 0px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: none;
    &:hover{
      background: #d4cfcf;
    }
  }
  button.active {
    background: #333;
    color: white;
  }
}


#grid {
  width: 100%;
  margin: 0 auto;

  .grid-sizer,
  .grid-item {
    width: calc(50% - 15px);
  }

  .gutter-sizer {
    width: 30px;
  }

  .grid-item {
    margin-bottom: 30px;
    display: inline-block;
  }

  .grid-item img {
    width: 100%;
    height: auto;
    border: var(--img-gray) 1px solid;
  }

  @media screen and (max-width: 768px) {
    .gallery-container {
      padding: 10px;
    }

    .grid-sizer,
    .grid-item {
      width: 100%;
      margin-bottom: 20px;
    }

    .gutter-sizer {
      width: 0;
    }

    .category-filter {
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
    }
  }
}

</style>