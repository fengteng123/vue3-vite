<template>
  <div class="home">
    <router-view />
    <PageFooter :list='footerList' />
  </div>

</template>

<script lang='ts'>
import {
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  defineComponent,
} from 'vue'

import PageFooter from '../components/pageFooter.vue'
import { addOrUpdate } from '../api/api'

export default {
  name: 'home',
  components: {
    PageFooter,
  },
  setup() {
    const data = reactive({
      footerList: [
        {
          name: '首页',
          icon: 'wap-home-o',
          path: '/front',
        },
        {
          name: '分类',
          icon: 'qr',
          path: '/shopingclassify',
        },
        {
          name: '购物车',
          icon: 'shopping-cart-o',
          path: '/shoping',
        },
        {
          name: '我的',
          icon: 'manager-o',
          path: '/my',
        },
      ],
      count: 0,
    })

    onBeforeMount(async () => {
      // console.log('2.组件挂载页面之前执行----onBeforeMount')
      // let a = await addOrUpdate({ name: '河南' })
      // console.log(a)
    })
    onMounted(() => {
      
    })
    

    return {
      ...toRefs(data),
    }
  },
}
</script>
<style scoped lang='scss'>
.home {
  padding-top: 53px !important;
  padding-bottom: 60px;
}
</style>
