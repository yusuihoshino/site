<template>
  <div id="app">
    <Sidebar />
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Sidebar
  }
};
</script>

<style scoped>
.main-content {
  width: 100%;
  min-height: 100vh;
}

#app {
  display: flex;
  min-height: 100vh;
}
</style>
