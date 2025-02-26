<template>
  <div class="container pt-1 pl-1 pr-1 h-full">
              <wc-waterfall :gap="10" :cols="2">
                <div class="card boder rounded-lg shadow-lg" v-for="(item,index) in items" :key="index">
                 
                  <img    :src="item.img" alt="" class="rounded-lg"/>
                  <div class="text">
                    <p class="text-[0.8rem] mb-1 font-bold font-mono">{{ item.title }}</p>
                    <div class="flex justify-between">
                      <div class="flex mr-2">
                        <div class="ml-[0.5rem] text-[0.9rem] text-red-400 overflow-hidden overflow-ellipsis overflow-auto text-nowrap">{{ item.nickName }}</div>
                      </div>
                      <div class="flex">
                        <div class="mr-[0.5rem] text-[0.7rem] text-gray-400 ml-2">已售{{ item.loveNum }}万件</div>
                      </div>
                    </div>
                  </div>
                </div>
              </wc-waterfall>
            </div>
</template>

<script setup lang="ts">
// import type { ShareTourItem } from "@/types/home";



//接口定义类型约束
interface Props {
  // items: ShareTourItem[];
 items:{ title: string;
  img: string;
  nickName: string;
  loveNum: number;}[];
}
//接收父组件传递的数据
defineProps<Props>();
</script>

<style scoped>
.container {
  grid-template-rows: masonry;
}
</style>
