<template>
  <div>
    <el-carousel indicator-position="outside" height="16vw">
      <el-carousel-item
        v-for="(item, index) in slidePageList"
        :key="index"
      >
        <!--考虑更广阔的场景，页数不定，最后一页不满三个，适配到手机端 -->
        <div class="flex flex-row w-full h-full justify-between">
          <!--整套循环逻辑应该抽离出一个数据结构，像我写导航菜单那样，一个选项就是一个组件的概念 -->
          <!-- 每页有三个选项的坑位，内部的元素可能不止一张图片，所以外层用一个div包着，而不是直接img -->
          <div class="relative h-full pt-7" style="width: 20vw;" @click="$router.push(item.router)">
            <!-- 图片背景 -->
            <div class="relative w-full h-full cursor-pointer">
              <el-image
                :src="item.imgPath"
                class="block absolute w-full h-full"
              />
            </div>
            <!-- 头部文字 -->
            <div class="absolute top-0 text-lg font-extrabold">糖果系列</div>
            <!-- 右下角文字 -->
            <div class="absolute right-0 bottom-0 bg-yellow-500 px-8 py-2 text-white text-lg rounded-tl-2xl rounded-br-2xl">水果软糖</div>
          </div>
          <div class="relative h-full pt-7" style="width: 20vw;" @click="$router.push(item.router)">
            <div class="relative w-full h-full cursor-pointer">
              <el-image
                :src="item.imgPath"
                class="block absolute w-full h-full"
              />
            </div>
            <div class="absolute top-0 text-lg font-extrabold">糖果系列</div>
            <div class="absolute right-0 bottom-0 bg-yellow-500 px-8 py-2 text-white text-lg rounded-tl-2xl rounded-br-2xl">水果软糖</div>
          </div>
          <div class="relative h-full pt-7" style="width: 20vw;" @click="$router.push(item.router)">
            <div class="relative w-full h-full cursor-pointer">
              <el-image
                :src="item.imgPath"
                class="block absolute w-full h-full"
              />
            </div>
            <div class="absolute top-0 text-lg font-extrabold">糖果系列</div>
            <div class="absolute right-0 bottom-0 bg-yellow-500 px-8 py-2 text-white text-lg rounded-tl-2xl rounded-br-2xl">水果软糖</div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      slidePageList: [
        {
          imgPath: require('@/assets/img_food/candy/P1.png')
        },
        {
          imgPath: require('@/assets/img_food/candy/P1.png')
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
