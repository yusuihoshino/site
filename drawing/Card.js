export const Card = {
  props: ['image', 'title', 'year', 'description'],
  template: `
    <a class="card" href="">
      <img :src="image" alt="カード画像" />
      <p>{{ title }}</p>
      <p>{{ year }}</p>
      <p>{{ description }}</p>
    </a>
  `
};