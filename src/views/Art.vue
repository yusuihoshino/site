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
          title: 'デジタルアート1',
          description: 'Adobe After Effectsで制作',
          year: '2024',
          image: require('@/assets/art/ae1.webp'),
          link: 'https://example.com/art1'  // リンク付きの例
        },
        {
          title: 'デジタルアート2',
          description: 'Adobe After Effectsで制作',
          year: '2024',
          image: require('@/assets/art/ae2.webp')  // リンクなしの例
        },
        {
          title: 'デジタルアート3',
          description: 'Adobe After Effectsで制作',
          year: '2023',
          image: require('@/assets/art/ae3.png')
        },
        {
          title: 'デジタルアート4',
          description: 'Adobe After Effectsで制作',
          year: '2023',
          image: require('@/assets/art/ae4.png'),
          link: 'https://example.com/art4'  // リンク付きの例
        },
        {
          title: 'デジタルアート5',
          description: 'Adobe After Effectsで制作',
          year: '2023',
          image: require('@/assets/art/ae5.png')
        },
        {
          title: 'デジタルアート6',
          description: 'Adobe After Effectsで制作',
          year: '2023',
          image: require('@/assets/art/ae6.webp')
        },
        {
          title: 'Processing作品1',
          description: 'Processingで制作',
          year: '2023',
          image: require('@/assets/art/p5-1.webp')
        },
        {
          title: 'Processing作品2',
          description: 'Processingで制作',
          year: '2023',
          image: require('@/assets/art/p5-2.png')
        },
        {
          title: 'ジャケットデザイン',
          description: 'CDジャケットデザイン',
          year: '2024',
          image: require('@/assets/art/ジャケット.webp')
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
