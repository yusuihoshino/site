<template>
    <div class="article-container container" id="container">
          <TitlePage
                title="Request"
                description="リクエスト"
          />
          <div class="content">
            <h2>Price</h2>
            <p>値段：1,500円 / hour<br>（星野のモチベーションによっては無料でお手伝いします。お気軽にご相談ください。）</p>
            <h2>Plan</h2>
            <ul>
                <li>ロゴ、ポスター、UIデザイン、動画などのデザイン制作</li>
                <li>アイデア出し、UX設計</li>
                <li>ノーコードのサイト制作</li>
                <li>デザイナーとしてチームにジョインしての協力</li>
                <li>デザインレビュー</li>
            </ul>
          </div>
     </div>  
</template>




<script>
import TitlePage from '@/components/Title.vue'

export default {
  name: 'RequestPage',
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

