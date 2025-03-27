<template>
  <div>
    
    <div class="container">

        <div class="detail-info">
            <router-link :to="{ path: '/works', query: $route.query }" class="back-link">← Back
            </router-link>

            <h1 class="detail-title">{{ work.title }}</h1>
            <div class="detail-items">
              <div v-if="work.year" class="detail-item">
                <span class="detail-item-title">When</span>{{ work.year }}
              </div>
              <div v-if="work.type" class="detail-item">
                <span class="detail-item-title">Type</span>{{ work.type }}
              </div>
              <div v-if="work.asign" class="detail-item">
                <span class="detail-item-title">Asign</span>{{ work.asign }}
              </div>
            </div>
        </div>

        <div class="article-content" v-html="work.content"></div>
    </div>
  </div>
</template>

<script>
import { works } from '@/data/works';
// import TitlePage from '@/components/Title.vue';
export default {
  name: 'DetailPage',
  components: {
    // TitlePage
  },
  props: {
    id: {
      type: String,
      required: true
    },
    category: {
      type: String,
      default: 'all'
    },
    type: {
      type: String,
      default: ''
    },
    asign: {
      type: String,
      default: ''
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
 hr{
  size: 0.5px;
 }
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
  .detail-items{
    border-left: 0.5px solid var(--font-black);
    padding: 20px 0px 20px 30px;
    margin: 80px 0 40px;

  .detail-item {
    .detail-item-title {
    font-size: 0.9rem;
    font-weight: 400;
    margin-right: 20px;
    display:inline-block;
    width:40px;
    text-align: right;
    letter-spacing: 0.1em;
    }
  }

  }

}
.article-content{
  display: flex;
  flex-direction: column;
  gap: 40px;
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
