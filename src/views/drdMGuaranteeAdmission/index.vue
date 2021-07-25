<template>
  <div class="drdMGuaranteeAdmission">
    <!-- 头部大图 -->
    <div class="relative">
      <el-image
        :src="require('@/assets/img_drd_mobile/sx/main.png')"
        fit="cover"
        class="block"
      />
    </div>
    <!-- 主描述 -->
    <div class="px-4 py-10 bg-gray-100 pb-4">
      <div class="text-2xl text-black font-bold">
        保证录取升学
      </div>
      <div class="text-xs text-gray-400 mt-1">
        GUARANTEE ADMISSION
      </div>
      <div class="text-xl text-black font-bold mt-5">
        录取升学简介
      </div>
      <div class="text-sm text-gray-500 mt-2">
        保录取作为海外留学长期以来的录取方式越来越被人熟知，实际上对于国外的大学来说，除了常规录取的方式途径外，包括教授内推、校董和理事会名额、捐赠名额等都是常见的录取形式。相比起国内较为单一的升学升级制度，保录取的方式会令人难以理解有很多同学都会被市场上出现的广告所误导
      </div>
      <el-image
        :src="require('@/assets/img_drd_mobile/sx/main2.png')"
        fit="cover"
        class="block mt-3"
      />
      <div class="text-2xl text-black font-bold mt-8">
        我们的服务
      </div>
      <div class="text-sm text-gray-400 mt-1">
        OUR SERVICE
      </div>
      <div class="flex flex-row flex-wrap mt-4">
        <div
          v-for="(img, imgIndex) in serveList"
          :key="imgIndex"
          class="mb-4"
        >
          <div class="flex items-center">
            <div class="text-lg text-black font-bold">
              {{ img.title }}
            </div>
          </div>
          <div class="text-gray-500 text-sm mt-1">
            {{ img.sub }}
          </div>
        </div>
      </div>
    </div>
    <!-- 留学优势 -->
    <div class="px-4 py-10 pb-1">
      <div class="text-2xl text-black font-bold">
        留学优势
      </div>
      <div class="text-sm text-gray-600 mt-1">
        Advantages of studying abroad
      </div>
      <div class="flex flex-row flex-wrap mt-4 mb-5">
        <div
          v-for="(img, imgIndex) in fieldList"
          :key="imgIndex"
          class="mb-5"
        >
          <div class="flex items-center">
            <el-image
              :src="img.path"
              fit="cover"
              class="block w-auto mr-2"
            />
            <div class="text-lg text-black font-bold">
              {{ img.title }}
            </div>
          </div>
          <div class="text-gray-600 text-sm mt-1">
            {{ img.sub }}
          </div>
        </div>
      </div>
    </div>
    <!-- 专家团队 -->
    <div class="pt-8 bg-gray-100 pb-6">
      <div class="text-2xl text-black font-bold px-4">
        专家团队
      </div>
      <div class="text-base text-gray-600 mt-1 px-4">
        Expert team
      </div>
      <div class="flex flex-row flex-wrap">
        <div
          v-for="(img, imgIndex) in jiaList"
          :key="imgIndex"
          class="w-full text-center"
        >
          <div class="flex items-center">
            <el-image
              :src="img.path"
              fit="cover"
              class="block w-full"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- 名校录取通知书 -->
    <div class="pt-0 bg-gray-100 pb-6">
      <div class="text-2xl text-black font-bold px-4">
        名校录取通知书
      </div>
      <div class="text-base text-gray-600 mt-1 px-4">
        Prestigious school admission notice
      </div>
      <div class="flex flex-row flex-wrap">
        <div
          v-for="(img, imgIndex) in jia1List"
          :key="imgIndex"
          class="w-full text-center"
        >
          <div class="flex items-center">
            <el-image
              :src="img.path"
              fit="cover"
              class="block w-full"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- 留学咨询 -->
    <div class="pt-8">
      <div class="text-2xl text-black font-bold px-4">
        留学咨询
      </div>
      <div class="text-base text-gray-600 mt-1 px-4">
        Education Consulting
      </div>
      <div class="flex flex-row flex-wrap">
        <div
          v-for="(img, imgIndex) in jia2List"
          :key="imgIndex"
          class="w-full text-center"
        >
          <div class="flex items-center">
            <el-image
              :src="img.path"
              fit="cover"
              class="block w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DrdMGuaranteeAdmission',
  props: {},
  data() {
    return {
      serveList: [
        {
          title: '一站式',
          sub: '留学规划，培训指导，留学申请提供全程服务'
        },
        {
          title: '一对一',
          sub: '私人课程或资深老师提供专属服务优化每项步骤'
        },
        {
          title: '定制化',
          sub: '根据考生情况量身打造专属培训辅导和方案申请'
        },
        {
          title: '全程跟踪',
          sub: '整个留学期间专人跟进并及时解决实质问题'
        }
      ],
      fieldList: [
        {
          path: require('@/assets/img_drd_mobile/sx/field1.png'),
          title: '多元化交流',
          sub: '留学规划，培训指导，留学申请提供全程服务'
        },
        {
          path: require('@/assets/img_drd_mobile/sx/field2.png'),
          title: '英美国际接轨教育',
          sub: '留学规划，培训指导，留学申请提供全程服务'
        },
        {
          path: require('@/assets/img_drd_mobile/sx/field3.png'),
          title: '地理位置优越',
          sub: '留学规划，培训指导，留学申请提供全程服务'
        },
        {
          path: require('@/assets/img_drd_mobile/sx/field4.png'),
          title: '学术自由',
          sub: '留学规划，培训指导，留学申请提供全程服务'
        },
        {
          path: require('@/assets/img_drd_mobile/sx/field5.png'),
          title: '留学性价比高',
          sub: '留学规划，培训指导，留学申请提供全程服务'
        },
        {
          path: require('@/assets/img_drd_mobile/sx/field6.png'),
          title: '香港留学生福利',
          sub: '留学规划，培训指导，留学申请提供全程服务'
        }
      ],
      jiaList: [
        {
          path: require('@/assets/img_drd_mobile/fd/jia1.png')
        },
        {
          path: require('@/assets/img_drd_mobile/fd/jia2.png')
        },
        {
          path: require('@/assets/img_drd_mobile/fd/jia3.png')
        }
      ],
      jia1List: [
        {
          path: require('@/assets/img_drd_mobile/sx/jia11.png')
        }
      ],
      jia2List: [
        {
          path: require('@/assets/img_drd_mobile/sx/jia21.png')
        },
        {
          path: require('@/assets/img_drd_mobile/sx/jia22.png')
        },
        {
          path: require('@/assets/img_drd_mobile/sx/jia24.png')
        },
        {
          path: require('@/assets/img_drd_mobile/sx/jia25.png')
        }
      ]
    }
  },
  computed: {

  },
  created() {},
  mounted() {
  },
  methods: {}
}
</script>

<style lang="scss">

</style>
