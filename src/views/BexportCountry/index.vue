<template>
  <div class="glory">
    <!-- 头部大图 -->
    <div class="banner flex items-center justify-center ">
      <el-image
        :src="require('@/assets/img_food/brandStrength/exportCountry/蒙版组 294.png')"
        fit="cover"
        class="BP"
      />
    </div>

    <div class="container mx-auto max-w-screen-lg">
      <!-- 导航图标 -->
      <div>
        <div class=" pt-20 flex justify-center align-middle ">
          <div class="flex flex-row justify-between mt-6 container mx-auto max-w-screen-lg  ">
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
        <div class=" flex flex-col justify-center  ">
          <div class=" text-4xl font-bold text-center mb-14">{{ $t('m.i1') }}</div>
          <div class=" text-2xl text-left mx-24 mb-20 tracking-widest leading-loose">{{ $t('m.i2') }}</div>
        </div>
      </div>

    </div>
    <!-- 底部图片 -->
    <div class=" flex justify-center  pt-20 pb-48 bg-gray-100">
      <div class="banner relative flex items-center justify-center max-w-screen-lg  ">
        <el-image
          :src="require('@/assets/img_food/brandStrength/exportCountry/组 324.png')"
          fit="cover"
        />
        <div class=" w-3/4 absolute text-white text-center flex justify-between ">
          <div class="">
            <div class=" text-3xl">{{ $t('m.i4') }}</div>
            <div class=" text-base">{{ $t('m.i5') }}</div>
          </div>
          <div class="">
            <div class=" text-3xl">200+</div>
            <div class=" text-baseg">{{ $t('m.i6') }}</div>
          </div>
          <div class="">
            <div class=" text-3xl">80+</div>
            <div class=" text-base">{{ $t('m.i7') }}</div>
          </div>
          <div class="">
            <div class=" text-3xl">{{ $t('m.i8') }}</div>
            <div class=" text-base">{{ $t('m.i9') }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Glory',
  components: {

  },
  data() {
    return {
      BrandNavList: [
        {
          imgPath: require('@/assets/img_food/brandStrength/icon/410.png')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/icon/组 418.png')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/icon/组 412.png')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/icon/组 413.png')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/icon/组 414.png')
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
