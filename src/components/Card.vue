<template>
  <div class="grid-item">
    <router-link v-if="link" :to="link">
      <img :src="image" :alt="title">
      <div class="grid-item-below">
        <div class="grid-item-texts">
          <p>{{ title }}</p>
          <div class="line"></div>    
          <p class="year">{{ year }}</p>
        </div>
        <p class="arrow">＞</p>
      </div>
    </router-link>
    <div v-else>
      <img :src="image" :alt="title">
      <div class="grid-item-below">
        <div class="grid-item-texts">
          <p>{{ title }}</p>
          <div class="line"></div>    
          <p class="year">{{ year }}</p>
        </div>
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
      required: true
    },
    link: {
      type: String,
      default: null
    }
  }
};
</script>

<style scoped>
.grid-item {
  width: 100%;
  margin-bottom: 20px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.grid-item img {
  width: 100%;
  height: auto;
  display: block;
}

.grid-item-below {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.grid-item-texts {
  flex-grow: 1;
}

.grid-item-texts p {
  margin: 0;
  font-size: 14px;
}

.grid-item-texts .year {
  color: #666;
  font-size: 12px;
  margin-top: 5px;
}

.line {
  width: 20px;
  height: 1px;
  background-color: #000;
  margin: 8px 0;
}

.arrow {
  margin: 0;
  font-size: 18px;
  color: #000;
}

a {
  text-decoration: none;
  color: inherit;
  display: block;
}

a:hover {
  opacity: 0.8;
}
</style>
