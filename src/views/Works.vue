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

    <div class="gallery">
      <Card
        v-for="work in works"
        :key="work.id"
        :title="work.title"
        :image="work.image"
        :year="work.year"
        :link="work.link"
        :category="work.category"
        :selectedCategory="selectedCategory"
      />
    </div>
  </div>
  <Sidebar />
</template>

<script>
import Card from '@/components/Card.vue';
import Sidebar from '@/components/Sidebar.vue';
import { works } from '@/router';
import TitlePage from '@/components/Title.vue';
export default {
  name: 'WorksPage',
  components: {
    Card,
    Sidebar,
    TitlePage
  },
  data() {
    return {
      selectedCategory: 'all',
      categories: [
        { value: 'all', label: 'すべて' },
        { value: 'art', label: 'デジタルアート' },
        { value: 'drawing', label: 'イラスト' },
        { value: 'photo', label: '写真' }
      ],
      works
    };
  }
};
</script>