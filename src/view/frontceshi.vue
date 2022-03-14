<template>
  <div class="front">
    <PageHeader
      :isIcon=false
      headerText="首页"
    />
    <van-swipe
      :autoplay="3000"
      lazy-render
      height=180
    >
      <van-swipe-item
        v-for="image in swipeImage"
        :key="image"
      >
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>

    <!-- <van-swipe
      class="my-swipe"
      :autoplay="3000"
      height=160 
      indicator-color="white"
    >
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe> -->

    <div class="service">
      <div>
        <van-icon
          color="#ea545d"
          name="passed"
        /><span>自营品牌</span>
      </div>
      <div>
        <van-icon
          color="#ea545d"
          name="passed"
        /><span>无忧退货</span>
      </div>
      <div>
        <van-icon
          color="#ea545d"
          name="passed"
        /><span>48小时快速退款</span>
      </div>
    </div>

  </div>

</template>

<script lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { swipeImageUrl } from '../config/Constant'
import PageHeader from '../components/PageHeader.vue'

export default {
  name: 'front',
  components: {
    PageHeader,
  },

  setup() {
    const store = useStore()
    const data = reactive({
      swipeImage: [...swipeImageUrl],
      count: 0
    })

    // 访问 store
    // console.log(store.state.token);
    // // 修改store
    // store.commit('setToken',321)
    // // store 使用计算属性
    // console.log(store.getters.getId(1));

    let promise = new Promise((res, rej) => {
      setTimeout(() => {
        console.log('定时器执行完成1')
        res(123)
      }, 500)
    })

    let promise1 = new Promise((res, rej) => {
      setTimeout(() => {
        console.log('定时器执行完成2')
        res(321)
      }, 2000)
    })

    promise
      .then((data) => {
        console.log('then' + data)
      })
      .catch((data) => {
        console.log('catch' + data)
      })

    let all =  Promise.all([promise, promise1])

    all.then((data)=>{
      console.log('双异步都执行完成');
      
    })


    let race = Promise.race([ promise, promise1 ])

    race.then((data)=>{
      console.log('双异步执行最短时间完成');
      
    })

    // 3.创建只读的计算属性
    const computedEven1 = computed(() => state.count % 2);

    // 4.创建可读可写的计算属性
    const computedEven2 = computed({
      get:()=>{
        return state.count % 2;
      },
      set: newVal=>{
        state.count = newVal;
      }
    })

    return {
      ...toRefs(data),
    }
  },
}
</script>
<style scoped lang='scss'>
// .my-swipe .van-swipe-item {
//   color: #fff;
//   font-size: 20px;
//   line-height: 150px;
//   text-align: center;
//   background-color: #39a9ed;
// }
.front {
  .service {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #333;
    font-size: 14px;
    box-shadow: 0 0 4px 0 hsla(0, 6%, 50%, 0.13);
    -webkit-box-shadow: 0 0 4px 0 hsla(0, 6%, 50%, 0.13);
    span {
      margin-left: 4px;
    }
  }
}
</style>
