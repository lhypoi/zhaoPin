<template>
  <div>
    <div class="pageSection sec1">
      <el-image
        class="pageSectionImg"
        :src="sec1Img"
        fit="container"
        lazy
      ><div
        slot="placeholder"
        class="emptyImg"
      /></el-image>
    </div>

    <div class="pageSection sec2">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="p1">
            【英国留学】英国大学硕士期末考试难吗？
          </div>
          <div class="p2">
            快要考试了，刚刚进入英国大学攻读硕士学位的同学是不是在担心期末考试会很难？英国的一些学校是以论文成绩考评每个科目，不过大多数学校还是以闭卷笔试的形式来检验学生的掌握情况，那我们就一起来看看吧~
            <br><br>
            英国的硕士课程一般是讲座制，多个老师会一起合作来完成一门学科的授课，这个老师会结合自己的科研项目，寻找对自己科研项目有兴趣的学生，一起研究，同时也是为留学生毕业论文做铺垫。
            学生要把某个领域吃透，课外学习的东西必须要是很多的，除了老师的讲座，精读三篇论文是必须的。处于语言方面的障碍，中国学生精读论文的过程还是非常困难的。
            <br><br>
            但是要通过考试，有一个技巧就是把讲座附录的书都通读一遍，主要目的是交报告，如果把报告交了，基本上就没有什么太大的问题了。这是通过一门课考试的方法。但硕士生的一个学期大概有6门课左右，有些学校
            也许更多。要在三个月之内完成，可见密度之高。
          </div>
          <div class="p3">
            <i class="el-icon-notebook-2" />那么英国硕士课程的期末考试内容有哪些呢？
          </div>
          <div class="p2">
            硕士课程一般由六到八个科目组成的。怎么样才能找到老师真正想要让你掌握的点呢？我们从两个步骤着手。
            <br><br>
            <span style="font-weight: bold;">
              1.讲义
            </span>
            <br>
            讲义中一般能基本看出来重要的知识点。以讲义为引导看书，能把你有限的精力放在讲义列出的重点上。
            <br><br>
            <span style="font-weight: bold;">
              2.老师的期末总结
            </span>
            <br>
            老师的期末总结课是非常重要的，强烈建议大家把这节课录下来。这节课可以说就是考题泄漏课，也是答案公布课，对你通过笔试往往起着决定性作用。
          </div>
          <div class="p3">
            <i class="el-icon-notebook-2" />英国硕士课程期末考试形式是怎样的？
          </div>
          <div class="p2">
            硕士课程一般由六到八个科目组成的。怎么样才能找到老师真正想要让你掌握的点呢？我们从两个步骤着手。
            <br><br>
            <span style="font-weight: bold;">
              1. 论文
            </span>
            <br>
            这里的论文是指专业课的结课论文，英国大学硕士基本每个专业每个课程都需要写论文，所以大家在这方面还是要花费很多的时间和精力的。一般每篇论文的字数要求在 3000-4000 字，内容由任课老师规定。英国
            对其中的 Reference 的引用格式要求非常严格，在写的时候但凡涉及到引用的地方一定要用规范的格式标注出来，不然可能会被认为是抄袭。
            <br><br>
            <span style="font-weight: bold;">
              2. 考试
            </span>
            <br>
            一般理工科的学生需要通过考试的形式进行考核，也就是闭卷考试，文科生一般是以论文形式进行考核。
            <br><br>
            <span style="font-weight: bold;">
              3. 报告
            </span>
            <br>
            在英国大学，很多作业需要小组合作去完成，也就是group work，报告则属于小组考核的一部分。小组考核一般包含presentation 和一篇小组报告，小组报告的字数约为 2000-3000 字，由组员共同完成，每个组
            员需要负责其中的一部分。
            <br><br>
            <span style="font-weight: bold;">
              4. 演讲
            </span>
            <br>
            一般英国大学商科的学生都会要求做演讲，演讲分为个人的演讲和小组作业的演讲，时间一般在 15 分钟左右，视具体的要求而定。
            <br><br>
            如果你时间太紧，或还是不知道怎么安排复习计划，需要海外留学生补习，来找我们，<span style="color: #F37440; font-weight: bold;">1对1专业辅导等着你~</span>
          </div>
        </div>
      </div>
    </div>

    <div class="pageSection sec3">
      <div class="pageSectionContent">
        <MoreRow />
      </div>
    </div>
  </div>
</template>

<script>
const sec1Img = require('@/assets/img/bg6.png')
import MoreRow from '@/views/Common/MoreRow'

export default {
  name: 'StudyInUK',
  components: { MoreRow },
  props: {},
  data() {
    return {
      sec1Img,
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.sec1 {
  height: 400px;
}

.sec2 {
  height: auto;

  .pageSectionContent {
    position: relative;
  }

  .sec1Box {
    height: 100%;
    margin-bottom: 80px;

    .p1 {
      text-align: center;
      padding: 50px 0 40px;
      font-size: 30px;
      font-weight: bold;
      color: #F37440;
    }

    .p2 {
      font-size: 14px;
      color: #2E2E38;
      line-height: 2;
      padding: 0 34px;
    }

    .p3 {
      font-size: 24px;
      font-weight: bold;
      color: #F37440;
      padding: 60px 0 50px;

      .el-icon-notebook-2 {
        margin-right: 10px;
      }
    }
  }
}

.sec3 {
  height: auto;

  .pageSectionContent {
    position: relative;
  }
}
</style>
