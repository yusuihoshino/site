/* global Masonry, imagesLoaded */

export const masonryMixin = {
  data() {
    return {
      masonry: null
    };
  },

  mounted() {
    this.initMasonry();
  },

  methods: {
    initMasonry() {
      this.$nextTick(() => {
        const grid = document.getElementById('grid');
        if (!grid) return;

        // 既存のMasonryインスタンスがあれば破棄
        if (this.masonry) {
          this.masonry.destroy();
        }

        this.masonry = new Masonry(grid, {
          itemSelector: '.grid-item',
          columnWidth: '.grid-sizer',
          gutter: '.gutter-sizer',
          percentPosition: true,
          transitionDuration: 0 // アニメーションを無効化
        });

        // 画像が読み込まれた後にレイアウトを更新
        imagesLoaded(grid).on('progress', () => {
          this.masonry.layout();
        }).on('done', () => {
          this.masonry.layout();
        });
      });
    }
  },

  updated() {
    this.$nextTick(() => {
      // DOM更新後にMasonryを再初期化
      this.initMasonry();
    });
  },

  beforeDestroy() {
    if (this.masonry) {
      this.masonry.destroy();
    }
  }
};