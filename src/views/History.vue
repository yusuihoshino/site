<template>
<div class="container" id="container">
        <TitlePage
              title="History"
              description="履歴"
        />

        <div class="history-section">
            <div class="history-left">
                <h2>会津大学<br>コンピュータ理工<br>学部</h2>
                <div class="duration-year">
                    <div>2019</div>
                    <div class="line"></div>
                    <div>2022</div>
                </div>
            </div>
            <div class="history-right">
                <h3>3年からUI/UXデザインに取りくむ</h3>
                <div class="year">2019</div>         
                <ul>
                    <li>成績優秀賞2位（約230名中）</li>
                </ul>
                <div class="year">2020</div>            
                <ul>
                    <li>成績優秀賞1位（約230名中）</li>
                </ul>
                <div class="year">2021</div>            
                <ul>
                    <li>手芸同好会サークル 部長</li>
                    <li>JPHACKS</li>
                    <li><a target="_blank" href="https://note.com/spurcle_tohoku/m/m6789b87b4470">TOHOKU GRROWTH Accelerator</a> (Growth Course)</li>
                </ul>
                <div class="year">2022</div>            
                <ul>
                    <li>Open Hack U 2021 Online Vol.3</li>
                    <li><a href="https://www.yumemi.co.jp/" target="_blank">Yumemi</a> Spring Design Internship 2022</li>
                    <li><a href="https://100program.jp/" target="_blank">100 Program</a> 1期</li>
                    <li><a href="https://100program.jp/" target="_blank">100 Program</a> 2期 モバイルアプリ賞</li>
                    <li>株式会社Codephiliaに共同創業者として参加</li>
                </ul>
            </div>
        </div>

        <div class="history-section">
            <div class="history-left">
                <h2>専門学校<br>
                    日本デザイナー<br>
                    学院</h2>
                <div class="duration-year">
                    <div>2023</div>
                    <div class="line"></div>
                    <div>2024</div>
                </div>
            </div>
            <div class="history-right">
                <h3>デザインを学ぶために専門学校へ進学</h3>
                <div class="year">2023</div>         
                <ul>
                    <li>前期 期末試験 奨励賞</li>
                    <li>後期 期末試験 奨励賞</li>
                    <li><a href="https://aizu-startups-foundation.com/aotake/top" target="_blank">アオタケプロジェクト</a>参加チームメンバ</li>
                </ul>
                <div class="year">2024</div>            
                <ul>
                    <li>準特待生</li>
                    <li>卒業制作 奨励賞</li>
                    <li>グラフィックデザイン科  優秀賞</li>
                    <li><a href="https://100program.jp/" target="_blank">100 Program</a> 優秀アプリ賞</li>
                    <li>デザインを担当したアプリ<a href="https://apps.apple.com/jp/app/mooo/id6472037030">mooo</a>がApp Storeにて公開</li>
                    <li>デザインを担当したアプリ<a href="">琥珀日記</a>が公開</li>
                    
                </ul>
            </div>
        </div>
        <div class="history-section">
            <div class="history-left">
                <h2>IT企業<br>デザイナー</h2>
                <div class="duration-year">
                    <div>2025</div>
                    <div class="line"></div>
                    <div>???</div>
                </div>
            </div>
            <div class="history-right">
                <h3>???</h3>
                <div class="year">2025</div>         
                <ul>
                    <li>???</li>
                </ul>
            </div>
        </div>

    </div>  
</template>




<script>
import TitlePage from '@/components/Title.vue'

export default {
  name: 'HistoryPage',
  components: {
    TitlePage
  }
};
</script>


<style scoped>


    
    
   
    .history-section{
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap:80px;
        padding:100px 0 0;
        h2{
            margin-top:0;
        }
        .history-left{
            text-align: right;
            flex:1;
            h2{
                font-size: 2rem;
            }
            .duration-year{
                display:flex;
                flex-direction: row;
                justify-content: right;
                align-items: center;
                gap:8px;
                letter-spacing: 0.1rem;
                .line{
                    width:80px;
                    height:1px;
                    background:var(--font-black);
                }
            }
            
        }
        .history-right{
            display: flex;
            flex-direction: column;
            gap:0px;
            text-align: left;
            flex:1;
            
            .sub-title{
                font-size:1rem;
            }
            ul{
                margin: 0 0 0 -20px;
                a{
                
                    text-decoration: underline;
                    text-underline-offset: 4px;
                    text-decoration-thickness: 1px;
                }

            }
            .year{
                letter-spacing: 0.1rem;
                font-weight: 500;
                margin-top:16px;
            }
        }
        
    }
</style>


