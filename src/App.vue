<template>
  <div id="app" :class="{ 'menu-open': isMenuOpen }">
    <button class="hamburger" @click="toggleMenu" aria-label="メニュー">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <SideNavbar :is-menu-open="isMenuOpen" @close-menu="closeMenu" />
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import SideNavbar from '@/components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    SideNavbar
  },
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
};
</script>

<style scoped>
.main-content {
  width: 100%;
  min-height: 100vh;
}

#app {
  display: flex;
  min-height: 100vh;
}

.hamburger {
  display: none; /* PCでは非表示 */
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
  width: 30px;
  height: 24px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 1.5px;
  background-color: var(--font-black);
  position: absolute;
  transition: all 0.3s;
}

.hamburger span:nth-child(1) { top: 0; }
.hamburger span:nth-child(2) { top: 11px; }
.hamburger span:nth-child(3) { bottom: 0; }

/* メニューオープン時のハンバーガーアイコン */
.menu-open .hamburger span:nth-child(1) {
  transform: translateY(11px) rotate(45deg);
}
.menu-open .hamburger span:nth-child(2) {
  opacity: 0;
}
.menu-open .hamburger span:nth-child(3) {
  transform: translateY(-11px) rotate(-45deg);
}

/* モバイル表示時のスタイル */
@media (max-width: 767px) {
  .hamburger {
    display: block;
  }

  .main-content {
    padding-top: 60px; /* ハンバーガーメニューの高さ分 */
  }

  /* メニューオープン時 */
  /* メニューオープン時はメインコンテンツを非表示 */
  .menu-open .main-content {
    /* display: none;  */
  }
}
</style>
