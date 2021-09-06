<template>
  <div class="ScopeOfServices">
    <!-- 头部大图 -->
    <div class="banner relative flex items-center justify-center  ">
      <el-image
        :src="require('@/assets/img_food/service/组 1025.png')"
        fit="cover"
      />
      <div class=" absolute text-center pl-28">
        <div class=" text-6xl text-white">关于展翠的</div>
        <div class=" text-6xl text-white py-5 tracking-widest">业务范围</div>
        <div />
      </div>
    </div>

    <!-- OEM代工业务流程 -->
    <div class="bg-gray-100 ">
      <div class=" container mx-auto pt-16 flex items-center justify-center">
        <el-image
          :src="require('@/assets/img_food/service/组 1026.png')"
          fit="cover"
        />
      </div>
    </div>

    <!-- ODM代工业务流程 -->
    <div class="container mx-auto mt-16">
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

</style>
