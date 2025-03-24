<template>
  <div class="grid-item">
    <img :src="image" :alt="title">
    <div class="grid-item-below">
      <div class="grid-item-texts">
        <p>{{ title }}</p>
        <div class="line"></div>    
        <p>{{ year }}</p>
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

</style>
