<template>
  <div class="detail-page">
    <div class="back-button" @click="$router.go(-1)">
      ＜ 戻る
    </div>
    <div class="content">
      <slot></slot>
    </div>
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'DetailBase',
  components: {
    Sidebar
  }
};
</script>

<style scoped>
.detail-page {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.back-button {
  cursor: pointer;
  margin-bottom: 30px;
  font-size: 16px;
  color: #333;
}

.back-button:hover {
  opacity: 0.7;
}

.content {
  margin-top: 20px;
}

/* 共通スタイル */
:deep(img) {
  max-width: 100%;
  height: auto;
  margin: 20px 0;
}

:deep(h1) {
  font-size: 2em;
  margin-bottom: 0.5em;
}

:deep(h2) {
  font-size: 1.5em;
  margin-bottom: 0.5em;
}

:deep(h3) {
  font-size: 1.2em;
  margin-bottom: 0.5em;
}

:deep(p) {
  margin-bottom: 1em;
  line-height: 1.6;
}

:deep(.year) {
  color: #666;
  font-size: 0.9em;
  margin-bottom: 2em;
}

:deep(.description) {
  max-width: 800px;
  margin: 0 auto;
}
</style> 