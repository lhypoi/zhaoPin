<template>
  <div class="newsOfIndustry bg-gray-100 pb-6 ">
    <div class=" container mx-auto pt-14">
      <div class=" flex pb-10">
        <div class=" border-l-4 border-orange mr-3" />
        <div class=" text-3xl font-bold">行业动态</div>
      </div>
      <div class=" ">
        <NewsItem />
      </div>
    </div>
  </div>
</template>

<script>
import NewsItem from './component/newsItem.vue'
export default {
  name: 'NewsOfIndustry',
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
