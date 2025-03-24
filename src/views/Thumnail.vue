<template>
  <div class="request-page">
    <h1>Thumnail</h1>
    <div class="request-form">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">お名前</label>
          <input type="text" id="name" v-model="formData.name" required>
        </div>
        <div class="form-group">
          <label for="email">メールアドレス</label>
          <input type="email" id="email" v-model="formData.email" required>
        </div>
        <div class="form-group">
          <label for="type">依頼種別</label>
          <select id="type" v-model="formData.type" required>
            <option value="">選択してください</option>
            <option value="design">デザイン</option>
            <option value="development">開発</option>
            <option value="consultation">相談</option>
          </select>
        </div>
        <div class="form-group">
          <label for="message">メッセージ</label>
          <textarea id="message" v-model="formData.message" rows="5" required></textarea>
        </div>
        <button type="submit">送信する</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThumnailPage',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        type: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // ここにフォーム送信のロジックを実装
      console.log('Form submitted:', this.formData);
      // フォームをリセット
      this.formData = {
        name: '',
        email: '',
        type: '',
        message: ''
      };
    }
  }
}
</script>

<style scoped>
.request-page {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;
}

.request-form {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #2c3e50;
  font-weight: bold;
}

input, select, textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

textarea {
  resize: vertical;
}

button {
  background-color: #42b983;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #3aa876;
}
</style> 