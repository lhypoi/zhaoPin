<template>
  <div class="slideShowCarousel">
    <el-carousel indicator-position="outside" height="25vw">
      <el-carousel-item
        v-for="(item, index) in slidePageList"
        :key="index"
      >
        <div class="flex flex-row w-full h-full justify-center">
          <div class="relative h-full pt-7" style="width: 20vw;" @click="$router.push(item.router)">
            <!-- 图片背景 -->
            <div class="relative w-full h-full">
              <el-image
                :src="item.imgPath"
                class="block absolute w-full h-full"
              />
            </div>
            <!-- 信息文字 -->
            <div class="absolute left-12 bottom-52 text-lg">DIY出你自己想要的糖果</div>
            <!-- 标题文字 -->
            <div class="absolute left-12 bottom-28 text-lg text-orange1 font-extrabold">展翠食品</div>
            <!-- 虚线框文字 -->
            <div class="absolute left-12 bottom-16 text-sceondTextC text-sm px-5 py-2 border-dashed rounded-lg border-2 border-gray-400 cursor-pointer">定制你专属糖果</div>
          </div>

          <div class="relative h-full pt-7" style="width: 20vw;" @click="$router.push(item.router)">
            <div class="relative w-full h-full">
              <el-image
                :src="item.imgPath"
                class="block absolute w-full h-full"
              />
            </div>
            <!-- 图片 -->

            <!-- 信息文字 -->
            <div class="absolute left-12 bottom-52 text-lg">巧克力私人订制款</div>
            <!-- 标题文字 -->
            <div class="absolute left-12 bottom-28 text-lg text-orange1 font-extrabold">展翠食品</div>
            <!-- 虚线框文字 -->
            <div class="absolute left-12 bottom-16 text-sceondTextC text-sm px-5 py-2 border-dashed rounded-lg border-2 border-gray-400 cursor-pointer">定制你专属糖果</div>
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
          imgPath: require('@/assets/img_food/productCenter/smallP2.png')
        },
        {
          imgPath: require('@/assets/img_food/productCenter/smallP2.png')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.slideShowCarousel {
  ::v-deep {
    .el-carousel__indicators {
      text-align: right;
      padding-right: 40px;
    }
  }
}
</style>
