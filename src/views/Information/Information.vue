<template>
   
<div class="information bg-gray-50 min-h-screen pb-16">
  <!-- 头部 -->
  <div class="informationPage h-[3.5rem] relative shadow-md bg-gradient-to-r from-red-500 to-red-400">
    <div class="flex flex-row justify-between items-center h-full px-4">
      <van-icon name="ellipsis" size="1.5rem" color="white" />
      <div class="text-center text-lg text-white font-bold">消息中心</div>
      <van-icon name="search" size="1.5rem" color="white" />
    </div>
  </div>

  <!-- 通知标签栏 -->
  <div class="bg-white sticky top-0 z-10 border-b border-gray-100 shadow-sm">
    <van-tabs v-model="activeTab" color="#ff4c4c" line-width="20px" swipeable animated>
      <van-tab title="通知">
        <!-- 未读消息计数 -->
        <div class="flex justify-between items-center px-4 py-2 bg-white border-b border-gray-100">
          <div class="text-sm text-gray-500">未读消息 <span class="text-red-500 font-medium">12</span> 条</div>
          <van-button plain size="small" color="#ff4c4c" class="text-xs">全部已读</van-button>
        </div>
      </van-tab>
      <van-tab title="私信"></van-tab>
      <van-tab title="评论"></van-tab>
      <van-tab title="点赞"></van-tab>
    </van-tabs>
  </div>

  <!-- 客服消息 -->
  <div class="pt-2 px-3">
    <div class="flex justify-between items-center px-1 py-2">
      <div class="font-bold text-gray-800">官方消息</div>
      <div class="text-xs text-gray-500">查看全部</div>
    </div>



    <div v-for="item in Customerservicemessages" :key="item.title" class="mb-3">
      <section class="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-100">
        <van-swipe-cell>
          <div class="flex items-center p-3 border-b border-gray-50">
            <div class="relative h-[3.5rem] w-[3.5rem] mr-3">
              <van-image lazy-load :src="item.icon" class="border-2 border-white shadow-sm shadow-gray-200 rounded-lg" fit="cover" />
              <div class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-[10px] text-white">1</div>
            </div>
            
            <div class="flex-1">
              <div class="flex justify-between items-center mb-1">
                <div class="font-bold text-gray-800">{{item.title}}</div>
                <div class="text-xs text-gray-500">{{item.time}}</div>
              </div>
              <div class="text-gray-600 text-sm line-clamp-1">{{item.content}}</div>
            </div>
          </div>
          
          <template #right>
            <van-button square text="删除" type="danger"  style="height: 100%; width: 65px; font-size: 14px;" />
          </template>
        </van-swipe-cell>
      </section>
    </div>
  </div>
  
  <!-- 优惠活动消息 -->
  <div class="mt-3 px-3">
    <div class="flex justify-between items-center px-1 py-2">
      <div class="font-bold text-gray-800">优惠活动</div>
      <div class="text-xs text-gray-500">查看全部</div>
    </div>
    
    <div class="bg-white rounded-xl shadow-sm overflow-hidden mb-4 border border-gray-100">
      <div class="p-3 border-b border-gray-50 flex items-center bg-gradient-to-r from-red-50 to-white">
        <div class="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
          <van-icon name="gift-o" size="20" color="#ff4c4c" />
        </div>
        <div class="flex-1">
          <div class="text-sm font-medium text-gray-800">您有3张优惠券即将到期</div>
          <div class="text-xs text-gray-500 mt-1">还有2天到期，抓紧使用吧</div>
        </div>
        <van-tag type="danger" size="medium" class="ml-auto" round>去使用</van-tag>
      </div>
      
      <div class="p-3 border-b border-gray-50 flex items-center bg-gradient-to-r from-orange-50 to-white">
        <div class="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3">
          <van-icon name="fire-o" size="20" color="#ff7a45" />
        </div>
        <div class="flex-1">
          <div class="text-sm font-medium text-gray-800">限时秒杀活动开始了</div>
          <div class="text-xs text-gray-500 mt-1">每日10点、22点准时开抢</div>
        </div>
        <van-tag color="#ff7a45" size="medium" class="ml-auto" round>去看看</van-tag>
      </div>
      
      <div class="p-3 flex items-center bg-gradient-to-r from-blue-50 to-white">
        <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
          <van-icon name="bill-o" size="20" color="#1989fa" />
        </div>
        <div class="flex-1">
          <div class="text-sm font-medium text-gray-800">新人专享礼包已送达</div>
          <div class="text-xs text-gray-500 mt-1">包含100元优惠券礼包</div>
        </div>
        <van-tag color="#1989fa" size="medium" class="ml-auto" round>领取</van-tag>
      </div>
    </div>
  </div>
  
  <!-- 订单消息 -->
  <div class="mt-2 px-3">
    <div class="flex justify-between items-center px-1 py-2">
      <div class="font-bold text-gray-800">订单消息</div>
      <div class="text-xs text-gray-500">查看全部</div>
    </div>
    
    <div class="bg-white rounded-xl shadow-sm overflow-hidden mb-4 border border-gray-100">
      <div class="p-3 border-b border-gray-50 flex items-start">
        <van-icon name="logistics" size="20" color="#ff4c4c" class="mt-1 mr-3" />
        <div class="flex-1">
          <div class="flex justify-between">
            <div class="text-sm font-medium text-gray-800">订单已发货</div>
            <div class="text-xs text-gray-500">今天 10:23</div>
          </div>
          <div class="text-xs text-gray-500 mt-1">您的订单 #1234567 已发货，预计3天内送达</div>
          <div class="bg-gray-50 rounded p-2 mt-2 flex items-center">
            <van-image width="40" height="40" src="https://img01.yzcdn.cn/vant/cat.jpeg" class="rounded" />
            <div class="ml-2 flex-1 line-clamp-1 text-xs text-gray-600">2024新款时尚连衣裙春季新品...</div>
            <div class="text-red-500 text-xs font-bold">¥199</div>
          </div>
          <div class="mt-2 flex justify-end">
            <van-button plain size="small" color="#ff4c4c" class="mr-2">查看详情</van-button>
            <van-button plain size="small" color="#ff4c4c">查看物流</van-button>
          </div>
        </div>
      </div>
      
      <div class="p-3 flex items-start border-b border-gray-50">
        <van-icon name="passed" size="20" color="#07c160" class="mt-1 mr-3" />
        <div class="flex-1">
          <div class="flex justify-between">
            <div class="text-sm font-medium text-gray-800">订单已完成</div>
            <div class="text-xs text-gray-500">昨天 14:56</div>
          </div>
          <div class="text-xs text-gray-500 mt-1">您的订单 #1234566 已完成，感谢您的购买</div>
          <div class="mt-2 flex justify-end">
            <van-button plain size="small" color="#07c160" class="mr-2">查看详情</van-button>
            <van-button plain size="small" color="#ff4c4c">去评价</van-button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- 轮播图 商品推荐  -->  
  <section class="mt-1 px-3">
    <div class="flex justify-between items-center py-3">
      <h2 class="font-bold text-lg text-gray-800">今日推荐</h2>
      <span class="flex items-center text-xs text-gray-500">
        更多商品
        <van-icon name="arrow" class="ml-1" />
      </span>
    </div>
    
    <div class="bg-white rounded-xl shadow-sm p-2 mb-4 border border-gray-100">
      <PopularDestinationsCard :items="PopularProducts" />
    </div>
  </section>

  <!-- 猜你喜欢 -->
  <section class="px-3 pb-14">
    <div class="flex justify-between items-center mb-2">
      <h2 class="font-bold text-lg text-gray-800">猜你喜欢</h2>
      <span class="flex items-center text-xs text-gray-500">
        换一批
        <van-icon name="replay" class="ml-1" />
      </span>
    </div>
    <ShowProducts :items="prodects" />
  </section>
  
</div>
</template>

<script setup>
import { ref, toRefs } from 'vue';
import ShowProducts from '../../components/ShowProducts.vue';
import PopularDestinationsCard from '../../components/Information/PopularDestinationsCard.vue';
import { useinformationStore } from '../../store/informationStore';

const activeTab = ref(0);
const informationStore = useinformationStore();
const {Customerservicemessages, PopularProducts, prodects} = toRefs(informationStore);
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

:deep(.van-tabs__line) {
  bottom: 16px;
}
</style>