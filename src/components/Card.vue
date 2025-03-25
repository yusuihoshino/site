<template>
  <div class="grid-item" v-show="isVisible">
    <router-link v-if="content" :to="`/works/${id}`" class="card has-content">
      <img :src="image" :alt="title">
      <div class="card-content">
        <div class="card-content-left">
          <p>{{ title }}</p>
          <p v-if="year">{{ year }}</p>
          <p class="category-tag">{{ category }}</p>
        </div>  
        <div class="card-content-right">＞</div>
      </div>
    </router-link>

    <div v-else class="card">
      <img :src="image" :alt="title">
      <div class="card-content">
        <div class="card-content-left">
        <p>{{ title }}</p>
        <p v-if="year">{{ year }}</p>
        <p class="category-tag">{{ category }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    year: {
      type: String,
      default: null
    },
    category: {
      type: String,
      required: true
    },
    selectedCategory: {
      type: String,
      default: 'all'
    },
    content: {
      type: String,
      default: ''
    }
  },
  computed: {
    isVisible() {
      return this.selectedCategory === 'all' || this.selectedCategory === this.category;
    }
  }
};
</script>

<style scoped>  

.card{
    &:hover .card-content-right{
        background:gray;
        color:white;
    }
    &.has-content:hover{
      background:rgb(232, 232, 232);
      display:block;

    }

    .card-content{
        display: flex;
        flex-direction: column;
        gap:0;
        margin:0;
    }
    p{
        margin:0;
        font-size:0.8rem;
        line-height: 1.2rem;
        border-bottom:1px solid rgb(205, 205, 205);
        color:gray;
    }
    .card-content{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .card-content-right{
        border:1px solid black;
        width:60px;
        height:60px;
        text-align: center;
        line-height: 60px;
       
    }
    .card-content-left{
        width:100%;
    }
    img{
        border:1px solid rgb(205, 205, 205);
    }
}

@keyframes arrowMove {
    0% {
        transform: translateX(0);
        opacity: 1;
    }
    40% {
        transform: translateX(-10px);
        opacity: 1;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
</style>