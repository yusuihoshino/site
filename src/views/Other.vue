<template>
  <div class="other-page">
    <h1>Other Projects</h1>
    <div class="projects-grid">
      <div class="project-item" v-for="(project, index) in projects" :key="index">
        <div class="project-content">
          <div class="project-header">
            <h3>{{ project.title }}</h3>
            <span class="project-category">{{ project.category }}</span>
          </div>
          <div class="project-image">
            <img :src="project.image" :alt="project.title">
          </div>
          <div class="project-details">
            <p class="project-description">{{ project.description }}</p>
            <div class="project-meta">
              <span class="project-date">{{ project.date }}</span>
              <a :href="project.link" class="project-link" target="_blank" rel="noopener">
                詳細を見る
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OtherPage',
  data() {
    return {
      projects: [
        {
          title: 'クリエイティブプロジェクト1',
          category: 'Creative',
          description: '革新的なアプローチによる実験的プロジェクト',
          date: '2024/03',
          image: require('@/assets/placeholder.jpg'),
          link: '#'
        },
        {
          title: 'コラボレーションプロジェクト',
          category: 'Collaboration',
          description: 'アーティストとのコラボレーション作品',
          date: '2024/02',
          image: require('@/assets/placeholder.jpg'),
          link: '#'
        },
        {
          title: '実験的プロジェクト',
          category: 'Experimental',
          description: '新しい技術を活用した実験的な取り組み',
          date: '2024/01',
          image: require('@/assets/placeholder.jpg'),
          link: '#'
        }
      ]
    }
  }
}
</script>

<style scoped>
.other-page {
  padding: 20px;
}

h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;
}

.projects-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  justify-content: center;
}

.project-item {
  width: 300px;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.project-content {
  padding: 20px;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

h3 {
  color: #2c3e50;
  margin: 0;
  font-size: 1.2em;
}

.project-category {
  background: #42b983;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8em;
}

.project-image {
  margin: -20px -20px 20px;
}

.project-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-description {
  color: #666;
  font-size: 0.9em;
  line-height: 1.6;
  margin-bottom: 20px;
}

.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9em;
}

.project-date {
  color: #666;
}

.project-link {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
}
</style> 