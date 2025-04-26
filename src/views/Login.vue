<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 to-pink-50 flex items-center justify-center p-4">
    <div class="w-full max-w-6xl flex flex-col lg:flex-row shadow-lg rounded-xl overflow-hidden">
      <!-- Left side - Decorative Section -->
      <div class="bg-indigo-600 text-white p-8 lg:w-1/4 flex flex-col justify-center items-center">
        <div class="text-center">
          <div class="text-5xl mb-4">🛍️</div>
          <h1 class="text-3xl font-bold mb-4">欢迎光临</h1>
          <p class="text-indigo-200 mb-8">发现惊喜好物，享受品质购物</p>
          
          <div class="space-y-4">
            <div class="flex items-center">
              <span class="bg-indigo-500 rounded-full p-2 mr-3">✨</span>
              <span>独家优惠等您来</span>
            </div>
            <div class="flex items-center">
              <span class="bg-indigo-500 rounded-full p-2 mr-3">🔒</span>
              <span>安全便捷的购物体验</span>
            </div>
            <div class="flex items-center">
              <span class="bg-indigo-500 rounded-full p-2 mr-3">🚚</span>
              <span>快速配送到家</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Right side - Forms Container -->
      <div class="bg-white p-4 lg:w-3/4 flex flex-col md:flex-row">
        <!-- Login Form -->
        <div class="md:w-1/2 p-4">
          <LoginForm @login="handleLogin" />
        </div>
        
        <!-- Divider -->
        <div class="hidden md:block md:w-px bg-gray-200 mx-4"></div>
        <div class="md:hidden h-px bg-gray-200 my-6"></div>
        
        <!-- Register Form -->
        <div class="md:w-1/2 p-4">
          <RegisterForm @register="handleRegister" />
        </div>
      </div>
    </div>
    
    <!-- Success Toast -->
    <div 
      v-if="showToast" 
      class="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center"
    >
      <span class="mr-2">✅</span>
      <span>{{ toastMessage }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LoginForm from '../components/login/LoginForm.vue';
import RegisterForm from '../components/login/RegisterForm.vue';

// Define types locally
interface LoginFormData {
  username: string;
  password: string;
  remember: boolean;
}

interface RegisterFormData extends LoginFormData {
  confirmPassword: string;
  agreement: boolean;
}

const showToast = ref(false);
const toastMessage = ref('');

const displayToast = (message: string) => {
  toastMessage.value = message;
  showToast.value = true;
  setTimeout(() => {
    showToast.value = false;
  }, 3000);
};

const handleLogin = (formData: LoginFormData) => {
  // 处理登录逻辑，这里仅展示成功提示
  console.log('登录数据:', formData);
  displayToast('登录成功！欢迎回来～ 🎉');
  // 实际项目中，这里可能会重定向到首页或其他操作
};

const handleRegister = (formData: RegisterFormData) => {
  // 处理注册逻辑，这里仅展示成功提示
  console.log('注册数据:', formData);
  displayToast('注册成功！欢迎加入我们 🎉');
};
</script>
