<template>
  <div class="glory">
    <!-- 头部大图 -->
    <div class="banner relative flex items-center justify-center ">
      <el-image
        :src="require('@/assets/img_food/brandStrength/glory/banner.png')"
        fit="cover"
        class="z-0"
      />
      <div class=" absolute text-center">
        <div class=" text-5xl text-white font-bold">公司荣耀</div>
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

    <!-- 公司荣誉照片展示 -->
    <div class="gloryShow pt-20 pb-20 bg-gray-100">
      <div class=" flex justify-center items-center text-4xl font-bold">公司荣誉</div>
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
            <div class=" text-grey2 text-2xl text-center px-14 absolute bottom-14 ">
              {{ glory.info }}
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
      ],
      gloryShowList: [
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 821.png'),
          info: '1999-第十一届中国新技术新产品博览会金奖'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 822.png'),
          info: '2007-2010产品质量国家免检'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 823.png'),
          info: '2010-2011-500强'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 824.png'),
          info: '2013-广东省糖果食品（展翠）工程技术研发中心'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 825.png'),
          info: '2015-2016“四梁八柱”工程民营大企业'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 826.png'),
          info: '2016-潮州市生态茶园'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 827.png'),
          info: '广东手信称号'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 828.png'),
          info: '2016-农业现代化国家重点龙头企业'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 829.png'),
          info: '2017-2019中国质量诚信企业'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 830.png'),
          info: '2017广东创新型企业'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 831.png'),
          info: '2018-12省级非物质文化遗产'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 832.png'),
          info: '2018-2020广东省新型研发机构'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 833.png'),
          info: '2018-2021潮州十大名优系列'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 834.png'),
          info: '2018-2021高新技术企业'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 835.png'),
          info: '2018-创税五十强企业'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 836.png'),
          info: '国家糖果加工技术研发专业中心'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 837.png'),
          info: '国家糖果加工研发专业中心'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 838.png'),
          info: '2018-市政建设贡献奖'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 839.png'),
          info: '2018-四梁八柱名营企业'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 840.png'),
          info: '2019-2020广东名果'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 841.png'),
          info: '2019-潮州十大手信'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 842.png'),
          info: '2019-大众喜爱食品品牌'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 843.png'),
          info: '2019海关认证企业证书'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/glory/组 844.png'),
          info: '2019-全国工人先锋号'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
