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
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import PageHeader from '../components/PageHeader.vue'

export default {
  name: 'front',
  components: {
    PageHeader,
  },

  setup() {
    const data = reactive({
      swipeImage: [
        'https://img14.360buyimg.com/pop/s1180x940_jfs/t1/104921/33/21246/82189/620b05e0E5d05e662/4692b745e787f12b.jpg.webp',
        'https://img13.360buyimg.com/pop/s1180x940_jfs/t1/164493/29/26924/90625/620b6746Ef3441fa6/2734654411565aad.jpg.webp',
        'https://imgcps.jd.com/img-cubic/creative_server_cia/v2/2000366/10034239783228/FocusFullshop/CkNqZnMvdDEvMTk3NjM3LzEyLzg4NTUvODcyMDAyLzYxNDUzOTlmRTc1ZjA2MTI5LzM5MzFiNzFmZmRhM2RiYmIucG5nEgk1LXR5XzBfNTYwAjjui3pCEAoMdHJhbW9s56yU57G7EABCEAoM54mp576O5Lu35buJEAFCEAoM56uL5Y2z5oqi6LStEAJCCgoG57K-6YCJEAdYvIKxuoSkAg/cr/s/q.jpg',
        'https://img13.360buyimg.com/pop/s1180x940_jfs/t1/173456/26/27809/84631/6205c2c1E469faf18/59f20509e1316433.jpg.webp',
      ],
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
