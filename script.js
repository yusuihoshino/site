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