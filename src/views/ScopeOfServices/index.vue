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
    <div class="bg-gray-100 ">
      <div class=" container mx-auto pt-16 flex items-center justify-center max-w-screen-lg">
        <el-image
          :src="require('@/assets/img_food/service/组 1026.png')"
          fit="cover"
        />
      </div>
    </div>

    <!-- ODM代工业务流程 -->
    <div class="container mx-auto mt-16 max-w-screen-lg">
      <div class=" flex  justify-center items-stretch">
        <el-image
          :src="require('@/assets/img_food/service/组 1066.png')"
          fit="cover"
          class=" w-auto"
        />
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
