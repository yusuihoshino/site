<template>
  <div class="works-container">
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
</template>

<script>
import Card from '@/components/Card.vue';
import { works } from '@/router';

export default {
  name: 'WorksPage',
  components: {
    Card
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

<style scoped>
.works-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.category-filter {
  margin-bottom: 30px;
  text-align: center;
}

.category-filter button {
  padding: 8px 16px;
  margin: 0 8px;
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

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

@media (max-width: 768px) {
  .gallery {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}
</style>
