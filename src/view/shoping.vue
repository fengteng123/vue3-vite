<template>
  <div class="car">
    <PageHeader
      :isIcon=true
      headerText="购物车"
    />

    <div class="shop-list"  v-if="list">
      <ShopItem
        v-for=" item in list"
        :key="item.id"
        :list="item"
      />

    </div>

    <div class="submit-bar">
      <van-submit-bar
        :price="amount*1.00"
        button-text="提交订单"
        @submit="onSubmit"
      />
    </div>

  </div>

</template>

<script lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import ShopItem from '../components/ShopItem.vue'

import { selectCart, order, pay } from '../api/api'

export default {
  name: 'shoping',
  components: {
    PageHeader,
    ShopItem,
  },

  setup() {
    const data = reactive({
      amount:"",
      list:[]
    })

    const onSubmit = async () => {
      let obj = {
        amount:data.amount,
        orderSkuList:[],
      }

      data.list.forEach(item => {
        let itemObj = {
          skuId: item.id,
          payAmount: item.price,
        }
        obj.orderSkuList.push(itemObj)
      });

      try {
        let res = await order(obj); 
        console.log(res);

        // 支付
        payFun(res.data.number, res.data.amount)
        
      } catch (error) {
        console.log(error);
        
      }
    }

    onBeforeMount(() => {
      select()
    })

    const select = async () => {
      try {
        let res = await selectCart();

        data.amount = res.data.amount;
        data.list = res.data.list;
      } catch (error) {
        console.log(error)
      }
    }

    const payFun = async (orderNumber,payAmount) =>{
      try {
        let res = await pay({
          orderNumber,
          payAmount,
        })
        if (res.success) {
          select()
        }
      } catch (error) {
        
      }
    }
    return {
      ...toRefs(data),
      onSubmit,
    }
  },
}
</script>
<style scoped lang='scss'>
.car {
  .shop-list {
    height: 500px;
    overflow-y: auto;
  }
  .submit-bar {
    position: absolute;
    width: 100%;
    bottom: 56px;
    ::deep(.van-submit-bar) {
      bottom: 54px;
    }
  }
}
</style>
