<template>
  <div class="car">
    <PageHeader
      :isIcon=false
      headerText="购物车"
    />

    <div class="shop-list">
      <ShopItem
    
    /><ShopItem
    
    /><ShopItem
    
    /><ShopItem
    
    /><ShopItem
    
    /><ShopItem
    
    /><ShopItem
    
    />
    </div>

    <div class="submit-bar">
      <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
    </div>

    
    

  </div>

</template>

<script lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import ShopItem from '../components/ShopItem.vue'

export default {
  name: 'front',
  components: {
    PageHeader,
    ShopItem
  },

  setup() {
    const data = reactive({})

    return {
      ...toRefs(data),
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
  ::v-deep .van-submit-bar {
    bottom: 54px;
  }
}
}


</style>
