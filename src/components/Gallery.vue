<template>
  <div class="gallery">
    <div class="grid">
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
  margin: 0 auto;
}

.grid-sizer,
.grid-item {
  width: 45%;  /* 2列レイアウトのための幅設定 */
}

.gutter-sizer {
  width: 5%;  /* 列間の余白 */
}

.grid-item {
  margin-bottom: 30px;
  background: #fff;
}

@media (max-width: 768px) {
  .grid-sizer,
  .grid-item {
    width: 100%;  /* モバイル表示時は1列に */
  }
  
  .gutter-sizer {
    width: 0;
  }
}
</style>
