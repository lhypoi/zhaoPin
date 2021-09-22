<template>
  <div class="foodMHome">
    <!-- 轮播图 -->
    <!-- 1、自适应高度。-->
    <el-carousel indicator-position="outside" height="40vw">
      <el-carousel-item
        v-for="(item, index) in slidePageList"
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
    <div class=" max-w-screen-lg container mx-auto">
      <!-- :1、自适应宽度，且两侧的元素贴着边，这样和整体的页面边角是对齐的 -->
      <SeriesTitle />
    </div>

    <!-- 各系列大图展示 -->
    <div class="bg-gray-100 mt-32 mb-24">
      <div class="flex flex-col max-ws">
        <div
          v-for="(img, imgIndex) in serieshowList"
          :key="imgIndex"
          class=" relative flex items-center justify-center cursor-pointer"
        >
          <el-image
            :src="img.path"
            fit="cover"
            class=" w-full inline-block "
          />
          <!-- left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -->
          <div class=" text-4xl text-black text-center absolute  ">
            {{ img.title }}
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import SeriesTitle from '../../components/SeriesTitle/SeriesTitle.vue'

export default {
  name: 'DrdMHome',
  components: {
    SeriesTitle
  },
  props: {},
  data() {
    return {
      slidePageList: [
        {
          imgPath: require('@/assets/img_food/home/组 1088.png')
        },
        {
          imgPath: require('@/assets/img_food/home/组 1088.png')
        }
      ],

      seriesList: [
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
      serieshowList: [
        {
          path: require('@/assets/img_food/home/组 1082.png'),
          title: '糖果系列'
        },
        {
          path: require('@/assets/img_food/home/组 1083.png'),
          title: '燕麦系列'
        },
        {
          path: require('@/assets/img_food/home/组 1084.png'),
          title: '佛手果系列'
        },
        {
          path: require('@/assets/img_food/home/组 1085.png'),
          title: '巧克力系列'
        },
        {
          path: require('@/assets/img_food/home/组 1086.png'),
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
