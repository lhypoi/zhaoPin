<template>
  <div class="oatProduct3">
    <!-- 头部大图 -->
    <div class="banner relative flex items-center justify-center ">
      <el-image
        :src="require('@/assets/img_food/oat/组 1087.png')"
        fit="cover"
        class="z-0"
      />
      <div class=" absolute text-center">
        <div class=" text-5xl text-white">SUNTREE</div>
        <div class=" text-7xl text-white py-5">浓香小麦</div>
        <div class=" text-5xl text-white">选择高级浓香小麦</div>
      </div>
    </div>
    <!-- 左右留白盒子开始 -->
    <div class="container mx-auto max-w-screen-lg">
      <!-- 各种系列 -->
      <div>
        <Title><div slot="center">各种系列</div></Title>
        <SeriesTitle />
      </div>

      <div class="flex  mt-32">
        <div class="left">
          <el-image
            :src="require('@/assets/img_food/oat/P5.png')"
            fit="cover"
          />
        </div>
        <div class="right flex ml-20">
          <div class="">
            <div>
              <el-image
                :src="require('@/assets/img_food/oat/P1.png')"
                fit="cover"
                class="align-bottom"
              />
            </div>
            <div>
              <el-image
                :src="require('@/assets/img_food/oat/P3.png')"
                fit="cover"
              />
            </div>
          </div>
          <div>
            <div>
              <el-image
                :src="require('@/assets/img_food/oat/P4.png')"
                fit="cover"
                class="align-bottom"
              />
            </div>
            <div>
              <el-image
                :src="require('@/assets/img_food/oat/P2.png')"
                fit="cover"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- 制作过程 -->
      <div class="">
        <Title><div slot="center">制作过程</div></Title>
        <div class="flex mt-20 justify-center">
          <div class="wenzi flex-col justify-start w-2/5 ">
            <div class=" text-4xl text-coffee font-bold">燕麦制作过程</div>
            <div class=" text-2xl text-coffee font-bold py-6">美食美客</div>
            <div class=" text-base">一份关注、一段追溯、一个瞬间、一幕场景。一闻回
              亿......酸甜苦辣、喜怒哀乐、味道人生</div>
            <div class="flex mt-3">
              <div class="rounded-full bg-gray-200 text-grey1 text-base h-8 font-bold  flex items-center justify-center px-8 mx-4 cursor-pointer">超多美味</div>
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

      <!-- 燕麦全系列 -->
      <div class="mb-20">
        <Title><div slot="center">燕麦全系列</div></Title>
        <div class="">
          <OatItem />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SeriesTitle from '../../components/SeriesTitle/SeriesTitle.vue'

import Title from './componentes/title.vue'
import OatItem from './componentes/oatItem.vue'

export default {
  name: 'FoShouProduct3',
  components: {
    Title,
    SeriesTitle,
    OatItem
  }
}
</script>

<style scoped>

</style>
