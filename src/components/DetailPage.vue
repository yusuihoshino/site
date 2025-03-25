<template>
  <div id="detail">
    <TitlePage
      :title="work?.title || ''"
      :description="work?.category || ''"
    />
    
    <div class="container">
      <div class="content-wrapper">
        <router-link to="/works" class="back-link">
          <span class="arrow">←</span> 作品一覧に戻る
        </router-link>

        <!-- デバッグ情報 -->
        <div class="debug">
          <p>ID: {{ id }}</p>
          <p>Work found: {{ work ? 'Yes' : 'No' }}</p>
        </div>

        <div class="detail-content" v-if="work">
          <img :src="work.image" :alt="work.title" class="detail-image">
          <div class="detail-info">
            <div class="detail-header">
              <h2>{{ work.title }}</h2>
              <span class="year">{{ work.year }}</span>
            </div>
            <div class="detail-text" v-html="work.content"></div>
          </div>
        </div>
      </div>
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
    }
  },
  computed: {
    work() {
      console.log('Current ID:', this.id);
      console.log('Available works:', works);
      const foundWork = works.find(w => w.id === this.id);
      console.log('Found work:', foundWork);
      return foundWork;
    }
  },
  mounted() {
    console.log('Component mounted with ID:', this.id);
    console.log('Current work:', this.work);
  }
};
</script>

<style scoped>
#detail {
  width: 100%;
  min-height: 100vh;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.content-wrapper {
  margin-top: 80px;
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

    h2 {
      margin: 30px 0 15px;
      font-size: 1.2rem;
      color: var(--font-black);
    }

    p {
      margin: 0 0 15px;
    }

    ul {
      margin: 0;
      padding-left: 20px;
    }

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

/* デバッグ情報のスタイル */
.debug {
  background: #f0f0f0;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  font-family: monospace;
}

.debug p {
  margin: 5px 0;
}
</style>
