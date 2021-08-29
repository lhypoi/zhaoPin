<template>
  <div class="cStory">
    <!-- 头部大图 -->
    <div class=" flex justify-center">
      <div class="banner relative flex items-center justify-center  ">
        <el-image
          :src="require('@/assets/img_food/about/蒙版组 99.png')"
          fit="cover"
          class="z-0"
        />
        <div class=" absolute bottom-96  pl-28 text-center">
          <div class=" text-7xl text-white">关于展翠的</div>
          <div class=" text-7xl text-white py-5">品牌故事发展</div>
        </div>
        <div class=" w-3/4 absolute bottom-60 text-white text-center flex justify-between ">
          <div class="">
            <div class=" text-4xl">1996年</div>
            <div class=" text-lg">成立于</div>
          </div>
          <div class="">
            <div class=" text-4xl">7</div>
            <div class=" text-lg">大分类</div>
          </div>
          <div class="">
            <div class=" text-4xl">15+</div>
            <div class=" text-lg">细分品类</div>
          </div>
          <div class="">
            <div class=" text-4xl">200+</div>
            <div class=" text-lg">食品品种</div>
          </div>
          <div class="">
            <div class=" text-4xl">80+</div>
            <div class=" text-lg">远销全球国家和地区</div>
          </div>
          <div class="">
            <div class=" text-4xl">500强</div>
            <div class=" text-lg">广东企业</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 导航图标 -->
    <div>
      <div class=" pt-20 flex justify-center align-middle ">
        <div class="flex flex-row justify-between mt-6 container mx-auto">
          <div
            v-for="(img, imgIndex) in BrandNavList"
            :key="imgIndex"
            class=" flex-col mb-8 grid justify-items-center"
          >
            <el-image
              :src="img.imgPath"
              fit="cover"
              class=" mb-4 ml-1/2  "
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 左右留白盒子开始 -->
    <div class="container mx-auto">

      <!-- 企业发展历程 -->
      <div class=" mt-48">
        <div class=" text-7xl">企业发展历程</div>
        <div class=" text-xl mt-2 mb-11">精准研发产品+深层贸易服务</div>
        <div class=" border-b-8 border-red-400 mb-20" />
        <div class=" mb-16 flex">
          <div class="flex items-center relative">
            <div class="text-orange text-8xl" style="font: icon;">&#x2B22;</div>
            <div class="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center">
              <i class="iconfont iconclock text-white text-4xl" />
            </div>
          </div>
          <div class="pl-5 flex flex-col justify-between py-2">
            <div class=" text-4xl">展翠发展历程</div>
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
      BrandNavList: [
        {
          imgPath: require('@/assets/img_food/about/icon/组 423.png')
        },
        {
          imgPath: require('@/assets/img_food/about/icon/组 426.png')
        },
        {
          imgPath: require('@/assets/img_food/about/icon/组 421.png')
        },
        {
          imgPath: require('@/assets/img_food/about/icon/组 420.png')
        }
      ],
      storyList: [
        {
          imgPath: require('@/assets/img_food/about/组 782.png'),
          year: '1989年'
        },
        {
          imgPath: require('@/assets/img_food/about/组 781.png'),
          year: '1990年'
        },
        {
          imgPath: require('@/assets/img_food/about/组 783.png'),
          year: '1996年'
        },
        {
          imgPath: require('@/assets/img_food/about/组 783.png'),
          year: '2010年'
        },
        {
          imgPath: require('@/assets/img_food/about/组 784.png'),
          year: '2013年'
        },
        {
          imgPath: require('@/assets/img_food/about/组 784.png'),
          year: '2020年'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
