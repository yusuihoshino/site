<template>
  <div class="container" id="container">
        <TitlePage
              title="QR"
              description="QR"
        />
        <div class="content">
            <p>このサイトのQRコードです。</p>
            <img src="@/assets/img/QR.png" alt="QR">
            <p>YusuiHoshino</p>
            <p>https://yusuihoshino.github.io/site/</p>
        </div>  
   </div>  
</template>

<script>
import TitlePage from '@/components/Title.vue'

export default {
  name: 'QRPage',
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



