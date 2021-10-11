<template>
  <div class="quality">

    <!-- 导航图标 -->
    <div>
      <div class=" pt-20 flex justify-center align-middle mx-auto max-w-screen-lg overflow-hidden">
        <div class="flex justify-between  mt-6 -mx-7">
          <div
            v-for="(img, imgIndex) in BrandNavList"
            :key="imgIndex"
            class="mb-8 justify-items-center px-7 relative flex justify-center "
          >
            <svg class="icon  block w-40 h-20 mb-4 " aria-hidden="true">
              <use :xlink:href="img.imgPath" />
            </svg>
            <div class=" absolute top-7 left-24 text-gray-400 text-sm font-bold w-20 ">{{ img.name }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 研发环境 -->
    <div class=" max-w-screen-lg container mx-auto ">
      <div class=" flex items-center justify-center text-4xl font-bold mb-16">{{ $t('m.h1') }}</div>
      <!-- 整个大盒子 -->
      <div class="flex flex-col items-center">
        <!-- 上面大盒子 -->
        <div class=" flex space-x-5 ">
          <!-- 上左图片 -->
          <el-image
            :src="require('@/assets/img_food/brandStrength/quality/蒙版组 234.png')"
            fit="cover"
            class=""
          />
          <!-- 上中内容 -->
          <div>
            <el-image
              :src="require('@/assets/img_food/brandStrength/quality/蒙版组 230.png')"
              fit="cover"
              class=""
            />
            <div class=" flex-col flex items-center justify-center h-1/2">
              <div class=" text-3xl font-bold mb-8">{{ $t('m.h1') }}</div>
              <div class=" text-base font-bold">{{ $t('m.h2') }}</div>
            </div>
          </div>
          <!-- 上右图片 -->
          <el-image
            :src="require('@/assets/img_food/brandStrength/quality/蒙版组 241.png')"
            fit="cover"
            class=""
          />
        </div>

        <!-- 下面大盒子 -->
        <div class="flex space-x-7 mt-6">
          <!-- 下左图片 -->
          <el-image
            :src="require('@/assets/img_food/brandStrength/quality/蒙版组 231.png')"
            fit="cover"
            class=""
          />
          <!-- 下右图片 -->
          <el-image
            :src="require('@/assets/img_food/brandStrength/quality/蒙版组 232.png')"
            fit="cover"
            class=" "
          />
        </div>
      </div>
    </div>

    <!-- 工作环境 -->
    <div class=" mt-48 bg-gray-100">
      <div class="flex  container mx-auto max-w-screen-lg">
        <div class=" flex flex-col mt-20 flex-auto w-2/3 ">
          <div class=" mb-12 text-4xl font-bold">{{ $t('m.h3') }}</div>
          <div class=" text-xl font-bold">{{ $t('m.h4') }}</div>
        </div>

        <div class=" flex flex-wrap justify-between ml-5">
          <div
            v-for="(img, imgIndex) in workPlaceList"
            :key="imgIndex"
            class="w-1/3 px-4"
          >
            <el-image
              :src="img.imgPath"
              fit="cover"
              class="w-full mb-14 "
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 公司展厅 -->
    <div class="container mx-auto max-w-screen-lg">
      <div class=" flex items-center justify-center text-4xl font-bold mb-28 mt-52">{{ $t('m.h5') }}</div>
      <div>
        <div class=" mb-12 flex justify-between">
          <div class=" space-y-14 pr-10">
            <el-image
              :src="require('@/assets/img_food/brandStrength/quality/蒙版组 167.png')"
              fit="cover"
              class=" "
            />
            <el-image
              :src="require('@/assets/img_food/brandStrength/quality/蒙版组 168.png')"
              fit="cover"
              class=" "
            />
          </div>

          <div class="space-y-14 mt-36 pr-10">
            <el-image
              :src="require('@/assets/img_food/brandStrength/quality/蒙版组 169.png')"
              fit="cover"
              class=" "
            />
            <el-image
              :src="require('@/assets/img_food/brandStrength/quality/蒙版组 170.png')"
              fit="cover"
              class=" "
            />
          </div>

          <div class="space-y-14 mt-10 pr-10">
            <el-image
              :src="require('@/assets/img_food/brandStrength/quality/蒙版组 171.png')"
              fit="cover"
              class=" "
            />
            <el-image
              :src="require('@/assets/img_food/brandStrength/quality/蒙版组 172.png')"
              fit="cover"
              class=" "
            />
          </div>

          <div class="space-y-14 mt-52">
            <el-image
              :src="require('@/assets/img_food/brandStrength/quality/蒙版组 173.png')"
              fit="cover"
              class=" "
            />
            <el-image
              :src="require('@/assets/img_food/brandStrength/quality/蒙版组 174.png')"
              fit="cover"
              class=" "
            />
          </div>

        </div>
      </div>
    </div>

    <!-- 生产设备 -->
    <div class="bg-gray-100 pb-32 pt-20">
      <div class="  container mx-auto max-w-screen-lg">
        <div class=" mb-9 whitespace-nowrap ">
          <div class=" text-4xl font-bold">{{ $t('m.h6') }}</div>
          <div class=" text-xl font-bold w-1/5 py-3">{{ $t('m.h7') }}</div>
        </div>
        <div class="flex justify-between -mx-2">
          <el-image
            :src="require('@/assets/img_food/brandStrength/quality/蒙版组 162.png')"
            fit="cover"
            class="px-2"
          />
          <div class=" flex flex-col justify-between px-2">
            <el-image
              :src="require('@/assets/img_food/brandStrength/quality/蒙版组 163.png')"
              fit="cover"
              class=" "
            />
            <el-image
              :src="require('@/assets/img_food/brandStrength/quality/蒙版组 164.png')"
              fit="cover"
              class=" "
            />
          </div>
          <div class=" flex flex-col justify-between px-2">
            <el-image
              :src="require('@/assets/img_food/brandStrength/quality/蒙版组 165.png')"
              fit="cover"
              class=" "
            />
            <el-image
              :src="require('@/assets/img_food/brandStrength/quality/蒙版组 166.png')"
              fit="cover"
              class=" "
            />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Quality',
  components: {

  },
  data() {
    return {

      workPlaceList: [
        {
          imgPath: require('@/assets/img_food/brandStrength/quality/蒙版组 175.png')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/quality/蒙版组 176.png')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/quality/蒙版组 177.png')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/quality/蒙版组 178.png')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/quality/蒙版组 179.png')
        },
        {
          imgPath: require('@/assets/img_food/brandStrength/quality/蒙版组 180.png')
        }
      ]

    }
  },
  computed: {
    BrandNavList() {
      return [
        {
          imgPath: '#icon-a-huaban23',
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
          imgPath: '#icon-a-huaban18',
          name: this.$t('m.r5')
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
