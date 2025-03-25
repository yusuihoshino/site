<template>
  <div class="gallery-container container">
    <TitlePage
      title="Works"
      description="作品集"
    />

    <div class="category-filter">
      <button 
        v-for="cat in categories" 
        :key="cat.value"
        :class="{ active: selectedCategory === cat.value }"
        @click="selectedCategory = cat.value"
      >
        {{ cat.label }}
      </button>
    </div>

    <div id="grid">
      <div class="grid-sizer"></div>
      <div class="gutter-sizer"></div>
      <Card
        v-for="work in filteredWorks"
        :key="work.id"
        :id="work.id"
        :title="work.title"
        :image="work.image"
        :year="work.year"
        :category="work.category"
        :content="work.content"
        class="grid-item"
      />
    </div>
  </div>
  <Sidebar />
</template>

<script>
import Card from '@/components/Card.vue';
import Sidebar from '@/components/Sidebar.vue';
import { works } from '@/data/works';
import TitlePage from '@/components/Title.vue';
import { masonryMixin } from '@/assets/scripts/masonry.js';

export default {
  name: 'WorksPage',
  components: {
    Card,
    Sidebar,
    TitlePage
  },
  mixins: [masonryMixin],
  data() {
    return {
      selectedCategory: 'all',
      categories: [
        { value: 'all', label: 'すべて' },
        { value: 'art', label: 'アート' },
        { value: 'drawing', label: 'イラスト' },
        { value: 'photo', label: '写真' },
        { value: 'product', label: 'プロダクト' },
        { value: 'poster', label: 'ポスター' },
        { value: 'modeling', label: 'モデリング' },
        { value: 'logo', label: 'ロゴ' },
        { value: 'other', label: 'その他' }
      ],
      works
    };
  },
  computed: {
    filteredWorks() {
      if (this.selectedCategory === 'all') {
        return this.works;
      }
      return this.works.filter(work => work.category === this.selectedCategory);
    }
  },
  watch: {
    selectedCategory() {
      this.$nextTick(() => {
        if (this.masonry) {
          this.masonry.layout();
        }
      });
    }
  }
};
</script>

<style scoped>

.category-filter {
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  
  text-align: center;
  button {
    padding: 8px 8px;
    /* margin: 0 8px; */
    border: none;
    border-radius: 0px;
    /* background: #f0f0f0; */
    cursor: pointer;
    transition: all 0.3s ease;
    &.active {
        background: #333;
        color: white;
    }
  }
}

.galary-container{
    text-align: center;
    #grid {
        margin: 0 auto;
        .grid-sizer,
        .grid-item {
            display: block;
            width: 49%;
            margin-bottom: 20px;
            display:flex;
            flex-direction: column;
            gap:0;
            @media screen and (max-width: 768px) {
                & {
                    width: 100%;
                    max-width: 100%;
                    margin: 0 auto;
                    margin-bottom: 10px;
                }
            }
            img{
                width: 100%;
                height: auto;
                border:var(--img-gray) 1px solid;
            }
            .grid-item-below{
                font-size:0.8rem;
                display:flex;
                flex-direction: row;
                justify-content: space-between;
                .grid-item-texts{
                    display:flex;
                    justify-content: left;
                    gap:10px;
                    align-items: center;
                    .line{
                        width:1px;
                        height:10px;
                        background:var(--font-white);
                    }
                    
                }
                .arrow{
                    font-weight:300;
                    font-size: 1.2rem;
                    display: inline-block;
                    animation: arrowMove 2s infinite ease-in-out;
                    transform-origin: center;
                }
            }   
            
        }
        .gutter-sizer {
            width: 2%;
        }
        
    }
}


/* Works page styles */
.galery-container {
  padding: 20px;

  .category-filter {
    margin-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    button {
      padding: 8px 16px;
      border: none;
      border-radius: 20px;
      background: #f0f0f0;
      cursor: pointer;
      transition: all 0.3s ease;

      &.active {
        background: #333;
        color: white;
      }
    }
  }
}

</style>