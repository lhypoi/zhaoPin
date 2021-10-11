<template>
  <div class="slideShowCarousel">
    <el-carousel indicator-position="outside" height="25vw">
      <el-carousel-item
        v-for="(item, index) in slidePageList"
        :key="index"
      >
        <div class="flex flex-row w-full h-full justify-center">
          <div class="relative h-full pt-7" style="width: 20vw;" @click="$router.push(item.router)">
            <div class="relative w-full h-full">
              <el-image
                :src="item.imgPath"
                class="block absolute w-full h-full"
              />
              <el-image
                :src="require('@/assets/img_food/productCenter/jietu3.png')"
                class="block absolute px-5 pt-5 cursor-pointer "
              />
            </div>
            <!-- 信息文字 -->
            <div class="absolute left-12 bottom-40 text-sm">{{ $t('m.b13') }}</div>
            <!-- 标题文字 -->
            <div class="absolute left-12 bottom-32 text-base text-orange1 font-extrabold">{{ $t('m.b14') }}</div>
            <!-- 虚线框文字 -->
            <div class="absolute left-12 right-16 bottom-10 text-sceondTextC text-sm px-5 py-2 border-dashed rounded-3xl border-2 border-gray-400 cursor-pointer">{{ $t('m.b15') }}</div>
          </div>

          <div class="relative h-full pt-7" style="width: 20vw;" @click="$router.push(item.router)">
            <div class="relative w-full h-full">
              <el-image
                :src="item.imgPath"
                class="block absolute w-full h-full"
              />
              <el-image
                :src="require('@/assets/img_food/productCenter/jietu3.png')"
                class="block absolute px-5 pt-5 cursor-pointer "
              />
            </div>
            <!-- 信息文字 -->
            <div class="absolute left-12 bottom-40 text-sm">{{ $t('m.b16') }}</div>
            <!-- 标题文字 -->
            <div class="absolute left-12 bottom-32 text-base text-orange1 font-extrabold">{{ $t('m.b14') }}</div>
            <!-- 虚线框文字 -->
            <div class="absolute left-12 right-16 bottom-10 text-sceondTextC text-sm px-5 py-2 border-dashed rounded-3xl border-2 border-gray-400 cursor-pointer">{{ $t('m.b15') }}</div>
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
