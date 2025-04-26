<template>
  <div class="home">
    <!-- 搜索头部 -->
    <!-- 背景 -->
    <div class="fixed top-0 left-0 w-full h-[4.5rem] z-[10] transform -translate-y-0 bg-cover bg-center "
         style="background-image: url('https://bpic.588ku.com/back_origin_min_pic/20/12/08/3ea9e235acca002058ec0bf303858979.jpg!/fw/750/quality/99/unsharp/true/compress/true');">
    </div>
    <!-- 搜索 -->
    <div class="search flex items-center px-4 text-sm py-4 fixed top-1 left-0 z-[10] w-full">
      <div class="title font-bold text-gray-900 text-lg w-[6.5rem] text-center font-serif mr-0.5 bg-white bg-opacity-80 rounded-lg shadow-sm">TikMall</div>
      <van-search v-model="searchField" placeholder="寻找心仪好物" show-action shape="round" background="transparent" class="w-full rounded-full">
        <template #left-icon>
          <van-icon name="search" color="#ff4c4c" size="1.25rem"/>
        </template>
        <template #right-icon>
          <div class="flex">
            <van-icon name="photograph" size="1.25rem" color="#666" class="mr-1"/>
            <van-button round color="#FF4C4C" size="mini">搜索</van-button>
          </div>
        </template>
        <template #action>
          <div class="text-gray-900 justify-center items-center flex ml-0.5">
            <van-icon name="shopping-cart-o" size="1.75rem" badge="5" />
          </div>
        </template>
      </van-search>
    </div>
   
    <!-- 主体 -->
    <main class="w-full pt-[4.6rem] z-[-50] flex flex-col space-y-2">
      <!-- 图标栏 -->
      <header class="w-[calc(100vw-16px)] justify-center min-h-18 rounded-xl p-2 shadow-md self-center bg-white border mx-2">
        <section class="w-full topbar flex justify-around my-[0.5rem]">
          <div class="topbar-item flex flex-col items-center" v-for="item in topBarState" :key="item.title">
            <div class="topbar-item__icon mb-1 bg-red-50 rounded-full p-2">
              <van-icon :name="item.icon" :color="item.color || '#ff4c4c'" size="1.75rem" :badge="item.badge" :style="{ '--van-badge-font-size': '9px', '--van-badge-padding': '6px 1px', '--van-badge-min-width':'auto ! important' }"/>
            </div>
            <div class="topbar-item__text text-xs font-medium text-gray-700">{{ item.title }}</div>
          </div>
        </section>
      </header>

      <!-- 新人补贴栏目 - 保留原始渐变色功能 -->
      <section class="custom-gradient space-y-0.5 min-h-[8rem] flex-col rounded-xl shadow-md bg-white border mx-2">
        <!-- 新人补贴栏目 -->
        <div class="flex flex-row items-center justify-between px-3 pt-2">
          <div class="flex items-center">
            <h2 class="text-xl font-bold text-red-500">新人补贴</h2>
            <van-tag type="danger" class="ml-2" round>限时</van-tag>
          </div>
          <div class="flex items-center">
            <span class="text-xs text-red-400 mr-1">官方补贴 低价好物</span>
            <van-icon size="0.85rem" color='#ff4c4c' name="share-o"/>
          </div>
        </div>

        <!-- 商品 -->
        <section class="px-2 py-1">
          <div class="min-h-[5rem] flex flex-row items-center justify-between">
            <div v-for="(item,index) in newprodects" :key="index" class="flex flex-col items-center">
              <div class="h-[5rem] w-[5rem] bg-white rounded-lg shadow-sm overflow-hidden">
                <img :src='item.image' alt="" class="w-full h-full object-cover">
              </div>
              <div class="flex items-center mt-1">
                <div class="font-bold text-red-500 mr-1">￥{{item.price}}</div>
                <div class="bg-red-500 text-white text-[0.625rem] rounded-full px-1.5 py-0.5">首单</div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <!-- 秒杀 超值购 -->
      <section class="flex space-x-2 flex-row px-2">
        <!-- 秒杀 -->
        <div class="h-[8rem] flex-1 rounded-xl shadow-md bg-white">
          <!-- 秒杀栏目 -->
          <div class="flex flex-row items-center justify-between px-3 pt-2">
            <h2 class="font-bold text-gray-800">限时秒杀</h2>
            <div>
              <span class="text-xs text-red-400">低至1元</span>
              <van-icon name="arrow" color="#999" />
            </div>
          </div>
          <section class="px-1">
            <div class="min-h-[5rem] flex flex-row items-center justify-around">
              <div v-for="(item,index) in downprodects" :key="index" class="flex flex-col items-center">
                <div class="h-[4rem] w-[3.5rem] bg-white rounded-lg overflow-hidden">
                  <img :src='item.image' alt="" class="w-full h-full object-cover">
                </div>
                <div class="text-center mt-1">
                  <div class="text-sm text-red-500 font-medium">￥{{item.price}}</div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class="h-[8rem] flex-1 rounded-xl shadow-md bg-white">
          <!-- 超值购栏目 -->
          <div class="flex flex-row items-center justify-between px-3 pt-2">
            <h2 class="font-bold text-gray-800">品牌特惠</h2>
            <div>
              <span class="text-xs text-red-400">品牌低价</span>
              <van-icon name="arrow" color="#999" />
            </div>
          </div>
          <section class="px-1">
            <div class="min-h-[5rem] flex flex-row items-center justify-around">
              <div v-for="(item,index) in overprodects" :key="index" class="flex flex-col items-center">
                <div class="h-[4rem] w-[3.5rem] bg-white rounded-lg overflow-hidden">
                  <img :src='item.image' alt="" class="w-full h-full object-cover">
                </div>
                <div class="text-center mt-1">
                  <div class="text-sm text-red-500 font-medium">￥{{item.price}}</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <!-- 商品展示 -->
      <section>
        <van-tabs v-model="active" sticky offset-top="4.5rem" swipeable color="#ff4c4c">
          <van-tab v-for='(items) in bottomItemState' :key='items.title' :title="items.title">
            <div class="container pt-1 px-2">
              <ShowProducts :items="items.items" />
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
import { useHomeStore } from '../../store/homeStore';
import ShowProducts from '../../components/ShowProducts.vue';
const searchField = ref('')
const active = ref(0)
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