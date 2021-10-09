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
          <div class=" text-2xl text-black ">
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

    }
  },
  computed: {
    seriesList() {
      return [
        {
          icon: require('@/assets/img_food/home/series1.png'),
          title: this.$t('m.a5')
        },
        {
          icon: require('@/assets/img_food/home/series2.png'),
          title: this.$t('m.a6')
        },
        {
          icon: require('@/assets/img_food/home/series3.png'),
          title: this.$t('m.a7')
        },
        {
          icon: require('@/assets/img_food/home/series4.png'),
          title: this.$t('m.a8')
        },
        {
          icon: require('@/assets/img_food/home/series5.png'),
          title: this.$t('m.a9')
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>>
</style>
