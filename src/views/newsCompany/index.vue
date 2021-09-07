<template>
  <div class="companyNews bg-gray-100 pb-6 ">
    <div class="container mx-auto max-w-screen-lg">
      <!-- 头部图片展 -->
      <div class="pt-14 flex justify-center">
        <div class="">
          <el-image
            :src="require('@/assets/img_food/news/company/蒙版组 213.png')"
            fit="cover"
          />
        </div>
        <div class=" flex flex-col space-y-4 mx-6">
          <el-image
            :src="require('@/assets/img_food/news/company/蒙版组 214.png')"
            fit="cover"
          />
          <el-image
            :src="require('@/assets/img_food/news/company/蒙版组 215.png')"
            fit="cover"
          />
        </div>
        <div class=" flex flex-col space-y-4">
          <el-image
            :src="require('@/assets/img_food/news/company/蒙版组 216.png')"
            fit="cover"
          />
          <el-image
            :src="require('@/assets/img_food/news/company/蒙版组 217.png')"
            fit="cover"
          />
        </div>
      </div>

      <!-- 公司动态 -->
      <div class="flex pt-14 pb-10 ">
        <div class=" border-l-4 border-orange mr-3" />
        <div class=" text-3xl font-bold">公司动态</div>
      </div>

      <NewsItem />
    </div>
  </div>
</template>

<script>
import NewsItem from './component/newsItem.vue'

export default {
  name: 'CompanyNews',
  components: {
    NewsItem
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>
