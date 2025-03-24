<template>
  <div class="grid-item" >
    <a v-if="link"
       
       :href="link" 
       target="_blank" 
       rel="noopener noreferrer">
      <img :src="image" :alt="title">
      <div class="grid-item-below">
        <div class="grid-item-texts">
          <p>{{ title }}</p>
          <div class="line"></div>    
          <p class="year">{{ year }}</p>
        </div>
        <p class="arrow">＞</p>
      </div>
    </a>
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
    },
    link: {
      type: String,
      default: ''
    }
  }
}
</script>

