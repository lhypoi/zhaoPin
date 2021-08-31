<template>
  <!-- 左边年份 -->
  <div class="flex">
    <div class=" flex flex-col  justify-center items-center">
      <div class=" w-60 h-16 bg-orange text-white text-4xl flex items-center justify-center ">
        <slot name="year" />
      </div>
      <div class=" border-l-2 border-orange h-full " />
    </div>
    <!-- 中间横线 -->
    <div class=" border-t-2 border-orange mx-5 w-12 mt-8 " />
    <!-- 右边大图 -->
    <div class=" relative mb-24">
      <slot name="bg" />
      <!-- 标题 -->

      <div class=" absolute top-5 left-5 flex">
        <div class=" border-l-8 border-orange pr-3 " />
        <slot name="title" />
      </div>

      <div class=" absolute top-5 border-b-2 border-orange" />

      <!-- 信息介绍 -->
      <div class="absolute top-20 left-12">
        <slot name="info" />
      </div>
    </div>

  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {

    }
  }
}
</script>

<style scoped>

</style>
