<template>
  <div id="app" :class="{ 'sidebar-closed': !isSidebarOpen }">
    <Sidebar @sidebar-toggle="onSidebarToggle" />
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
  },
  data() {
    return {
      isSidebarOpen: true
    }
  },
  methods: {
    onSidebarToggle(isOpen) {
      this.isSidebarOpen = isOpen;
    }
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
