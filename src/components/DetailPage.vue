<template>
  <div>
    
    <div class="container">
      
        <router-link :to="{ path: '/works', query: $route.query }" class="back-link">← 作品一覧に戻る
        </router-link>


        <div class="detail-info">
            <h1 class="detail-title">{{ work.title }}</h1>
            <div class="detail-year">{{ work.year }}</div>
        </div>

        <div class="article-content" v-html="work.content"></div>
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

.detail-info {
  margin-bottom: 20px;

  .detail-title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
    color: var(--font-black);
  }
  .detail-year {

    border-bottom: 1px solid var(--font-black);
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



.back-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--font-black);
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }

  .arrow {
    font-size: 1.2rem;
  }
}
</style>
