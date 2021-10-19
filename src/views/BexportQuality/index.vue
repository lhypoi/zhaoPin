<template>
  <div class="glory">

    <div class="container mx-auto max-w-screen-lg">
      <!-- 导航图标 -->
      <div>
        <div class=" pt-20 flex justify-center align-middle ">
          <div class="flex flex-row justify-between mt-6 container mx-auto max-w-screen-lg ">
            <div
              v-for="(img, imgIndex) in BrandNavList"
              :key="imgIndex"
              class="mb-12 justify-items-center px-7 relative flex justify-center "
            >
              <svg class="icon  block w-40 h-20  " aria-hidden="true">
                <use :xlink:href="img.imgPath" />
              </svg>
              <div class=" absolute h-full flex flex-row items-center -ml-1 left-24 text-gray-400 text-sm font-bold w-20 ">{{ img.name }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 安全认证展示 -->
      <div class="safetyShow">
        <div class=" flex justify-center items-center text-4xl font-bold mt-32">{{ $t('m.i3') }}</div>
        <div class=" pt-20 flex  justify-center align-middle ">
          <div class="flex flex-row justify-between flex-wrap mt-6 container mx-auto">
            <div
              v-for="(glory, imgIndex) in safetyShow"
              :key="imgIndex"
              class=" mb-28 w-1/3 flex-col grid justify-items-center "
            >
              <el-image
                :src="glory.imgPath"
                fit="cover"
                class="  "
              />
              <div class=" text-grey2 text-3xl text-center ">
                {{ glory.info }}
              </div>
            </div>
          </div>
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
            <div class=" text-4xl">{{ $t('m.i4') }}</div>
            <div class=" text-lg">{{ $t('m.i5') }}</div>
          </div>
          <div class="">
            <div class=" text-4xl">200+</div>
            <div class=" text-lg">{{ $t('m.i6') }}</div>
          </div>
          <div class="">
            <div class=" text-4xl">80+</div>
            <div class=" text-lg">{{ $t('m.i7') }}</div>
          </div>
          <div class="">
            <div class=" text-4xl">{{ $t('m.i8') }}</div>
            <div class=" text-lg">{{ $t('m.i9') }}</div>
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

    }
  },
  computed: {
    safetyShow() {
      return [
        {
          imgPath: require('@/assets/img_food/brandStrength/exportQua/P1.png'),
          info: this.$t('m.i10')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/exportQua/P2.png'),
          info: this.$t('m.i11')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/exportQua/P3.png'),
          info: this.$t('m.i12')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/exportQua/P4.png'),
          info: this.$t('m.i13')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/exportQua/P5.png'),
          info: this.$t('m.i14')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/exportQua/P6.png'),
          info: this.$t('m.i15')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/exportQua/P7.png'),
          info: this.$t('m.i16')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/exportQua/P8.png'),
          info: this.$t('m.i17')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/exportQua/P9.png'),
          info: this.$t('m.i18')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/exportQua/P10.png'),
          info: this.$t('m.i19')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/exportQua/P11.png'),
          info: this.$t('m.i20')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/exportQua/P12.png'),
          info: this.$t('m.i21')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/exportQua/P13.png'),
          info: this.$t('m.i22')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/exportQua/P14.png'),
          info: this.$t('m.i23')
        }
      ]
    },
    BrandNavList() {
      return [
        {
          imgPath: '#icon-a-huaban14',
          name: this.$t('m.r1')
        },
        {
          imgPath: '#icon-a-huaban15',
          name: this.$t('m.r2')
        },
        {
          imgPath: '#icon-a-huaban20',
          name: this.$t('m.r3')
        },
        {
          imgPath: '#icon-a-huaban17',
          name: this.$t('m.r4')
        },
        {
          imgPath: '#icon-a-huaban18',
          name: this.$t('m.r5')
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
