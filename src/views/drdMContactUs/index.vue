<template>
  <div class="drdMContactUs">
    <!-- 头部大图 -->
    <div class="relative">
      <el-image
        :src="require('@/assets/img_drd_mobile/lx/main.png')"
        fit="cover"
        class="block"
      />
    </div>
    <!-- 联系我们 -->
    <div class="py-10 pb-4 text-center">
      <div class="text-2xl text-black font-bold">
        联系我们
      </div>
      <div class="text-sm text-gray-400 mt-1">
        CONTACT US
      </div>
      <div class="text-base text-gray-800 mt-2">
        伦敦总公司
        <br>电话：0754332752
        <br>邮箱：florentians@livemail.tw
        <br>邮编：E16 1ah
      </div>
      <div class="text-xs text-gray-800 mt-2">
        地址：UNIT G25 WATERFRONT STUDIOS 1 DOCK ROADROAD
      </div>
      <div class="text-base text-gray-800 mt-2">
        <br>广州分公司
        <br>电话：18688001472
        <br>邮箱：florentians@livemail.tw
        <br>工作时间：9：00-22：00（GMT+8）Mon-Sun
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DrdMContactUs',
  props: {},
  data() {
    return {
    }
  },
  computed: {

  },
  created() {},
  mounted() {
  },
  methods: {}
}
</script>

<style lang="scss">

</style>
