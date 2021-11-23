<template>
  <div>
    <el-image
      class="g2"
      :src="list1Img"
      fit="cover"
      lazy
    />
  </div>
</template>

<script>
const list1Img = require('@/assets/img/bg6.png')
export default {
  data() {
    return {
      list1Img
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
