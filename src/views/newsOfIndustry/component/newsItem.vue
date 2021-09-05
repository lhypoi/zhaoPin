<template>
  <div>
    <div
      v-for="(item,index) in showNewsList"
      :key="index"
      class=" mb-5"
    >
      <div class=" bg-white py-6 pl-11 pr-8">
        <div class="">
          <div class=" text-grey3">{{ item.title }}</div>
        </div>
        <div class=" flex py-1">
          <div class=" bg-orange items-center justify-center text-white px-1 ">官方新闻</div>
          <div class="flex items-center justify-center pl-2 text-grey2">{{ item.date }}</div>
        </div>
        <div class=" text-grey2">
          {{ item.info }}
        </div>
        <div class=" flex justify-end">
          <div class=" text-lightblue">阅读全文</div>
          <el-image
            :src="require('@/assets/img_food/news/组 363.png')"
            class=" pl-1"
          />
        </div>
      </div>
    </div>

    <!-- 分页器 -->
    <FoodPagination
      class="mt-4"
      :total="newsList.length"
      :current-page="currentPage"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import FoodPagination from '@/components/FoodPagination'

export default {
  components: {
    FoodPagination
  },
  data: function() {
    return {
      newsList: [],
      currentPage: 0,
      pageSize: 8
    }
  },
  computed: {
    showNewsList() {
      const skipNum = (this.currentPage - 1) * this.pageSize
      const showNewsList = (skipNum + this.pageSize >= this.newsList.length) ? this.newsList.slice(skipNum, this.newsList.length) : this.newsList.slice(skipNum, skipNum + this.pageSize)
      return showNewsList
    }
  },
  mounted() {
    this.newsList = new Array(15).fill(
      {
        title: '第十二届广交会',
        date: '2021-03-12',
        info: '案发生的广泛地好的哈是特警点撒哈拉电脑看好你电脑好看的的服了好看吗老地方话你地福牛贺岁都很困难的浪费你好老对手那里可能会的回答老师您好你多少分回复没干嘛是的啊还打吗弄好了没你大发货啦拉黑了十多个地方好地方花洒一合同段根深蒂固哥哥燃油哈酒红蜡片'
      }
    )
    this.currentPage = 1
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val
    }
  }

}
</script>
