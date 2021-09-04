<template>
  <div>
    <div
      v-for="(item,index) in showNewsList"
      :key="index"
      class=" mb-5"
    >
      <div class=" flex items-center bg-white py-6 pl-6 pr-8">
        <div>
          <el-image
            :src="require('@/assets/img_food/news/company/蒙版组 209.png')"
            fit="cover"
          />
        </div>
        <div class="flex flex-col pl-7 ">
          <div class=" text-xl text-grey1 font-bold">第十二届广交会</div>
          <div class=" text-sm text-grey2 pt-3 pb-6">时间：2021-03-12</div>
          <div class=" text-xl text-grey2 ">新的一场广交会的开始预示着新的挑战来临</div>
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
    this.newsList = new Array(10).fill(
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
