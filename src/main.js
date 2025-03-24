import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // ここでルーターをインポート

 // グローバルスタイルをインポート
import './assets/styles/reset.css'; 
import './assets/styles/main.css'; 
// import { initializeGlobalScripts } from './assets/scripts/script.js';

const app = createApp(App);
app.use(router);  // アプリケーションにルーターを使わせる

app.mount('#app');