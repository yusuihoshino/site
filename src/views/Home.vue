<template>
  <div class="about-page">
    <div class="content">
      <h1>Home</h1>
      <p>This is the about page.</p>
      <div class="about-content">
        <h2>Our Story</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <h2>Our Mission</h2>
        <p>aaaUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  <Sidebar />

</div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
name: 'HomePage',
components: {
  Sidebar
}
};
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.content {
  flex: 1;
  padding: 20px;
  margin-bottom: 40px;
}

.about-content {
  max-width: 800px;
  margin: 30px auto;
  text-align: left;
}

h1 {
  color: #2c3e50;
  margin-bottom: 20px;
}

h2 {
  color: #2c3e50;
  margin-top: 30px;
}

p {
  line-height: 1.6;
  color: #34495e;
}
</style>