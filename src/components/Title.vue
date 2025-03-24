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
    },
  }
}
</script>

