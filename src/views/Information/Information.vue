<template>
   
<div class="information ">
  <!-- 头部客服 -->
  <div
        class="informationPage container h-[3rem] relative shadow-sm
         bg-[url('https://tse4-mm.cn.bing.net/th/id/OIP-C.XbACS9jWZtP1c8Wyv_0omwAAAA?w=198&h=315&c=7&r=0&o=5&dpr=2.2&pid=1.7')] 
         bg-cover bg-center rounded-b-lg" 
      >
        <div class=" flex flex-row justify-between pt-[0.8rem]">
          <van-icon name="ellipsis" size="1.8rem" class="ml-[1rem]"/>
          <div class="text-center text-lg text-white font-bold ">客服中心</div>
          <van-icon name="search" size="1.8rem" class="mr-[1rem]"/>
        </div>
  

  </div >
<!-- 客服消息 -->


  <div v-for="item in Customerservicemessages" :key="item.title">
    <section
          class=" mt-[0.1rem] pb-[0.5rem] mx-[0.25rem] shadow-md bg-gray-95  border rounded-md "
        >
        <van-swipe-cell>
       <div class="flex flex-row items-center justify-center mt-[0.5rem]">
        <div class="m-auto h-[4rem] w-[4rem] ">
          <van-image lazy-load :src="item.icon"     class=" border-2 border-white shadow-sm shadow-gray-400 rounded-md" ></van-image> 
         
        </div>
        
        <div class="flex flex-col">
          <div class="flex flex-row">
          <div class="font-bold text-md text-left mb-[0.5rem]">{{item.title}}</div>
          <div class=" text-xs text-gray-600 absolute top-0 right-[0.5rem]" >{{item.time}}</div>
        </div>
          <div class="h-[2rem] w-[17rem] whitespace-nowrap overflow-hidden text-ellipsis text-gray-800 text-sm">{{item.content}}</div>

        
        </div>
      </div>
      <template #right>
    <van-button square text="删除" type="danger" style="height: 100%;" />
  </template>
    </van-swipe-cell>
    </section>
   
  </div>
    
   <!-- 旅游推荐  PopularDestinations-->  
   <section>
        <div class="flex justify-between items-center px-3 text-sm text-black">
          <h2 class="title font-bold text-lg">热门商品</h2>
          <span
            class="flex flex-row items-center justify-center text-xs "
          >
            点击查看更多
            <van-icon name="arrow" size="1rem" class="ml-1" />
          </span>
        </div>
        <PopularDestinationsCard :items="PopularProducts" />
    </section>

    <ShowProducts :items="prodects" />

  
</div>
</template>

<script setup>
import { ref ,toRefs} from 'vue';
import ShowProducts from '../../components/ShowProducts.vue';
import PopularDestinationsCard from '../../components/Information/PopularDestinationsCard.vue';
import { useinformationStore } from '../../store/informationStore';
const informationStore = useinformationStore();
const {Customerservicemessages,PopularProducts,prodects} = toRefs(informationStore);

</script>

<style lang="ts" scoped>

</style>