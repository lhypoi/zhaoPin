<template>
  <div class="cVideo">
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
      <!-- 轮播图1 -->
      <div>
        <el-carousel indicator-position="outside" height="20vw">
          <el-carousel-item
            v-for="(item, index) in slidePageList"
            :key="index"
          >
            <div class="flex flex-row w-full h-full justify-center">
              <div class=" flex pt-7" style="width: 55vw;" @click="$router.push(item.router)">
                <!-- logo -->
                <div class=" flex-col flex justify-between">
                  <div>
                    <el-image
                      :src="require('@/assets/img_food/logo.png')"
                      class=""
                    />
                  </div>
                  <!-- 小标题 -->
                  <div class=" mb-6">
                    <div class=" border-b-8 border-orange w-14 mb-8" />
                    <div class=" text-xl text-grey3">展翠宣传视频</div>
                  </div>
                </div>
                <!-- 图片背景 -->
                <div class=" h-full pl-16 mr-10">
                  <el-image
                    :src="item.imgPath"
                    class="block absolute w-4/5 h-full"
                  />
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class=" text-7xl">展翠宣传视频</div>
      <div class=" border-b-2 mb-24 mt-20" />

      <!-- 轮播图2 -->
      <div>
        <el-carousel indicator-position="outside" height="20vw">
          <el-carousel-item
            v-for="(item, index) in slidePageList"
            :key="index"
          >
            <div class="flex flex-row w-full h-full justify-center">
              <div class=" flex pt-7" style="width: 55vw;" @click="$router.push(item.router)">
                <!-- logo -->
                <div class=" flex-col flex justify-between">
                  <div>
                    <el-image
                      :src="require('@/assets/img_food/logo.png')"
                      class=""
                    />
                  </div>
                  <!-- 小标题 -->
                  <div class=" mb-6">
                    <div class=" border-b-8 border-orange w-14 mb-8" />
                    <div class=" text-xl text-grey3">软糖车间</div>
                  </div>
                </div>
                <!-- 图片背景 -->
                <div class=" h-full pl-16 mr-10">
                  <el-image
                    :src="item.imgPath"
                    class="block absolute w-4/5 h-full"
                  />
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class=" text-7xl">软糖车间</div>
      <div class=" border-b-2 mb-24 mt-20" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CVideo',
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
          imgPath: require('@/assets/img_food/about/icon/组 421.png')
        },
        {
          imgPath: require('@/assets/img_food/about/icon/组 424.png')
        }
      ],
      slidePageList: [
        {
          imgPath: require('@/assets/img_food/about/视频1.png')
        }
      ]
    }
  }
}
</script>

<style scoped>
.el-carousel__arrow {

}
.el-carousel__indicator--horizontal{
  display: none;
}
</style>
