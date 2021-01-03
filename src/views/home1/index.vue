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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const sec1Img = require("@/assets/img/bg1.png");
const sec2Img = require("@/assets/img/bg2.png");
const sec3Img = require("@/assets/img/bg3.png");

export default {
  name: "Home1",
  props: {},
  data() {
    return {
      sec1Img,
      sec2Img,
      sec3Img,
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
      margin-bottom: 15px;
    }
  }
}
</style>
