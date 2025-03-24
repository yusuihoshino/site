import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // ここでルーターをインポート
import './assets/styles/reset.css';  // グローバルスタイルをインポート
import './assets/styles/main.css';  // グローバルスタイルをインポート

// import { initializeGlobalScripts } from './assets/scripts/script.js';

const app = createApp(App);
app.use(router);  // アプリケーションにルーターを使わせる

// グローバルスクリプトの初期化
// initializeGlobalScripts();

app.mount('#app');