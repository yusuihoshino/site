<template>
  <div class="article-container container" v-if="work">
    <h1>{{ work.title }}</h1>
    <p class="category-tag">{{ work.category }}</p>
    <p class="year">{{ work.year }}</p>
    <img :src="work.image" :alt="work.title">
    
    <!-- HTMLコンテンツを表示 -->
    <div v-if="work.content" v-html="work.content" class="work-content"></div>

    <router-link to="/works" class="back-button">
      ← 作品一覧に戻る
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'DetailPage',
  props: {
    work: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.article-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

h1 {
  margin: 0 0 20px 0;
  font-size: 2.5em;
}

.category-tag {
  display: inline-block;
  padding: 4px 12px;
  background: #f0f0f0;
  border-radius: 20px;
  margin: 0 10px;
}

.year {
  color: #666;
  margin: 10px 0;
}

img {
  width: 100%;
  max-width: 800px;
  height: auto;
  margin: 0 auto;
  display: block;
  border-radius: 8px;
}

/* HTMLコンテンツのスタイル */
.work-content {
  max-width: 800px;
  margin: 40px auto;
}

.work-content :deep(h2) {
  font-size: 1.8em;
  margin: 30px 0 15px;
  color: #333;
}

.work-content :deep(p) {
  line-height: 1.8;
  margin: 15px 0;
  color: #444;
}

.work-content :deep(ul) {
  list-style-type: disc;
  padding-left: 20px;
  margin: 15px 0;
}

.work-content :deep(li) {
  margin: 8px 0;
  color: #555;
}

.work-content :deep(img) {
  width: 100%;
  max-width: 800px;
  height: auto;
  margin: 20px auto;
  display: block;
  border-radius: 8px;
}

.back-button {
  display: inline-block;
  padding: 10px 20px;
  background: #f0f0f0;
  border-radius: 20px;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
  margin-top: 40px;
}

.back-button:hover {
  background: #e0e0e0;
}
</style> 