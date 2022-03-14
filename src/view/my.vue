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
      <span v-if="isLogin">{{username.nickName}}</span>
      <div v-if="!isLogin">
        <span  @click='loginFun(1)'>登陆 / </span> <span @click="loginFun(2)"> 注册</span>
      </div>

    </header>

    <div
      class="content"
      v-if="isLogin"
    >
      <router-link
        class="item"
        :to="{ path: '/myOrder'}"
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
        :to="{ path: '/user'}"
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
        <van-button
          @click="editFun"
          color="#f17d27"
          type="primary"
          round
          block
        >退出登陆</van-button>
      </div>

    </div>
  </div>

</template>

<script lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { userDetails } from '../api/api'
import { useStore } from 'vuex'

import PageHeader from '../components/PageHeader.vue'

export default {
  name: 'my',
  components: {
    PageHeader,
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const data = reactive({
      isLogin: window.localStorage.getItem('isLogin'),
      username: {},
    })

    onBeforeMount(() => {
      if (data.isLogin) {
        userInfo()
      }
    })

    // 登陆 注册
    const loginFun = (type: number) => {
      router.push({
        path: `/accountNumber/${type}`,
      })
    }

    const userInfo = async () => {
      try {
        let res = await userDetails()
        console.log(res)
        if (res.success) {
          data.username = res.data
        }
      } catch (error) {
        console.log(error)
      }
    }

    // 退出账号
    const editFun = () => {
      window.localStorage.setItem('isLogin',false)
      router.push({
        path: '/front',
      })
    }

    return {
      ...toRefs(data),
      loginFun,
      editFun,
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
