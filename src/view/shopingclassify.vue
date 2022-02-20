<template>
  <div>
    <PageHeader
      :isIcon=true
      headerText="商品分类"
    />
  </div>

</template>

<script lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import PageHeader from '../components/PageHeader.vue'

export default {
  name: 'front',
  components: {
    PageHeader,
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
</style>