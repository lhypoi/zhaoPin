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

      <!-- 安全认证展示 -->
      <div class="safetyShow">
        <div class=" flex justify-center items-center text-4xl font-bold mt-32">国际安全认证</div>
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
            <div class=" text-4xl">1996年</div>
            <div class=" text-lg">成立于</div>
          </div>
          <div class="">
            <div class=" text-4xl">200+</div>
            <div class=" text-lg">食品品种</div>
          </div>
          <div class="">
            <div class=" text-4xl">80+</div>
            <div class=" text-lg">远销全球国家和地区</div>
          </div>
          <div class="">
            <div class=" text-4xl">500强</div>
            <div class=" text-lg">广东企业</div>
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
          imgPath: require('@/assets/img_food/brandStrength/icon/组 417.png')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/icon/组 413.png')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/icon/组 414.png')
        }
      ],
      safetyShow: [
        {
          imgPath: require('@/assets/img_food/brandStrength/exportQua/P1.png'),
          info: '美国FDA认证'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/exportQua/P2.png'),
          info: '英国BRC认证'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/exportQua/P3.png'),
          info: 'PCQI  FSPCA认证'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/exportQua/P4.png'),
          info: 'BSCI 验厂证明'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/exportQua/P5.png'),
          info: 'HACCP认证'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/exportQua/P6.png'),
          info: 'HALAL清真产品认证'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/exportQua/P7.png'),
          info: 'ISO 45001认证'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/exportQua/P8.png'),
          info: 'ISO 9001认证'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/exportQua/P9.png'),
          info: 'iso14001认证'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/exportQua/P10.png'),
          info: 'ISO 22000认证'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/exportQua/P11.png'),
          info: '出入境检验报检'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/exportQua/P12.png'),
          info: '对外贸易经营备案'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/exportQua/P13.png'),
          info: '海关报关登记'
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/exportQua/P14.png'),
          info: '海关高级认证企业证书'
        }

      ]
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
