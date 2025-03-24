<template>
  <div class="logo-page">
    <h1>Logo Design</h1>
    <div class="logo-grid">
      <div class="logo-item" v-for="(logo, index) in logos" :key="index">
        <div class="logo-image">
          <img :src="logo.image" :alt="logo.title">
        </div>
        <div class="logo-details">
          <h3>{{ logo.title }}</h3>
          <p class="logo-description">{{ logo.description }}</p>
          <p class="logo-client">Client: {{ logo.client }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogoPage',
  data() {
    return {
      logos: [
        {
          title: 'モダンロゴ',
          description: 'シンプルでモダンなデザインのコーポレートロゴ',
          client: 'Tech Company A',
          image: require('@/assets/placeholder.jpg')
        },
        {
          title: 'ブランドロゴ',
          description: '印象的なブランドアイデンティティ',
          client: 'Fashion Brand B',
          image: require('@/assets/placeholder.jpg')
        },
        {
          title: 'プロダクトロゴ',
          description: '新商品のブランディングロゴ',
          client: 'Product Company C',
          image: require('@/assets/placeholder.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped>
.logo-page {
  padding: 20px;
}

h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;
}

.logo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo-item {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.logo-item:hover {
  transform: translateY(-5px);
}

.logo-image {
  padding: 20px;
  background: #f8f8f8;
}

.logo-image img {
  width: 100%;
  height: 200px;
  object-fit: contain;
}

.logo-details {
  padding: 20px;
}

h3 {
  color: #2c3e50;
  margin: 0 0 10px;
}

.logo-description {
  color: #666;
  font-size: 0.9em;
  line-height: 1.6;
  margin-bottom: 10px;
}

.logo-client {
  color: #42b983;
  font-size: 0.8em;
  font-weight: bold;
}
</style> 