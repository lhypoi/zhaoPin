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
    <div class="bg-fixed relative mb-24 ">
      <slot name="bg" class="bg-fixed" />
      <!-- 标题 -->

      <div class=" absolute top-5 left-5 flex">
        <div class=" border-l-8 border-orange pr-3 " />
        <slot name="title" />
      </div>

      <div class=" absolute top-5 border-b-2 border-orange" />

      <!-- 信息介绍 -->
      <div class="absolute top-0 bottom-4 left-12 text-grey3 w-1/2 mt-20 overflow-y-auto">
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
::-webkit-scrollbar {
  width: 16px;
  height: 16px;
}

::-webkit-scrollbar-thumb {
  background: #dadce0;
  background-clip: padding-box;
  border: 4px solid transparent;
  border-radius: 8px;
  box-shadow: none;
  min-height: 50px;
}

::-webkit-scrollbar-track {
  background: none;
  border: none;
}
</style>
