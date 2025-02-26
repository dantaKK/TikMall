<template>
  <div class="home">
    <!-- 搜索头部 -->
    <!-- 背景 -->
    <div class="fixed top-0 left-0 w-full h-[4.5rem] z-[10] transform -translate-y-0 bg-cover bg-center "
         style="background-image: url('https://bpic.588ku.com/back_origin_min_pic/20/12/08/3ea9e235acca002058ec0bf303858979.jpg!/fw/750/quality/99/unsharp/true/compress/true');">
    </div>
    <!-- 搜索 -->
    <div class="search flex items-center  px-4 text-sm py-4 fixed top-1 left-0 z-[10]">
      <div class="title font-bold  text-gray-900 text-lg w-[6.5rem] text-center font-serif mr-0.5 bg-gray-200 rounded-full bg-opacity-50">抖音商城</div>
      <van-search v-model="searchField" placeholder="请输入搜索关键字" show-action shape="round" background="transparent" class="w-full rounded-full ">
        <template #left-icon>
          <van-icon name="search" color="#ff6a00" size="1.25rem"/>
        </template>
        <template #right-icon>
          <div class="flex">
            <van-icon name="photograph" size="1.25rem" class="mr-1"/>
            <van-button round color="#FF6A00" size="mini">搜索</van-button>
          </div>
        </template>
        <template #action>
          <div class="text-white justify-center items-center flex ml-0.5">
            <van-icon name="shopping-cart-o" size="1.75rem"/>
          </div>
        </template>
      </van-search>
    </div>
   
    <!-- 主体 -->
    <main class="w-full pt-[4.5rem] z-[-50] flex flex-col space-y-1">
      <!-- 图标栏 -->
      <header class="w-[calc(100vw-2px)] justify-center min-h-18 rounded-2xl p-2 shadow-md self-center bg-white bg-opacity-76 border">
        <section class="w-full topbar flex justify-around my-[0.5rem]">
          <div class="topbar-item flex flex-col items-center" v-for="item in topBarState" :key="item.title">
            <div class="topbar-item__icon">
              <van-icon :name="item.icon" :color="item.color" size="2rem" :badge="item.badge" :style="{ '--van-badge-font-size': '9px', '--van-badge-padding': '6px 1px', '--van-badge-min-width':'auto ! important' }"/>
            </div>
            <div class="topbar-item__text text-xs font-bold">{{ item.title }}</div>
          </div>
        </section>
      </header>

      <section class="custom-gradient space-y-0.5 min-h-[7.5rem] flex-col rounded-2xl shadow-md bg-white bg-opacity-75 border  ">
        <!-- 新人补贴栏目 -->
        <div class="flex flex-row">
          <h2 class="flex text-xl font-bold text-red-500 mr-[10rem] m-0.5">新人补贴</h2>
          <div>
            <span class="text-xs text-gray-500 text-red-400 mr-[0.3rem]">官方补贴 低价好物</span>
            <van-icon size="0.85rem" color='#f87171' name="share-o"/>
          </div>
        </div>

        <!-- 商品 -->
        <section>
          <div class="min-h-[5rem] flex flex-row items-center justify-between">
            <div v-for="(item,index) in newprodects" :key="index">
              <div class="h-[5rem] w-[5rem]">
                <img :src='item.image' alt="" >
              </div>
              <div class="text-center flex items-center text-white rounded-full px-1 py-1">
                <div class="font-bold mr-1 text-black">￥{{item.price}}</div>
                <div class="bg-red-500 text-xs rounded-full px-1.5 py-0.5">首单</div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <!-- 秒杀 超值购 -->
      <section class="flex space-x-[1%] flex-row">
        <!-- 秒杀 -->
        <div class="max-h-[7rem] min-w-[50%] rounded-2xl shadow-lg bg-white bg-opacity-50">
          <!-- 秒杀栏目 -->
          <div class="flex flex-row">
            <h2 class="flex font-bold text-red-500 mr-[4.5rem] m-0.5 text-black">低价秒杀</h2>
            <div>
              <span class="text-xs text-gray-500 text-red-400 mr-[0.3rem]">低至1元</span>
            </div>
          </div>
          <section>
            <div class="min-h-[5rem] flex flex-row items-center justify-between">
              <div v-for="(item,index) in downprodects" :key=index>
                <div class="h-[4rem] w-[3.5rem] ml-1">
                  <img   :src='item.image' alt="">
                </div>
                <div class="text-center flex items-center text-white rounded-full">
                  <div class="text-sm ml-1.5 text-red-500">￥{{item.price}}</div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class="max-h-[7rem] min-w-[49%] rounded-2xl shadow-lg bg-white bg-opacity-50">
          <!-- 超值购栏目 -->
          <div class="flex flex-row">
            <h2 class="flex font-bold text-red-500 mr-[4.5rem] m-0.5 text-black">超值购</h2>
            <div>
              <span class="text-xs text-gray-500 text-red-400 mr-[0.3rem]">品牌低价</span>
            </div>
          </div>
          <section>
            <div class="min-h-[5rem] flex flex-row items-center justify-between">
              <div v-for="(item,index) in overprodects" :key="index">
                <div class="h-[4rem] w-[3.5rem] ml-1">
                 
                  <img   :src='item.image' alt="">
                </div>
                <div class="text-center flex items-center text-white rounded-full">
                  <div class="text-sm ml-1.5 text-red-500">￥{{item.price}}</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <!-- 商品 -->
      <section>
        <van-tabs v-model:active="active" sticky offset-top=4.5rem swipeable class="">
          <van-tab v-for='(items) in bottomItemState' :key='items.title' :title="items.title">
            <div class="container pt-1 pl-1 pr-1 h-full">
              <ShowProducts :items="items.items" />
              <!-- <wc-waterfall :gap="10" :cols="2">
                <div class="card boder rounded-lg shadow-lg" v-for="(item,index) in items.items" :key="index">
                 
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
              </wc-waterfall> -->
            </div>
          </van-tab>
        </van-tabs>
      </section>
    </main>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { toRefs } from 'vue';
import { useHomeStore } from '@/store/homeStore.ts';
import ShowProducts from '@/components/ShowProducts.vue';
const searchField = ref('')
const homeStore = useHomeStore();
const {topBarState,newprodects,downprodects,overprodects,bottomItemState} = toRefs(homeStore);
</script>

<style scoped>
.container {
  grid-template-rows: masonry;
}
.custom-gradient {
  background-image: linear-gradient(175deg, #d70a44b8,#3fd3ff00,#3fd3ff00,#3fd3ff00,#3fd3ff00, #3fd3ff00, #3fd3ff00, #3fd3ff00);
}
</style>