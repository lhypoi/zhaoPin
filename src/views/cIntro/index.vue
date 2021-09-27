<template>
  <div class="cIntro">
    <!-- 头部大图 -->
    <div class=" flex justify-center">
      <div class="banner relative flex items-center  ">
        <el-image
          :src="require('@/assets/img_food/about/蒙版组 289.png')"
          fit="cover"
          class="BP"
        />
        <div class=" absolute text-left pl-28">
          <div class=" text-4xl text-white">SUNTREE</div>
          <div class=" text-7xl text-white py-5 tracking-widest">关于展翠的简介</div>
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

      <!-- 公司简介 -->
      <div class=" mb-32">
        <div class=" text-4xl my-14 font-bold flex items-center justify-center">公司简介</div>
        <div class=" text-xl flex items-center justify-center tracking-widest leading-loose">
          广东展翠食品股份有限公司位于“中国食品名城”——广东省潮州市。公司创建于1996年，占地85000平方米，24年的不忘初心，坚守耕耘，现已发展成为拥有3000名正式员工，年销售额过百亿的一家专门从事休闲食品研发、深加工、仓储、物流以及国内外营销的综合型高新技术企业。
          <br>
          公司一贯坚持“质量为本，客户至上”的经营理念，树立以“诚信”为核心的企业文化，视消费者食品安全为己任，始终把产品质量放在首位，不断构建和完善ISO220000管理体系，建立风险预防管理机制，实施食品安全的全方位控制，确保产品质量与安全。
          <br>
          公司通过自主研发、引进技术、合作开发等方式，依托“国家糖果加工技术研发专业中心”的技术力量，不断推出一系列多元多样的健康食品，公司旗下的软硬糖果、糕点点心、饼干膨化、果干蜜饯、方便速食等产品系列，品种达200多个，畅销国内各大省市， 远销美国、加拿大、澳大利亚、韩国、日本等海外80多个国家和地区。为消费者带去质高、价优、新鲜、丰富、便利的快乐零食。
          <br>
          未来，展翠以“让更多的人吃上放心健康食品”为使命，以“食品安全布道者，行业模式探索者”的角色，持续耕耘全品类休闲食品，造福国内外更多消费者。在强大的研发、供应链、物流链以及新零售基础上，领跑中国休闲食品走向全新格局，实现“成为受全世界尊重的食品企业”愿景。
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'CIntro',
  components: {
  },
  data() {
    return {
      BrandNavList: [
        {
          imgPath: require('@/assets/img_food/about/icon/组 427.png')
        },
        {
          imgPath: require('@/assets/img_food/about/icon/组 422.png')
        },
        {
          imgPath: require('@/assets/img_food/about/icon/组 421.png')
        },
        {
          imgPath: require('@/assets/img_food/about/icon/组 420.png')
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
