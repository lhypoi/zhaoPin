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

    <div>
      <div v-for="(item, index) in videoList" :key="index" class="py-20 border-t-2 border-gray-200 first:border-t-0">

        <div class="container mx-auto px-28 flex">

          <div class="flex flex-col justify-between pb-16">
            <div>
              <el-image
                :src="require('@/assets/img_food/logo.png')"
              />
            </div>
            <div>
              <div class="border-b-8 border-orange w-14 mb-3" />
              <!-- 行高重置为1，确保文字的下边界和视频下边界对齐 -->
              <div class="text-xl leading-none text-grey3">{{ item.title }}</div>
            </div>
          </div>
          <!-- 右边 -->
          <div class="flex-1 pl-16">
            <el-image
              :src="item.imgPath"
              class="block w-full h-auto"
            />
            <div class="h-16 flex items-end text-4xl">{{ item.title }}</div>
          </div>
        </div>
      </div>
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
      videoList: [
        {
          title: '展翠宣传视频',
          imgPath: require('@/assets/img_food/about/视频1.png')
        },
        {
          title: '软糖车间',
          imgPath: require('@/assets/img_food/about/视频2.png')
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
