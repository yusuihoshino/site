/* global Masonry, imagesLoaded */

export function initMasonry(gridElement) {
  if (!gridElement) return;

  const masonry = new Masonry(gridElement, {
    percentPosition: true,
    columnWidth: '.grid-sizer',
    itemSelector: '.grid-item',
    gutter: '.gutter-sizer'
  });

  // 画像が読み込まれた後にレイアウトを更新
  imagesLoaded(gridElement).progress(() => {
    masonry.layout();
  });

  return masonry;
}

// Masonryミックスイン
export const masonryMixin = {
  mounted() {
    this.$nextTick(() => {
      const grid = this.$el.querySelector('.grid');
      if (!grid) return;

      // 画像の読み込みを待ってからMasonryを初期化
      imagesLoaded(grid, () => {
        new Masonry(grid, {
          itemSelector: '.grid-item',
          columnWidth: '.grid-sizer',
          gutter: '.gutter-sizer',
          percentPosition: true
        });
      });
    });
  },

  // コンポーネントが更新されたときにレイアウトを再計算
  updated() {
    this.$nextTick(() => {
      const grid = this.$el.querySelector('.grid');
      if (!grid) return;

      const masonry = new Masonry(grid);
      masonry.layout();
    });
  },

  beforeDestroy() {
    if (this.masonry) {
      this.masonry.destroy();
    }
  }
};