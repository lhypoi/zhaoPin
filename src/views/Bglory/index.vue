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
      BrandNavList: [
        {
          imgPath: require('@/assets/img_food/brandStrength/icon/410.png')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/icon/组 411.png')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/icon/组 412.png')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/icon/组 413.png')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/icon/组 415.png')
        }
      ]

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
    }
  }
}
</script>

<style  scoped>
.BP{
  height: 64vh ;
}
</style>
