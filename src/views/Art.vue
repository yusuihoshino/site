<template>
  <div>
    <TitlePage
        title="Art Gallery"
        description="アート"
    />

    <div class="grid">
      
      <CardPage
        v-for="(w, index) in works"
        :key="index"
        :title="w.title"
        :image="w.image"
        :year="w.year"
      >
      </CardPage>
    </div>
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import CardPage from '@/components/Card.vue'
import TitlePage from '@/components/Title.vue'
export default {
  name: 'ArtPage',
  components: {
    Sidebar,
    CardPage,
    TitlePage
  },
  data() {
    return {
      works: [
        {
          title: '抽象画1',
          year: '2024',
          image: require('@/assets/art/ae1.webp')
        },
        {
          title: 'b',
          year: '2024',
          image: require('@/assets/art/ae2.webp')
        },
        {
          title: 'デジタルアート1',
          year: '2023',
          image: require('@/assets/art/ae3.png')
        },
      ]
    }
  }
}
</script>

<style scoped>
/* .art-page {
  padding: 20px;
} */

h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  justify-content: center;
}

.art-year {
  color: red;
  font-size: 0.8em;
}
</style> 