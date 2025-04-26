<template>
  <van-tabbar v-model="active" 
  class="shadow-lg border-t border-gray-200 bg-white opacity-95"
  active-color="#ff4c4c"
  inactive-color="#666666">
 
    <van-tabbar-item to="/home">  
      <template #icon="props">
        <van-icon class="iconfont" class-prefix="icon" name="shouye" :color="props.active ? '#ff4c4c' : '#666'" size="22" />
      </template>
      <span :class="{'font-medium': active === 0}">商城</span>
    </van-tabbar-item>
    
    <van-tabbar-item to="/assistant">
      <template #icon="props">
        <van-icon class="iconfont" class-prefix="icon" name="zhihuicaigou" :color="props.active ? '#ff4c4c' : '#666'" size="22" />
      </template>
      <span :class="{'font-medium': active === 1}">助手</span>
    </van-tabbar-item>
    
    <van-tabbar-item to="/information">
      <template #icon="props">
        <van-icon name="chat-o" :color="props.active ? '#ff4c4c' : '#666'" size="22" />
      </template>
      <span :class="{'font-medium': active === 2}">消息</span>
      <template #badge>
        <van-badge :content="78" :offset="[-4, -6]" color="#ff4c4c" />
      </template>
    </van-tabbar-item> 
    
    <van-tabbar-item to="/my">
      <template #icon="props">
        <van-icon class="iconfont" class-prefix="icon" name="wode" :color="props.active ? '#ff4c4c' : '#666'" size="22" />
      </template>
      <span :class="{'font-medium': active === 3}">我的</span>
      <template #badge>
        <van-badge dot :offset="[-4, -6]" color="#ff4c4c" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const active = ref<number>(0);
onMounted(() => {
  const route = useRoute();
  console.log(route.fullPath);
  if(route.fullPath == "/home"){
    active.value = 0; 
  }
  else if(route.fullPath == "/assistant"){
    active.value = 1; 
  }
  else if(route.fullPath == "/information"){
    active.value = 2;
  }
  else if(route.fullPath == "/my"){
    active.value = 3; 
  }
})
</script>

<style scoped>
.van-tabbar {
  height: 56px;
}
.van-tabbar-item {
  font-size: 12px;
}
</style> 
