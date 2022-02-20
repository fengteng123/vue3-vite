<template>
  <div class="footer">
    <div
      class="footer-item"
      v-for="item in list"
      :key="item.name"
    >
      <div
        class="center"
        @click="clickItemFun(item)"
        :style="{'color':item.icon == currentItem ?'#FFAA00':'' }"
      >
        <van-icon
          class="icon"
          :name="item.icon"
        />
        <div class="text"> {{ item.name }} </div>
      </div>

    </div>
  </div>

</template>

<script lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'pageFooter',
  props: {
    list: {
      type: Array,
      required: true,
      default: [],
    },
  },
  setup(props, context) {
    const router = useRouter()
    const route = useRoute()

    const data = reactive({
      localList: props.list,
      currentItem: props.list[0].icon,
    })

    onBeforeMount(() => {
      // console.log('2.组件挂载页面之前执行----onBeforeMount')
    })
    onMounted(() => {
      // console.log('3.-组件挂载到页面之后执行-------onMounted')
    })

    // let clickItemFun = () => {
    //   console.log(data.localList);
    // }

    function clickItemFun(item): void {
      data.currentItem = item.icon

      router.push({
        path: item.path,
      })
      
    }

    return {
      ...toRefs(data),
      clickItemFun,
    }
  },
}
</script>
<style scoped lang='scss'>
.footer {
  width: 100%;
  height: 50px;
  background-color: #fff;
  box-shadow: 0 0 4px 0 hsla(0, 6%, 50%, 0.13);
  -webkit-box-shadow: 0 0 4px 0 hsla(0, 6%, 50%, 0.13);
  position: fixed;
  bottom: 0;
  display: flex;
  overflow: hidden;
  .footer-item {
    color: #333;
    flex: 1;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    .center {
      flex: 1;
      display: flex;
      justify-content: center;
      flex-direction: column;
      .icon {
        font-size: 16px;
        text-align: center;
      }
      .text {
        padding-top: 6px;
        font-size: 12px;
        text-align: center;
      }
    }
  }
}
</style>
