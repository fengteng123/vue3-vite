<template>
  <div class="shopingclassify">
    <PageHeader
      :isIcon=false
      headerText="商品分类"
    />

    <div class="content">
      <div class="sidebar">
        <van-sidebar v-model="active">
          <van-sidebar-item
            v-for=" item in typeList"
            :key="item.id"
            :title="item.name"
            @click="spuFun(item.id)"
          />
        </van-sidebar>
      </div>
      <div class="shop-content">
        <div
          class="type-item"
          v-for="items of list"
          :key="items.id"
          @click="skipShopDetails(items)"
        >
          <img
            :src="items.image"
            alt=""
            srcset=""
          >
          <div class="text">{{items.name}}</div>
        </div>
      </div>
    </div>

  </div>

</template>

<script lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { categorySearch, spuSearch } from '../api/api'

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
      typeList: [],
      list: [],
    })

    onBeforeMount(() => {
      serach()
    })

    const serach = async () => {
      try {
        let res = await categorySearch(104)

        data.typeList = res.data.rows

        // spuSearch(1)
      } catch (error) {
        console.log(error)
      }
    }

    const spuFun = async (id: number) => {
      try {
        let res = await spuSearch({
          category1Id: id,
          category2Id: id,
          category3Id: id,
        })

        data.list = res.data.rows
      } catch (error) {
        console.log(error)
      }
    }

    const skipShopDetails = (item) => {
      console.log(item.id)

      // alert('跳转商品详情')
      router.push({
        path: '/commodityDetails',
        query: { id: item.id, image: item.image },
      })
    }

    return {
      ...toRefs(data),
      skipShopDetails,
      spuFun,
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
      height: 100%;
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
          height: 30px;
          font-size: 12px;
          color: #333;
          text-align: center;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
}
</style>