<template>
  <div class="chocolateProduct4">
    <!-- 头部大图 -->
    <div class="banner relative flex items-center justify-center ">
      <el-image
        :src="require('@/assets/img_food/chocolate/组 1127.png')"
        fit="cover"
        class="BP"
      />
      <div class=" absolute text-center">
        <div class=" text-5xl text-white">SUNTREE</div>
        <div class=" text-7xl text-white py-5">{{ $t('m.f1') }}</div>
        <div class=" text-5xl text-white">{{ $t('m.f2') }}</div>
      </div>
    </div>

    <!-- 左右留白盒子开始 -->
    <div class="container mx-auto max-w-screen-lg">
      <!-- 各种系列 -->
      <div>
        <Title><div slot="center">{{ $t('m.f3') }}</div></Title>
        <SeriesTitle />
      </div>

      <!-- 制作过程 -->
      <div class="">
        <Title><div slot="center">{{ $t('m.f4') }}</div></Title>
        <div class="flex mt-20 justify-center">
          <div class="wenzi flex-col w-2/5 justify-start ">
            <div class=" text-4xl text-coffee font-bold">{{ $t('m.f5') }}</div>
            <div class=" text-2xl text-coffee font-bold py-6">{{ $t('m.f6') }}</div>
            <div class=" text-base">{{ $t('m.f7') }}</div>
            <div class="flex mt-3">
              <div class="rounded-full bg-gray-200 text-grey1 text-base h-8 font-bold  flex items-center justify-center px-8 mx-4 cursor-pointer">{{ $t('m.f8') }}</div>
            </div>
          </div>
          <div class="vidio ml-9 w-3/5 ">
            <el-image
              :src="require('@/assets/img_food/foShou/jietu4.png')"
              class=" w-full "
              style="height: 20vw;"
            />
          </div>
        </div>

        <div class="flex justify-end items-center  mt-32">
          <el-image
            :src="require('@/assets/img_food/chocolate/P4.png')"
            fit="cover"
            class=" mr-24"
          />
          <el-image
            :src="require('@/assets/img_food/chocolate/P5.png')"
            fit="cover"
            class="w-1/2"
          />
        </div>
        <div class="flex justify-star">
          <el-image
            :src="require('@/assets/img_food/chocolate/P6.png')"
            fit="cover"
            class="w-1/2 elImgRight"
          />
          <div class=" flex flex-col items-stretch w-1/4">
            <el-image
              :src="require('@/assets/img_food/chocolate/P1.png')"
              fit="cover"
              class="h-1/2"
            />
            <el-image
              :src="require('@/assets/img_food/chocolate/P3.png')"
              fit="cover"
              class="h-1/2"
            />
          </div>
          <div class="flex flex-coll items-stretch w-1/4">
            <el-image
              :src="require('@/assets/img_food/chocolate/P2.png')"
              fit="cover"
              class="h-1/2 w-full"
            />
          </div>
        </div>

        <!-- 巧克力系列 -->
        <div class="mb-20">
          <Title><div slot="center">{{ $t('m.f9') }}</div></Title>
          <div class="">
            <ChocolateItem />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SeriesTitle from '../../components/SeriesTitle/SeriesTitle.vue'

import Title from './componentes/title.vue'
import ChocolateItem from './componentes/chocolateItem.vue'

export default {
  name: 'ChocolateProduct4',
  components: {
    Title,
    SeriesTitle,
    ChocolateItem
  }
}
</script>

<style scoped lang="scss">
.elImgRight {
  ::v-deep .el-image__inner {
    object-position: right;
  }
}
.BP{
  height: 64vh ;
}
</style>
