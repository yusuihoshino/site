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
  transition: all 0.3s ease-in-out;
  color: var(--font-black);
  animation: slideIn 0.6s ease-out forwards;
  transform: translateX(-20px);
  opacity: 0;
}

@keyframes slideIn {
  0% {
    transform: translateX(30px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.title h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
}

.title h3 {
  font-size: 0.8rem;
  letter-spacing: 0.4rem;
  opacity: 0.5;
}
</style>

