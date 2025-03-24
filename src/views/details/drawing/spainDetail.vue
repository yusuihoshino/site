<template>
  <DetailBase>
    <h1>スペイン旅行</h1>
    <p class="year">2024</p>
    <img src="@/assets/img/drawing/スペイン.png" alt="スペイン旅行">
    <div class="description">
      <h2>作品について</h2>
      <p>スペイン旅行での思い出をイラストにしました。</p>
      <h3>制作のポイント</h3>
      <p>旅の雰囲気や街並みの特徴を捉えながら、個性的な表現を心がけました。</p>
    </div>
  </DetailBase>
</template>

<script>
import DetailBase from '@/components/DetailBase.vue';

export default {
  name: 'SpainDetail',
  components: {
    DetailBase
  }
};
</script> 