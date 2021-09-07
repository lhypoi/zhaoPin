<template>
  <div class=" pt-20 flex justify-center align-middle ">
    <div class="flex flex-row justify-between mt-6 container mx-auto">
      <div
        v-for="(series, imgIndex) in seriesList"
        :key="imgIndex"
        class=" flex-col grid justify-items-center cursor-pointer"
      >
        <el-image
          :src="series.icon"
          fit="cover"
          class="mb-4 "
        />
        <div>
          <div class=" text-3xl text-black ">
            {{ series.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      seriesList: [
        {
          icon: require('@/assets/img_food/home/series1.png'),
          title: '糖果系列'
        },
        {
          icon: require('@/assets/img_food/home/series2.png'),
          title: '燕麦系列'
        },
        {
          icon: require('@/assets/img_food/home/series3.png'),
          title: '佛手果系列'
        },
        {
          icon: require('@/assets/img_food/home/series4.png'),
          title: '巧克力系列'
        },
        {
          icon: require('@/assets/img_food/home/series5.png'),
          title: '饼干系列'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>>
</style>
