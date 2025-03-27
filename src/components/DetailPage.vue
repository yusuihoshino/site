<template>
  <div>
    
    <div class="container">

        <div class="detail-info">
            <router-link :to="{ path: '/works', query: $route.query }" class="back-link">← Back
            </router-link>
            <TitlePage
                :title="work.title"
                :description="work.year"
            />
           
            <hr>
        </div>

        <div class="article-content" v-html="work.content"></div>
    </div>
  </div>
</template>

<script>
import { works } from '@/data/works';
import TitlePage from '@/components/Title.vue';
export default {
  name: 'DetailPage',
  components: {
    TitlePage
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
.article-content{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>

<style>
.article-content{
  p{
    letter-spacing: 0.1em;
  }
  img{
    margin-bottom: 20px;
    border: 1px solid var(--img-gray);
   }
   a{
      text-decoration: underline;
      width: 100%;
      height:70px;
      padding: 20px;
      text-align: center;

      border:solid 1px var(--img-gray);

      &:hover {
        background-color: var(--img-gray);
      }
    }
}
</style>
