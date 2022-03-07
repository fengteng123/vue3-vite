<template>
  <div class="my">
    <PageHeader
      :isIcon=false
      headerText="我的"
    />

    <header class="headers">
      <div class="left-icon">
        <van-icon
          color="#fff"
          name="contact"
        />
      </div>
      <span @click='loginFun()'>登陆 / 注册</span>
      <!-- <span>15877378549</span> -->
    </header>

    <div class="content">
      <router-link
        class="item"
        :to="{ path: '/1323'}"
      >
        <div class="left">
          <van-icon
            size="20px"
            name="orders-o"
          />
          我的订单
        </div>

        <van-icon
          size="20px"
          name="arrow"
        />
      </router-link>

      <router-link
        class="item"
        :to="{ path: '/1323'}"
      >
        <div class="left">

          <van-icon
            size="20px"
            name="friends-o"
          />
          个人信息
        </div>

        <van-icon
          size="20px"
          name="arrow"
        />
      </router-link>

      <div class="item">
        <div class="left">

          <van-icon
            size="20px"
            name="question-o"
          />
          服务中心
        </div>

        <van-icon
          size="20px"
          name="arrow"
        />
      </div>

      <div class="item">
        <div class="left">

          <van-icon
            size="20px"
            name="setting-o"
          />
          设置
        </div>

        <van-icon
          size="20px"
          name="arrow"
        />
      </div>

      <div class="edit">
        <van-button color="#f17d27" type="primary" round block>退出登陆</van-button>
      </div>


    </div>
  </div>

</template>

<script lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import PageHeader from '../components/PageHeader.vue'

export default {
  name: 'front',
  components: {
    PageHeader,
  },

  setup() {

    const router = useRouter()
    const route = useRoute()

    const data = reactive({})


    // 登陆 注册
    const loginFun = () => {
      router.push({
        path:'/accountNumber'
      })
    }

    return {
      ...toRefs(data),
      loginFun,
    }
  },
}
</script>
<style scoped lang='scss'>
.my {
  .headers {
    width: 100%;
    height: 80px;
    background: url('../assets/carbg.png') center 0 #f37d0f;
    background-size: auto 100%;
    display: flex;
    align-items: center;
    .left-icon {
      width: 60px;
      height: 60px;
      margin: 0 20px;
      border-radius: 50%;
      background-color: #fda929;
      border: 2px solid #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    span {
      font-size: 16px;
      color: #fff;
    }
  }
  .content {
    width: 100%;
    .item {
      width: 100%;
      box-sizing: border-box;
      padding: 18px 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #333;
      .left {
        font-size: 16px;
      }
    }
  }
  .edit {
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    bottom: 100px;
    display: flex;
    justify-content: center;
    padding: 0 40px;
  }
}
</style>
