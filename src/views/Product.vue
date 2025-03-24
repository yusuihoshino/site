<template>
  <div class="product-page">
    <h1>Products</h1>
    <div class="product-grid">
      <div class="product-card" v-for="(product, index) in products" :key="index">
        <img :src="product.image" :alt="product.name">
        <div class="product-info">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <div class="product-price">{{ product.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductPage',
  data() {
    return {
      products: [
        {
          name: '商品1',
          description: '商品の説明文がここに入ります。',
          price: '¥10,000',
          image: require('@/assets/placeholder.jpg')
        },
        {
          name: '商品2',
          description: '商品の説明文がここに入ります。',
          price: '¥15,000',
          image: require('@/assets/placeholder.jpg')
        },
        {
          name: '商品3',
          description: '商品の説明文がここに入ります。',
          price: '¥20,000',
          image: require('@/assets/placeholder.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped>
.product-page {
  padding: 20px;
}

h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.product-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-info {
  padding: 20px;
}

.product-info h3 {
  margin: 0 0 10px;
  color: #2c3e50;
}

.product-info p {
  color: #666;
  font-size: 0.9em;
  line-height: 1.6;
  margin-bottom: 15px;
}

.product-price {
  color: #42b983;
  font-size: 1.2em;
  font-weight: bold;
}
</style> 