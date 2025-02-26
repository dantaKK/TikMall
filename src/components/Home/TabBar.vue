
<template>
  <van-tabbar v-model="active" 
  class=" shadow-black shadow-2xl opacity-90"
  active-color="#ee0a24"
  >
 
    <van-tabbar-item  to="/home">  
      <template #icon>
        <van-icon class="iconfont" class-prefix="icon" name="shouye" />
      </template>首页
    </van-tabbar-item>
    <van-tabbar-item to="/assistant">
      <template #icon>
        <van-icon class="iconfont" class-prefix="icon" name="zhihuicaigou" />
      </template>助手
    </van-tabbar-item>
    <van-tabbar-item icon="chat-o"  badge="78" to="/information">消息</van-tabbar-item> 
    <van-tabbar-item  dot to="/my">
      <template #icon>
        <van-icon class="iconfont" class-prefix="icon" name="wode" />
      </template>我的</van-tabbar-item>
    
  </van-tabbar>
</template>

<script  setup lang="ts">
import { ref,reactive,onMounted } from "vue";
import { useRoute } from "vue-router";



const active = ref<number>(0);
onMounted(()=>{
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

<style scoped></style> 
