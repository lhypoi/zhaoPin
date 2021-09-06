<template>
  <div class="newsDetail bg-gray-100 ">

    <div class=" container mx-auto flex w-2/3 ">
      <div
        v-for="(item,index) in newsList"
        :key="index"
        class=" w-2/3"
      >
        <div class="boxleft bg-white mt-14 mr-6 px-4">
          <div class="flex pt-11">
            <div class=" border-l-4 border-orange mr-3" />
            <div class=" text-xl font-bold">{{ item.title }}</div>
          </div>
          <div class=" py-3 text-grey2">时间：{{ item.date }}</div>
          <div>
            <div class=" pb-4 text-grey2">
              {{ item.info }}
            </div>
            <el-image
              :src="require('@/assets/img_food/news/company/蒙版组 209.png')"
              fit="cover"
              class=" w-full h-full pt-5"
            />
            <div class=" pb-11 text-grey2">
              {{ item.info }}
            </div>
          </div>
        </div>
      </div>
      <div class="boxright mt-14 w-1/3">
        <div class=" bg-white mb-8 py-3 pl-3 text-grey2">上篇：第十一届广交会</div>
        <NewsList />
        <div class=" bg-white mt-8 py-3 pl-3 text-grey2">下篇：第十三届广交会</div>
      </div>
    </div>

  </div>
</template>

<script>
import NewsList from './component/newsItem.vue'

export default {
  name: 'NewsDetail',
  components: {
    NewsList
  },
  data() {
    return {
      newsList: [
        {
          title: '第十二届广交会',
          date: '2021-03-12',
          img: '',
          info: '案发生的广泛地好的哈是特警点撒哈拉电脑看好你电脑好看的的服了好看吗老地方话你地福牛贺岁都很困难的浪费你好老对手那里可能会的回答老师您好你多少分回复没干嘛是的啊还打吗弄好了没你大发货啦拉黑了十多个地方好地方花洒一合同段根深蒂固哥哥燃油哈酒红蜡片'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
