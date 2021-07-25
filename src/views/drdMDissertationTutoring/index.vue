<template>
  <div class="drdMDissertationTutoring">
    <!-- 头部大图 -->
    <div class="relative">
      <el-image
        :src="require('@/assets/img_drd_mobile/fd/main.png')"
        fit="cover"
        class="block"
      />
    </div>
    <!-- 主描述 -->
    <div class="px-4 py-10">
      <div class="text-2xl text-black font-bold">
        论文辅导各专业领域全覆盖
      </div>
      <div class="text-xs text-gray-400 mt-1">
        THESIS TUTORING COVERS ALL PROFESSIONAL FIELDS
      </div>
      <div class="text-xl text-black font-bold mt-5">
        论文级课程辅导
      </div>
      <div class="text-sm text-gray-500 mt-2">
        Dr.D自2010年成立以来经历过非常多的考验。时间证明了我们的实力，证明了我们对专业的态度。选择我们，您就选择了放心!500余名专业写手为您竭诚服务，我们的服务项目涵盖超过70种科目，100%原创。支持多种在线交易方式。我们保证，每一份订单，我们都会用心去完成，做到百分之百通过。
      </div>
      <el-image
        :src="require('@/assets/img_drd_mobile/fd/main2.png')"
        fit="cover"
        class="block mt-3"
      />
    </div>
    <!-- 我们的服务 -->
    <div class="px-4 pt-2 pb-4">
      <div class="text-2xl text-black font-bold">
        我们的服务
      </div>
      <div class="text-xs text-gray-400 mt-1">
        OUR SERVICE
      </div>
      <div class="flex flex-row flex-wrap mt-6">
        <div
          v-for="(img, imgIndex) in serveList"
          :key="imgIndex"
          class="w-1/2 text-center mb-5 px-2"
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
    <!-- 领域覆盖 -->
    <div class="px-4 py-10 bg-gray-100 pb-1">
      <div class="text-2xl text-black font-bold">
        课程辅导个专业领域覆盖
      </div>
      <div class="text-sm text-gray-600 mt-1">
        Curriculum counseling covers all professional fields
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
          <div class="text-gray-800 text-sm mt-1">
            {{ img.sub }}
          </div>
        </div>
      </div>
    </div>
    <!-- 专家团队 -->
    <div class="pt-8">
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
  </div>
</template>

<script>

export default {
  name: 'DrdMDissertationTutoring',
  props: {},
  data() {
    return {
      serveList: [
        {
          path: require('@/assets/img_drd_mobile/fd/serve1.png')
        },
        {
          path: require('@/assets/img_drd_mobile/fd/serve2.png')
        },
        {
          path: require('@/assets/img_drd_mobile/fd/serve3.png')
        },
        {
          path: require('@/assets/img_drd_mobile/fd/serve4.png')
        }
      ],
      fieldList: [
        {
          path: require('@/assets/img_drd_mobile/fd/field1.png'),
          title: '金融商科',
          sub: '会计与金融、工商管理、市场营销、贸易经济、商业管理等'
        },
        {
          path: require('@/assets/img_drd_mobile/fd/field2.png'),
          title: '编程语言',
          sub: '涵盖C/C++/JAVA/Pythonl、web、android、Data Analysys、Data Structure.Algorithm、Database、Html/Js/Web,.Network,、Operating System,、Compiler,、Functional Programming...'
        },
        {
          path: require('@/assets/img_drd_mobile/fd/field3.png'),
          title: '人文艺术',
          sub: '平面设计、雕塑、艺术装置、行为艺术、cad,3D.su建模，动画'
        },
        {
          path: require('@/assets/img_drd_mobile/fd/field4.png'),
          title: '数据分析',
          sub: 'R、 Matlab、stata、python、Eview、数据挖掘等'
        },
        {
          path: require('@/assets/img_drd_mobile/fd/field5.png'),
          title: '土木工程学',
          sub: '高建筑力学、结构力学、土木工程制图、CAD等'
        },
        {
          path: require('@/assets/img_drd_mobile/fd/field6.png'),
          title: '社会心理学',
          sub: '运用实验、数据调研、数量分析、描述现象'
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
