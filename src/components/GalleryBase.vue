<template>
  <div>
    <div class="galary-container container" id="container">
      <TitlePage
        :title="pageTitle"
        :description="pageDescription"
      />
      <Gallery>
        <Card
          v-for="artwork in artworks"
          :key="artwork.id"
          :title="artwork.title"
          :image="artwork.image"
          :year="artwork.year"
          :link="artwork.link"
        />
      </Gallery>
    </div>
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import TitlePage from '@/components/Title.vue';
import Gallery from '@/components/Gallery.vue';
import Card from '@/components/Card.vue';
import { detailRoutes } from '@/router';

export default {
  name: 'GalleryBase',
  components: {
    Sidebar,
    TitlePage,
    Gallery,
    Card
  },
  props: {
    pageTitle: {
      type: String,
      required: true
    },
    pageDescription: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true,
      validator: function(value) {
        return ['art', 'drawing', 'photo'].includes(value);
      }
    }
  },
  data() {
    return {
      artworks: detailRoutes[this.category].map(item => ({
        ...item,
        year: '2024'
      }))
    };
  }
};
</script>

<style scoped>
.galary-container {
  padding: 20px;
}
</style> 