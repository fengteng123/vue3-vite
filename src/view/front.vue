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
import { reactive, toRefs, onBeforeMount, onMounted, } from 'vue'
import { useStore } from 'vuex'
import { swipeImageUrl } from '../config/Constant'
import PageHeader from '../components/PageHeader.vue'

export default {
  name: 'front',
  components: {
    PageHeader,
  },

  setup() {
    const store =  useStore()
    const data = reactive({
      swipeImage: [...swipeImageUrl],
    })

    // const token = this.$store.state.token;
    setTimeout(() => {
      console.log(store.state.token);
    }, 200);
    

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
