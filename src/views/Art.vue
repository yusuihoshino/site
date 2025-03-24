<template>
  <GalleryBase
    pageTitle="Art"
    pageDescription="デジタルアート作品"
    category="art"
  />
</template>

<script>
import GalleryBase from '@/components/GalleryBase.vue';

export default {
  name: 'ArtPage',
  components: {
    GalleryBase
  }
};
</script>

<style scoped>
.art-page {
  padding: 20px;
}
</style>
