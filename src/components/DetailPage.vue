<template>
  <div>
    
    <div class="container">
        <router-link :to="{ path: '/works', query: $route.query }" class="back-link">
          <span class="arrow">←</span> 作品一覧に戻る
        </router-link>


          <div class="detail-info">
              <h2>{{ work.title }}</h2>
              <span class="year">{{ work.year }}</span>
        </div>
        <div class="detail-text" v-html="work.content"></div>
    </div>
    <Sidebar />
  </div>
</template>

<script>
import { works } from '@/data/works';
import TitlePage from '@/components/Title.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'DetailPage',
  components: {
    TitlePage,
    Sidebar
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
#detail {
  width: 100%;
  min-height: 100vh;
}


.detail-content {
  margin-bottom: 40px;
 
}

.detail-image {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  border: var(--img-gray) 1px solid;
}

.detail-info {
  .detail-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h2 {
      margin: 0;
      font-size: 1.5rem;
      color: var(--font-black);
    }

    .year {
      color: var(--font-white);
      font-size: 0.9rem;
    }
  }

  .detail-text {
    color: var(--font-white);
    line-height: 1.6;
    flex-direction: column;
    gap:100px;


    img {
      width: 100%;
      height: auto;
      margin: 20px 0;
      border: var(--img-gray) 1px solid;
    }
  }
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--font-black);
  text-decoration: none;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  .arrow {
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 768px) {
  .container {
    padding: 10px;
  }

  .content-wrapper {
    margin-top: 60px;
  }

  .detail-info {
    .detail-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
  }
}
</style>
