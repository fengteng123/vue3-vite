<template>  
  <div>
    <PageHeader
      :isIcon=true
      headerText="登陆注册"
    />
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import PageHeader from '../components/PageHeader.vue'

export default {
  name: 'AccountNumber',
  components: {
    PageHeader,
  },

  setup () {
    const router = useRouter()
    const route = useRoute()

    const data = reactive({})


    return {
      ...toRefs(data),
    }
  }
}

</script>

<style scoped lang='scss'>

</style>