<template>
  <div class="glory">
    <!-- 头部大图 -->
    <div class="banner relative flex items-center justify-center ">
      <el-image
        :src="require('@/assets/img_food/brandStrength/glory/组 1091.png')"
        fit="cover"
        class="BP"
      />
      <div class=" absolute text-center">
        <div class=" text-5xl text-white font-bold">{{ $t('m.j0') }}</div>
      </div>
    </div>

    <!-- 导航图标 -->
    <div>
      <div class=" pt-20 flex justify-center align-middle max ">
        <div class="flex flex-row justify-between mt-6 container mx-auto max-w-screen-lg">
          <div
            v-for="(img, imgIndex) in BrandNavList"
            :key="imgIndex"
            class="mb-8 justify-items-center px-7 relative flex justify-center "
          >
            <svg class="icon  block w-40 h-20 mb-4 " aria-hidden="true">
              <use :xlink:href="img.imgPath" />
            </svg>
            <div class=" absolute top-7 left-24 text-gray-400 font-bold text-sm w-20 ">{{ img.name }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 公司荣誉照片展示 -->
    <div class="gloryShow pt-20 pb-20 bg-gray-100">
      <div class=" max-w-screen-lg container mx-auto">
        <div class=" flex justify-center items-center text-4xl font-bold">{{ $t('m.j0') }}</div>
        <div class=" pt-10 flex justify-center mx-auto">
          <div class="flex flex-row justify-between flex-wrap mt-6 container -mx-2">
            <div
              v-for="(glory, imgIndex) in gloryShowList"
              :key="imgIndex"
              class=" flex-col w-1/3  justify-items-center relative px-2 pb-4"
            >
              <el-image
                :src="glory.imgPath"
                fit="cover"
                class=" w-full h-full"
              />
              <div class=" text-grey2 text-base text-center px-14 absolute bottom-10 ">
                {{ glory.info }}
              </div>
            </div>
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
    gloryShowList() {
      return [
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 821.png'),
          info: this.$t('m.j1')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 822.png'),
          info: this.$t('m.j2')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 823.png'),
          info: this.$t('m.j3')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 824.png'),
          info: this.$t('m.j4')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 825.png'),
          info: this.$t('m.j5')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 826.png'),
          info: this.$t('m.j6')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 827.png'),
          info: this.$t('m.j7')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 828.png'),
          info: this.$t('m.j77')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 829.png'),
          info: this.$t('m.j777')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 830.png'),
          info: this.$t('m.j7777')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 831.png'),
          info: this.$t('m.j8')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 832.png'),
          info: this.$t('m.j9')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 833.png'),
          info: this.$t('m.j10')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 834.png'),
          info: this.$t('m.j11')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 835.png'),
          info: this.$t('m.j12')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 836.png'),
          info: this.$t('m.j13')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 837.png'),
          info: this.$t('m.j14')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 838.png'),
          info: this.$t('m.j15')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 839.png'),
          info: this.$t('m.j16')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 840.png'),
          info: this.$t('m.j17')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 841.png'),
          info: this.$t('m.j18')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 842.png'),
          info: this.$t('m.j19')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 843.png'),
          info: this.$t('m.j20')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 844.png'),
          info: this.$t('m.j21')
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
          imgPath: '#icon-a-huaban16',
          name: this.$t('m.r3')
        },
        {
          imgPath: '#icon-a-huaban17',
          name: this.$t('m.r4')
        },
        {
          imgPath: '#icon-a-huaban22',
          name: this.$t('m.r5')
        }
      ]
    }
  }
}
</script>

<style  scoped>
.BP{
  height: 64vh ;
}
</style>
