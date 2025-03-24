<template>
  <div class="grid-item" v-show="isVisible">
    <router-link v-if="link" :to="link" class="card">
      <img :src="image" :alt="title">
      <div class="card-content">
        <h3>{{ title }}</h3>
        <p v-if="year">{{ year }}</p>
        <p class="category-tag">{{ category }}</p>
        <slot name="meta"></slot>
      </div>
    </router-link>
    <div v-else class="card">
      <img :src="image" :alt="title">
      <div class="card-content">
        <h3>{{ title }}</h3>
        <p v-if="year">{{ year }}</p>
        <p class="category-tag">{{ category }}</p>
        <slot name="meta"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    year: {
      type: String,
      default: null
    },
    link: {
      type: String,
      default: null
    },
    category: {
      type: String,
      required: true
    },
    selectedCategory: {
      type: String,
      default: 'all'
    }
  },
  computed: {
    isVisible() {
      return this.selectedCategory === 'all' || this.selectedCategory === this.category;
    }
  }
};
</script>

<style scoped>
.grid-item {
  width: 100%;
  margin-bottom: 20px;
}

.card {
  display: block;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-decoration: none;
  color: inherit;
}

.card:hover {
  transform: translateY(-5px);
}

.card img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.card-content {
  padding: 15px;
}

.card-content h3 {
  margin: 0 0 10px 0;
  font-size: 1.2em;
}

.card-content p {
  margin: 5px 0;
  color: #666;
}

.category-tag {
  display: inline-block;
  padding: 4px 8px;
  background: #f0f0f0;
  border-radius: 4px;
  font-size: 0.9em;
  color: #555;
}
</style>
