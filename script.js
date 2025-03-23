// サイドバー
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('toggleSidebarBtn');
  const container = document.getElementById('container');
  // 開閉切り替え
  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('closed');
    container.classList.toggle('closed');
  });

  // ウィンドウサイズで自動クローズ
  function handleResize() {
    if (window.innerWidth <= 768) {
      sidebar.classList.add('closed');
      container.classList.toggle('closed');
    }
  }

  window.addEventListener('resize', handleResize);
  handleResize(); // 初期実行
});

// =============背景色

// 背景色の管理とテキストカラーの自動調整
class ColorManager {
  constructor() {
      this.colorPicker = document.getElementById('colorPicker');
      this.init();
  }

  init() {
      // パフォーマンスナビゲーション（サイト内遷移かどうかの判定）
      const navigation = performance.getEntriesByType("navigation")[0];
      const navigationType = navigation.type;

      // リロード時のみ背景色をリセット
      if (navigationType === 'reload') {
          this.applyColor('#ffffff');
          this.colorPicker.value = '#ffffff';
      } else {
          // サイト内遷移の場合は保存された背景色を適用
          const savedColor = localStorage.getItem('backgroundColor') || '#ffffff';
          this.applyColor(savedColor);
          this.colorPicker.value = savedColor;
      }
      
      // カラーピッカーの変更イベント
      this.colorPicker.addEventListener('input', (e) => {
          const selectedColor = e.target.value;
          this.applyColor(selectedColor);
      });
  }

  // 背景色の明度を計算
  getLuminance(hexColor) {
      // hexをRGBに変換
      const r = parseInt(hexColor.substr(1,2), 16) / 255;
      const g = parseInt(hexColor.substr(3,2), 16) / 255;
      const b = parseInt(hexColor.substr(5,2), 16) / 255;

      // 相対輝度を計算
      // https://www.w3.org/TR/WCAG20/#relativeluminancedef
      const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      return luminance;
  }

  // 色を適用し、テキストカラーを自動調整
  applyColor(color) {
      const sidebar = document.getElementById('sidebar-left');
    
      document.body.style.backgroundColor = color;
      sidebar.style.backgroundColor = color;
      localStorage.setItem('backgroundColor', color);

      const luminance = this.getLuminance(color);
      const textColor = luminance > 0.5 ? 
          getComputedStyle(document.documentElement).getPropertyValue('--font-white').trim() : 
          getComputedStyle(document.documentElement).getPropertyValue('--font-black').trim();

      // ボーダーとシャドウの色を設定
      const borderColor = luminance > 0.5 ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)';
      document.documentElement.style.setProperty('--img-gray', borderColor);

      document.body.style.color = textColor;

      // リンクやその他のテキスト要素に適用
      const textElements = document.querySelectorAll('h1, h2, h3, p, a, span, div,button');
      textElements.forEach(element => {
          element.style.color = textColor;
      });

      // サイドバーのテキストとシャドウに適用
      // const sidebar = document.querySelector('.sidebar-left');
      if (sidebar) {
          sidebar.style.boxShadow = `0px 0px 3px ${borderColor}`;
      }

      // サイドバーのリンクに適用
      const sidebarLinks = document.querySelectorAll('#sidebar a');
      sidebarLinks.forEach(link => {
          link.style.color = textColor;
      });

      // カラーピッカーのボーダーに適用
      const colorPicker = document.querySelector('.color-picker');
      if (colorPicker) {
          colorPicker.style.borderColor = borderColor;
      }

      // 画像のボーダーに適用
      const images = document.querySelectorAll('img');
      images.forEach(img => {
          img.style.borderColor = borderColor;
      });

      // .lineクラスの背景色を更新
      const lineElements = document.querySelectorAll('.line');
      lineElements.forEach(line => {
          line.style.background = textColor;
      });
  }
}

// DOMの読み込み完了後に初期化
document.addEventListener('DOMContentLoaded', () => {
  new ColorManager();
});