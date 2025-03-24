<template>
  <div class="grid-item" v-show="isVisible">
    <router-link v-if="content" :to="`/works/${id}`" class="card has-content">
      <img :src="image" :alt="title">
      <div class="card-content">
        <p>{{ title }}</p>
        <p v-if="year">{{ year }}</p>
        <p class="category-tag">{{ category }}</p>
      </div>
    </router-link>
    <div v-else class="card">
      <img :src="image" :alt="title">
      <div class="card-content">
        <p>{{ title }}</p>
        <p v-if="year">{{ year }}</p>
        <p class="category-tag">{{ category }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    id: {
      type: String,
      required: true
    },
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
    category: {
      type: String,
      required: true
    },
    selectedCategory: {
      type: String,
      default: 'all'
    },
    content: {
      type: String,
      default: ''
    }
  },
  computed: {
    isVisible() {
      return this.selectedCategory === 'all' || this.selectedCategory === this.category;
    }
  }
};
</script>

