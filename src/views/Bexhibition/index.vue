<template>
  <div class="exhibition">

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

      <!-- 历年广交会 -->
      <div>
        <div class=" flex items-center justify-center text-4xl font-bold mb-28 mt-24 ">历年广交会</div>
        <div class=" flex justify-between mx-8">
          <div class=" mb-12 flex flex-col space-y-8 px-4">
            <el-image
              :src="require('@/assets/img_food/brandStrength/exhibition/蒙版组 184.png')"
              fit="cover"
              class=" "
            />
            <el-image
              :src="require('@/assets/img_food/brandStrength/exhibition/蒙版组 185.png')"
              fit="cover"
              class=" "
            />
            <el-image
              :src="require('@/assets/img_food/brandStrength/exhibition/蒙版组 186.png')"
              fit="cover"
              class=" "
            />
            <el-image
              :src="require('@/assets/img_food/brandStrength/exhibition/蒙版组 187.png')"
              fit="cover"
              class=" "
            />
            <el-image
              :src="require('@/assets/img_food/brandStrength/exhibition/蒙版组 188.png')"
              fit="cover"
              class=" "
            />
            <el-image
              :src="require('@/assets/img_food/brandStrength/exhibition/蒙版组 189.png')"
              fit="cover"
              class=" "
            />
          </div>

          <div class=" mb-12 flex flex-col space-y-8 mt-36 px-4">
            <el-image
              :src="require('@/assets/img_food/brandStrength/exhibition/蒙版组 190.png')"
              fit="cover"
              class=" "
            />
            <el-image
              :src="require('@/assets/img_food/brandStrength/exhibition/蒙版组 191.png')"
              fit="cover"
              class=" "
            />
            <el-image
              :src="require('@/assets/img_food/brandStrength/exhibition/蒙版组 192.png')"
              fit="cover"
              class=" "
            />
            <el-image
              :src="require('@/assets/img_food/brandStrength/exhibition/蒙版组 193.png')"
              fit="cover"
              class=" "
            />
            <el-image
              :src="require('@/assets/img_food/brandStrength/exhibition/蒙版组 194.png')"
              fit="cover"
              class=" "
            />
            <el-image
              :src="require('@/assets/img_food/brandStrength/exhibition/蒙版组 195.png')"
              fit="cover"
              class=" "
            />
          </div>

          <div class=" mb-12 flex flex-col space-y-8 mt-10 px-4">
            <el-image
              :src="require('@/assets/img_food/brandStrength/exhibition/蒙版组 196.png')"
              fit="cover"
              class=" "
            />
            <el-image
              :src="require('@/assets/img_food/brandStrength/exhibition/蒙版组 197.png')"
              fit="cover"
              class=" "
            />
            <el-image
              :src="require('@/assets/img_food/brandStrength/exhibition/蒙版组 198.png')"
              fit="cover"
              class=" "
            />
            <el-image
              :src="require('@/assets/img_food/brandStrength/exhibition/蒙版组 199.png')"
              fit="cover"
              class=" "
            />
            <el-image
              :src="require('@/assets/img_food/brandStrength/exhibition/蒙版组 201.png')"
              fit="cover"
              class=" "
            />
            <el-image
              :src="require('@/assets/img_food/brandStrength/exhibition/蒙版组 202.png')"
              fit="cover"
              class=" "
            />
          </div>

          <div class=" mb-12 flex flex-col space-y-8 mt-52 px-4">
            <el-image
              :src="require('@/assets/img_food/brandStrength/exhibition/蒙版组 203.png')"
              fit="cover"
              class=" "
            />
            <el-image
              :src="require('@/assets/img_food/brandStrength/exhibition/蒙版组 204.png')"
              fit="cover"
              class=" "
            />
            <el-image
              :src="require('@/assets/img_food/brandStrength/exhibition/蒙版组 205.png')"
              fit="cover"
              class=" "
            />
            <el-image
              :src="require('@/assets/img_food/brandStrength/exhibition/蒙版组 206.png')"
              fit="cover"
              class=" "
            />
            <el-image
              :src="require('@/assets/img_food/brandStrength/exhibition/蒙版组 207.png')"
              fit="cover"
              class=" "
            />
            <el-image
              :src="require('@/assets/img_food/brandStrength/exhibition/蒙版组 208.png')"
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
  name: 'Exhibition',
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
      ]

    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
