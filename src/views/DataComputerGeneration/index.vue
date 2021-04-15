<template>
  <div>
    <div class="pageSection sec1">
      <el-image class="pageSectionImg" :src="sec1Img" fit="container" lazy
        ><div slot="placeholder" class="emptyImg"
      /></el-image>
    </div>

    <div class="pageSection sec2">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="p1">
            <el-divider>数据计算机辅导</el-divider>
          </div>
          <div class="p2"><i class="el-icon-notebook-2" />团队背景</div>
          <div class="p3">
            基础扎实，辅导程序工程师们都是来自国内985高校和欧美常青藤名校的硕士和博士，精通目前所有的语言开发与框架搭建，熟读英文资料。辅导程序工程师们的自身素质与技术水平保证了代码原创。
          </div>
          <div class="p2"><i class="el-icon-notebook-2" />服务质量</div>
          <div class="p3">
            保证honor
            code，代码原创。参考课程slide与笔记，不使用超纲代码。有test的必全过，有得分requirements的必全做。Bonus部分尽最大努力完成。我们也可以远程辅导辅导，一步一步教你怎么做。
          </div>
          <div class="p2"><i class="el-icon-notebook-2" />辅导范围及领域</div>
          <div class="p3">
            C/C++/JAVA/Python/、web、android、Data Analysys、Data Structure、
            Algorithm、 Database、 Html/Js/Web,、Network,、Operating
            System,、Compiler,、Functional Programming…
          </div>
        </div>
      </div>
    </div>

    <div class="pageSection sec3">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="p1">数据计算机案例</div>
          <div
            style="text-align: center; margin-top: 60px; margin-bottom: 30px"
          >
            <el-button class="btn1" size="medium" plain
              >批改+proofreading</el-button
            >
            <el-button class="btn2" size="medium" plain>仅修改</el-button>
          </div>
          <el-row :gutter="32" class="sec3Row">
            <el-col :span="12" class="sec3Col">
              <el-image class="g1" :src="sec2Img" fit="cover" lazy
                ><div slot="placeholder" class="emptyImg"
              /></el-image>
            </el-col>
            <el-col :span="12" class="sec3Col">
              <el-image class="g1" :src="sec3Img" fit="cover" lazy
                ><div slot="placeholder" class="emptyImg"
              /></el-image>
            </el-col>
            <el-col :span="12" class="sec3Col">
              <el-image class="g1" :src="sec5Img" fit="cover" lazy
                ><div slot="placeholder" class="emptyImg"
              /></el-image>
            </el-col>
            <el-col :span="12" class="sec3Col">
              <el-image class="g1" :src="sec4Img" fit="cover" lazy
                ><div slot="placeholder" class="emptyImg"
              /></el-image>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const sec1Img = require("@/assets/img_new_master/bg1.png");
const sec2Img = require("@/assets/img_new_master/bg2.png");
const sec3Img = require("@/assets/img_new_master/bg3.png");
const sec4Img = require("@/assets/img_new_master/bg4.png");
const sec5Img = require("@/assets/img_new_master/bg5.png");

// 数据计算机辅导
export default {
  name: "DataComputerGeneration",
  props: {},
  data() {
    return {
      sec1Img,
      sec2Img,
      sec3Img,
      sec4Img,
      sec5Img,
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.sec1 {
  height: auto;

  .pageSectionImg {
    position: relative;
    display: block;
  }
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

    .sec3Row {
      margin-top: -32px;

      .sec3Col {
        padding-top: 32px;
        .g1 {
          width: 100%;
          height: 408px;
        }
      }
    }
  }
}
</style>
