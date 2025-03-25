<template>
  <div class="title">
    <h2>{{ title }}</h2>
    <h3>{{ description }}</h3>
  </div>
</template>

<script>
export default {
  name: 'TitlePage',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.title {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--bg-gray);
  padding: 20px 0;
  text-align: left;
  width: 100%;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  /* background-color: rgba(245, 245, 245, 0.8); */
  /* border-bottom: 1px solid var(--img-gray); */
  h2 {
    margin: 0;
    font-size: 2rem;
    font-weight: 700;
    color: var(--font-black);
  }
  h3 {
    font-size: 0.8rem;
    letter-spacing: 0.4rem;
    opacity: 0.5;
  }
}

</style>

