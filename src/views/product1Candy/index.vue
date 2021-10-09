<template>
  <div class="candyProduct1">
    <!-- 头部大图 -->
    <div class="banner relative flex items-center justify-center ">
      <el-image
        :src="require('@/assets/img_food/candy/蒙版组 285.png')"
        fit="cover"
        class="z-0 BP"
      />
      <div class=" absolute text-center">
        <div class=" text-5xl text-black">Welcome you</div>
        <div class=" text-4xl text-black font-bold py-5">丰富的水果维生素</div>
        <div class=" text-7xl text-black font-bold">Rich in fruit vitamins</div>
      </div>
    </div>

    <!-- 左右留白盒子开始 -->
    <div class="container mx-auto max-w-screen-lg ">
      <!-- 各种系列 -->
      <div class="">
        <Title>
          <div slot="top">Various series</div><div slot="center">各种系列</div>
        </Title>
        <SeriesTitle />
      </div>

      <!-- 制作过程 -->
      <div class="">
        <Title><div slot="top">Production process</div><div slot="center">制作过程</div></Title>
        <div class="flex mt-20 justify-center">
          <div class="wenzi flex-col justify-start w-2/3  ">
            <div class=" text-4xl text-coffee font-bold">{{ $t('m.c1') }}</div>
            <div class=" text-2xl text-coffee font-bold py-6">{{ $t('m.c2') }}</div>
            <div class=" text-base">{{ $t('m.c3') }}</div>
            <div class="flex mt-3">
              <div class="rounded-full bg-gray-200 text-grey1 text-base h-8 font-bold  flex items-center justify-center px-8 mx-4 cursor-pointer">{{ $t('m.c4') }}</div>
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

        <div class="flex flex-wrap content-start  justify-center mt-32">
          <div class=" flex align-bottom">
            <div>
              <el-image
                :src="require('@/assets/img_food/candy/P1.png')"
                fit="cover"
                class="align-bottom"
              />
            </div>
            <div>
              <el-image
                :src="require('@/assets/img_food/candy/P2.png')"
                fit="cover"
                class="align-bottom"
              />
            </div>
            <div>
              <el-image
                :src="require('@/assets/img_food/candy/P3.png')"
                fit="cover"
                class="align-bottom"
              />
            </div>
            <div>
              <el-image
                :src="require('@/assets/img_food/candy/P4.png')"
                fit="cover"
                class="align-bottom"
              />
            </div>
          </div>
          <div class=" flex">
            <div>
              <el-image
                :src="require('@/assets/img_food/candy/P5.png')"
                fit="cover"
                class=" z-0"
              />
            </div>
            <div>
              <el-image
                :src="require('@/assets/img_food/candy/P6.png')"
                fit="cover"
                class=" z-0"
              />
            </div>
            <div>
              <el-image
                :src="require('@/assets/img_food/candy/P7.png')"
                fit="cover"
                class=" z-0"
              />
            </div>
            <div>
              <el-image
                :src="require('@/assets/img_food/candy/P8.png')"
                fit="cover"
                class=" z-0"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- 糖果全系列 -->
      <div class=" mb-20">
        <Title><div slot="top">Candy full range</div><div slot="center">糖果全系列 </div></Title>
        <div class="">
          <CandyItem />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SeriesTitle from '../../components/SeriesTitle/SeriesTitle.vue'

import Title from './componentes/title.vue'
import CandyItem from './componentes/candyItem.vue'

export default {
  name: 'CandyProduct1',
  components: {
    Title,
    SeriesTitle,
    CandyItem
  }
}
</script>

<style scoped>
.BP{
  height: 64vh ;
}
</style>
