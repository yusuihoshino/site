<template>
  <div>
    <div class="home-container container" id="container">
        <div class="section section1">
            <dotlottie-player src="https://lottie.host/cc4feda6-0608-44cc-87ad-ee4f12a69594/WTbWwHiqDM.lottie" background="transparent" speed="1" style="width: 600px; height: 600px" loop autoplay></dotlottie-player>
            <h2>Yusui Hoshino</h2>
            <p>情報学部在学中にUI/UXデザインに出会う。<br>その後、デザイン専門学校に進学し、グラフィックを学ぶ。<br>2025年からIT企業のデザイナーとして勤める。</p>
        </div>

        <div class="section section2">
            <dotlottie-player src="https://lottie.host/19511f07-f096-44a9-9267-5bc172b1f46d/sQRBu7gE61.lottie" background="transparent" speed="1" style="width: 300px; height: 300px" loop autoplay></dotlottie-player>
            <div class="text">
                <h2>Skill →<br>UI/UX Design </h2>
                <ul>
                    <li>できる：Figma, Ai, Ps, Id</li>
                    <li>ちょいできる：Ae, Pr, Unity, Blender, Clip Studio</li>
                    <li>ちょい書ける：HTML/CSS, JS, Processing</li>
                </ul>
            </div>
        </div>
        
        <div class="section section3">
            <dotlottie-player src="https://lottie.host/d83acebb-1cac-4fb4-885d-1ea05f34af9b/Ewr0DRo5gV.lottie" background="transparent" speed="1" style="width: 300px; height: 300px" loop autoplay></dotlottie-player>
            <div class="text">
                <h2>Playfulness</h2>
                <p>遊び心のあるデザインを作りたい。<br>機能性だけのデザインは操作パネルにしかならず、人にとって負担になる。<br>それらに遊び心や情動を捉えたデザインを加えることで、初めて人をポジティブにする存在になると考えている。</p>
            </div>
        </div>
        <div class="section section4">
            <h2>Contact</h2>
            <hr>
            <div class="contact-line">
                <p>email</p>
                <a href="mazisu99@gmailcom">mazisu99@gmail.com</a>
            </div>
            <hr>
            <div class="contact-line">
                <p>X</p>
                <a href="twitter/yusuihoshino">yusuihoshino</a>
            </div>
            <hr>
        </div>
    </div>  
  </div>
  <Sidebar />

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

.home-container{
    margin-top: 0px;
    
    h2{
        margin-bottom: 40px;
    }
    p{
        text-align: left;
    }
    .section{
        padding:0 0 400px;
    }
    .section1{
        dotlottie-player{
            margin:0 auto;
        }
        
        
        max-width: 600px;
        p{
            text-align: center;
        }
        text-align: center;


    }
    .section2, .section3{
        text-align: left;
        display:flex;
        flex-direction: row;
        gap:80px;
        align-items: center;
        dotlottie-player{
            flex:1;
        }
        .text{
            flex:1;
        }
    }
    .section4{
        .contact-line{
            display:flex;
            flex-direction: row;
            justify-content: space-between;
            padding:0 24px;
        }
        a{
            text-decoration: underline;
            text-underline-offset: 4px;
            text-decoration-thickness: 1px;
        }
    }

}

</style>