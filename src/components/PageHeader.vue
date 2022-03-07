<template>
  <div class="header">
    <i
      v-if="isIcon"
      @click="goBack()"
      class="headbar-arrow"
    ></i>
    <div>
      {{ headerText }}
    </div>
  </div>

</template>

<script lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'pageHeader',
  props: {
    isIcon: {
      type: Boolean,
      required: false,
      default: true,
    },
    headerText: {
      type: String,
      required: true,
      default: '',
    },
  },
  setup() {
    const router = useRouter()
    const route = useRoute()

    const data = reactive({
      count: 0,
    })

    const goBack = () => {
      router.go(-1)
    }

    return {
      ...toRefs(data),
      goBack
    }
  },
}
</script>
<style scoped lang='scss'>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #000;
  font-size: 14px;
  background-color: #fff;
  z-index: 1000;
  border-bottom: 2px solid #f5f6fa;
  .headbar-arrow {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 13px;
    height: 7px;
    width: 7px;
    margin: auto;
    transform: rotate(-135deg);
    border: 2px solid #808080;
    border-bottom-color: transparent;
    border-left-color: transparent;
  }
}
</style>
