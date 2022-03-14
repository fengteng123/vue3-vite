import { ComponentCustomProperties } from 'vue'
import { createStore, Store } from 'vuex'

declare module '@vue/runtime-core' {
  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<storeDefaultInfo>
  }
}

  interface storeDefaultInfo {
    isLogin:Boolean;
    token: string;
    // idList: number[]
    idList:any
  }


/**
 * store 默认数据
 */
let storeDefault: storeDefaultInfo = {
  isLogin: false,
  token: "123",
  idList: [1, 1, 1, 1, , 2, 2, 2, 3, 6, 4, 7, 9, 7],
}


export default createStore({
  //  数据源
  state: storeDefault,
  // 可以认为是store 的计算属性
  getters: {
    getId:(state) => (id:number) =>{
      let arrId:number[] = [];
      if (id) {
        state.idList.forEach((item:number) => {
          if (id == item) {
            arrId.push(item)
          }
        });
        return arrId
      }
      return state.idList
    }
  },
  // 改变store的唯一方法通过 mutations
  // 可以通过 store.state 来获取状态对象，并通过 store.commit 方法触发状态变更
  // 在vue页面中this.$store.commit('setToken',token) 第一个参数是触发mutations里面那个方法, 第二个一般是要改变成什么值
  // 在vue页面中this.$store.state.token 来获取 存在vuex里面的值
  // 为同步函数
  mutations: {
    setToken(state, value) {
      state.token = value
    },
    // 
    setIsLogin(state, value) {
      state.isLogin = value;
    }
  },
  // Action 提交的是 mutation，而不是直接变更状态。
  // Action 可以包含任意异步操作。
  // 修改store 可以为 异步
  actions: {},
  // 防止state 特别臃肿 这个 可以 对 state 进行分割
  modules: {},
})

