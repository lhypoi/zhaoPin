<template>
  <div>
    <div class="pageSection sec1">
      <el-image class="pageSectionImg" :src="sec1Img" fit="cover" lazy
        ><div slot="placeholder" class="emptyImg"
      /></el-image>
    </div>

    <div class="pageSection sec2">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="p1">
            <el-divider>论文批改润色介绍</el-divider>
          </div>
          <div class="p2"><i class="el-icon-notebook-2" />英文论文批改</div>
          <div class="p3">
            根据学科方向、论文具体要求，对已完成的英文论文进行检查，并进行批改。导师会在原文中有问题处进行批注，提供整体修改建议。
          </div>
          <div class="p2"><i class="el-icon-notebook-2" />英文论文润色</div>
          <div class="p3">
            从论文的语言角度，包括但不限于语言校对、词汇检查、句子结构检查等多个方面，进行详细的检查、批注以及提供修改方法，全面提升已完成论文的细节水平，拿到更高的分数。
          </div>
          <div class="p2"><i class="el-icon-notebook-2" />英文论文修改</div>
          <div class="p3">
            老师根据论文具体要求、学生导师的Feedback等资料，在已完成的学生论文基础上，直接进行结构、内容方面检查、调整与修改，最终得到一篇可以提交的高质量终稿。
          </div>
        </div>
      </div>
    </div>

    <div class="pageSection sec3">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="p1">英文论文批改润色案例</div>
          <div
            style="text-align: center; margin-top: 60px; margin-bottom: 30px"
          >
            <el-button class="btn1" size="medium" plain
              >批改+proofreading</el-button
            >
            <el-button class="btn2" size="medium" plain>仅修改</el-button>
          </div>
          <el-image class="g1" :src="sec2Img" fit="cover" lazy
            ><div slot="placeholder" class="emptyImg"
          /></el-image>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const sec1Img = require("@/assets/img/bg7.png");
const sec2Img = require("@/assets/img/bg8.png");

export default {
  name: "DissertationCorrection",
  props: {},
  data() {
    return {
      sec1Img,
      sec2Img,
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.sec1 {
  height: 614px;
}

.sec2 {
  height: auto;

  .pageSectionContent {
    position: relative;
  }

  .sec1Box {
    height: 100%;

    .p1 {
      text-align: center;
      width: 50%;
      margin: 70px auto 0;

      .el-divider__text {
        font-size: 30px;
        font-weight: bold;
        color: #26262e;
      }
    }

    .p2 {
      margin-top: 70px;
      font-size: 18px;
      font-weight: 500;
      color: #26262e;

      .el-icon-notebook-2 {
        margin-right: 12px;
      }
    }

    .p3 {
      margin-top: 15px;
      font-size: 18px;
      font-weight: 300;
      color: #26262e;
      line-height: 30px;
      padding-left: 30px;
    }
  }
}

.sec3 {
  height: auto;

  .pageSectionContent {
    position: relative;
  }

  .sec1Box {
    height: 100%;
    margin-bottom: 80px;

    .p1 {
      margin-top: 80px;
      font-size: 30px;
      font-weight: bold;
      color: #26262e;
      text-align: center;
    }

    .btn1 {
      padding: 20px 60px;
      font-size: 18px;
      background: #2e2e38;
      color: #fff;
    }

    .btn2 {
      padding: 20px 60px;
      font-size: 18px;
      background: #fff;
      color: #26262e;
      margin-left: 40px;
    }

    .g1 {
      width: 100%;
      height: 580px;
    }
  }
}
</style>
