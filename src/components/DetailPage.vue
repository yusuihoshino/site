<template>
  <div>
    
    <div class="container">

        <div class="detail-info">
            <h1 class="detail-title">{{ work.title }}</h1>
            <div class="detail-year">{{ work.year }}</div>
            <router-link :to="{ path: '/works', query: $route.query }" class="back-link">← 作品一覧に戻る
            </router-link>
            <hr>
        </div>

        <div class="content" v-html="work.content"></div>
    </div>
  </div>
</template>

<script>
import { works } from '@/data/works';

export default {
  name: 'DetailPage',
  components: {
  },
  props: {
    id: {
      type: String,
      required: true
    },
    category: {
      type: String,
      default: 'all'
    }
  },
  computed: {
    work() {
      return works.find(w => w.id === this.id);
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--font-black);
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }

}
.detail-info {
  margin: 40px 0;
  /* border-top: 1px solid var(--font-black); */

  .detail-title {
    font-size: 3rem;
    font-weight: 300;
    margin-bottom: 10px;
    color: var(--font-black);
  }
  .detail-year {
    margin-bottom: 20px;
  }
}
.content{
  color:red;
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* h2{
    margin-top: 400px;
  } */
}



</style>
