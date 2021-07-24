<template>
  <div class="drdMHome">
    <!-- 头部大图 -->
    <div class="relative">
      <el-image
        :src="require('@/assets/img_drd_mobile/homeMain.png')"
        fit="cover"
        class="block"
      />
    </div>
    <!-- 轮播图 -->
    <el-carousel indicator-position="outside" height="400px">
      <el-carousel-item
        v-for="(item, index) in modulePageList"
        :key="index"
      >
        <div class="flex flex-col ml-auto mr-auto mt-4 w-72">
          <el-image
            :src="item.imgPath"
            fit="cover"
            class="block w-72 h-52"
          />
          <div class="text-xl text-black font-bold mt-4">
            {{ item.title }}
          </div>
          <div class="text-lg text-gray-700 font-bold mt-2">
            {{ item.sub }}
          </div>
          <div class="text-sm text-gray-500 mt-1">
            {{ item.content }}
          </div>
          <div class="text-sm text-black font-bold mt-2 text-right">
            {{ item.price }}
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <!-- 科目型模板 -->
    <div>
      <div
        v-for="(item, index) in subjectList"
        :key="index"
        class="flex flex-col mt-4 relative last:mb-8"
      >
        <div class="flex flex-col items-center ml-auto mr-auto pt-2 pl-1 pr-1 pb-2 w-10/12 bg-white z-10">
          <div class="text-xl text-gray-400 font-bold">
            {{ item.bgTitle }}
          </div>
          <div class="text-lg text-black font-bold border-b-2 border-blue-400 pb-1">
            {{ item.title }}
          </div>
          <div class="text-sm text-gray-500 mt-2 text-center break-words">
            {{ item.content }}
          </div>
        </div>
        <template v-if="item.imgUrl.length === 1">
          <el-image
            :src="item.imgUrl[0].path"
            fit="cover"
            class="block w-full z-0 -mt-6"
          />
        </template>
        <template v-else-if="item.imgUrl.length === 3">
          <div class="flex flex-row items-end justify-between pl-2 pr-2">
            <div
              v-for="(img, imgIndex) in item.imgUrl"
              :key="imgIndex"
              class=" w-4/12 odd:pl-3 odd:pr-3"
            >
              <el-image
                :src="img.path"
                fit="cover"
                class="block w-full"
              />
            </div>
          </div>
        </template>
      </div>
    </div>
    <!-- 留学横幅 -->
    <div class="bg-gray-100 pt-8 pb-8">
      <div class="text-2xl text-black font-bold pl-5">
        一站式留学申请
      </div>
      <div class="text-base text-gray-400 font-bold mb-2 pl-5">
        One-stop study abroad application
      </div>
      <div class="flex flex-row items-end justify-between">
        <div
          v-for="(img, imgIndex) in outList"
          :key="imgIndex"
          class=" w-3/12"
        >
          <el-image
            :src="img.path"
            fit="cover"
            class="block w-full"
          />
        </div>
      </div>
    </div>
    <!-- 紧急申述类型 -->
    <div class="pt-8 pb-8 pl-5 pr-1">
      <div class="text-2xl text-black font-bold">
        紧急申诉appeal
      </div>
      <div class="text-base text-gray-700 mt-2 mb-2">
        九大紧急申诉类型
      </div>
      <div class="flex flex-col mt-6">
        <div
          v-for="(appeal, imgIndex) in appealList"
          :key="imgIndex"
          class="flex flex-row mb-8"
        >
          <el-image
            :src="appeal.icon"
            fit="cover"
            class="block w-11 h-11 mr-1"
          />
          <div>
            <div class="text-base leading-none text-black font-bold mt-1">
              {{ appeal.title }}
            </div>
            <div class="text-xs leading-none text-gray-500 mt-2">
              {{ appeal.sub }}
            </div>
          </div>
        </div>
      </div>
      <div class="rounded-full py-3 px-6 text-blue-600 bg-gray-200 mx-auto w-40 text-center">查看更多</div>
    </div>
    <!-- 发展历程 -->
    <div class="bg-gray-100 pt-8 pb-2">
      <div class="text-2xl text-black font-bold pl-5">
        发展历程
      </div>
      <div class="text-base text-gray-400 font-bold mb-2 pl-5">
        development path
      </div>
      <div class="flex flex-col">
        <div
          v-for="(img, imgIndex) in developList"
          :key="imgIndex"
          class="mb-5"
        >
          <el-image
            :src="img.path"
            fit="cover"
            class="block w-full"
          />
        </div>
      </div>
    </div>
    <!-- 客户反馈 -->
    <div class="bg-gray-100 pt-8 pb-2">
      <div class="text-2xl text-black font-bold pl-5">
        客户反馈
      </div>
      <div class="text-base text-gray-400 font-bold mb-2 pl-5">
        client feedback
      </div>
      <div class="flex flex-col">
        <div
          v-for="(img, imgIndex) in backList"
          :key="imgIndex"
        >
          <el-image
            :src="img.path"
            fit="cover"
            class="block w-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DrdMHome',
  props: {},
  data() {
    return {
      modulePageList: [
        {
          imgPath: require('@/assets/img_drd_mobile/homeNavP1.png'),
          title: '论文辅导Essay Assistance',
          sub: '英文作文修改服务',
          content: '强大的学术资源支撑+经验丰富的专家团队＋标准化的客户服为优质、高效、全方位的综合学术论文定制写作提供最坚实的',
          price: '$12.5起'
        },
        {
          imgPath: require('@/assets/img_drd_mobile/homeNavP2.png'),
          title: '保录升学100% admitted',
          sub: '留学申请文书辅导',
          content: '根据所申请学校不同的背景和要求,有针对性进行文书写作和深度精修工作,所有完成文稿逻辑合理，重点表述正确突出。',
          price: '$30起'
        },
        {
          imgPath: require('@/assets/img_drd_mobile/homeNavP3.png'),
          title: '权益申诉Appeal',
          sub: 'Online Course网课代上服务',
          content: '代修服务。保质保量，代课老师全程把控，全部完美完成，修不到C全额退款,一分钱不收!',
          price: '$120起'
        }
      ],
      subjectList: [
        {
          title: '数据计算机辅导',
          bgTitle: 'Data computer type',
          content: '数据计算机Assignment辅导，论文辅导，涵盖C/C++/JAVA/Python/、web、android、Data Analysys、DataStructure、Algorithm、Database、Html/Js/Web,Network、Operating System、Compiler、FunctionalProgramming...',
          imgUrl: [
            {
              path: require('@/assets/img_drd_mobile/subject1.png')
            }
          ]
        },
        {
          title: '金融商科类辅导',
          bgTitle: 'Finance and business',
          content: '金融商科类辅导，assignment辅导，论文辅导，涵盖金融、市场营销、商业分析、统计、会计等..',
          imgUrl: [
            {
              path: require('@/assets/img_drd_mobile/subject2.png')
            }
          ]
        },
        {
          title: '人文艺术类辅导',
          bgTitle: 'Arts and humanities',
          content: '人文艺术类专业assignment辅导，论文辅导，涵盖cad，3D.su建模，动画、视频、作品集...',
          imgUrl: [
            {
              path: require('@/assets/img_drd_mobile/subject3.png')
            },
            {
              path: require('@/assets/img_drd_mobile/subject4.png')
            },
            {
              path: require('@/assets/img_drd_mobile/subject5.png')
            }
          ]
        }
      ],
      outList: [
        {
          path: require('@/assets/img_drd_mobile/out1.png')
        },
        {
          path: require('@/assets/img_drd_mobile/out2.png')
        },
        {
          path: require('@/assets/img_drd_mobile/out3.png')
        },
        {
          path: require('@/assets/img_drd_mobile/out4.png')
        }
      ],
      appealList: [
        {
          icon: require('@/assets/img_drd_mobile/appeal1.png'),
          title: '入学语言不达标',
          sub: '专业老师辅导 快速达目标门槛'
        },
        {
          icon: require('@/assets/img_drd_mobile/appeal2.png'),
          title: '恶意低分',
          sub: '无法正常毕业 拿不到毕业证书和学位证书'
        },
        {
          icon: require('@/assets/img_drd_mobile/appeal3.png'),
          title: '被怀疑学术不正',
          sub: '涉嫌抄袭或作弊 涉嫌学术造假等学术不诚信行为'
        },
        {
          icon: require('@/assets/img_drd_mobile/appeal4.png'),
          title: '挂科想争取软调',
          sub: '挂科太多或最终GPA低于要求 导致被学校开除/劝退'
        },
        {
          icon: require('@/assets/img_drd_mobile/appeal5.png'),
          title: '相似度过高',
          sub: '涉嫌参与抄袭或作弊 涉嫌学术造假等学术不诚信行为'
        },
        {
          icon: require('@/assets/img_drd_mobile/appeal6.png'),
          title: '学分不够',
          sub: '单个学期修的学分低于学校要求 学分不满足毕业要求'
        },
        {
          icon: require('@/assets/img_drd_mobile/appeal7.png'),
          title: '无法面对家人',
          sub: '留学被开除/无法毕业 难以面对家人'
        },
        {
          icon: require('@/assets/img_drd_mobile/appeal8.png'),
          title: '保录名校硕士',
          sub: '直升英美加澳名校硕士 拿名校硕士学位'
        }
      ],
      developList: [
        {
          path: require('@/assets/img_drd_mobile/dep1.png')
        },
        {
          path: require('@/assets/img_drd_mobile/dep2.png')
        },
        {
          path: require('@/assets/img_drd_mobile/dep3.png')
        }
      ],
      backList: [
        {
          path: require('@/assets/img_drd_mobile/back1.png')
        },
        {
          path: require('@/assets/img_drd_mobile/back2.png')
        },
        {
          path: require('@/assets/img_drd_mobile/back3.png')
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
