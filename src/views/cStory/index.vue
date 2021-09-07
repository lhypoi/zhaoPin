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
        <div class="flex flex-row justify-between mt-6 container mx-auto max-w-screen-lg">
          <div
            v-for="(img, imgIndex) in BrandNavList"
            :key="imgIndex"
            class=" flex-col mb-8 grid justify-items-center"
          >
            <el-image
              :src="img.imgPath"
              fit="cover"
              class=" mb-4 ml-1/2  mr-7 "
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 左右留白盒子开始 -->
    <div class="container mx-auto max-w-screen-lg">

      <!-- 企业发展历程 -->
      <div class=" mt-36">
        <div class=" text-7xl font-bold">企业发展历程</div>
        <div class=" text-xl mt-2 mb-11 tracking-widest leading-loose">精准研发产品+深层贸易服务</div>
        <div class=" border-b-8 border-orange mb-20" />
        <div class=" mb-16 flex">
          <div class="flex items-center relative">
            <div class="text-orange text-8xl" style="font: icon;">&#x2B22;</div>
            <div class="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center">
              <i class="iconfont iconclock text-white text-4xl" />
            </div>
          </div>
          <div class="pl-5 flex flex-col justify-between">
            <div class=" text-4xl tracking-widest leading-loose">展翠发展历程</div>
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
          year: '1989年',
          title: '初始创业阶段(1989年——1990年)',
          info: '秉承潮汕人“不服输、不怕吃苦”的奋斗精神，心中怀着一个信念，坚定不移地完成了创业起步，成立展翠凉果厂！'
        },
        {
          imgPath: require('@/assets/img_food/about/组 781.png'),
          year: '1990年',
          title: '茁壮成长阶段（1990年——1996年）',
          info: '展翠充分发挥自身优势，将满满诚意汇聚产品中，用心细作，使得展翠稳步发展。'
        },
        {
          imgPath: require('@/assets/img_food/about/组 783.png'),
          year: '1996年',
          title: '发展壮大阶段（1996年——2010年）',
          info: '展翠不断修炼“内功”，经过反复摸索、研究；展翠摸索出绿色、健康食品产业的发展道路，展翠再一次刷新发展速度！'
        },
        {
          imgPath: require('@/assets/img_food/about/组 783.png'),
          year: '2010年',
          title: '体制改革阶段（2010年以后）',
          info: '公司股份制改革，广东展翠食品股份有限公司正式成立，标志着展翠发展史上新的里程碑。'
        },
        {
          imgPath: require('@/assets/img_food/about/组 784.png'),
          year: '2013年',
          title: '2013年新的开始、新厂区、新面貌',
          info: '荣获“广东省直通车服务重点企业” 广东省工程技术研究中心成立 新厂区，新面貌， 以崭新精神迎接新的挑战'
        },
        {
          imgPath: require('@/assets/img_food/about/组 784.png'),
          year: '2020年',
          title: '展望未来、成就的今天、双赢的明天',
          info: '我们将坚持以“产品和市场为导向、安全和质量为核心”，走自主研发为主的产品和技术创新之路，不断提高技术和产品研发能力，进一步发展成为集休闲食品开发、生产、销售于一体，能够满足全球各个地区消费者偏好，为客户提供一站式采购服务的休闲食品生产企业。 展翠，凤凰展翅，余音绕梁； 展翠成就的今天，必将是未来辉煌的基础，共创和谐，双赢的明天。'
        }
      ]

    }
  }
}
</script>

<style scoped>

</style>
