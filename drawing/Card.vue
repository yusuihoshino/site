<template>
    <a class="card" href="">
      <img :src="image" alt="カード画像" />
      <p>{{ title }}</p>
      <p>{{ year }}</p>
      <p>{{ description }}</p>
    </a>
  </template>
  
  <script>
  export default {
    props: ['image', 'title', 'year', 'description'],
  };
  </script>
  
  <style scoped>
  .card {
    /* カードのスタイルをここに記述 */
  }
  </style>


