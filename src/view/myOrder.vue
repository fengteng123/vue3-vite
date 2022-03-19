<template>
  <div class="shopingclassify">
    <PageHeader
      :isIcon=true
      headerText="我的订单"
    />

    <div class="list">

      <div
        v-for="item in list"
        :key="item.id"
        class="abc"
      >
        <div class="item">
          <div>订单:{{item.number.slice(0,10)}}</div>
          <div>金额:{{item.amount}}</div>
        </div>

        <div class="date">
          订单创建时间:{{item.creatTime.slice(0,10)}}
        </div>

      </div>

    </div>

  </div>

</template>

<script lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { orderAll } from '../api/api'

import PageHeader from '../components/PageHeader.vue'

export default {
  name: 'myOrder',
  components: {
    PageHeader,
  },

  setup() {
    const router = useRouter()
    const route = useRoute()

    const data = reactive({
      active: 0,
      list: [],
    })

    onBeforeMount(() => {
      selectOrder()
    })

    const selectOrder = async () => {
      try {
        let res = await orderAll()
        console.log(res)
        data.list = res.data
      } catch (error) {
        console.log(error)
      }
    }

    return {
      ...toRefs(data),
    }
  },
}
</script>
<style scoped lang='scss'>
.list {

  padding: 0 16px;
  padding-top: 60px;
  box-sizing: border-box;
  position: relative;
  .abc {
    border: solid 4px #fda929;
    border-radius: 32px;
    margin-bottom: 16px;
  }
  .item {
    height: 50px;
    width: 100%;
    display: flex;
    padding: 0 16px;
    box-sizing: border-box;
    justify-content: space-between;
    font-size: 16px;
    line-height: 50px;
  }
  .date {
    // position: absolute;
    bottom: 0;
    font-size: 16px;
    padding-left: 16px;
    line-height: 30px;
  }
}
</style>