<template>
  <div>
    <div class="flex content-between flex-wrap -mx-4  ">
      <div
        v-for="(item,index) in showChocolateList"
        :key="index"
        class="w-1/4  px-4 mt-8 "
      >
        <div class="flex flex-col ">
          <div class="  flex flex-col items-center justify-center">
            <el-image
              :src="item.imgPath"
              class=" w-full relative cursor-pointer"
              style="height: 25vw;"
            />
          </div>
          <!-- <div class="h-24 flex flex-col items-center justify-center">
            <div class=" text-base font-bold ">单价</div>
            <div class="text-2xl font-bold text-orange1 mt-1">￥{{ item.price }}</div>
          </div> -->
        </div>
      </div>
    </div>

    <!-- 分页器 -->
    <FoodPagination
      class="mt-4"
      :total="chocolateList.length"
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
      chocolateList: [],
      currentPage: 0,
      pageSize: 8
    }
  },
  computed: {
    // 这里的食品列表是一个业务块，分页组件是伴随它的，应该在这里使用，因为分页这些参数不应该是外层的整体页面组件关心的
    showChocolateList() {
      const skipNum = (this.currentPage - 1) * this.pageSize
      const showChocolateList = (skipNum + this.pageSize >= this.chocolateList.length) ? this.chocolateList.slice(skipNum, this.chocolateList.length) : this.chocolateList.slice(skipNum, skipNum + this.pageSize)
      return showChocolateList
    }
  },
  mounted() {
    this.chocolateList = new Array(14).fill(
      {
        imgPath: require('@/assets/img_food/foShou/组 470.png'),
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
