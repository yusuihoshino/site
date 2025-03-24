<template>
  <div class="modeling-page">
    <h1>3D Modeling</h1>
    <div class="modeling-grid">
      <div class="modeling-item" v-for="(model, index) in models" :key="index">
        <div class="model-preview">
          <img :src="model.preview" :alt="model.title">
        </div>
        <div class="model-details">
          <h3>{{ model.title }}</h3>
          <p class="model-description">{{ model.description }}</p>
          <div class="model-info">
            <span class="model-software">{{ model.software }}</span>
            <span class="model-polygons">{{ model.polygons }} polygons</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModelingPage',
  data() {
    return {
      models: [
        {
          title: 'キャラクターモデル',
          description: 'ゲーム用3Dキャラクター',
          software: 'Blender',
          polygons: '10K',
          preview: require('@/assets/placeholder.jpg')
        },
        {
          title: '建築モデル',
          description: '未来的な建築物の3Dモデル',
          software: 'Maya',
          polygons: '50K',
          preview: require('@/assets/placeholder.jpg')
        },
        {
          title: 'プロップモデル',
          description: 'ゲーム用小物3Dモデル',
          software: '3ds Max',
          polygons: '5K',
          preview: require('@/assets/placeholder.jpg')
        }
      ]
    }
  },
  methods: {
    viewModel(model) {
      // 3Dビューワーを開くロジックをここに実装
      console.log('View 3D model:', model);
    }
  }
}
</script>

<style scoped>
.modeling-page {
  padding: 20px;
}

h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;
}

.modeling-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  justify-content: center;
}

.modeling-item {
  width: 300px;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.model-preview img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.model-details {
  padding: 20px;
}

h3 {
  color: #2c3e50;
  margin: 0 0 10px;
}

.model-description {
  color: #666;
  font-size: 0.9em;
  line-height: 1.6;
  margin-bottom: 15px;
}

.model-info {
  display: flex;
  justify-content: space-between;
  font-size: 0.8em;
  color: #42b983;
}

.model-software,
.model-polygons {
  background: #f0f0f0;
  padding: 4px 8px;
  border-radius: 4px;
}
</style> 