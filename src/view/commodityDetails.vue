<template>
  <div class="shopingclassify">
    <PageHeader
      :isIcon=true
      headerText="商品详情"
    />
    <div class="content">
      <div class="image">
        <img v-if="image" :src="image" alt="图片">
      </div>

      <div class="bottom">
        <div class="description">
          {{shoppingInfo.name}}
        </div>
        <div class="money">
          {{shoppingInfo.price?shoppingInfo.price/100:''}} 元
        </div>
      </div>

      <div class="itemtype">

      </div>


    </div>

    <div class="submit-bar">
      <van-submit-bar
        :price="shoppingInfo.price"
        button-text="加入购物车"
        @submit="onSubmit"
      />
    </div>

  </div>

</template>

<script lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { skuSearch, cart } from '../api/api'
import { Toast } from 'vant'
import PageHeader from '../components/PageHeader.vue'

export default {
  name: 'commodityDetails',
  components: {
    PageHeader,
  },

  setup() {
    const router = useRouter()
    const route = useRoute()

    const data = reactive({
      active: 0,
      image:route.query.image,
      shoppingId: route.query.id,
      shoppingInfo:{},
      tagList:[],
    })

    onBeforeMount(() => {
      itemShop()
    })

    // 查询单个商品
    const itemShop = async () => {
      try {
        let res = await skuSearch({
          spuId: data.shoppingId,
        })

        data.shoppingInfo = res.data[0]

        console.log(res);
        
      } catch (error) {
        console.log(error);
        
      }
    }

    const onSubmit = async () => {
      try {
        let res = await cart(data.shoppingInfo)

        router.push({
          path:'/shoping'
        })


      } catch (error) {
        console.log(error);
        Toast.fail('加入购物车失败')
      }
    }

    return {
      ...toRefs(data),
      onSubmit
    }
  },
}
</script>
<style scoped lang='scss'>
.content {
  // padding: 0 16px;
  .image {
    width: 100%;
    height: 300px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .bottom {
    padding: 0 16px;
    .description {
      font-size: 16px;
      box-sizing: border-box;
      line-height: 22px;
    }
    .money {
      line-height: 30px;
      font-size: 16px;
      color: #fda929;
    }
  }
  .itemtype {
    
  }
}
</style>