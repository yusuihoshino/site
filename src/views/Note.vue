<template>
  <div class="container" id="container">
        <TitlePage
              title="note"
              description="note"
        />
        <div class="content">
            <p>noteにてUI/UXやデザインに関する記事を公開している。</p>
            <a href="https://note.com/yusuihoshino/m/m7ef600473746" target="_blank">note</a>
            <img src="@/assets/img/note.png" alt="note">
        </div>  
   </div>  
</template>




<script>
import TitlePage from '@/components/Title.vue'

export default {
  name: 'PortfolioPage',
  components: {
    TitlePage
  }
};
</script>

<style scoped>
.content{
  padding:100px 0 0;
  a{
    margin:40px 0;
    display:block;
    text-align: center;
    padding:10px 0;
    width: 100%;
    border: 1px solid var(--font-black);
    font-size: 1.2rem;
    transition: all 0.3s ease;
    &:hover{
      background-color: var(--font-black);
      color: var(--font-white);
    }
  }
  img{
    margin-top: 20px;
    width: 100%;
    height: auto;
    margin-bottom: 40px;
  }
}




</style>



