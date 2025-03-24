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

