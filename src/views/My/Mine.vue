<template>
    <div class="mine ">
      <!-- 背景 -->
      <div
        class="minePage container h-[9rem] relative shadow-md
         bg-[url('https://n.sinaimg.cn/sinacn20113/96/w2048h2048/20190713/b3f6-hzuhxyn9083585.jpg')] 
         bg-cover bg-center"
      >
        <div class="text-center text-lg text-white font-bold pt-[0.8rem] ">
          个人中心
        </div>
        <!-- 头像 -->
        <img
          src="https://www.keaitupian.cn/cjpic/frombd/1/253/1446214087/3780005526.jpg"
          alt=""
          class="rounded-full w-20 h-20 mx-auto border-2 border-white shadow-md shadow-gray-400 absolute bottom-[4rem] left-[0.5rem] transform translate-y-[3rem]"
        />
        <!-- 用户姓名 -->
        <div class="absolute bottom-[2.3rem] left-[6rem]  flex flex-col ">
         <div class="flex flex-row items-center mb-[0.1rem]">
           <div class="font-bold ">用户姓名</div>
           <van-icon name="arrow-down"  class="ml-[5px] bg-gray-300 rounded-md" />
          </div>
          <div class="flex flex-row items-center text-x text-gray-500 ">
            <van-icon name="wap-home-o" />
           <div class=" ">我的主页  </div>
           <div class="ml-[0.2rem] mr-[0.2rem]">|</div>
           <van-icon name="location-o" />
           <div class="">收货地址</div>
          </div>
        </div>
         <!-- 登录注册 -->
         <div>
          <div class="absolute bottom-[2.3rem] right-[1rem]   ">
            <div class="login-register container text-right  ">
          <van-button 
            round 
            type="success" 
            color="#00BFFF" 
            class="font-bold" 
            size="small" 
            @click="$router.push({ name: 'Login' })"
          >&nbsp;&nbsp;一键登录&nbsp;&nbsp;</van-button>
        </div>
          </div>
          </div>
      </div>
      <!-- 页面主体 -->
      <main class="mine-main">
    
       
        <!-- 我的订单 -->
         
        <section
          class="rounded-xl mt-[0.5rem] pb-[0.5rem] shadow-md bg-gray-90 mx-2 border"
        >
        <div class="font-bold ml-[0.5rem] mt-[0.25rem] text-xl">我的订单</div>
          <div class="topbar flex justify-around mt-[0.5rem]">
            <div
              class="topbar-item flex flex-col items-center"
              v-for="item in topBarState"
              :key="item.title"
            >
              <div class="topbar-item__icon">
                <van-icon
                  class="iconfont text-[1.5rem]"
                 
                  class-prefix="icon"
                  :name="item.icon"
                  :badge="item.badge"
                />
              </div>
              <div class="topbar-item__text">{{ item.title }}</div>
            </div>
          </div>
        </section>
        <!-- 菜单栏1 -->
        <section
          class="rounded-xl mt-[0.5rem] pb-[0.5rem] shadow-md bg-gray-90 mx-2 border "
        >
  
          <div class="topbar flex justify-around mt-[0.5rem]">
            <div
              class="topbar-item flex flex-col items-center  "
              v-for="item in midBarState"
              :key="item.title"
            >
              <div class="topbar-item__icon">
                <van-icon
                  class="iconfont text-[1.5rem]"
                 
                  class-prefix="icon"
                  :name="item.icon"
                  
                />
              </div>
              <div class="topbar-item__text">{{ item.title }}</div>
            </div>
          </div>
        </section>

        <!-- 菜单栏2 -->
        <section
          class="rounded-xl mt-[0.5rem] pb-[0.5rem] shadow-md bg-gray-90 mx-2 border mb-[1rem] "
        >
  
          <div class="topbar flex justify-around mt-[0.5rem]">
            <div
              class="topbar-item flex flex-col items-center  "
              v-for="item in bottomBarState"
              :key="item.title"
            >
              <div class="topbar-item__icon">
                <van-icon
                  class="iconfont text-[1.5rem] c"
                  :color="item.color"
                  class-prefix="icon"
                  :name="item.icon"
                  
                />
              </div>
              <div class="topbar-item__text">{{ item.title }}</div>
            </div>
          </div>
        </section>

<!-- 商品 -->
          <ShowProducts :items="prodects" />
          <!-- <wc-waterfall :gap="10" :cols="2" class="m-[0.5rem]">
                <div class="card boder rounded-lg shadow-lg" v-for="item in prodects " :key="item.title">
                  <van-image     lazy-load  :src="item.img" alt=""  class="rounded-lg"/>
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
           
     
      </main>
         
      <BackTop />
 
   
    </div>
    
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { toRefs } from "vue";
  import { useMineStore } from "../../store/mineStore.ts";
  import BackTop from "../../components/BackTop.vue";
  const mineStore = useMineStore();
  const { topBarState,midBarState,bottomBarState ,prodects} = toRefs(mineStore);
  import ShowProducts from "../../components/ShowProducts.vue";


  </script>
  
  <style lang="scss" scoped></style>
  