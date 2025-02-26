//RouteRecordRow 由vue-router提供的
//自定义类型约束
//pinia 用到的状态都加类型约束，数据是核心
//type 声明类型
export type topBarState ={
    title:string;
    icon:string;
    color:string;
    badge?: string;
}

export type newprodects ={
    price:number;
    image:string;

}

export type downprodects={
    price:number;
    image:string;
  
}

export type overprodects={
    price:number;
    image:string;
}
export type bottomItemState={
    title:string;
    items:Array<any>;
}