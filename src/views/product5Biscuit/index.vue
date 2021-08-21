<template>
  <div class="foShouProduct3">
    <!-- 头部大图 -->
    <div class=" flex justify-center">
      <div class="banner relative flex items-center  ">
        <el-image
          :src="require('@/assets/img_food/productCenter/biscuitB.png')"
          fit="cover"
          class="z-0"
        />
        <div class=" absolute text-left pl-28">
          <div class=" text-4xl text-white">SUNTREE</div>
          <div class=" text-7xl text-white py-5">美味饼干</div>
          <div class=" text-5xl text-white">浓香软滑的美味饼干</div>
        </div>
      </div>
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
            <div class=" text-4xl text-coffee font-bold">用心制造</div>
            <div class=" text-2xl text-coffee font-bold py-6">美味饼干</div>
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
      </div>

      <!-- 饼干系列 -->
      <div class="">
        <Title><div slot="center">饼干系列</div></Title>
        <div class="">
          <FoshouItem />
        </div>

        <!-- 分页器 -->
        <PageBar class=" mb-32" />
      </div>
    </div>
  </div>
</template>

<script>
import SeriesTitle from '../../components/SeriesTitle/SeriesTitle.vue'

import Title from './componentes/title.vue'
import FoshouItem from './componentes/foshouItem.vue'
import PageBar from './componentes/pageBar.vue'

export default {
  name: 'FoShouProduct3',
  components: {
    Title,
    SeriesTitle,
    FoshouItem,
    PageBar
  }
}
</script>

<style scoped>
.el-pagination.is-background{

}
</style>
