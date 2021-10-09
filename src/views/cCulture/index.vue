<template>
  <div class="cCulture">
    <!-- 头部大图 -->
    <div class=" flex justify-center">
      <div class="banner relative flex items-center justify-center  ">
        <el-image
          :src="require('@/assets/img_food/about/组 1090.png')"
          fit="cover"
          class="BP"
        />
        <div class=" absolute items-center">
          <div class=" text-9xl font-bold text-white tracking-widest">{{ $t('m.l1') }}</div>
          <div class=" flex items-center justify-center py-8 ">
            <div class=" border-b-2 border-white w-20 mx-5" />
            <div class=" text-sm font-bold text-white text-center tracking-widest">{{ $t('m.l133') }}</div>
            <div class=" border-b-2 border-white w-20 mx-5" />
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
              class=" mb-4 ml-1/2 mr-7  "
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 左右留白盒子开始 -->
    <div class="container mx-auto max-w-screen-lg">
      <div class=" mt-40 flex justify-between items-center mb-48">
        <div class=" w-1/3">
          <el-image
            :src="require('@/assets/img_food/about/logo.png')"
            fit="cover"
          />
        </div>
        <div class=" flex flex-col ">
          <div class=" flex justify-between items-center">
            <div class="">
              <div class=" text-6xl font-bold relative pt-10">{{ $t('m.l2') }}
                <div class=" absolute top-0 right-24"><i class="iconfont icon-round text-orange text-6xl" /></div>
              </div>
              <div class=" text-xl text-grey3 my-11">{{ $t('m.l3') }}</div>
            </div>
            <div class=" text-gray-200 text-8xl font-bold">01</div>
          </div>
          <div class=" border-b-4 " />
          <div class=" text-6xl font-bold text-gray-300 mt-9">Brand vision</div>
        </div>
      </div>
    </div>
    <div class=" border-b-4" />
    <div class="container mx-auto max-w-screen-lg">
      <div class=" mt-40 flex justify-between items-center  mb-48">

        <div class=" flex flex-col ">
          <div class=" flex justify-between items-center">
            <div class="">
              <div class=" text-6xl font-bold relative pt-10">{{ $t('m.l4') }}
                <div class=" absolute top-0 left-52"><i class="iconfont icon-round text-orange text-6xl" /></div>
              </div>
              <div class=" text-xl text-grey3 my-11">{{ $t('m.l5') }}</div>
            </div>
            <div class=" text-gray-200 text-8xl font-bold">02</div>
          </div>
          <div class=" border-b-4 " />
          <div class=" text-6xl font-bold text-gray-300 mt-9">Brand positioning</div>
        </div>

        <div class=" w-1/3">
          <el-image
            :src="require('@/assets/img_food/about/logo2.png')"
            fit="cover"
          />
        </div>
      </div>
    </div>

    <div class="relative flex justify-center ">
      <el-image
        :src="require('@/assets/img_food/about/蒙版组 293.png')"
        fit="cover"
        class="BP"
      />
      <div class=" absolute flex flex-col text-white right-16 top-20 w-1/2">
        <div class=" text-5xl font-bold tracking-widest">{{ $t('m.l6') }}</div>
        <div class=" border-b-4 border-white mt-3" />
        <div class=" mt-6">
          <div class=" text-2xl font-bold tracking-widest">{{ $t('m.l7') }}</div>
          <div class=" text-base mt-1">{{ $t('m.l8') }}</div>
        </div>
        <div class=" mt-6">
          <div class="text-2xl font-bold tracking-widest">{{ $t('m.l9') }}</div>
          <div class=" text-base mt-1">{{ $t('m.l10') }}</div>
        </div>
        <div class=" mt-6">
          <div class=" text-2xl font-bold tracking-widest">{{ $t('m.l11') }}</div>
          <div class=" text-base mt-1">{{ $t('m.l12') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CCulture',
  components: {

  },
  data() {
    return {
      BrandNavList: [
        {
          imgPath: require('@/assets/img_food/about/icon/组 423.png')
        },
        {
          imgPath: require('@/assets/img_food/about/icon/组 422.png')
        },
        {
          imgPath: require('@/assets/img_food/about/icon/组 425.png')
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
