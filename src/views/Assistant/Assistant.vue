<template>
    <!-- 用一个 div 包裹所有内容 -->
    <div>
      <Start v-if="showShadow" @click="showShadow = false" />
      <div class="chatPage container h-[calc(100vh-3rem)] relative bg-gradient-to-r from-blue-400 to-blue-200" >
        <!-- 顶部 -->
        <div
          class="chat-header h-[calc(10vh)] w-full flex items-center justify-between bg-transparent px-4 border-b border-white rounded-xl"
        >
          <div class="talk">
            <van-icon name="chat-o text-black" size="1.5rem" />
          </div>
          <div class="title">
            <h2>送礼小助手</h2>
          </div>
          <div class="avatar">
            <van-icon name="user-o text-black" size="1.5rem" />
          </div>
        </div>
        <!-- 聊天记录 -->
        <div class="chat_wrapper h-[calc(72vh)] overflow-y-auto overflow-x-auto mx-auto p-4 z-1">
          <div
            class="chat-item w-full"
            v-for="(item, index) in msgController"
            :key="index"
          >
            <component
              :is="item.type == 1 ? AIReply : UserQuery"
              :msg="item.content"
            />
          </div>
        </div>
        <!-- 底部提问栏 -->
        <div
          class="chat_footer h-16 w-full bottom-0 absolute z-999 border-t border-white rounded-xl"
          v-show="type"
        >
          <van-search
            v-model="searchField"
            placeholder="请输入..."
            show-action
            shape="round"
            background="transparent"
            class="mt-0.5"
             @search="SubmitEvent"
          >
            <template #action>
              <div class="text-white transform translate-y-1" @click="SubmitEvent">
                <van-icon name="guide-o" class="text-blue-500" size="1.25rem" />
              </div>
            </template>
          </van-search>
        </div>
        <div v-show="!type">
          <van-loading vertical class="text-black">
            <template #icon>
              <van-icon name="star-o" size="30" color="black" />
            </template>
            加载中...
          </van-loading>
        </div>
      </div>
    </div>
  </template>
  
  
  <script setup lang="ts">
  import UserQuery from "../../components/AI/UserQuery.vue";
  import AIReply from "../../components/AI/AIReply.vue";
  import Start from "../../components/Assistant/Start.vue";
  import { ref, onMounted } from "vue";
  import getCozeData from "../../api/index";
  import { showToast } from "vant";
  
  type msgItem = {
    type: number; // 1:AI 2:用户
    content: string;
  };
  
  const searchField = ref("");
  // 控制进入组件
  const showShadow = ref(true);
  
  const msgController = ref<msgItem[]>([
    {
      type: 1,
      content:
        "✨✨✨\n \t尊敬的顾客们👋，欢迎使用送礼小助手！我是您的专属智能导购——dantaK🤖。\n\t现在，让我们一起买买买吧！🚀",
    },
  ]);
  
  const type = ref(true);
  // 提交事件
  const SubmitEvent = async () => {
    if (searchField.value == "") {
      msgController.value.push({
        type: 1,
        content: "请输入正确内容哦！！！",
      });
      return;
    }
    const msg = searchField.value;
    type.value = false;
    msgController.value.push({
      type: 2,
      content: msg,
    });
    msgController.value.push({
      type: 1,
      content: "✨✨✨\n我已收到！ 了解到您的需求，请稍等片刻！！！🌟",
    });
    searchField.value = "";
     try {
    const datas = await getCozeData(msg);
    type.value = true;
    console.log(datas);
    const result = datas.data.messages;
   
      result.forEach((item: any) => {
        console.log(item.content);
        if (item.type == "answer") {
          msgController.value.push({
            type: 1,
            content: item.content,
          });
        }
      });
    } catch (error) {
      msgController.value.push({
        type: 1,
        content: "数据错误！！！请检查网络！！！",
      });
      type.value = true;
      return;
    }
  };
  </script>
  
  <style lang="less" scoped></style>
  