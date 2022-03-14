<template>
  <div class="shopingclassify">
    <PageHeader
      :isIcon=true
      headerText="个人信息"
    />


  </div>

</template>

<script lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import PageHeader from '../components/PageHeader.vue'

export default {
  name: 'user',
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