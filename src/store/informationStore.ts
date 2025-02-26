import { defineStore } from "pinia";
// 关键数据要限制类型
import {ref} from 'vue'
import type { 
    Customerservicemessages,
    PopularProducts,
    prodects,

 } from "../types/information";
export const useinformationStore = defineStore('information', () => {
    const Customerservicemessages= ref<Customerservicemessages[]>([
        {
            title: "冬兰纸品湿巾旗舰店",
            icon: "https://img.alicdn.com/imgextra/i4/2217190958325/O1CN01YV862h2BMuFUUKeiL_!!2217190958325.jpg_110x110q30.jpg_.webp",
            content:"尊敬的顾客，欢迎进店！新春之际，祝您和家人平安喜乐，希望我们的商品能为您提供更好的购物体验。",
            time:"2025/1/12",
        }, 
        {
            title: "灵蛇魅影专卖店",
            icon: "https://img.alicdn.com/imgextra//a7/82/TB16BlErFT7gK0jSZFpSuuTkpXa.jpg_110x110q30.jpg_.webp",
            content:"商品已发出，预计三天内送达，请注意查收。",
            time:"2024/10/13",
        }, 
        {
            title: " 淘乐宝精品生活馆 ",
            icon: "https://img.alicdn.com/imgextra//1e/dc/TB12EuoJFXXXXblXVXXSutbFXXX.jpg_110x110q30.jpg_.webp",
            content:"有任何问题，请随时联系在线客服。",
            time:"2024/9/22",
        }, 

    
    ])
    const PopularProducts = ref<PopularProducts[]>([

        {
            area: "美妆",
            type: "猜你喜欢",
            img:
                "https://img.alicdn.com/img/i3/55577118/O1CN01oH0tnU22S6EQPWgdy_!!4611686018427382302-0-saturn_solar.jpg_360x360q90.jpg_.webp",
        },
        {
            area: "数码",
            type: "百亿补贴",
            img:
                "https://gju1.alicdn.com/tps/i1/2217587502021/O1CN01Xxk37u1QnfTASu7na_!!4611686018427382725-2-item_pic.png",

        },
        {
            area: "女装",
            type: "热门精选",
            img:
                "https://img.alicdn.com/img/i4/499540133/O1CN01Nkk8wQ1CqxXsXWJlK_!!0-saturn_solar.jpg_360x360q90.jpg_.webp",

        },
        {
            area: "男装",
            type: "夏日精选",
            img:
                "https://img.alicdn.com/img/i4/116791732/O1CN01k95gzM1OfIvaHXRn2_!!0-saturn_solar.jpg_360x360q90.jpg_.webp",

        },
        {
            area: "好物",
            type: "美食精选",
            img:
                "https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/2211366260396/O1CN01xaWJHl1EnPmJ2OxSa_!!0-item_pic.jpg_360x360q90.jpg_.webp",

        },
      
    ])
  const prodects = ref<prodects[]>(
    [
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
      
    
  ])
    
  return {
        PopularProducts,
        Customerservicemessages,
        prodects
    } 
  
})
