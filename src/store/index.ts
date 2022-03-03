import { createStore } from 'vuex'

interface storeDefaultInfo {
  token: string;
}




/**
 * store 默认数据
 */
 let storeDefault:storeDefaultInfo = {
  token:"123",
 }


 export default createStore({
   state:storeDefault,
   getters:{},
   // 改变store的唯一方法通过 mutations
   // 可以通过 store.state 来获取状态对象，并通过 store.commit 方法触发状态变更
   // 在vue页面中this.$store.commit('setToken',token) 第一个参数是触发mutations里面那个方法, 第二个一般是要改变成什么值
   // 在vue页面中this.$store.state.token 来获取 存在vuex里面的值
   mutations:{
    setToken(state,value){
      state.token = value
    }
   },
   actions:{},
   modules:{},
 })