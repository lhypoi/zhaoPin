<template>
  <div class="cVideo">
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

    <div>
      <div v-for="(item, index) in videoList" :key="index" class="py-20 border-t-2 border-gray-200 first:border-t-0">

        <div class="container mx-auto px-28 flex max-w-screen-lg">

          <div class="flex flex-col justify-between pb-16 w-1/6">
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

    }
  },
  computed: {
    videoList() {
      return [
        {
          title: this.$t('m.l13'),
          imgPath: require('@/assets/img_food/about/视频1.png')
        },
        {
          title: this.$t('m.l14'),
          imgPath: require('@/assets/img_food/about/视频2.png')
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
          imgPath: '#icon-a-huaban7',
          name: this.$t('m.q2')
        },
        {
          imgPath: '#icon-a-huaban8',
          name: this.$t('m.q3')
        },
        {
          imgPath: '#icon-a-huaban13',
          name: this.$t('m.q4')
        }
      ]
    }
  }
}
</script>

<style scoped>

.el-carousel__indicator--horizontal{
  display: none;
}

</style>
