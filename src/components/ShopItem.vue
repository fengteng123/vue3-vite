<template>
  <div class="shop-item">
    <div class="item-left">
      <img
        src="http://dummyimage.com/400x400/ffcc33/FFF.png"
        alt="占位图片"
        srcset=""
      >
    </div>

    <div class="item-right">
      <div class="item-characters">{{list.name}}</div>

      <div
        class="item-characters"
        style="color:#fda929; padding:6px 0;"
      >{{list.categoryName}}</div>

      <div
        class="item-characters"
        style="color:'#A8A8A8'"
      >
        售价: {{list.price?list.price/100:'' }}元
      </div>
    </div>
    <van-icon
      @click="delectShop(item)"
      class="icon"
      size="24px"
      color="#666"
      name="delete-o"
    />
  </div>

</template>

<script lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { delectCart } from '../api/api'

export default {
  name: 'pageFooter',
  props: {
    list: {
      type: Object,
      required: true,
      default: {},
    },
  },
  setup(props, context) {
    const router = useRouter()
    const route = useRoute()

    const data = reactive({})

    onBeforeMount(() => {
      // console.log('2.组件挂载页面之前执行----onBeforeMount')
    })
    onMounted(() => {
      // console.log('3.-组件挂载到页面之后执行-------onMounted')
    })

    /**
     * 删除商品
     */
    const delectShop = async (item) => {
      // 向父组件时间传值的方式，这里适合在组件中直接 调用方法删除
      // emit('onInput', value)
      try {
        let res = delectCart(props.list)
      } catch (error) {
        console.log(error)
      }
    }

    return {
      ...toRefs(data),
      delectShop,
    }
  },
}
</script>
<style scoped lang='scss'>
.shop-item {
  position: relative;
  width: 100%;
  margin-top: 6px;
  border-bottom: 2px solid #f5f6fa;
  display: flex;
  .item-left {
    padding: 0 30px;
    img {
      width: 100px;
      height: 100px;
    }
  }
  .item-right {
    padding: 0 12px;
    .item-characters {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 13px;
      color: #666666;
    }
  }
  .icon {
    position: absolute;
    width: 30px;
    height: 30px;
    right: 10px;
    bottom: 10px;
  }
}
</style>
