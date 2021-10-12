<template>
  <div class="ScopeOfServices">
    <!-- 头部大图 -->
    <div class="banner relative flex items-center justify-center  ">
      <el-image
        :src="require('@/assets/img_food/service/组 1092.png')"
        fit="cover"
        class="BP"
      />
      <div class=" absolute text-center ">
        <div class=" text-6xl text-white">{{ $t('m.l15') }}</div>
        <div class=" text-6xl text-white py-5 tracking-widest">{{ $t('m.l155') }}</div>
        <div />
      </div>
      <div class=" w-3/4 absolute bottom-20 text-white text-center flex justify-center space-x-32  ">
        <div class="">
          <div class=" text-3xl">OEM</div>
          <div class=" text-base">代工</div>
        </div>
        <div class="">
          <div class=" text-3xl">ODM</div>
          <div class=" text-base">贴牌</div>
        </div>

      </div>
    </div>

    <!-- OEM代工业务流程 -->
    <div class="bg-gray-100 py-10 ">
      <div class=" relative container mx-auto pt-16 flex items-center justify-center max-w-screen-lg">
        <div>
          <el-image
            :src="require('@/assets/img_food/service/组 1728.png')"
            fit="cover"
            class=" relative"
          />
          <div class=" absolute top-10 flex">
            <div class=" text-3xl pr-3">{{ $t('m.l16') }}</div>
            <el-image
              :src="require('@/assets/img_food/service/组 1732.png')"
              fit="cover"
              class=" "
            />
          </div>
        </div>

      </div>
    </div>

    <!-- ODM代工业务流程 -->
    <div class="container mx-auto mt-16 max-w-screen-lg">
      <div class=" relative py-10 flex  justify-center items-stretch">
        <div>
          <el-image
            :src="require('@/assets/img_food/service/组 1729.png')"
            fit="cover"
            class=" w-auto"
          />
          <div class=" absolute top-5 flex">
            <div class=" text-3xl pr-3">{{ $t('m.l17') }}</div>
            <el-image
              :src="require('@/assets/img_food/service/组 1732.png')"
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
  name: 'CIntro',
  components: {
  },
  data() {
    return {
      BrandNavList: [
        {
          imgPath: require('@/assets/img_food/about/icon/组 427.png')
        },
        {
          imgPath: require('@/assets/img_food/about/icon/组 422.png')
        },
        {
          imgPath: require('@/assets/img_food/about/icon/组 421.png')
        },
        {
          imgPath: require('@/assets/img_food/about/icon/组 420.png')
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
