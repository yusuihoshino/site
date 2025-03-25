<template>
  <div id="grid">
    <div class="grid-sizer"></div>
    <div class="gutter-sizer"></div>
    <CardPage
      v-for="(item, index) in items"
      :key="index"
      :title="item.title"
      :image="item.image"
      :year="item.year"
      :link="item.link"
      class="grid-item"
    />
  </div>
</template>

<script>
import { masonryMixin } from '@/assets/scripts/masonry.js';
import CardPage from '@/components/Card.vue';

export default {
  name: 'Gallery',
  components: {
    CardPage
  },
  mixins: [masonryMixin],
  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    }
  }
};
</script>

<style scoped>

#grid {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 0;

    .grid-sizer,
    .grid-item {
      width: calc(50% - 15px);
      margin-bottom: 30px;
    }

    .gutter-sizer {
      width: 30px;
    }

    @media (max-width: 768px) {
      .grid-sizer,
      .grid-item {
        width: 100%;
        margin-bottom: 20px;
      }
      
      .gutter-sizer {
        width: 0;
      }
    }
  }
}


</style>
