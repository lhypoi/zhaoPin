<template>
  <div>
    <div class="flex content-between flex-wrap ">
      <div
        v-for="(item,index) in showBiscuitList"
        :key="index"
        class="flex flex-col w-1/6  border-gray-200 border-solid border-2 mx-14 mt-12 "
      >
        <div class=" border-gray-200 border-solid border-b-2 flex flex-col items-center justify-center">
          <el-image
            :src="item.imgPath"
            class=" w-full relative"
            style="height: 20vw;"
          />
        </div>
        <div class="h-24 flex flex-col items-center justify-center">
          <div class=" text-base font-bold ">单价</div>
          <div class="text-2xl font-bold text-orange1 mt-1">￥{{ item.price }}</div>
        </div>
      </div>
    </div>

    <!-- 分页器 -->
    <FoodPagination
      class="mt-4"
      :total="biscuitList.length"
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
      biscuitList: [],
      currentPage: 0,
      pageSize: 8
    }
  },
  computed: {
    showBiscuitList() {
      const skipNum = (this.currentPage - 1) * this.pageSize
      const showBiscuitList = (skipNum + this.pageSize >= this.biscuitList.length) ? this.biscuitList.slice(skipNum, this.biscuitList.length) : this.biscuitList.slice(skipNum, skipNum + this.pageSize)
      return showBiscuitList
    }
  },
  mounted() {
    this.biscuitList = new Array(14).fill(
      {
        imgPath: require('@/assets/img_food/foShou/jietu2.png'),
        price: '50.00'
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

<style>

</style>
