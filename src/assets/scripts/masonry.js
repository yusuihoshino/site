/* global Masonry, imagesLoaded */

export const masonryMixin = {
  data() {
    return {
      masonry: null
    };
  },

  mounted() {
    this.$nextTick(() => {
      const grid = document.getElementById('grid');
      if (!grid) return;

      this.masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
        percentPosition: true,
        transitionDuration: '0.2s'
      });

      // 画像が読み込まれた後にレイアウトを更新
      imagesLoaded(grid, () => {
        this.masonry.layout();
      });
    });
  },

  updated() {
    this.$nextTick(() => {
      if (this.masonry) {
        this.masonry.layout();
      }
    });
  },

  beforeDestroy() {
    if (this.masonry) {
      this.masonry.destroy();
    }
  }
};