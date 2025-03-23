// サイドバー
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('toggleSidebar');

  // 開閉切り替え
  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('closed');
    sidebar.classList.toggle('opened');
  });

  // ウィンドウサイズで自動クローズ
  function handleResize() {
    if (window.innerWidth <= 768) {
      sidebar.classList.add('closed');
      sidebar.classList.remove('opened');
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
      // 背景色を設定
      document.body.style.backgroundColor = color;
      
      // ローカルストレージに保存
      localStorage.setItem('backgroundColor', color);

      // 明度に基づいてテキストカラーを設定
      const luminance = this.getLuminance(color);
      const textColor = luminance > 0.5 ? '#333333' : '#cccccc';

      // テキストカラーを適用
      document.body.style.color = textColor;

      // リンクやその他のテキスト要素にも適用
      const textElements = document.querySelectorAll('h1, h2, h3, p, a, span, div');
      textElements.forEach(element => {
          element.style.color = textColor;
      });

      // サイドバーのテキストにも適用（必要に応じて）
      const sidebarLinks = document.querySelectorAll('#sidebar a');
      sidebarLinks.forEach(link => {
          link.style.color = textColor;
      });
  }
}

// DOMの読み込み完了後に初期化
document.addEventListener('DOMContentLoaded', () => {
  new ColorManager();
});
// ＝＝＝＝＝＝＝＝＝＝＝
// function updateBackgroundColor() {
//   bgColor = picker.value
//   document.body.style.backgroundColor = bgColor;

//   const rgbColor = hexToRgb(bgColor);
//   const luminance = getLuminance(rgbColor); // 輝度を計算
//   if (luminance < 0.5) {
//     document.body.classList.add("dark-mode");
//   } else {
//     document.body.classList.remove("dark-mode");
//   }
// }


// function hexToRgb(hex) {
//   let r = 0, g = 0, b = 0;
//   if (hex.length === 4) {
//     r = parseInt(hex[1] + hex[1], 16);
//     g = parseInt(hex[2] + hex[2], 16);
//     b = parseInt(hex[3] + hex[3], 16);
//   } else if (hex.length === 7) {
//     r = parseInt(hex[1] + hex[2], 16);
//     g = parseInt(hex[3] + hex[4], 16);
//     b = parseInt(hex[5] + hex[6], 16);
//   }
//   return `rgb(${r}, ${g}, ${b})`;
// }

// // 照度計算
// function getLuminance(color) {
//   const rgb = color.match(/\d+/g); // RGBの数値を取り出す
//   const r = parseInt(rgb[0], 10) / 255;
//   const g = parseInt(rgb[1], 10) / 255;
//   const b = parseInt(rgb[2], 10) / 255;
//   // 輝度の計算（加重平均）
//   return 0.2126 * r + 0.7152 * g + 0.0722 * b;
// }