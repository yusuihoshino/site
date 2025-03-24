<template>
  <div class="poster-page">
    <h1>Poster Gallery</h1>
    <div class="poster-grid">
      <div class="poster-item" v-for="(poster, index) in posters" :key="index">
        <div class="poster-image">
          <img :src="poster.image" :alt="poster.title">
        </div>
        <div class="poster-details">
          <h3>{{ poster.title }}</h3>
          <p class="poster-description">{{ poster.description }}</p>
          <p class="poster-date">{{ poster.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PosterPage',
  data() {
    return {
      posters: [
        {
          title: 'イベントポスター1',
          description: 'クリエイティブなデザインのイベントポスター',
          date: '2024/03',
          image: require('@/assets/placeholder.jpg')
        },
        {
          title: 'プロモーションポスター',
          description: '新商品のプロモーションポスター',
          date: '2024/02',
          image: require('@/assets/placeholder.jpg')
        },
        {
          title: '展示会ポスター',
          description: 'アート展示会のポスター',
          date: '2024/01',
          image: require('@/assets/placeholder.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped>
.poster-page {
  padding: 20px;
}

h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;
}

.poster-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.poster-item {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.poster-item:hover {
  transform: translateY(-5px);
}

.poster-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.poster-details {
  padding: 20px;
}

h3 {
  color: #2c3e50;
  margin: 0 0 10px;
}

.poster-description {
  color: #666;
  font-size: 0.9em;
  line-height: 1.6;
  margin-bottom: 10px;
}

.poster-date {
  color: #42b983;
  font-size: 0.8em;
}
</style> 