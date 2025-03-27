<template>
  <nav class="sidebar" :class="{ 'open': isMenuOpen }" id="sidebar-left">
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
  </nav>
</template>

<script>
export default {
  name: 'SideNavbar',
  props: {
    isMenuOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpen: true,
      currentColor: localStorage.getItem('theme-color') || '#ffffff'
    }
  },
  created() {
    // 保存された色があればそれを、なければデフォルトの白を使用
    const savedColor = localStorage.getItem('theme-color') || '#ffffff';
    this.currentColor = savedColor;
    
    // ページ読み込み時に保存された色を適用（ファビコンも含めて）
    this.applyThemeColor(savedColor);
    
    // 初回読み込み時にもファビコンを更新
    this.updateFavicon(savedColor);
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
      style.setProperty('--bg', color); // 背景色を--bgで設定

      if (theme === 'dark') {
        style.setProperty('--font-black', '#ffffff');
        style.setProperty('--font-white', '#000000');
        style.setProperty('--img-gray', '#999999');
      } else {
        style.setProperty('--font-black', '#333333');
        style.setProperty('--font-white', '#ffffff');
        style.setProperty('--img-gray', '#dddddd');
      }

      // ファビコンの色を変更
      this.updateFavicon(color);
    },
    updateFavicon(color) {
      // SVGファビコンを作成
      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="16" fill="${color}"/>
        </svg>
      `;

      // SVGをBase64エンコード
      const base64 = btoa(svg);
      
      // 既存のファビコンを探す
      let favicon = document.querySelector('link[rel="icon"]');
      
      // ファビコンが存在しない場合は新規作成
      if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        document.head.appendChild(favicon);
      }
      
      // ファビコンを更新
      favicon.type = 'image/svg+xml';
      favicon.href = `data:image/svg+xml;base64,${base64}`;
    }
  }
}
</script>

<style scoped>

/* モバイル表示時のスタイル */


.sidebar {
  width: 200px;
  height: 100vh;
  height: 100dvh;
  position: fixed;
  left: 0;
  top: 0;
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 0px 3px var(--img-gray);
  background-color: var(--bg);
  font-size: 0.8rem;

  .sidebar-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  a {
      color: var(--font-black);
      transition: all 0.2s ease;
      letter-spacing: 0.15rem;

      &:hover {
        transform: translateX(10px);
        letter-spacing: 2px;
      }
    }

  .sidebar-title {
    font-weight: 900;
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
/* スマホサイズ 767px以下*/
@media (max-width:999px) {
  .sidebar {
    transform: translateX(-100%);
    /* width: 100%; */
    transition: transform 0.3s ease;
    z-index: 999;
    a{
      font-size: 1.2rem;
    }
  }

  .sidebar.open {
    transform: translateX(0);
  }
}

/* PC表示時のスタイル 768px以上*/
@media (min-width: 1000px) {
  /* .sidebar {
    transform: none;
  } */
}
</style>
