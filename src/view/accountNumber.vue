<template>
  <div class="accountNumber">
    <PageHeader
      :isIcon=true
      headerText="登陆注册"
    />

    <div class="login">
      <div class="login-centent">
        <van-field
          v-show="type == 2 "
          v-model="name"
          label="昵称"
        />
        <van-field
          v-model="modile"
          type="tel"
          label="手机号"
        />
        <van-field
          v-model="password"
          type="password"
          label="密码"
        />
      </div>

      <div class="edit">
        <van-button
          color="#7886f2"
          type="primary"
          round
          block
          @click="subFun()"
        >{{type==1?'登陆':'注册'}}</van-button>
      </div>

      <div class="bottom-back"></div>
    </div>
  </div>

</template>

<script lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Toast } from 'vant'
import PageHeader from '../components/PageHeader.vue'
import { telReg } from '../utils/reg'
import { oauthLogin, registerUser } from '../api/api'
import { request } from '../utils/requestPlus'
import { useStore } from 'vuex'

export default {
  name: 'AccountNumber',
  components: {
    PageHeader,
  },

  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    // console.log(
    //   request(
    //     {
    //       method: 'post',
    //       url: '/announcement/saveAnnouncement',
    //       data: [1, 2, 3, 4],
    //     },
    //     {
    //       contentType: '123',
    //       timeout: 200,
    //     }
    //   )
    // )

    const data = reactive({
      type: 1,
      name: '',
      modile: '',
      password: '',
    })

    // 动态路由确定 是 登陆 还是 注册
    data.type = route.params.type

    /**
     * 登陆/ 注册
     */
    const subFun = async () => {
      let regPhone = telReg.test(data.modile.trim())
      if (!regPhone) {
        return Toast.fail('请输入正确手机号')
      }

      if (data.password.length == 0) {
        return Toast.fail('密码为必填项')
      }

      if (data.type == 1) {
        try {
          let res = await oauthLogin({
            username: data.modile,
            password: data.password,
          })

          if (res.success) {
            window.localStorage.setItem('isLogin',true)
            store.commit('setIsLogin', true)

            Toast.success('登陆成功')
            router.replace({
              path: '/my',
            })
          }
        } catch (error) {
          console.log(error)
          Toast.fail(error.message)
        }
      } else {
        if (data.name.length == 0) {
          return Toast.fail('姓名为必填项')
        }
        try {
          let res = await registerUser({
            account: data.modile,
            password: data.password,
            nickName: data.name,
          })

          if (res.success) {
            data.type = 1
          }
        } catch (error) {
          console.log(error)
          Toast.fail(error.message)
        }
      }
    }

    return {
      ...toRefs(data),
      subFun,
    }
  },
}
</script>

<style scoped lang='scss'>
.accountNumber {
  height: calc(100% - 120px);
  .login {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .login-centent {
      height: 200px;
      width: 300px;
    }

    .edit {
      width: 100%;
      box-sizing: border-box;
      position: absolute;
      bottom: 260px;
      display: flex;
      justify-content: center;
      padding: 0 40px;
    }

    .bottom-back {
      position: fixed;
      bottom: 0px;
      height: 100px;
      width: 100%;
      background-image: url('../assets/login.png');
    }
  }
}
</style>