<template>
  <DetailBase>
    <h1>デジタルアート1</h1>
    <p class="year">2024</p>
    <img src="@/assets/img/art/ae1.webp" alt="デジタルアート1">
    <div class="description">
      <h2>作品について</h2>
      <p>After Effectsを使用して制作したデジタルアート作品です。</p>
      <h3>制作のポイント</h3>
      <p>モーショングラフィックスの技法を活用し、動きのある表現を追求しました。</p>
    </div>
  </DetailBase>
</template>

<script>
import DetailBase from '@/components/DetailBase.vue';

export default {
  name: 'Ae1Detail',
  components: {
    DetailBase
  }
};
</script> 