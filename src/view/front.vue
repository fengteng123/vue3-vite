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

    <div class="shopng-list">
      <div
        v-for="(item,index) in shopingList"
        :key=index
      >
        <div class="shiping-header"> {{item.name}} </div>
        <div class="item-list">
          <div
            class="item"
            v-for="items in item.list"
            :key="items.category_id"
          >
            <img
              src="http://dummyimage.com/400x400/b7ddf2/333.png"
              alt=""
            >
            <div class="text">
              {{items.name}}
            </div>
          </div>
        </div>
      </div>
      <!-- <div>
        <div class="shiping-header"> 手机类 </div>
        <div class="item-list">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
      </div>
      <div>
        <div class="shiping-header"> 手机类 </div>
        <div class="item-list">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
      </div>
      <div>
        <div class="shiping-header"> 手机类 </div>
        <div class="item-list">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
      </div> -->

    </div>

  </div>

</template>

<script lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { swipeImageUrl } from '../config/Constant'
import PageHeader from '../components/PageHeader.vue'
import { categorySearch, brandCategory } from '../api/api'

export default {
  name: 'front',
  components: {
    PageHeader,
  },

  setup() {
    const data = reactive({
      swipeImage: [...swipeImageUrl],
      count: 0,
      shopingList: [],
    })

    onBeforeMount(() => {
      serach()
    })

    const serach = async () => {
      try {
        let res = await categorySearch(4)
        console.log(res)

        res.data.rows.forEach((item) => {
          serachItem(item.name)
        })
      } catch (error) {
        console.log(error)
      }
    }

    const serachItem = async (name: string) => {
      try {
        let list = await brandCategory(name)

        let obj = {
          name: name,
          list: [],
        }
        obj.list = list.data.slice(0, 4)

        data.shopingList.push(obj)
      } catch (error) {
        console.log(error)
      }
    }

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

    let all = Promise.all([promise, promise1])

    all.then((data) => {
      console.log('双异步都执行完成')
    })

    let race = Promise.race([promise, promise1])

    race.then((data) => {
      console.log('双异步执行最短时间完成')
    })

    // 3.创建只读的计算属性
    const computedEven1 = computed(() => state.count % 2)

    // 4.创建可读可写的计算属性
    const computedEven2 = computed({
      get: () => {
        return state.count % 2
      },
      set: (newVal) => {
        state.count = newVal
      },
    })

    return {
      ...toRefs(data),
    }
  },
}
</script>
<style scoped lang='scss'>
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
  .shopng-list {
    padding: 0 12px;
    box-sizing: border-box;
    width: 100%;
    .shiping-header {
      width: 100%;
      text-align: center;
      line-height: 60px;
      font-weight: 600px;
      font-size: 18px;
    }
    .item-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .item {
        width: 160px;
        height: 170px;
        margin-bottom: 16px;
        img {
          width: 100%;
          height: 140px;
        }
        .text {
          // colo
          font-size: 16px;
          text-align: center;
        }
      }
    }
  }
}
</style>
