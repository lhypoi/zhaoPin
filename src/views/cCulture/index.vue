<template>
  <div class="cCulture">
    <!-- 头部大图 -->
    <div class=" flex justify-center">
      <div class="banner relative flex items-center justify-center  ">
        <el-image
          :src="require('@/assets/img_food/about/组 335.png')"
          fit="cover"
          class="z-0"
        />
        <div class=" absolute items-center">
          <div class=" text-9xl font-bold text-white">品牌使命</div>
          <div class=" text-sm font-bold text-white py-5 text-center">把美味带给世界上每一个你</div>
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
      <div class=" mt-40 flex justify-between items-center border-b-4 mb-48">
        <div>
          <el-image
            :src="require('@/assets/img_food/about/logo.png')"
            fit="cover"
            class="z-0"
          />
        </div>
        <div class=" flex flex-col ">
          <div class=" flex justify-between items-center">
            <div class="">
              <div class=" text-6xl relative pt-10">品牌愿景
                <div class=" absolute top-0 right-24"><i class="iconfont icon-round text-orange text-6xl" /></div>
              </div>
              <div class=" text-xl text-grey3 my-11">振兴中国糖果制造业，打造专业糖果品牌</div>
            </div>
            <div class=" text-gray-200 text-8xl font-bold">01</div>
          </div>
          <div class=" border-b-4 " />
          <div class=" text-7xl text-grey3 mt-9">Brand vision</div>
        </div>
      </div>

      <div class=" mt-40 flex justify-between items-center border-b-4 mb-48">

        <div class=" flex flex-col ">
          <div class=" flex justify-between items-center">
            <div class="">
              <div class=" text-6xl relative pt-10">品牌定位
                <div class=" absolute top-0 left-52"><i class="iconfont icon-round text-orange text-6xl" /></div>
              </div>
              <div class=" text-xl text-grey3 my-11">专注糖果研发</div>
            </div>
            <div class=" text-gray-200 text-8xl font-bold">02</div>
          </div>
          <div class=" border-b-4 " />
          <div class=" text-7xl text-grey3 mt-9">Brand positioning</div>
        </div>

        <div>
          <el-image
            :src="require('@/assets/img_food/about/logo.png')"
            fit="cover"
            class="z-0"
          />
        </div>
      </div>

      <div class="relative flex">
        <el-image
          :src="require('@/assets/img_food/about/蒙版组 250.png')"
          fit="cover"
          class=""
        />

        <div class=" absolute flex flex-col text-white right-16 top-10">
          <div class=" text-4xl">展翠价值观</div>
          <div class=" border-b-4 border-white mt-5" />
          <div class=" mt-6">
            <div class=" text-xl font-bold">志于高远</div>
            <div class=" text-base mt-1">展翠不仅确立了自身的发展蓝湖，更以让全球的人尝到糖果的美味</div>
          </div>
          <div class=" mt-6">
            <div class=" text-xl font-bold">行于仁德</div>
            <div class=" text-base mt-1">立世以德，行事已仁，大道无疆</div>
          </div>
          <div class=" mt-6">
            <div class=" text-xl font-bold">成于精艺</div>
            <div class=" text-base mt-1">展翠以精于专业，成就展翠为永恒追求的目标，致力于打造最具
              有价值的糖果品牌</div>
          </div>
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

</style>
