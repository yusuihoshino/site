<template>
  <div class="container" id="container">
        <TitlePage
              title="Portfolio"
              description="ポートフォリオ"
        />
        <div class="content">
        <iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/2dcd7e00fc714453ac5ef86c32b1c6d0" title="PORTFOLIO" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px; width: 100%; height: auto; aspect-ratio: 560 / 395;" data-ratio="1.4177215189873418"></iframe> 
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
}




</style>



