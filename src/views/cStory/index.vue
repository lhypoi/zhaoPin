<template>
  <div class="cStory">
    <!-- 头部大图 -->
    <div class=" flex justify-center ">
      <div class="banner relative flex items-center justify-center  ">
        <el-image
          :src="require('@/assets/img_food/about/蒙版组 291.png')"
          fit="cover"
          class="BP"
        />
        <div class=" absolute bottom-56 text-center ">
          <div class=" text-7xl text-white">{{ $t('m.k111') }}</div>
          <div class=" text-7xl text-white py-5">{{ $t('m.k222') }}</div>
        </div>
        <div class=" w-3/4 absolute bottom-28 text-white text-center flex justify-between ">
          <div class="">
            <div class=" text-3xl">{{ $t('m.k333') }}</div>
            <div class=" text-base">{{ $t('m.k4') }}</div>
          </div>
          <div class="">
            <div class=" text-3xl">7</div>
            <div class=" text-base">{{ $t('m.k5') }}</div>
          </div>
          <div class="">
            <div class=" text-3xl">15+</div>
            <div class=" text-base">{{ $t('m.k6') }}</div>
          </div>
          <div class="">
            <div class=" text-3xl">200+</div>
            <div class=" text-base">{{ $t('m.k7') }}</div>
          </div>
          <div class="">
            <div class=" text-3xl">80+</div>
            <div class=" text-base">{{ $t('m.k8') }}</div>
          </div>
          <div class="">
            <div class=" text-3xl">{{ $t('m.k9') }}</div>
            <div class=" text-base">{{ $t('m.k10') }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 导航图标 -->
    <div>
      <div class=" pt-20 flex justify-center align-middle ">
        <div class="flex flex-row justify-between mt-6 container mx-auto max-w-screen-lg">
          <div
            v-for="(img, imgIndex) in BrandNavList"
            :key="imgIndex"
            class=" flex-col mb-8 grid justify-items-center relative"
          >
            <svg class="icon  block w-40 h-20 mb-4 ml-1/2  mr-7 " aria-hidden="true">
              <use :xlink:href="img.imgPath" />
            </svg>
            <div class=" absolute top-7 left-16 text-gray-400 text-sm font-bold w-20 ">{{ img.name }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 左右留白盒子开始 -->
    <div class="container mx-auto max-w-screen-lg">

      <!-- 企业发展历程 -->
      <div class=" mt-36">
        <div class=" text-7xl font-bold">{{ $t('m.k11') }}</div>
        <div class=" text-xl mt-2 mb-11 tracking-widest leading-loose">{{ $t('m.k12') }}</div>
        <div class=" border-b-8 border-orange mb-20" />
        <div class=" mb-16 flex">
          <div class="flex items-center relative">
            <div class="text-orange text-8xl" style="font: icon;">&#x2B22;</div>
            <div class="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center">
              <i class="iconfont iconclock text-white text-4xl" />
            </div>
          </div>
          <div class="pl-5 flex flex-col justify-between">
            <div class=" text-4xl tracking-widest leading-loose">{{ $t('m.k13') }}</div>
            <div class=" text-lg">Development History of Zhancui</div>
          </div>
        </div>
      </div>

      <div
        v-for="(story,index) in storyList"
        :key="index"
        class=""
      >
        <StoryList>
          <div slot="year">{{ story.year }}</div>
          <div slot="bg">
            <el-image
              :src="story.imgPath"
              fit="cover"
            />
          </div>
          <div slot="title" class=" text-2xl font-bold">{{ story.title }}</div>
          <div slot="info" class="text-xl tracking-widest leading-loose">{{ story.info }}</div>
        </StoryList>
      </div>

    </div>
  </div>
</template>

<script>
import StoryList from './component/storyList.vue'

export default {
  name: 'CStory',
  components: {
    StoryList
  },
  data() {
    return {

    }
  },
  computed: {
    storyList() {
      return [
        {
          imgPath: require('@/assets/img_food/about/组 782.png'),
          year: this.$t('m.k14'),
          title: this.$t('m.k15'),
          info: this.$t('m.k16')
        },
        {
          imgPath: require('@/assets/img_food/about/组 781.png'),
          year: this.$t('m.k17'),
          title: this.$t('m.k18'),
          info: this.$t('m.k19')
        },
        {
          imgPath: require('@/assets/img_food/about/组 783.png'),
          year: this.$t('m.k20'),
          title: this.$t('m.k21'),
          info: this.$t('m.k22')
        },
        {
          imgPath: require('@/assets/img_food/about/组 783.png'),
          year: this.$t('m.k23'),
          title: this.$t('m.k24'),
          info: this.$t('m.k25')
        },
        {
          imgPath: require('@/assets/img_food/about/组 784.png'),
          year: this.$t('m.k26'),
          title: this.$t('m.k27'),
          info: this.$t('m.k28')
        },
        {
          imgPath: require('@/assets/img_food/about/组 784.png'),
          year: this.$t('m.k29'),
          title: this.$t('m.k30'),
          info: this.$t('m.k31')
        }
      ]
    },
    BrandNavList() {
      return [
        {
          imgPath: '#icon-a-huaban6',
          name: this.$t('m.q1')
        },
        {
          imgPath: '#icon-a-huaban11',
          name: this.$t('m.q2')
        },
        {
          imgPath: '#icon-a-huaban8',
          name: this.$t('m.q3')
        },
        {
          imgPath: '#icon-a-huaban10',
          name: this.$t('m.q4')
        }
      ]
    }
  }
}
</script>

<style scoped>
.BP{
  height: 64vh ;
}
</style>
