<template>
  <div class="card" :class="{ 'has-content': content }">
    <router-link 
      v-if="content" 
      :to="{ 
        name: `work-${id}`,
        query: { category: $route.query.category }
      }"
      class="card-link"
    >
      <img :src="image" :alt="title" class="card-image">
      <div class="card-content">
        <h3>{{ title }}<span class="card-click">click</span></h3>
        <p>{{ category }} - {{ year }}</p>
      </div>
    </router-link>
    <div v-else class="card-static">
      <img :src="image" :alt="title" class="card-image">
      <div class="card-content">
        <h3>{{ title }}</h3>
        <p>{{ category }} - {{ year }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardPage',
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
      required: true
    },
    category: {
      type: String,
      required: true
    },
    content: {
      type: String,
      default: null
    }
  }
};
</script>

<style scoped>
.card {
  background: transparent;
  overflow: hidden;
}

.card-click {
  font-size: 0.8rem;
  background: var(--font-black);
  color: var(--font-white);
  font-weight: 300;
  padding: 0 0.5rem;
  margin-left: 0.5rem;
  letter-spacing: 0.1rem;
}

.card.has-content {
  cursor: pointer;
}

.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.card-static {
  display: block;
}

.card-image {
  width: 100%;
  height: auto;
  display: block;
  border: var(--img-gray) 1px solid;
}

.card-content {
  padding: 2px 8px 8px;

  h3 {
    margin: 0;
    font-size: 1.2rem;
    letter-spacing: 0rem;
    color: var(--font-black);
  }

  p {
    margin: 0;
    font-size: 0.8rem;
    line-height: 0.8rem;
    color: var(--font-black);
    opacity: 0.5;
  }
}
</style>