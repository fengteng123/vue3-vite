<template>
  <div class="shopingclassify">
    <PageHeader
      :isIcon=true
      headerText="我的订单"
    />


  </div>

</template>

<script lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

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
    })

    

    return {
      ...toRefs(data),
    }
  },
}
</script>
<style scoped lang='scss'>

</style>