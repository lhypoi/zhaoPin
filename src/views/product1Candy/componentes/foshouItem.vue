<template>
  <div class="flex content-between flex-wrap ">
    <div
      v-for="(item,index) in foShouList"
      :key="index"
      class="flex flex-col w-1/6  border-gray-200 border-solid border-2 mx-14 mt-20 "
    >
      <div class=" border-gray-200 border-solid border-b-2 flex flex-col items-center justify-center">
        <el-image
          :src="item.imgPath"
          class=" w-full relative"
          style="height: 20vw;"
        />
        <!-- <div class="flex absolute">
                    <img src="@/assets/img_food/foShou/like.png" alt="">
                    <img src="@/assets/img_food/foShou/like.png" alt="">
                    <img src="@/assets/img_food/foShou/like.png" alt="">
                    <img src="@/assets/img_food/foShou/like.png" alt="">
                    <img src="@/assets/img_food/foShou/like.png" alt="">
                </div> -->
      </div>
      <div class="h-24 flex flex-col items-center justify-center">
        <div class=" text-base font-bold ">单价</div>
        <div class="text-2xl font-bold text-orange1 mt-1">￥{{ item.price }}</div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      foShouList: [
        {
          imgPath: require('@/assets/img_food/foShou/jietu2.png'),
          price: '50.00'
        },
        {
          imgPath: require('@/assets/img_food/foShou/jietu2.png'),
          price: '50.00'
        },
        {
          imgPath: require('@/assets/img_food/foShou/jietu2.png'),
          price: '50.00'
        },
        {
          imgPath: require('@/assets/img_food/foShou/jietu2.png'),
          price: '50.00'
        },
        {
          imgPath: require('@/assets/img_food/foShou/jietu2.png'),
          price: '50.00'
        },
        {
          imgPath: require('@/assets/img_food/foShou/jietu2.png'),
          price: '50.00'
        },
        {
          imgPath: require('@/assets/img_food/foShou/jietu2.png'),
          price: '50.00'
        }
      ]
    }
  }
}
</script>

<style>

</style>
