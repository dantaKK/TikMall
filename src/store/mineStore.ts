import { defineStore } from "pinia";
// 关键数据要限制类型
import { ref } from "vue";
// 引诱 面试官 es6 module 问题
import type {
    TopBarState,
    MidBarState,
    BottomBarState,
    prodects,
} from "../types/mine.ts";

export const useMineStore = defineStore('mine', () => {
    //topBarState 响应式状态 topBarState topBarState.value
    const topBarState = ref<TopBarState[]>([
        {
            title: "待支付",
            icon: "daizhifu",
        },
        {
            title: "待发货",
            icon: "daifahuo",
        },
        {
            title: "待收货",
            icon: "daishouhuo",
            badge: '1'
        },
        {
            title: "待评价",
            icon: "daipingjia01",
        },
        {
            title: "售后",
            icon: "shouhou",
        }
    ])
    const midBarState =ref<MidBarState[]> ([
        {
            title: "购物车",
            icon: "gouwuche",
        },
        {
            title: "收藏",
            icon: "shoucang",
        },
        {
            title: "关注的店",
            icon: "guanzhudedianpu",
           
        },
        {
            title: "足迹",
            icon: "footprint",
        },
        {
            title: "评价中心",
            icon: "pingjiazhongxin",
        },
        
    ])
    const bottomBarState = ref<BottomBarState[]>([
        {
            title: "抢优惠卷",
            icon: "diyongquan",
            color: "#B3E5FC"
        },
        {
            title: "抽红包",
            icon: "ziyuan115",
            color: "#FF4081"
        },
        {
            title: "全场一元",
            icon: "yiyuangou",
            color: "#03A9F4"
            
        },
        {
            title: "邀请好友",
            icon: "yaoqinghaoyou",
            color: "#B3E5FC"
        },
        {
            title: "赚钱",
            icon: "tuiguangzhuanqian",
            color: "#FFC107"
        },
        
    ])


    const prodects = ref<prodects[]>([
        
            {  
               
                nickName: "￥19.9",
                title: "吃饭碗家用高颜值陶瓷",
                img: "https://gw.alicdn.com/imgextra/i1/2215403086116/O1CN01ojUZkE1v3BGAGTZiK_!!0-item_pic.jpg",
                loveNum: 9899
            },
            {
                nickName: "￥5.01",
                title: "心相印茶语抽纸整箱20包",
                img: "https://gw.alicdn.com/imgextra/i2/2200641850090/O1CN01JBP5e31CXGWkT1DB3_!!0-item_pic.jpg",
                loveNum: 4750
            },
            {
                nickName: "￥249",
                title: "漫步者G2耳机",
                img: "	https://gju4.alicdn.com/tps/O1CN01GwvfYW24q29i0Fl32_!!6000000007441-0-yinhe.jpg",
                loveNum: 9865
            },
            {
                nickName: "￥17.5",
                title: "多功能小电锅网红同款家用小电饭锅",
                img: "https://gw.alicdn.com/imgextra/i2/2216556586406/O1CN01f6P9FD1xC0Dq2oeHN_!!2216556586406.jpg",
                loveNum: 4315
            },
         
           
          
        
    ])
    return {
        topBarState,
        midBarState,
        bottomBarState,
        prodects
    }

})