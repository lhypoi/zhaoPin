<template>
  <div>
    <div class="flex content-between flex-wrap ">
      <div
        v-for="(item,index) in showFoShouList"
        :key="index"
        class="flex flex-col w-1/6  border-gray-200 border-solid border-2 mx-14 mt-12 "
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

    <!-- 分页器 -->
    <FoodPagination
      class="mt-4"
      :total="foShouList.length"
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
      foShouList: [],
      currentPage: 0,
      pageSize: 8
    }
  },
  computed: {
    // TODO:这里的食品列表是一个业务块，分页组件是伴随它的，应该在这里使用，因为分页这些参数不应该是外层的整体页面组件关心的
    showFoShouList() {
      const skipNum = (this.currentPage - 1) * this.pageSize
      const showFoShouList = (skipNum + this.pageSize >= this.foShouList.length) ? this.foShouList.slice(skipNum, this.foShouList.length) : this.foShouList.slice(skipNum, skipNum + this.pageSize)
      return showFoShouList
    }
  },
  mounted() {
    this.foShouList = new Array(14).fill(
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
