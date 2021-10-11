<template>
  <div class="foodMHome">
    <!-- 轮播图 -->
    <!-- 1、自适应高度。-->
    <el-carousel indicator-position="outside" height="64vh">
      <el-carousel-item
        v-for="(item, index) in slidePageList"
        :key="index"
      >
        <div class=" relative flex justify-center text-center">
          <div class="flex flex-col absolute ml-auto mr-auto w-full" @click="$router.push(item.router)">
            <el-image
              :src="item.imgPath"
              fit="cover"
              class="block w-full h-full"
            />
          </div>
          <div class="absolute top-32 text-white font-bold text-2xl space-y-10">
            <div>OEM/ODM</div>
            <div>{{ $t('m.a1') }}</div>
            <div class=" flex space-x-12">
              <div>{{ $t('m.a2') }}</div>
              <div>{{ $t('m.a3') }}</div>
              <div>{{ $t('m.a4') }}</div>
            </div>
          </div>
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
          class=" relative flex items-center justify-center cursor-pointer "
        >
          <el-image
            :src="img.path"
            fit="cover"
            class=" w-full inline-block BP"
          />
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
      ]
    }
  },
  computed: {
    serieshowList() {
      return [
        {
          path: require('@/assets/img_food/home/组 1082.png'),
          title: this.$t('m.a5')
        },
        {
          path: require('@/assets/img_food/home/组 1083.png'),
          title: this.$t('m.a6')
        },
        {
          path: require('@/assets/img_food/home/组 1084.png'),
          title: this.$t('m.a7')
        },
        {
          path: require('@/assets/img_food/home/组 1085.png'),
          title: this.$t('m.a8')
        },
        {
          path: require('@/assets/img_food/home/组 1086.png'),
          title: this.$t('m.a9')
        }
      ]
    }
  },
  created() {},
  mounted() {
  },
  methods: {}
}
</script>

<style lang="scss">
.BP{
  height: 64vh ;
}
</style>
