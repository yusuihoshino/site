<template>
  <div class="gallery">
    <div class="grid" id="grid">
      <div class="grid-sizer"></div>
      <div class="gutter-sizer"></div>
      <CardPage
        v-for="(item, index) in items"
        :key="index"
        :title="item.title"
        :image="item.image"
        :description="item.description"
        :year="item.year"
        class="grid-item"
      />
    </div>
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
.gallery {
  width: 100%;
  padding: 20px;
}

.grid {
  width: 100%;
}

.grid-sizer,
.grid-item {
  width: calc(33.333% - 20px);
}

.gutter-sizer {
  width: 30px;
}

@media (max-width: 768px) {
  .grid-sizer,
  .grid-item {
    width: calc(50% - 15px);
  }
}

@media (max-width: 480px) {
  .grid-sizer,
  .grid-item {
    width: 100%;
  }
}
</style> 