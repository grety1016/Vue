//所有的组件共享的数据内容定义在本文件，新增一个store文件夹，新增一个index.js文件
//数据集中管理
//数据实现响应式
// ref or reactive
//如何在App组件通过provide提供

import { reactive } from "vue"; 


const store =  {
    state: reactive({
        msg:"hello world",
        counter:20,
        kingdeeMsg:"kingdee",

    }),
    updateMsg(){
        this.state.msg = "hello world updated";
    },
    updateKingdeeMsg(value){
        this.state.kingdeeMsg = value;
        console.log(this.state.kingdeeMsg);
    },

    

};

export default store;