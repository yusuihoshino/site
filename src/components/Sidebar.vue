<template>
  <div class="sidebar" :class="{ 'closed': !isOpen }" id="sidebar">
        <div class="sidebar-left" id="sidebar-left">
            <router-link to="/" class="sidebar-title">Yusui<br>Hoshino</router-link>

            <div class="sidebar-group">
                <router-link to="/history">History</router-link>
                <router-link to="/request">Request</router-link>
                <router-link to="/portfolio">Portfolio</router-link>
                <router-link to="/works">Works</router-link>

            </div>
            

            <div class="sidebar-group">
                <input 
                  type="color" 
                  id="colorPicker" 
                  class="color-picker" 
                  :value="currentColor"
                  @input="handleColorChange"
                >
                <a href="https://note.com/yusuihoshino" target="_blank" class="link-btn">note</a>
                <a href="https://x.com/yusuihoshino" target="_blank" class="link-btn">X</a>
            </div>  
        </div>
        <div class="sidebar-right">
          <button id="toggleSidebarBtn" class="toggleSidebarBtn" @click="toggleSidebar">
            |||
          </button>
        </div>
      </div>
</template>

<script>
export default {
  name: 'SiteFooter',
  data() {
    return {
      isOpen: true,
      currentColor: localStorage.getItem('theme-color') || '#ffffff'
    }
  },
  created() {
    // ページ読み込み時に保存された色を適用
    this.applyThemeColor(this.currentColor);
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
      this.$emit('sidebar-toggle', this.isOpen);
    },
    handleColorChange(event) {
      const color = event.target.value;
      this.currentColor = color;
      this.applyThemeColor(color);
      localStorage.setItem('theme-color', color);
    },
    applyThemeColor(color) {
      // 色の明るさを計算
      const r = parseInt(color.substr(1,2), 16);
      const g = parseInt(color.substr(3,2), 16);
      const b = parseInt(color.substr(5,2), 16);
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;

      // 明るさに基づいてテーマを切り替え
      const theme = brightness > 128 ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', theme);

      // CSSカスタムプロパティを更新
      const style = document.documentElement.style;
      if (theme === 'dark') {
        style.setProperty('--font-black', '#ffffff');
        style.setProperty('--font-white', '#dddddd');
        style.setProperty('--img-gray', '#999999');
      } else {
        style.setProperty('--font-black', '#333333');
        style.setProperty('--font-white', '#666666');
        style.setProperty('--img-gray', '#dddddd');//明るい時の画像とサイドバーの色
      }

      // 背景色を設定
      document.body.style.backgroundColor = color;
    }
  }
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: row;
  transition: all 0.4s;
  text-align: left;
  z-index: 1000;

  &.closed {
    transform: translateX(-200px);
  }

  .sidebar-right {
    .toggleSidebarBtn {
      background: transparent;
      border: none;
      color: var(--font-black);
      transition: color 0.4s ease;
    }
  }

  .sidebar-left {
    padding: 48px;
    height: 100vh;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: var(--card-bg);
    box-shadow: 0px 0px 3px var(--img-gray);
    font-size: 0.8rem;

    .sidebar-group {
      display: flex;
      flex-direction: column;
      gap: 10px;

      a {
        color: var(--font-black);
        transition: all 0.2s ease;
        letter-spacing: 0.15rem;

        &:hover {
          transform: translateX(10px);
          letter-spacing: 2px;
        }
      }
    }

    .sidebar-title {
      font-weight: 900;
      color: var(--font-black);
      transition: color 0.4s ease;
    }

    .color-picker {
      width: 30px;
      height: 30px;
      padding: 0;
      border: none;
      border-radius: 100px;
      overflow: hidden;
      cursor: pointer;

      &::-webkit-color-swatch-wrapper {
        padding: 0;
      }

      &::-webkit-color-swatch {
        border: none;
        border-radius: 100px;
        border: solid var(--font-black) 1px;
      }

      &::-moz-color-swatch {
        border: none;
        border-radius: 100px;
        border: solid var(--font-black) 1px;
      }
    }
  }
}
</style>
