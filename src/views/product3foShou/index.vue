<template>
  <div class="foShouProduct3">
    <!-- 头部大图 -->
    <div class="banner flex justify-center">
      <el-image
        :src="require('@/assets/img_food/foShou/banner.png')"
        fit="cover"
        class=" z-0"
      />
    </div>

    <!-- 左右留白盒子开始 -->
    <div class="container mx-auto">
      <!-- 各种系列 -->
      <div>
        <Title><div slot="center">各种系列</div></Title>
        <SeriesTitle />
      </div>

      <!-- 制作过程 -->
      <div class="">
        <Title><div slot="center">制作过程</div></Title>
        <div class="flex mt-20 justify-center">
          <div class="wenzi flex-col w-1/5 justify-start ">
            <div class=" text-4xl text-coffee font-bold">回味不同的美味</div>
            <div class=" text-2xl text-coffee font-bold py-6">美食美客</div>
            <div class=" text-base">一份关注、一段追溯、一个瞬间、一幕场景。一闻回
              亿......酸甜苦辣、喜怒哀乐、味道人生</div>
            <div class="flex mt-3">
              <div class="rounded-full bg-gray-200 text-grey1 text-base h-8 font-bold  flex items-center justify-center px-8 mx-4 cursor-pointer">超多美味</div>
            </div>
          </div>
          <div class="vidio ml-9 w-2/5 ">
            <el-image
              :src="require('@/assets/img_food/foShou/jietu4.png')"
              class=" w-full "
              style="height: 20vw;"
            />
          </div>
        </div>
        <div class="flex justify-center mt-32">
          <el-image
            :src="require('@/assets/img_food/foShou/bigP1.png')"
            fit="cover"
            class=" z-0"
          />
          <div class="centerP relative flex items-center justify-center">
            <el-image
              :src="require('@/assets/img_food/foShou/bigP3.png')"
              fit="cover"
              class="z-0"
            />
            <div class="wenzi1 absolute text-white ">
              <div class=" text-2xl font-bold mb-2">佛手果系列</div>
              <div>药食通用、热销款</div>
            </div>
          </div>
          <el-image
            :src="require('@/assets/img_food/foShou/bigP2.png')"
            fit="cover"
            class=" z-0"
          />
        </div>
      </div>

      <!-- 佛手果系列 -->
      <div class="mb-20">
        <Title><div slot="center">佛手果系列</div></Title>
        <div class="">
          <!-- TODO:这里简单的引用了佛手果列表的业务组件，交互逻辑放在业务组件内部实现 -->
          <FoshouItem />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SeriesTitle from '../../components/SeriesTitle/SeriesTitle.vue'

import Title from './componentes/title.vue'
import FoshouItem from './componentes/foshouItem.vue'

export default {
  name: 'FoShouProduct3',
  components: {
    Title,
    SeriesTitle,
    FoshouItem
  }
}
</script>

<style scoped>

</style>
