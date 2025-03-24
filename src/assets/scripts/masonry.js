/* global Masonry, imagesLoaded */

export function initMasonry(gridElement) {
  if (!gridElement) return;

  const masonry = new Masonry(gridElement, {
    percentPosition: true,
    columnWidth: '.grid-sizer',
    itemSelector: '.grid-item',
    gutter: '.gutter-sizer',
    transitionDuration: '0.2s',
    initLayout: true
  });

  // 画像が読み込まれた後にレイアウトを更新
  imagesLoaded(gridElement).progress(() => {
    masonry.layout();
  });

  return masonry;
}

// Vueミックスイン
export const masonryMixin = {
  mounted() {
    this.$nextTick(() => {
      const grid = this.$el.querySelector('.grid');
      if (grid) {
        // 画像の読み込みを待ってからMasonryを初期化
        imagesLoaded(grid, () => {
          this.masonry = initMasonry(grid);
        });
      }
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