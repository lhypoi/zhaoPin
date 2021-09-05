<template>
  <div>
    <div>
      <div
        v-for="(item,index) in newsList"
        :key="index"
        class=" mb-5"
      >
        <div class=" bg-white px-4 py-3">
          <div class="">
            <div class=" text-grey3">{{ item.title }}</div>
          </div>
          <div class=" flex py-1">
            <div class=" bg-orange items-center justify-center text-white px-1 ">官方新闻</div>
            <div class="flex items-center justify-center pl-2 text-grey2">{{ item.date }}</div>
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
    </div>

  </div>
</template>

<script>

export default {
  components: {
  },
  data: function() {
    return {
      newsList: [
        {
          title: '第十二届广交会',
          date: '2021-03-12'
        }
      ]
    }
  }
}
</script>
