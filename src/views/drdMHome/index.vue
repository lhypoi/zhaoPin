<template>
  <div class="drdMHome">
    <!-- 轮播图 -->
    <el-carousel indicator-position="outside" height="830px">
      <el-carousel-item
        v-for="(item, index) in modulePageList"
        :key="index"
      >
        <div class="flex flex-col ml-auto mr-auto mt-4 w-full" @click="$router.push(item.router)">
          <el-image
            :src="item.imgPath"
            fit="cover"
            class="block w-full h-full"
          />
        </div>
      </el-carousel-item>
    </el-carousel>

    <!-- food系列 -->
    <div class=" pt-20 flex justify-center align-middle ">
      <div class="flex flex-row justify-between w-2/3 mt-6">
        <div
          v-for="(appeal, imgIndex) in appealList"
          :key="imgIndex"
          class=" flex-col mb-8  w-full grid justify-items-center"
        >
          <el-image
            :src="appeal.icon"
            fit="cover"
            class=" w-32 h-32 mb-4 ml-1/2  "
          />
          <div>
            <div class=" text-4xl text-black  ">
              {{ appeal.title }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 发展历程 -->
    <div class="bg-gray-100 mt-32 mb-24">
      <div class="flex flex-col">
        <div
          v-for="(img, imgIndex) in developList"
          :key="imgIndex"
          class=" relative"
        >
          <el-image
            :src="img.path"
            fit="cover"
            class=" w-full"
          />
          <!-- left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -->
          <div class=" text-4xl text-black text-center absolute z-10 left-1/2 top-1/2 -ml-20 -mt-5  ">
            {{ img.title }}
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'DrdMHome',
  props: {},
  data() {
    return {
      modulePageList: [
        {
          imgPath: require('@/assets/img_food/home/1.png')
        },
        {
          imgPath: require('@/assets/img_food/home/slideshow1.png')
        }
      ],

      appealList: [
        {
          icon: require('@/assets/img_food/home/series1.png'),
          title: '糖果系列'
        },
        {
          icon: require('@/assets/img_food/home/series2.png'),
          title: '燕麦系列'
        },
        {
          icon: require('@/assets/img_food/home/series3.png'),
          title: '佛手果系列'
        },
        {
          icon: require('@/assets/img_food/home/series4.png'),
          title: '巧克力系列'
        },
        {
          icon: require('@/assets/img_food/home/series5.png'),
          title: '饼干系列'
        }

      ],
      developList: [
        {
          path: require('@/assets/img_food/home/seriesP1.png'),
          title: '糖果系列'
        },
        {
          path: require('@/assets/img_food/home/seriesP2.png'),
          title: '燕麦系列'
        },
        {
          path: require('@/assets/img_food/home/seriesP3.png'),
          title: '佛手果系列'
        },
        {
          path: require('@/assets/img_food/home/seriesP4.png'),
          title: '巧克力系列'
        },
        {
          path: require('@/assets/img_food/home/seriesP5.png'),
          title: '饼干系列'
        }
      ]
    }
  },
  computed: {

  },
  created() {},
  mounted() {
  },
  methods: {}
}
</script>

<style lang="scss">

</style>
