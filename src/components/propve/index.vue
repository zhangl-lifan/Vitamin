<template>
  <el-popover trigger="click" placement="right" class="prp">
    <div v-if="data.id!==5" class="popover-content">
      <pic v-if="data.id===1" />
      <titles v-if="data.id===2" />
      <auxiliary v-if="data.id===3" />
      <search v-if="data.id===4" />
    </div>
    <div slot="reference">
      <slot />
    </div>
  </el-popover>
</template>

<script>
import pic from './pic'
import titles from './title'
import auxiliary from './auxiliary'
import search from './search'

export default {
  components: {
    pic,
    titles,
    auxiliary,
    search
  },
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  data() {
    return {}
  },
  mounted() {
    console.log(JSON.parse(JSON.stringify(this.data)), 'data-----')
  }
}
</script>
<style scoped  lang="scss">

</style>
