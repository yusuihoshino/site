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

.article-container{
    display: flex;
    flex-direction: column;
    gap:20px;
    max-width: 600px;
    text-align: left;
     iframe{
        width: 100%;
        height: auto;
        aspect-ratio: 16 / 9;
     }
    a:not(.back-btn){
        text-decoration: underline;
        text-underline-offset: 8px;
        text-decoration-thickness: 1px;
    }
   h2{
    margin-top:40px;
   }
   
    img{
        width:100%;
        border:var(--img-gray) 1px solid;
     }

}


</style>
