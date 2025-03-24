<template>
  <div class="art-page">
    <TitlePage
      title="Art"
      description="アート作品"
    />
    <Gallery :items="artworks" />
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import TitlePage from '@/components/Title.vue';
import Gallery from '@/views/Gallery.vue';

export default {
  name: 'ArtPage',
  components: {
    Sidebar,
    TitlePage,
    Gallery
  },
  data() {
    return {
      artworks: [
        {
          title: '作品1',
          description: '作品の説明1',
          year: '2024',
          image: require('@/assets/art/作品1.jpg')
        },
        {
          title: '作品2',
          description: '作品の説明2',
          year: '2024',
          image: require('@/assets/art/作品2.jpg')
        },
        // 他の作品データ...
      ]
    };
  }
};
</script>

<style scoped>
.art-page {
  padding: 20px;
}
</style>
