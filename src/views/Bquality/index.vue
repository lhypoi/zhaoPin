<template>
  <div class="quality">

    <div class="container mx-auto">
      <!-- 导航图标 -->
      <div>
        <div class=" pt-20 flex justify-center align-middle ">
          <div class="flex flex-row justify-between mt-6 container mx-auto ">
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

      <!-- 研发环境 -->
      <div class="">
        <div class=" flex items-center justify-center text-4xl font-bold mb-16">研发环境</div>
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
                <div class=" text-4xl font-bold mb-8">研发环境</div>
                <div class=" text-base font-bold">给与我们研究人员最高的研究环境</div>
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
      <div class=" flex mt-48">
        <div class=" flex flex-col mt-20 ">
          <div class=" mb-12 text-4xl font-bold">工作环境</div>
          <div class=" text-xl font-bold">我们的公司的生产车间的环境</div>
        </div>

        <div class=" flex flex-wrap justify-between ml-36">
          <div
            v-for="(img, imgIndex) in workPlaceList"
            :key="imgIndex"
            class=""
          >
            <el-image
              :src="img.imgPath"
              fit="cover"
              class=" mb-14 "
            />
          </div>
        </div>
      </div>

      <!-- 公司展厅 -->
      <div>
        <div class=" flex items-center justify-center text-4xl font-bold mb-28 mt-52">公司展厅</div>
        <div>
          <div class=" mb-12 flex justify-between">
            <div class=" space-y-14">
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

            <div class="space-y-14 mt-36">
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

            <div class="space-y-14 mt-10">
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
      <div class=" mb-32">
        <div class=" mb-20 mt-60">
          <div class=" text-4xl font-bold">生产设备</div>
          <div class=" text-xl font-bold w-1/5">我们的公司的生产车间的机械都是自动化生产的，做到自动化。</div>
        </div>
        <div class="flex justify-between">
          <el-image
            :src="require('@/assets/img_food/brandStrength/quality/蒙版组 162.png')"
            fit="cover"
            class=" "
          />
          <div class=" flex flex-col justify-between">
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
          <div class=" flex flex-col justify-between">
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
      BrandNavList: [
        {
          imgPath: require('@/assets/img_food/brandStrength/icon/组 419.png')
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
          imgPath: require('@/assets/img_food/brandStrength/icon/410.png')
        }
      ],
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
  }
}
</script>

<style lang="stylus" scoped>

</style>
