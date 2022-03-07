<template>
  <div class="shopingclassify">
    <PageHeader
      :isIcon=false
      headerText="商品分类"
    />

    <div class="content">
      <div class="sidebar">
        <van-sidebar v-model="active">
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
        </van-sidebar>
      </div>
      <div class="shop-content">
        <div
          class="type-item"
          v-for="index of 6"
          :key="index"
          @click="skipShopDetails()"
        >
          <img
            src="http://dummyimage.com/2000x2000/5169b4/FFF.png"
            alt=""
            srcset=""
          >
          <div class="text">手机</div>
        </div>
      </div>
    </div>

  </div>

</template>

<script lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import PageHeader from '../components/PageHeader.vue'

export default {
  name: 'shopingclassify',
  components: {
    PageHeader,
  },

  setup() {
    const router = useRouter()
    const route = useRoute()

    const data = reactive({
      active: 0,
    })

    const skipShopDetails = () => {
      alert('跳转商品详情')
    }

    return {
      ...toRefs(data),
      skipShopDetails,
    }
  },
}
</script>
<style scoped lang='scss'>
.shopingclassify {
  .content {
    display: flex;
    .sidebar {
      width: 80px;
      height: 100%;
    }
    .shop-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 12px;
      .type-item {
        width: 56px;
        height: 80px;
        margin: 0 12px;
        margin-bottom: 24px;
        img {
          width: 100%;
          height: 56px;
        }
        .text {
          font-size: 12px;
          color: #333;
          text-align: center;
        }
      }
    }
  }
}
</style>