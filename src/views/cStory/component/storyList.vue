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
    <div class="scroll-list bg-fixed relative mb-24 ">
      <slot name="bg" class="bg-fixed" />
      <!-- 标题 -->

      <div class=" absolute top-5 left-5 flex">
        <div class=" border-l-8 border-orange pr-3 " />
        <slot name="title" />
      </div>

      <div class=" absolute top-5 border-b-2 border-orange" />

      <!-- 信息介绍 -->
      <div class="absolute top-20 left-12 text-grey3 ">
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
.scroll-list{
    white-space: wrap;
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0 0.1rem;
    margin-bottom: -.2rem;
    overflow: -moz-scrollbars-none;
    overflow: -moz-scrollbars-none;
    background-attachment: fixed;
}
.scroll-list::-webkit-scrollbar{
    display: none;
}
</style>
