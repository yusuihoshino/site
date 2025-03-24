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

