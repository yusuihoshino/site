<template>

  <div class="grid-item">
      <img :src="image" :alt="title">
      <div class="grid-item-below">
        <div class="grid-item-texts">
          <p>{{ title }}</p>
          <div class="line"></div>    
          <p>{{year}}</p> 
      </div>
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
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.card-image img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.card-content {
  padding: 20px;
}

h3 {
  color: #2c3e50;
  margin: 0 0 10px;
  font-size: 1.2em;
}


.card-year {
  color: #42b983;
  font-size: 0.8em;
  margin-bottom: 10px;
}

.card-meta {
  margin-top: 10px;
}
</style>
