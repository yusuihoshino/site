<template>

  <!-- <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link> | -->



  <div class="sidebar opened" id="sidebar">
        <div class="sidebar-left" id="sidebar-left">
            <router-link to="/" class="sidebar-title">Yusui<br>Hoshino</router-link>

            <div class="sidebar-group">
                <router-link to="/history">History</router-link>
                <router-link to="/request">Request</router-link>
                <router-link to="/portfolio">Portfolio</router-link>
                <router-link to="/works">Works</router-link>

            </div>
            

            <div class="sidebar-group">
                <input type="color" id="colorPicker" class="color-picker" value="#ffffff">
                <a href="https://note.com/yusuihoshino" target="_blank" class="link-btn">note</a>
                <a href="https://x.com/yusuihoshino" target="_blank" class="link-btn">X</a>
            </div>  
        </div>
        <div class="sidebar-right">
          <button id="toggleSidebarBtn" class="toggleSidebarBtn">
            |||
          </button>
        </div>
      </div>
</template>

<script>
export default {
  name: 'SiteFooter'
}
</script>

<style scoped>

.sidebar{
    /* background:#ffffff; */
    position:fixed;
    left:0;
    top:0;
    display:flex ;
    flex-direction: row;
    transition: all 0.4s;
    text-align: left;
    z-index: 1000;
    /* サイドバーが閉じている状態 */
    &.closed {
        transform: translateX(-200px);
    }
    .sidebar-right{
        .toggleSidebarBtn{
            /* background:red; */
            background: transparent; /* 背景の灰色を消す */
            border:none;
        }
    }
    .sidebar-left{
        padding: 48px;

        height:100vh;
        width: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 0px 0px 3px rgba(0,0,0,0.2) ;
        font-size: 0.8rem;
        .sidebar-group{
            display: flex;
            flex-direction: column;
            gap:10px;
        
        }
        a{
           
            transition:0.2s all;
            letter-spacing: 0.15rem;
            
            &:hover{
                transform:translateX(10px);
                letter-spacing: 2px;
            }
           
        }
        .sidebar-title{
            /* letter-spacing: 10px; */
            font-weight: 900;
    
        }
        .color-picker {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background: none;
            border: none;
            padding: 0;
            width: 100%;
            height: 30px;
            cursor: pointer;
            transition: transform 0.3s ease;
            
            &:hover {
                transform: scale(1.05);
            }
        
            &::-webkit-color-swatch-wrapper {
                padding: 0;
            }
        
            &::-webkit-color-swatch {
                border: none;
                border-radius: 100px;
                border:solid var(--img-gray) 2px;
            }
            &::-moz-color-swatch {
                border: none;
                border-radius: 100px;
                border:solid var(--img-gray) 2px;
            }
        }
    }
}
</style>
