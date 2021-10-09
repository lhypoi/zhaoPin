<template>
  <div class="biscuitProduct3">
    <!-- 头部大图 -->
    <div class=" flex justify-center">
      <div class="banner relative flex items-center  ">
        <el-image
          :src="require('@/assets/img_food/productCenter/组 1089.png')"
          fit="cover"
          class="BP"
        />
        <div class=" absolute text-left pl-28">
          <div class=" text-4xl text-white">SUNTREE</div>
          <div class=" text-7xl text-white py-5">{{ $t('m.g1') }}</div>
          <div class=" text-5xl text-white">{{ $t('m.g2') }}</div>
        </div>
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
            <div class=" text-4xl text-coffee font-bold">{{ $t('m.g4') }}</div>
            <div class=" text-2xl text-coffee font-bold py-6">{{ $t('m.g1') }}</div>
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
      </div>

      <!-- 饼干系列 -->
      <div class="mb-20">
        <Title><div slot="center">{{ $t('m.g3') }}</div></Title>
        <div class="">
          <BiscuitItem />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SeriesTitle from '../../components/SeriesTitle/SeriesTitle.vue'

import Title from './componentes/title.vue'
import BiscuitItem from './componentes/biscuitItem.vue'

export default {
  name: 'BiscuitProduct3',
  components: {
    Title,
    SeriesTitle,
    BiscuitItem

  }
}
</script>

<style scoped>
.BP{
  height: 64vh ;
}
</style>
