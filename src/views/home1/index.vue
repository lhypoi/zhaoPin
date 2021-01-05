<template>
  <div>
    <div class="pageSection sec1">
      <el-image class="pageSectionImg" :src="sec1Img" fit="cover" lazy
        ><div slot="placeholder" class="emptyImg"
      /></el-image>
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="p1">Dr.J Essay Mentor</div>
          <div class="p2">
            诚聘各类学科英文论文导师<br />
            工作自由，高提成率
          </div>
          <div class="p3">JOIN US. CHANGE YOUR LIFE！</div>
          <el-button class="btn1" type="primary">了解更多</el-button>
        </div>
      </div>
    </div>
    <div class="pageSection sec2">
      <el-image class="pageSectionImg" :src="sec2Img" fit="cover" lazy
        ><div slot="placeholder" class="emptyImg"
      /></el-image>
      <div class="pageSectionContent">
        <div class="sec1Box">
          <el-row :gutter="30" style="height: 100%">
            <el-col :span="8" style="height: 100%">
              <div class="sec1BoxCol">
                <div class="p1">高额回报</div>
                <div class="p2">
                  Dr.J Essay Mentor
                  不仅能让您取得丰厚的佣金报酬，还能够帮助您在学术研究上取得更好的成就
                </div>
              </div>
            </el-col>
            <el-col :span="8" style="height: 100%">
              <div class="sec1BoxCol active">
                <div class="p1">高额回报</div>
                <div class="p2">
                  我们还拥有大量高黏性，且优质的客群资源，同时我们对内部老师的组建也十分重视
                </div>
              </div>
            </el-col>
            <el-col :span="8" style="height: 100%">
              <div class="sec1BoxCol">
                <div class="p1">一单一结</div>
                <div class="p2">
                  我们始终保持诚信合作的理念，同时有着高额的项目提成率，一单一结，快速结款，价格透明.
                  诚信合作
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="pageSection sec3">
      <el-image class="pageSectionImg" :src="sec3Img" fit="cover" lazy
        ><div slot="placeholder" class="emptyImg"
      /></el-image>
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="p1">Qualification requirements</div>
          <div class="p2">
            各类学科英文论文<br />
            导师资质要求
          </div>
          <div class="d1"></div>
          <div class="p3">
            我们需要靠谱的、可以长期合作的留学生OR华人学霸．组织成立以来，
            我们秉持著Take Care of your achievement，无论是客户还是老师，
            我们都同样重视。
          </div>
          <div class="p3">
            希望您可以处理客户紧急的学习问题，可以接大项目，必要时适当地
            加班工作， 还有可以随时联系到本人，可以尽职尽责。尽可能的很有
            耐心去解释一件事情。
          </div>
          <div class="p3">
            许多事情说起来简单，执行起来需要很强的自律性，总之，希望合 作愉快！
            教学是自由的，学术也是没有边界的。在这个平台，诗和 远方便触手可及。
          </div>
          <div class="p4">
            <div class="ct-list-item">
              <div class="ct-list-icon"></div>
              <div class="ct-list-meta">
                <div class="ct-list-desc">
                  <b>联系我们</b> – 添加官方微信咨询详情
                </div>
              </div>
            </div>
            <div class="ct-list-item">
              <div class="ct-list-icon"></div>
              <div class="ct-list-meta">
                <div class="ct-list-desc">
                  <b>投递简历</b> – 微信提交个人简历信息
                </div>
              </div>
            </div>
            <div class="ct-list-item">
              <div class="ct-list-icon"></div>
              <div class="ct-list-meta">
                <div class="ct-list-desc">
                  <b>录取通知</b> – 1- 2 个工作日审核通过
                </div>
              </div>
            </div>
          </div>
          <div class="p5"><b>平台合作老师满意度</b></div>
          <el-progress
            :text-inside="true"
            :stroke-width="20"
            :percentage="99"
          ></el-progress>
          <el-image class="cusImg1" :src="list3Img" fit="cover" lazy
            ><div slot="placeholder" class="emptyImg"
          /></el-image>
          <div class="ct-tabs-title">
            <div class="ct-tab-title">
              <h4>学历要求</h4>
              <p>国内高校985/211</p>
              <p>国外QS全球排名前200院校在读亦可</p>
            </div>
            <div class="ct-tab-title active">
              <h4>英文要求</h4>
              <p>Ielts7+,Toefl90+ Cet6-570+,Tem8+ 以上任意之一</p>
            </div>
            <div class="ct-tab-title">
              <h4>原创写作</h4>
              <p>了解各类英文写作格式</p>
              <p>及引用规范</p>
              <p>有长期写作经验者优先</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pageSection sec4">
      <el-image class="pageSectionImg" :src="sec4Img" fit="cover" lazy
        ><div slot="placeholder" class="emptyImg"
      /></el-image>
      <div class="pageSectionContent">
        <div class="sec1Box">
          <el-row :gutter="30" style="height: 100%">
            <el-col :span="12" style="height: 100%">
              <div class="sec1BoxCol col1">
                <div class="p1">Dr.J Essay Mentor</div>
                <div class="p2">关于我们</div>
                <div class="d1"></div>
                <div class="p4">Learn more about us</div>
              </div>
            </el-col>
            <el-col :span="12" style="height: 100%">
              <div class="sec1BoxCol col2">
                <div class="p1">即刻加入我们，让你的才华变现！</div>
                <div class="p2">
                  Dr.J Essay
                  Mentor，成立于2005年，为国内外英文写作人才提供高薪优质的线上兼职资源。
                </div>
                <div class="p2">
                  Dr.J Essay
                  Mentor拥有数量庞大的任务单，包含Essay，Assignment，Exam，java、C语言、python计算机编程语言，留学申请文书等，为各专业的写作老师提供多元化的选择。目前，Dr.J
                  Essay
                  Mentor已与上千位老师合作达15年之久。作为一份兼职，时间灵活弹性，通常都能获得高于主业数倍的薪资！自成立以来，Dr.J
                  Essay
                  Mentor不断优化老师团队，欢迎各领域的优秀写作老师前来应聘。
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const sec1Img = require("@/assets/img/bg1.png");
const sec2Img = require("@/assets/img/bg2.png");
const sec3Img = require("@/assets/img/bg3.png");
const sec4Img = require("@/assets/img/bg4.png");

const list3Img = require("@/assets/img/list3.png");

export default {
  name: "Home1",
  props: {},
  data() {
    return {
      sec1Img,
      sec2Img,
      sec3Img,
      sec4Img,
      list3Img,
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.sec1 {
  height: 700px;

  .sec1Box {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .p1 {
      font-size: 18px;
      line-height: 20px;
      color: #9adaff;
      margin-bottom: 20px;
    }

    .p2 {
      font-size: 60px;
      line-height: 80px;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 10px;
    }

    .p3 {
      font-size: 18px;
      line-height: 18px;
      font-weight: bold;
      color: #ffffff;
      margin-bottom: 30px;
    }

    .btn1 {
      font-size: 20px;
      height: 60px;
    }
  }
}
.sec2 {
  height: 160px;

  .sec1Box {
    height: 100%;

    .sec1BoxCol {
      height: 100%;
      border-bottom: 6px solid #44a3de;
      padding: 30px 15px 20px 80px;
      cursor: pointer;
      transition: 0.3s;

      .p1 {
        font-size: 24px;
        line-height: 24px;
        font-weight: bold;
        color: #ffffff;
        margin-bottom: 10px;
      }

      .p2 {
        font-size: 14px;
        font-weight: 400;
        color: #ffffff;
        line-height: 20px;
      }

      &.active,
      &:hover {
        background: #0282d3;
        border-bottom: none;
      }
    }
  }
}
.sec3 {
  height: 780px;

  .sec1Box {
    height: 100%;
    padding: 100px 750px 0 0;
    position: relative;

    .p1 {
      font-size: 18px;
      line-height: 20px;
      color: #3eabdc;
      margin-bottom: 15px;
    }

    .p2 {
      font-size: 36px;
      font-weight: 800;
      color: #2a2a2a;
      line-height: 48px;
    }

    .d1 {
      height: 2px;
      background: #34b8da;
      margin: 25px 50px 25px 0;
    }

    .p3 {
      font-size: 14px;
      line-height: 20px;
      color: #333;
      margin-bottom: 20px;
    }

    .p4 {
      margin: 0 0 25px;

      .ct-list-item {
        position: relative;
        display: flex;
        flex-wrap: nowrap;
        margin-bottom: 10px;

        .ct-list-icon {
          width: 9px;
          height: 9px;
          background-color: #34b8da;
          border-radius: 9px;
          margin-right: 16px;
          margin-top: 10px;
        }

        .ct-list-desc {
          font-size: 18px;
          line-height: 28px;
          color: #000;
        }
      }
    }

    .p5 {
      font-size: 16px;
      font-weight: bolder;
      color: #000;
      line-height: 24px;
      margin-bottom: 5px;
    }

    .cusImg1 {
      position: absolute;
      top: 80px;
      right: 0;
      width: 540px;
      height: 635px;
    }

    .ct-tabs-title {
      position: absolute;
      top: 120px;
      left: 500px;
      width: 225px;
      background-color: #fff;
      box-shadow: 0 0 43px rgba(12, 12, 12, 0.19);

      .ct-tab-title {
        padding: 22px 20px;
        cursor: pointer;
        text-align: center;
        position: relative;

        h4 {
          margin-top: 2px;
          margin-bottom: 9px;
          font-size: 20px;
        }

        p {
          color: #0e0e0e;
          margin: 0;
          font-size: 15px;
          line-height: 22px;
        }

        &.active:before {
          content: "";
          position: absolute;
          z-index: -1;
          top: 0;
          bottom: 0;
          left: -12px;
          right: -12px;
          background-color: #0282d3;
        }

        &.active {
          z-index: 1;
          h4,
          p {
            color: #fff;
          }
        }
      }
    }
  }
}
.sec4 {
  height: 525px;

  .sec1Box {
    height: 100%;

    .sec1BoxCol {
      height: 100%;
      padding-top: 100px;

      &.col1 {
        .p1 {
          font-size: 36px;
          line-height: 40px;
          margin-bottom: 3px;
          color: #0282d3;
        }

        .p2 {
          font-size: 30px;
          line-height: 40px;
        }

        .d1 {
          width: 400px;
          height: 2px;
          background: #34b8da;
          margin-top: 20px;
        }

        .p4 {
          height: 16px;
          font-size: 18px;
          font-weight: 400;
          color: #3eabdc;
          line-height: 1;
          margin-top: 160px;
        }
      }

      &.col2 {
        .p1 {
          font-weight: bolder;
          margin-bottom: 15px;
          line-height: 28px;
          font-size: 17px;
        }

        .p2 {
          margin-bottom: 15px;
          line-height: 28px;
          font-size: 17px;
        }
      }
    }
  }
}
</style>
