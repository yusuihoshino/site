<template>
  <div class="drawing-page">
    <TitlePage
      title="Drawing"
      description="ドローイング"
    />
    <div class="drawing-grid">
      <CardPage
        v-for="(work, index) in works"
        :key="index"
        :title="work.title"
        :image="work.image"
        :description="work.description"
        :year="work.year"
      />
    </div>
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import CardPage from '@/components/Card.vue'
import TitlePage from '@/components/Title.vue'

export default {
  name: 'DrawingPage',
  
  components: {
    Sidebar,
    CardPage,
    TitlePage
  },

  data() {
    return {
      works: [
        {
          title: '日本',
          description: '和風イラスト',
          year: '2024',
          image: require('@/assets/drawing/日本.png')
        },
        {
          title: '蝶',
          description: '蝶のイラスト',
          year: '2024',
          image: require('@/assets/drawing/蝶.png')
        },
        {
          title: '笑顔',
          description: '笑顔の女の子',
          year: '2024',
          image: require('@/assets/drawing/笑顔.png')
        },
        {
          title: '紫',
          description: '紫のキャラクター',
          year: '2024',
          image: require('@/assets/drawing/紫.jpg')
        },
        {
          title: 'りんご',
          description: 'りんごのイラスト',
          year: '2024',
          image: require('@/assets/drawing/りんご.png')
        },
        {
          title: 'モデル',
          description: 'ファッションイラスト',
          year: '2024',
          image: require('@/assets/drawing/モデル.png')
        },
        {
          title: 'ピンク',
          description: 'ピンクのキャラクター',
          year: '2024',
          image: require('@/assets/drawing/ピンク.png')
        },
        {
          title: 'ツインテール',
          description: 'ツインテールの女の子',
          year: '2024',
          image: require('@/assets/drawing/ツインテール.png')
        },
        {
          title: 'スペイン',
          description: 'スペインの風景',
          year: '2024',
          image: require('@/assets/drawing/スペイン.png')
        },
        {
          title: 'シューズ',
          description: '靴のイラスト',
          year: '2024',
          image: require('@/assets/drawing/シューズ.png')
        },
        {
          title: 'コップ',
          description: 'コップのイラスト',
          year: '2024',
          image: require('@/assets/drawing/コップ.png')
        }
      ]
    }
  }
}
</script>

<style scoped>
.drawing-page {
  padding: 20px;
}

.drawing-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  justify-content: center;
}

h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;
}

.art-year {
  color: red;
  font-size: 0.8em;
}
</style> 