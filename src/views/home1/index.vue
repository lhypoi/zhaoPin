<template>
  <div>
    <div class="pageSection sec1">
      <el-image class="pageSectionImg" :src="sec1Img" fit="cover" lazy
        ><div slot="placeholder" class="emptyImg"
      /></el-image>
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="p1">Dr.D Essay Mentor</div>
          <div class="p2">
            全英最大教学辅导机构<br />
            对症下药，高效拉分
          </div>
          <div class="p3">Chose us. Better future.</div>
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
                <i class="iconfont icon03gaoehuibao"></i>
                <div class="p1">留学申请</div>
                <div class="p2">
                  除了貼切自身的寫作功力外，名校升學綠色通道也是獨家代理產品
                </div>
              </div>
            </el-col>
            <el-col :span="8" style="height: 100%">
              <div class="sec1BoxCol active">
                <i class="iconfont icon04zhishu"></i>
                <div class="p1">Online Course网课輔導</div>
                <div class="p2">
                  强大的师资好和最佳的服務態度。保质保量，全程把控，homework，quiz，exam全部完美輔導完成！专业客服定期跟进，为您的留学生活保驾护航。
                </div>
              </div>
            </el-col>
            <el-col :span="8" style="height: 100%">
              <div class="sec1BoxCol">
                <i class="iconfont icon06hezuo"></i>
                <div class="p1">英文作文学术论文/文书修改润色服务</div>
                <div class="p2">
                  高质量，高效率的文章修改润色降重服务。按照顾客的要求，1v1的进行针对性修改。每位导师都会对文章的结构，语法，句式，以及逻辑和表达方式上进行精细修改并提供一些建设性意见，让顾客之后的写作变得更加完美，快速提升學習。
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
          <div class="p1">About us</div>
          <div class="p2">
            关于我们
          </div>
          <div class="d1"></div>
          <div class="p3">
            Dr.D 教育辅导专家，被誉为”业界的最后的良心，是一个全英最优质的课业辅导机构, 始于2009年。拥有最坚强的G5师资,依照每个学生的条件和情况提供最适合的学习方案，凭借着”负责到底, 学生的事就是我们的事的理念”。在伦敦、曼城、格拉斯格等地，许许多多的学长姐在我们的协助下完成学业,光荣回国。
          </div>
          <div class="p4">
            <div class="ct-list-item">
              <div class="ct-list-icon"></div>
              <div class="ct-list-meta">
                <div class="ct-list-desc">
                  <b>联系我们</b> – 添加官方微信咨询
                </div>
              </div>
            </div>
            <div class="ct-list-item">
              <div class="ct-list-icon"></div>
              <div class="ct-list-meta">
                <div class="ct-list-desc">
                  <b>快速評估</b> – 30分鐘內評估出最佳方案
                </div>
              </div>
            </div>
            <div class="ct-list-item">
              <div class="ct-list-icon"></div>
              <div class="ct-list-meta">
                <div class="ct-list-desc">
                  <b>提前截稿</b> – 預留3- 5 个工作日完成最後的查重和優化
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
              <i class="iconfont icon11xueliyaoqiu"></i>
              <h4>我們的團隊</h4>
              <p>国内高校985/211</p>
              <p>国外QS全球排名前200院校以下任何之一</p>
            </div>
            <div class="ct-tab-title active">
              <i class="iconfont icon09yingwenyaoqiu"></i>
              <h4>英文要求</h4>
              <p>Ielts7+,Toefl90+ Cet6-570+,Tem8+ 以上任意之一</p>
            </div>
            <div class="ct-tab-title">
              <i class="iconfont icon10yuanchuangxiezuo"></i>
              <h4>原创写作</h4>
              <p>百分之百原創，開啟學習不同維度的學習角度，快速提升學習效率</p>
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
                <div class="p1">快速聯繫我們</div>
                <div class="p2">如何快速的与我们进行联络</div>
                <div class="d1"></div>
                <div class="p3">我们致力于为您提供最高质量的服务，如果您有任何关于您的订单或者其他问题，请联络我们微信24小时在线客服：Han80888Y（推荐）或者邮箱联系1491214174@qq.com</div>
                <div class="p4">How to Contact us</div>
              </div>
            </el-col>
            <el-col :span="12" style="height: 100%">
              <div class="sec1BoxCol col2">
                <div class="p1">需要下单的顾客如何与我们联络</div>
                <div class="p2">
                  如果您是需要下单的顾客，请不要着急，我们歡迎您的拜訪，您可以選擇按下右下角綠色的小對話框和我們聯繫。 也可以直接搜一搜WECHAT和我們進一步諮詢。若線上客服在10分鐘内没有与您联系，请立即扫下方微信24小时在线服务号二维码，我们会在第一时间给您分配您的专属1对1的尊爵服務。
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="pageSection sec5">
      <el-image class="pageSectionImg" :src="sec5Img" fit="cover" lazy
        ><div slot="placeholder" class="emptyImg"
      /></el-image>
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="p1">客户服务质量评价与反馈</div>
          <div class="d1"></div>
          <div class="p2">
            您的支持和满意是对我们服务质量的最好肯定，同时我们也是Dr.D 不断前进的动力
          </div>
          <el-row :gutter="30" style="height: 295px; margin-top: 20px">
            <el-col :span="12" style="height: 100%">
              <div class="b1">
                <el-rate :value="5" style="text-align: right"> </el-rate>
                <div class="p3">David</div>
                <div class="p4">
                  圈子里他们家的口碑不错，态度负责，和之前遇到的一般小机构不同，一分钱一分货。
                </div>
                <el-image class="g1" :src="p1Img" fit="cover" lazy
                  ><div slot="placeholder" class="emptyImg"
                /></el-image>
              </div>
            </el-col>
            <el-col :span="12" style="height: 100%">
              <div class="b1">
                <el-rate :value="5" style="text-align: right"> </el-rate>
                <div class="p3">Selina</div>
                <div class="p4">
                  那时因为自身原因被警告要勒令开除，经过朋友介绍找到了他们，客服很有耐心而且把客户当成了朋友一样，谢谢Zoey 经理，帮我和学校争取权益,最后也让我顺利毕业了。
                </div>
                <el-image class="g1" :src="p2Img" fit="cover" lazy
                  ><div slot="placeholder" class="emptyImg"
                /></el-image>
              </div>
            </el-col>
          </el-row>
          <el-progress
            style="width: 50%; margin: 35px auto 0"
            :show-text="false"
            :stroke-width="15"
            :percentage="50"
          ></el-progress>
        </div>
      </div>
    </div>
    <div class="pageSection sec6">
      <el-image class="pageSectionImg" :src="sec6Img" fit="cover" lazy
        ><div slot="placeholder" class="emptyImg"
      /></el-image>
      <div class="pageSectionContent">
        <div class="sec1Box">
          <el-row :gutter="80" style="height: 100%">
            <el-col :span="12" style="height: 100%">
              <div class="sec1BoxCol col1">
                <div class="p2">实时数据</div>
                <div class="d1"></div>
              </div>
            </el-col>
            <el-col :span="12" style="height: 100%">
              <div class="sec1BoxCol col2">
                <el-row :gutter="34">
                  <el-col :span="6" style="text-align: center">
                    <div class="b1">
                      <i class="iconfont icon14xinzizishu"></i>
                      <span class="t1"> 1150+ </span>
                    </div>
                    <div class="p1">注册用户</div>
                  </el-col>
                  <el-col :span="6" style="text-align: center">
                    <div class="b1">
                      <i class="iconfont icon14xinzizishu"></i>
                      <span class="t1"> 7380+ </span>
                    </div>
                    <div class="p1">已完成订单</div>
                  </el-col>
                  <el-col :span="6" style="text-align: center">
                    <div class="b1">
                      <i class="iconfont icon14xinzizishu"></i>
                      <span class="t1"> 90+ </span>
                    </div>
                    <div class="p1">处理中订单</div>
                  </el-col>
                  <el-col :span="6" style="text-align: center">
                    <div class="b1">
                      <i class="iconfont icon14xinzizishu"></i>
                      <span class="t1"> 80+ </span>
                    </div>
                    <div class="p1">在线专家</div>
                  </el-col>
                </el-row>
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
const sec5Img = require("@/assets/img/bg5.png");
const sec6Img = require("@/assets/img/bg6.png");

const list3Img = require("@/assets/img/list3.png");

const p1Img = require("@/assets/img/p1.png");
const p2Img = require("@/assets/img/p2.png");

export default {
  name: "Home1",
  props: {},
  data() {
    return {
      sec1Img,
      sec2Img,
      sec3Img,
      sec4Img,
      sec5Img,
      sec6Img,
      list3Img,
      p1Img,
      p2Img,
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
  height: 230px;

  .sec1Box {
    height: 100%;

    .sec1BoxCol {
      height: 100%;
      border-bottom: 6px solid #44a3de;
      padding: 30px 15px 20px 80px;
      cursor: pointer;
      transition: 0.3s;
      position: relative;

      .iconfont {
        color: #0282d3;
        font-size: 45px;
        position: absolute;
        left: 15px;
        top: 20px;
      }

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

        .iconfont {
          color: #fff;
        }
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

        .iconfont {
          color: #34b8da;
          font-size: 35px;
        }

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

          .iconfont {
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

        .p3 {
          height: 16px;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.5;
          margin-top: 20px;
        }

        .p4 {
          height: 16px;
          font-size: 18px;
          font-weight: 400;
          color: #3eabdc;
          line-height: 1;
          margin-top: 120px;
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
.sec5 {
  height: 625px;

  .sec1Box {
    height: 100%;

    .p1 {
      font-size: 36px;
      font-weight: bold;
      color: #ffffff;
      line-height: 48px;
      margin-top: 80px;
    }

    .d1 {
      background: rgba(62, 171, 220, 1);
      width: 400px;
      height: 2px;
      margin: 20px 0;
    }

    .p2 {
      font-size: 16px;
      font-weight: 400;
      color: #ffffff;
      line-height: 26px;
    }

    .b1 {
      position: relative;
      background: #dbe7f1;
      padding: 25px 40px 40px 283px;
      height: 100%;

      .p3 {
        font-size: 24px;
        font-weight: bold;
        color: #2a2a2a;
        line-height: 48px;
        margin-top: 20px;
      }

      .p4 {
        font-size: 16px;
        font-weight: 400;
        color: #333333;
        line-height: 26px;
      }

      .p5 {
        margin-top: 10px;
        font-size: 16px;
        font-weight: 400;
        font-style: italic;
        color: #3eabdc;
        line-height: 24px;
      }

      .g1 {
        width: 243px;
        height: 295px;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }
}
.sec6 {
  height: 428px;

  .sec1Box {
    height: 100%;

    .sec1BoxCol {
      height: 100%;
      padding-top: 100px;

      &.col1 {
        .p1 {
          font-size: 18px;
          font-weight: 400;
          color: #3eabdc;
          line-height: 25px;
        }

        .p2 {
          font-size: 36px;
          font-weight: 800;
          color: #0e0e0e;
          line-height: 48px;
        }

        .d1 {
          background: rgba(62, 171, 220, 1);
          width: 400px;
          height: 2px;
          margin: 20px 0;
        }

        .p3 {
          margin-top: 60px;
          font-size: 16px;
          color: #0e0e0e;
          line-height: 26px;
        }
      }

      &.col2 {
        margin-top: 10px;

        .iconfont {
          color: #0282d3;
          font-size: 32px;
        }

        .b1 {
          width: 120px;
          height: 120px;
          background-color: #ebeef0;
          padding: 25px 20px 21px;
          text-align: center;

          .t1 {
            font-size: 24px;
            font-weight: 800;
            color: #0e0e0e;
            line-height: 30px;
          }
        }

        .p1 {
          font-size: 18px;
          font-weight: bold;
          color: #0e0e0e;
          line-height: 26px;
          margin-top: 18px;
        }

        .p2 {
          font-size: 14px;
          color: #0e0e0e;
          line-height: 18px;
          margin-top: 7px;
        }
      }
    }
  }
}
</style>
