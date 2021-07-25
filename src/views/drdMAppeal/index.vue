<template>
  <div class="drdMAppeal">
    <!-- 头部大图 -->
    <div class="relative">
      <el-image
        :src="require('@/assets/img_drd_mobile/ss/main.png')"
        fit="cover"
        class="block"
      />
    </div>
    <!-- Appeal九大情况 -->
    <div class="px-4 py-10 pb-1">
      <div class="text-2xl text-black font-bold">
        Appeal九大情况
      </div>
      <div class="text-sm text-gray-400 mt-1">
        APPEAL NINE MAJOR SITUATIONS
      </div>
      <div class="flex flex-row flex-wrap mt-4 mb-5">
        <div
          v-for="(img, imgIndex) in fieldList"
          :key="imgIndex"
          class="mb-5 w-full"
        >
          <div class="flex items-center">
            <el-image
              :src="img.icon"
              fit="cover"
              class="block w-auto mr-2"
            />
            <div class="text-lg text-black font-bold">
              {{ img.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 讲师介绍 -->
    <div class="px-4 py-10 pb-6 bg-gray-100">
      <div class="text-2xl text-black font-bold">
        讲师介绍
      </div>
      <div class="text-sm text-gray-400 mt-1">
        INSTRUCTORS
      </div>
      <div class="flex flex-row mt-4 mb-5 items-center flex-nowrap justify-between">
        <div class="w-1/3">
          <el-image
            :src="require('@/assets/img_drd_mobile/ss/tea1.png')"
            fit="cover"
            class="block w-full"
          />
        </div>
        <div class="w-2/3 overflow-hidden pl-4">
          <div class="text-lg text-black font-bold">
            Arika
          </div>
          <div class="text-sm text-gray-400">
            Academic Writing
          </div>
          <div class="text-sm text-black font-bold">
            王牌讲师
          </div>
          <div class="text-xs text-gray-400 mt-1">
            深入研究了该门课程的课件与之前的作业，详细地归纳出核心知识点(期末考试得分点)，
            在与学生耐心的沟通过程中，引导学生回忆起期末考试的试卷细节和答题情况，对试卷进行了深入剖析，根据学生的答案撰写了逻辑严密、论证有力的申请书。
          </div>
        </div>
      </div>
      <div class="text-2xl text-black font-bold mt-4">
        4种申述类型级流程
      </div>
      <div class="text-sm text-gray-400 mt-1">
        RIGHTS APPEAL SERVICE
      </div>
      <div class="text-lg text-blue-600 font-bold mt-4">
        1、非正式申诉
      </div>
      <div class="text-sm text-gray-700 mt-1">
        通过电话、邮件面谈等方式联系需要申诉课程对应的负责老师，申请Review试卷，并争取提分。
      </div>
      <div class="text-lg text-blue-600 font-bold mt-4">
        2、正式申诉
      </div>
      <div class="text-sm text-gray-700 mt-1">
        当非正式申诉失败时，可通过学院官方申诉途径进行正式申诉，流程更详细，需要提供的证据、细节更多。
      </div>
      <div class="text-lg text-blue-600 font-bold mt-4">
        3、校级申诉
      </div>
      <div class="text-sm text-gray-700 mt-1">
        当对正式申诉结果仍不满意，学生还可以向机构Student Appeals Body(SAB)申诉。
        此阶段的申诉需要学生提交之前学院申诉的结果不能让人信服的有效理由，以及相关证明文件等资料。
      </div>
      <div class="text-lg text-blue-600 font-bold mt-4">
        <span class="text-yellow-500">4、</span>Dr.D特技申诉-通过率达<span class="text-yellow-500 text-2xl">95%</span><span class="text-yellow-500 text-base align-top">+</span>
      </div>
      <div class="text-sm text-gray-700 mt-1">
        直接和负责谈判事件的校方负责人报告事由经过，不经由第三方的加油添醋还原事情的原始面貌，还中国留学生一个公平、健康的学习环境!
      </div>
    </div>
    <!-- 申诉服务介绍 -->
    <div class="px-4 py-10 pb-1">
      <div class="text-2xl text-black font-bold">
        申诉服务介绍
      </div>
      <div class="text-sm text-gray-400 mt-1">
        Complaint service introduction
      </div>
      <div class="text-sm text-gray-700 mt-6">
        想要通过申诉解决考试挂科、论文被判定为学术不端等问题?留学生仅凭自己的主观意断来撰写材料是有极大可能失败的.
        因此，选择Dr.D专业的Appeal申诉教师团队进行咨询、材料证据收集、深入分析、文稿撰写才是最好的选择!
        遇到Meeting不用慌，专业指导来帮忙! 被学校怀疑辅导，抄袭或者申诉成绩不公正都会收到学校的meeting通知，无法通过学校的质疑,就会受到被劝退的风险。Dr.D的听证会指导就是根据学生遭遇劝退，重修，转学等紧急状况，寻找对应方案，指导应对技巧，为学生取得公平的学习环境。
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DrdMAppeal',
  props: {},
  data() {
    return {
      fieldList: [
        {
          icon: require('@/assets/img_drd_mobile/ss/field1.png'),
          title: '入学语言不达标'
        },
        {
          icon: require('@/assets/img_drd_mobile/ss/field2.png'),
          title: '不公正恶意低分？'
        },
        {
          icon: require('@/assets/img_drd_mobile/ss/field3.png'),
          title: '被怀疑学术不正'
        },
        {
          icon: require('@/assets/img_drd_mobile/ss/field4.png'),
          title: '挂科想争取软过？'
        },
        {
          icon: require('@/assets/img_drd_mobile/ss/field5.png'),
          title: '学分不够'
        },
        {
          icon: require('@/assets/img_drd_mobile/ss/field6.png'),
          title: '相似度过高？'
        },
        {
          icon: require('@/assets/img_drd_mobile/ss/field7.png'),
          title: '出席率低？'
        },
        {
          icon: require('@/assets/img_drd_mobile/ss/field8.png'),
          title: '业绩延误提交？'
        },
        {
          icon: require('@/assets/img_drd_mobile/ss/field9.png'),
          title: '被小组成员排挤？'
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
