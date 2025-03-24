<template>
  <div class="card">
    <img :src="image" :alt="title">
    <div class="card-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <p class="year">{{ year }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardPage',
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    year: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.card {
  width: 300px;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  height: auto;
  display: block;
}

.card-content {
  padding: 16px;
}

h3 {
  margin: 0 0 8px;
  font-size: 1.2em;
}

p {
  margin: 0;
  color: #666;
}

.year {
  margin-top: 8px;
  font-size: 0.9em;
  color: #999;
}
</style>
