<template>
  <div class="portfolio-page">
    <h1>Portfolio</h1>
    <div class="portfolio-grid">
      <div class="portfolio-item">
        <img src="@/assets/placeholder.jpg" alt="作品1">
        <h3>作品タイトル1</h3>
        <p>作品の説明文がここに入ります。</p>
      </div>
      <div class="portfolio-item">
        <img src="@/assets/placeholder.jpg" alt="作品2">
        <h3>作品タイトル2</h3>
        <p>作品の説明文がここに入ります。</p>
      </div>
      <div class="portfolio-item">
        <img src="@/assets/placeholder.jpg" alt="作品3">
        <h3>作品タイトル3</h3>
        <p>作品の説明文がここに入ります。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioPage'
}
</script>

<style scoped>
.portfolio-page {
  padding: 20px;
}

h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.portfolio-item {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.portfolio-item:hover {
  transform: translateY(-5px);
}

.portfolio-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.portfolio-item h3 {
  padding: 15px;
  margin: 0;
  color: #2c3e50;
}

.portfolio-item p {
  padding: 0 15px 15px;
  color: #666;
  font-size: 0.9em;
  line-height: 1.6;
}
</style> 