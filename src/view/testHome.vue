<template>
  <div>
    <div>{{ count }}</div>

    <button @click="countFun">点击+1</button>
    <!-- <van-button type="primary">主要按钮</van-button> -->
  </div>
  
</template>

<script lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'

export default {
  name: '',
  setup() {
    const data = reactive({
      count:0
    })
    

    onBeforeMount(() => {
      console.log('2.组件挂载页面之前执行----onBeforeMount')
    })
    onMounted(() => {
      console.log('3.-组件挂载到页面之后执行-------onMounted')
    })

    


    function countFun() {
      console.log(123);
      data.count++
    }

    return {
      ...toRefs(data),
      countFun
    }
    
  },
}

</script>
<style scoped lang='less'>
</style>
