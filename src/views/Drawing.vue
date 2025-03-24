<template>
  <div>
  <div class="galary-container container" id="container">
    <TitlePage
      title="Drawing"
      description="ドローイング作品"
    />
    <Gallery :items="artworks" />
  </div>
  <Sidebar />
</div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import TitlePage from '@/components/Title.vue';
import Gallery from '@/components/Gallery.vue';

export default {
  name: 'DrawingPage',
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
          year: '2024',
          image: require('@/assets/img/art/ae1.webp')
        },
        {
          title: '作品2',
          year: '2024',
          image: require('@/assets/img/art/ae2.webp')
        },
      ]
    };
  }
};
</script>
