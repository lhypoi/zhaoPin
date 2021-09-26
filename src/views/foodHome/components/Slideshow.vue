<template>
  <div>
    <el-carousel indicator-position="outside" height="31vw">
      <el-carousel-item
        v-for="(item, index) in slidePageList"
        :key="index"
      >
        <div class="flex w-full h-full justify-center">
          <div class="relative " @click="$router.push(item.router)">
            <div class=" w-full h-full">
              <el-image
                :src="item.imgPath"
                class="block absolute w-full h-full"
              />

            </div>
            <!-- 信息文字 -->
            <div class="absolute left-12 bottom-32 text-sm">
              <el-image
                :src="item.imgPath"
                class="block absolute w-full h-full"
              />
              DIY出你自己想要的糖果</div>
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
          imgPath: require('@/assets/img_food/home/组 1088.png')
        },
        {
          imgPath: require('@/assets/img_food/home/组 1088.png')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">

</style>
