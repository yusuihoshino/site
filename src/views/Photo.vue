<template>
  <div class="photo-page">
    <h1>Photography</h1>
    <div class="category-filter">
      <button 
        v-for="category in categories" 
        :key="category"
        @click="filterCategory(category)"
        :class="{ active: currentCategory === category }"
      >
        {{ category }}
      </button>
    </div>
    <div class="photo-grid">
      <Card
        v-for="(photo, index) in filteredPhotos"
        :key="index"
        :title="photo.title"
        :image="photo.image"
        :category="photo.category"
        @click="showPhotoDetail(photo)"
      />
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'PhotoPage',
  components: {
    Card
  },
  data() {
    return {
      currentCategory: 'All',
      categories: ['All', 'Nature', 'Portrait', 'Architecture'],
      photos: [
        {
          title: '自然風景1',
          category: 'Nature',
          image: require('@/assets/placeholder.jpg')
        },
        {
          title: 'ポートレート1',
          category: 'Portrait',
          image: require('@/assets/placeholder.jpg')
        },
        {
          title: '建築物1',
          category: 'Architecture',
          image: require('@/assets/placeholder.jpg')
        }
      ]
    }
  },
  computed: {
    filteredPhotos() {
      if (this.currentCategory === 'All') {
        return this.photos;
      }
      return this.photos.filter(photo => photo.category === this.currentCategory);
    }
  },
  methods: {
    filterCategory(category) {
      this.currentCategory = category;
    },
    showPhotoDetail(photo) {
      // 写真詳細表示のロジックをここに実装
      console.log('Show photo detail:', photo);
    }
  }
}
</script>

<style scoped>
.photo-page {
  padding: 20px;
}

h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
}

.category-filter {
  text-align: center;
  margin-bottom: 30px;
}

.category-filter button {
  background: none;
  border: 2px solid #42b983;
  color: #42b983;
  padding: 8px 16px;
  margin: 0 5px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-filter button.active,
.category-filter button:hover {
  background: #42b983;
  color: white;
}

.photo-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
}
</style> 