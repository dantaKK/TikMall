<template>
  <div class="bg-white p-6 rounded-lg shadow-md w-full">
    <div class="text-center mb-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">登录账号 🛍️</h2>
      <p class="text-gray-600">欢迎回来</p>
    </div>
    
    <form @submit.prevent="handleLogin">
      <div class="mb-4">
        <label for="username" class="block text-sm font-medium text-gray-700 mb-1">用户名 👤</label>
        <input 
          v-model="form.username"
          type="text" 
          id="username" 
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
          placeholder="请输入用户名"
          required
        />
      </div>
      
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700 mb-1">密码 🔒</label>
        <input 
          v-model="form.password"
          type="password" 
          id="password" 
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
          placeholder="请输入密码"
          required
        />
      </div>
      
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
          <input 
            v-model="form.remember"
            type="checkbox" 
            id="remember" 
            class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label for="remember" class="ml-2 block text-sm text-gray-700">记住我</label>
        </div>
        <div>
          <a href="#" class="text-sm text-indigo-600 hover:text-indigo-500">忘记密码?</a>
        </div>
      </div>
      
      <div>
        <button 
          type="submit" 
          class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          :disabled="loading"
        >
          {{ loading ? '登录中...' : '登录' }} 🚀
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { LoginForm } from '../../types/login';

const emit = defineEmits<{
  (e: 'login', data: LoginForm): void
}>();

const form = reactive<LoginForm>({
  username: '',
  password: '',
  remember: false
});

const loading = ref(false);

const handleLogin = async () => {
  loading.value = true;
  try {
    // 此处将来可以调用实际的登录API
    await new Promise(resolve => setTimeout(resolve, 1000)); // 模拟网络请求
    emit('login', { ...form });
  } catch (error) {
    console.error('登录失败', error);
  } finally {
    loading.value = false;
  }
};
</script> 