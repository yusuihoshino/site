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
  animation: scaleIn 0.6s ease-out forwards;
  transform-origin: center;
  h3{
    opacity: 0.5;
  }
}

@keyframes scaleIn {
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>

