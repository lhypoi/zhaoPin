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
          <div class=" text-7xl text-white py-5 tracking-widest">{{ $t('m.k1') }}</div>
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

      <!-- 公司简介 -->
      <div class=" mb-32">
        <div class=" text-4xl my-14 font-bold flex items-center justify-center">{{ $t('m.k2') }}</div>
        <div class=" text-xl flex items-center justify-center tracking-widest leading-loose">
          {{ $t('m.k3') }}
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

    }
  },
  computed: {
    BrandNavList() {
      return [
        {
          imgPath: '#icon-a-huaban9',
          name: this.$t('m.q1')
        },
        {
          imgPath: '#icon-a-huaban7',
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
