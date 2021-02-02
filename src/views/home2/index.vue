<template>
  <div>
    <div class="pageSection sec7">
      <el-image class="pageSectionImg" :src="sec7Img" fit="cover" lazy
        ><div slot="placeholder" class="emptyImg"
      /></el-image>
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="p1">服務範圍</div>
        </div>
      </div>
    </div>
    <div class="pageSection sec8">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="t1">
            <div class="t11">Welcome</div>
            <h3 class="t12" style="line-height: 55px;">Dr.D-深耕英美留學輔導領域<br>
我們的團隊師資不僅專業，而且樂於教學</h3>
          </div>
          <div class="t2" style="padding-left: 60px">
            <p>
              <strong>Financial Business金融商科類別：</strong
              ><br />统计/金融/商科/数学/CS/EE/Essay
            </p>
            <p>
              <strong>Statistics统计：</strong> <br />1、Financial
              Engineering金融工程/定量金融金融/计量金融 <br />2、Data
              Science数据科学 <br />3、Business Analytics商业分析
              <br />4、Economics/E-Commerce/Human Resource/Management/Marketing
              <br />5、SPSS/STATA/EVIEWS/SAS <br />6、CAD數學金融插畫
            </p>
            <p>
              <strong>Programming編成語言類別：</strong> <br />1、Computer
              Science/CS/Software Engineering/SE计算机科学
              <br />2、数据分析（Matlab、R、python等其他数据处理与分析软件）
              <br />3、数据挖掘（精通算法，如决策树、逻辑回归、神经网络等）
              <br />4、python等语言的程序自动化爬虫、各种框架、伪装和解密逆向
            </p>
            <p>
              <strong>Engineering工程類別：</strong> <br />1、Electrical
              engineering電氣工程 <br />2、construction 建築學
            </p>
          </div>
        </div>
        <div class="sec1Box">
          <div class="t1">
            <div class="t11">Requires</div>
            <h3 class="t12">2021的英美教育風口，讓你求職有保障！</h3>
          </div>
          <div class="t2" style="padding-left: 60px">
            <p>&nbsp;</p>
            <p>
              <br />1、具备统计、金融、商业分析、工商管理、经济、Marketing等
              <br />2、具备较强的计算机编程能力，熟悉Python/C/C++/R/Java/VBA/SQL中任意一门或多门语言
              <br />3、熟悉关系型数据库（Oracle/MySQL/PG
              SQL）、NOSQL、大数据分布式 存储计算（Hadoop/Spark）工具 is plus
              <br />4、 熟悉SPSS/SAS/Tableau/Stata/EViews/AMOS is plus
              <br />5、Prefer熟悉机器学习Machine Learning/深度学习Deep
              Learning和其中的SVM/Logistic Regression/Random
              Forest/CNN/KNN算法模型
            </p>
            <p>
              <strong>讓你媲美全球TOP 200院校，国内211/985高校的專業能力
英文水平雅思7分及以上，托福90以上，英语水平专八，六级至少570的高超水平</strong>
              <br />1、学历背景限制为QS 2019全球TOP
              200院校，国内211/985高校，在读亦可
              <br />2、英文水平雅思7分及以上，托福90以上，英语水平专八，六级至少570以上任意之一
              <br />3、有丰富经验者或比较优秀的可适当放宽条件
            </p>
          </div>
        </div>
        <div class="sec2Box">
          <el-row>
            <el-col :span="8" style="text-align: center">
              <el-progress
                class="q1"
                type="circle"
                :percentage="99"
                :stroke-width="10"
              ></el-progress>
              <div class="p1">留学申请</div>
            </el-col>
            <el-col :span="8" style="text-align: center">
              <el-progress
                class="q1"
                type="circle"
                :percentage="99"
                :stroke-width="10"
              ></el-progress>
              <div class="p1">Online Course网课輔導</div>
            </el-col>
            <el-col :span="8" style="text-align: center">
              <el-progress
                class="q1"
                type="circle"
                :percentage="99"
                :stroke-width="10"
              ></el-progress>
              <div class="p1">英文作文学术论文/文书修改润色服务</div>
            </el-col>
          </el-row>
        </div>
        <div class="sec3Box">Dr.D想对數以萬計的留學生们说：</div>
      </div>
    </div>
    <div class="pageSection sec9">
      <el-image class="pageSectionImg" :src="sec9Img" fit="cover" lazy
        ><div slot="placeholder" class="emptyImg"
      /></el-image>
      <div class="pageSectionContent">
        <div class="sec1Box">
          <p>
            你們不孤單，风里雨里，我们在这里等你，等待您的諮詢拜訪。我们的團隊不會給任何华丽的宣傳文案，那都是扯淡，简单地說，我们的独特优势是致力于提高学生的全球竞争力；通过优质的教育助力于下一代全球范围華人成為新一代的思想家和领导者；多年的国际名校申请和輔導让我们坚信，每个学生都有与众不同的亮点，必须坚持因材施教的个性化教育方针。
          </p>
          <p></p>
          <p>
            我们以“专注全球教育，開創學子未來”为使命，教书育人、发现每个学生的優勢。
Dr.D目标是成为一个高效、靠谱、轻量化的的学术交流平台！
          </p>
          <p></p>
          <p>
            教學是自由的，學術也是沒有邊界的。在Dr.D，诗和远方，觸手可及。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const sec7Img = require("@/assets/img/bg7.jpg");
const sec9Img = require("@/assets/img/bg9.png");

const list3Img = require("@/assets/img/list3.png");

const p1Img = require("@/assets/img/p1.png");
const p2Img = require("@/assets/img/p2.png");

export default {
  name: "Home1",
  props: {},
  data() {
    return {
      list3Img,
      p1Img,
      p2Img,

      sec7Img,
      sec9Img,
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.sec7 {
  height: 367px;

  .pageSectionImg {
    &:before {
      content: "";
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .sec1Box {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .p1 {
      font-size: 40px;
      color: #fff;
    }
  }
}

.sec8 {
  .pageSectionContent {
    position: relative;

    .sec1Box {
      .t1 {
        position: relative;
        margin-top: 80px;

        .t11 {
          line-height: 20px;
          hyphens: manual;
          visibility: visible;
          box-sizing: border-box;
          display: inline-block;
          position: absolute;
          left: 0;
          top: 0;
          transform: rotate(-90deg) translateX(calc(-40px))
            translateY(calc(-35px));
          color: #666;
          font-size: 18px;
          letter-spacing: 0.3em;
          font-weight: 400;
          padding-bottom: 4px;

          &::before {
            content: "";
            height: 4px;
            position: absolute;
            bottom: -5px;
            left: 0;
            right: 5px;
            background-image: -webkit-linear-gradient(bottom, #0282d2, #0282d3);
          }
        }

        .t12 {
          text-align: left;
          letter-spacing: 0;
          hyphens: manual;
          list-style-type: none;
          color: #0e0e0e;
          clear: both;
          margin: 0 0 15px;
          font-weight: 700;
          box-sizing: border-box;
          padding-left: 52px;
          font-size: 36px;
          line-height: 113px;
        }
      }

      .t2 {
        p {
          margin-bottom: 15px;
          line-height: 27px;
        }
      }
    }

    .sec2Box {
      margin-top: 60px;
      margin-bottom: 60px;

      .q1 {
        margin-bottom: 20px;
      }

      .p1 {
        font-weight: 600;
        padding-top: 5px;
        font-size: 18px;
        line-height: 20px;
      }
    }

    .sec3Box {
      border-radius: 7px;
      background-color: #031e51;
      padding: 20px 59px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      color: #fff;
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 60px;
    }
  }
}

.sec9 {
  height: 694px;

  .pageSectionImg {
    width: 700px;
    height: 700px;
  }

  .sec1Box {
    height: 100%;
    padding: 80px 80px 0 80px;

    p {
      text-align: left;
      font-size: 18px;
      line-height: 28px;
      margin: 0;
      padding: 0;
      margin-top: 0;
      margin-bottom: 15px;
    }
  }
}
</style>
