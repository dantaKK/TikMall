<template>
  <div class="bg-white p-6 rounded-lg shadow-md w-full">
    <div class="text-center mb-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">创建账号 🎉</h2>
      <p class="text-gray-600">成为我们的会员</p>
    </div>
    
    <form @submit.prevent="handleRegister">
      <div class="mb-4">
        <label for="reg-username" class="block text-sm font-medium text-gray-700 mb-1">用户名 👤</label>
        <input 
          v-model="form.username"
          type="text" 
          id="reg-username" 
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
          placeholder="请设置用户名"
          required
        />
      </div>
      
      <div class="mb-4">
        <label for="reg-password" class="block text-sm font-medium text-gray-700 mb-1">密码 🔒</label>
        <input 
          v-model="form.password"
          type="password" 
          id="reg-password" 
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
          placeholder="请设置密码"
          required
        />
      </div>
      
      <div class="mb-4">
        <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">确认密码 🔐</label>
        <input 
          v-model="form.confirmPassword"
          type="password" 
          id="confirmPassword" 
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
          placeholder="请再次输入密码"
          required
        />
        <p v-if="passwordError" class="mt-1 text-sm text-red-600">
          {{ passwordError }} ❌
        </p>
      </div>
      
      <div class="flex items-center mb-4">
        <input 
          v-model="form.agreement"
          type="checkbox" 
          id="agreement" 
          class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          required
        />
        <label for="agreement" class="ml-2 block text-sm text-gray-700 text-xs">
          我已阅读并同意 <a href="#" class="text-indigo-600 hover:text-indigo-500">用户协议</a> 和 <a href="#" class="text-indigo-600 hover:text-indigo-500">隐私政策</a> 📝
        </label>
      </div>
      
      <div>
        <button 
          type="submit" 
          class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          :disabled="loading || !!passwordError"
        >
          {{ loading ? '注册中...' : '注册' }} ✨
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue';
import type { RegisterForm } from '../../types/login';

const emit = defineEmits<{
  (e: 'register', data: RegisterForm): void
}>();

const form = reactive<RegisterForm>({
  username: '',
  password: '',
  confirmPassword: '',
  remember: false,
  agreement: false
});

const loading = ref(false);

const passwordError = computed(() => {
  if (form.password && form.confirmPassword && form.password !== form.confirmPassword) {
    return '两次输入的密码不一致';
  }
  return '';
});

const handleRegister = async () => {
  if (passwordError.value) return;
  
  loading.value = true;
  try {
    // 此处将来可以调用实际的注册API
    await new Promise(resolve => setTimeout(resolve, 1000)); // 模拟网络请求
    emit('register', { ...form });
  } catch (error) {
    console.error('注册失败', error);
  } finally {
    loading.value = false;
  }
};
</script> 