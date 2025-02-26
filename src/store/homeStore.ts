import { defineStore } from "pinia";
// 关键数据要限制类型
import {ref} from 'vue'
import type {
    topBarState,
    newprodects,
    downprodects,
    bottomItemState,
    overprodects
} from "../types/home.ts";
export const useHomeStore = defineStore('home', () => {

    const topBarState=ref<topBarState[]>([
        {
            title: "充值中心",
            icon: "gold-coin",
            color: "#ffc001",
        },
        {
            title: "天天抽红包",
            icon: "invitation",
            color: "#ff4444",
        },
        {
            title: "券红包",
            icon: "coupon",
            color: "#FF69B4",
        },
        
        {
            title: "试用领取",
            icon: "gift",
            color: "#ff4444",
             badge: '试大牌'
        },
        {
            title: "抖音超市",
            icon: "shopping-cart",
            color: "#00FF7F",
        },
        {
            title:"足迹",
            icon:"star",
            color:"#00FF7F"
           
        }
    ])

    const newprodects = ref<newprodects[]> ([
        {
            price:0.01,
            image:'https://img.alicdn.com/bao/upload/O1CN01PoMTmS1uFGCIebjoK_!!6000000006007-0-yinhe.jpg'
           
        },
        {
 
            price:0.01,
            image:'https://img.alicdn.com/bao/upload/O1CN01lZUfgC1XnqwzUOPIY_!!6000000002969-0-yinhe.jpg'
           
        },
        {
            price:0.01,
            image:'https://img.alicdn.com/bao/upload/O1CN017UYKlI1lXjdBs8fih_!!6000000004829-0-yinhe.jpg'

           
        },
        {
             price:0.01,
            image:'https://img.alicdn.com/bao/upload/O1CN01YN7tFa1ZSRfJS2Hy7_!!6000000003193-0-yinhe.jpg'
        }
       
    ])

    const downprodects=ref<downprodects []>([
        {
            price:0.01,
           image:'https://img.alicdn.com/bao/upload/O1CN01SAArnP25utwmkxze6_!!6000000007587-0-yinhe.jpg'
       },
       {
           price:0.01,
           image:'https://img.alicdn.com/bao/upload/O1CN01QCJCU01zLjsMzSU73_!!6000000006698-0-yinhe.jpg'
      },
     {
           price:0.01,
           image:'https://img.alicdn.com/bao/upload/O1CN01W4jxlS1o9PR5XUKSX_!!6000000005182-0-yinhe.jpg'
     }

    ])
    const overprodects=<overprodects[]>([
        {
            price:169,
           image:'	https://img.alicdn.com/bao/upload/O1CN01Tky8Jx21EWs0d6fCa_!!6000000006953-0-yinhe.jpg'
       },
       {
           price:288,
           image:'https://img.alicdn.com/bao/upload/O1CN01B2wfD61sF8pQZ0VOh_!!6000000005736-0-yinhe.jpg'
      },
     {
           price:4990,
           image:'	https://img.alicdn.com/bao/upload/O1CN016KWtdw1wJ2hXmh5Pw_!!6000000006286-0-yinhe.jpg'
     }

    ])


    const bottomItemState = ref<bottomItemState[]>([
        {
            title: "推荐",
            items: [
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
                {
                    nickName: "￥29.9",
                    title: "保温杯男款大容量",
                    img: "https://gw.alicdn.com/imgextra/i4/2434904310/O1CN010snMK21hi23a71RET_!!4611686018427384054-0-item_pic.jpg",
                    loveNum: 780
                },
                {
                    nickName: "￥49.8",
                    title: "【360°全包围设计】雨衣",
                    img: "https://gw.alicdn.com/imgextra/i3/2200689234396/O1CN01kMXNXT1iLQ8YMdPto_!!4611686018427384284-0-item_pic.jpg",
                    loveNum: 9520
                },
                {
                    nickName: "￥60",
                    title: "urtto原创苹果茶Lolita连衣裙短袖",
                    img: "https://img.alicdn.com/imgextra/i2/3017094217/O1CN01Yc1F3r1h1R8CsXzrh_!!0-item_pic.jpg_q50.jpg_.webp",
                    loveNum: 9899
                },
                {
                    nickName: "￥1699",
                    title: "雷鸟Air 3 ",
                    img: "https://gw.alicdn.com/imgextra/i3/2214188502879/O1CN01vEY7yo1X8dJ5qfB9K_!!4611686018427383647-0-item_pic.jpg",
                    loveNum: 4315
                },
              
            ]
        },
        {
            title: "新人专享",
            items: [
            ]
        },
        {
            title: "洗护",
            items: []
        },
        {
            title: "百货",
            items: []
        },
        {
            title: "数码办公",
            items: []
        },
        {
            title: "生鲜",
            items: []
        },
        {
            title: "家具家装",
            items: []
        },
        {
            title: "运动",
            items: []
        },
        {
            title: "食品饮料",
            items: []
        }
    ])
    return {
        topBarState,
        newprodects,
        downprodects,
        overprodects,
        bottomItemState
    }
})