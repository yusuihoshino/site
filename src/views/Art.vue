<template>
<div>
   <div class="galary-container container" id="container">
    <TitlePage
      title="Art"
      description="アート作品"
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
          title: 'デジタルアート1',
          year: '2024',
          image: require('@/assets/img/art/ae1.webp'),
          link: '/drawing/SpainRyokou'
        },
        {
          title: 'デジタルアート2',
          year: '2024',
          image: require('@/assets/img/art/ae2.webp'),
        },
        {
          title: 'デジタルアート3',
          year: '2023',
          image: require('@/assets/img/art/ae3.png'),
        },
        {
          title: 'デジタルアート4',
          year: '2023',
          image: require('@/assets/img/art/ae4.png'),
        },
        {
          title: 'デジタルアート5',
          year: '2023',
          image: require('@/assets/img/art/ae5.png')
        },
        {
          title: 'デジタルアート6',
          year: '2023',
          image: require('@/assets/img/art/ae6.webp')
        },
        {
          title: 'Processing作品1',
          year: '2023',
          image: require('@/assets/img/art/p5-1.webp'),
        },
        {
          title: 'Processing作品2',
          year: '2023',
          image: require('@/assets/img/art/p5-2.png'),
        },
        {
          title: 'ジャケットデザイン',
          year: '2024',
          image: require('@/assets/img/art/ジャケット.webp'),
        }
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
