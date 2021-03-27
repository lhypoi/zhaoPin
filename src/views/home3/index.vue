<template>
  <div>
    <div class="pageSection sec1">
      <el-image class="pageSectionImg" :src="sec1Img" fit="cover" lazy
        ><div slot="placeholder" class="emptyImg"
      /></el-image>
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="p1">论文辅导</div>
          <div class="p2">
            定期更新的安永 COVID-19 <br />
            企业愿景详细
          </div>
          <div class="p3">
            企业愿景是组织在未来所能达到的一种状态的蓝图，阐述的是企业存在的最终目的。
          </div>
        </div>
      </div>
    </div>

    <div class="pageSection sec2">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <el-row :gutter="20">
            <el-col class="sec2Col" :span="8">
              <div class="p1">論文輔導Essay Assistance</div>
              <el-image
                class="g1"
                :src="list1Img"
                fit="cover"
                lazy
                @click="$router.push('/DissertationRetouchingCoaching/index')"
                ><div slot="placeholder" class="emptyImg"
              /></el-image>
              <div class="b1">
                <div class="p2">英文作文修改服务</div>
                <div class="p3">
                  强大的学术资源支撑＋经验丰富的专家团队＋标准化的客户服
                  为优质、高效、全方位的综合学术论文定制写作提供最坚实的
                </div>
                <div class="p4">￡12.5 起</div>
                <div class="p5">1 page（250 words）/ 0.05 per word</div>
              </div>
            </el-col>
            <el-col class="sec2Col" :span="8">
              <div class="p1">保錄升學100% admitted</div>
              <el-image
                class="g1"
                :src="list2Img"
                fit="cover"
                lazy
                @click="() => $router.push(`/GuaranteedAdmission`)"
                ><div slot="placeholder" class="emptyImg"
              /></el-image>
              <div class="b1">
                <div class="p2">留学申请文书代写服务</div>
                <div class="p3">
                  根据所申请学校不同的背景和要求，有针对性进行文书写作
                  和深度精修工作，所有完成文稿逻辑合理，重点表述正确突出。
                </div>
                <div class="p4">$ 30 起</div>
                <div class="p5"><br /></div>
              </div>
            </el-col>
            <el-col class="sec2Col" :span="8">
              <div class="p1">權益申訴Appeal</div>
              <el-image
                class="g1"
                :src="list3Img"
                fit="cover"
                lazy
                @click="$router.push('/RepresentationOfInterests/index')"
                ><div slot="placeholder" class="emptyImg"
              /></el-image>
              <div class="b1">
                <div class="p2">Online Course网课代上服务</div>
                <div class="p3">
                  代修服务。保质保量，代课老师全程把控，全部完美完成， 修不到C
                  全额退款，一分钱不收！
                </div>
                <div class="p4">$ 120 起</div>
                <div class="p5">Unified calculation</div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <div class="pageSection sec3">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <el-row class="sec3Row">
            <el-col :span="12">
              <el-image class="g1" :src="list4Img" fit="cover" lazy
                ><div slot="placeholder" class="emptyImg"
              /></el-image>
            </el-col>
            <el-col :span="12" class="b1 right">
              <div class="p1">Data computer type</div>
              <div class="p2">数据计算机简介</div>
              <div class="p3">
                具备统计、金融、商业分析、工商管理、经济、Marketing等具备较强的
                计算机编程能力，熟悉Python/C/C++/R/Java/VBA/SQL中任意
              </div>
              <div
                class="p3"
                @click="$router.push('/DataComputerGeneration/index')"
              >
                了解更多
              </div>
            </el-col>
          </el-row>
          <el-row class="sec3Row">
            <el-col :span="12" class="b1 left">
              <div class="p1">Financial Business</div>
              <div class="p2">金融商業類簡介</div>
              <div class="p3">
                具备统计、金融、商业分析、工商管理、经济、Marketing等具备较强的
                计算机编程能力，熟悉Python/C/C++/R/Java/VBA/SQL中任意
              </div>
              <div
                class="p3"
                @click="$router.push('/FinanceAndBusinessStudies/index')"
              >
                了解更多
              </div>
            </el-col>
            <el-col :span="12">
              <el-image class="g1" :src="list5Img" fit="cover" lazy
                ><div slot="placeholder" class="emptyImg"
              /></el-image>
            </el-col>
          </el-row>
          <el-row class="sec3Row">
            <el-col :span="12">
              <el-image class="g1" :src="list6Img" fit="cover" lazy
                ><div slot="placeholder" class="emptyImg"
              /></el-image>
            </el-col>
            <el-col :span="12" class="b1 right">
              <div class="p1">Data computer type</div>
              <div class="p2">人文艺术类简介</div>
              <div class="p3">
                具备统计、金融、商业分析、工商管理、经济、Marketing等具备较强的
                计算机编程能力，熟悉Python/C/C++/R/Java/VBA/SQL中任意
              </div>
              <div
                class="p3"
                @click="$router.push('/HumanitiesAndArtsAgency/index')"
              >
                了解更多
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <div class="pageSection sec4">
      <el-image class="pageSectionImg" :src="list38Img" fit="cover" lazy
        ><div slot="placeholder" class="emptyImg"
      /></el-image>
      <div class="pageSectionContent">
        <div
          class="sec1Box"
          @click="$router.push('/AbroadAtTopUniversities/index')"
        >
          <el-row :gutter="2" class="row">
            <el-col :span="6" class="col">
              <div class="b1">
                <div class="p1">英国</div>
                <div class="p3">了解更多</div>
              </div>
            </el-col>
            <el-col :span="6" class="col">
              <div class="b1">
                <div class="p1">澳大利亚</div>
                <div class="p2">
                  近些年澳洲艺术留学的同学越来越多,不仅教育
                  体系完善,人文气息浓厚深得艺术生的青睐。
                </div>
                <div class="p3">了解更多</div>
              </div>
            </el-col>
            <el-col :span="6" class="col">
              <div class="b1">
                <div class="p1">香港</div>
                <div class="p3">了解更多</div>
              </div>
            </el-col>
            <el-col :span="6" class="col">
              <div class="b1">
                <div class="p1">美国</div>
                <div class="p3">了解更多</div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <div class="pageSection sec5">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <el-row>
            <el-col :span="12" style="display: flex; justify-content: flex-end">
              <div class="round">
                <el-image class="g1" :src="list7Img" fit="cover" lazy
                  ><div slot="placeholder" class="emptyImg"
                /></el-image>
                <div
                  v-for="(round, index) in roundList"
                  :key="index"
                  :class="`subRound r${index + 1}`"
                  @click="() => (curRound = index)"
                >
                  <div
                    :class="`subRoundContent${
                      curRound === index ? ' active' : ''
                    }`"
                  >
                    {{ round.title }}
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="b1">
                <div class="p1">紧急申诉appeal</div>
                <div class="p2">九大紧急申诉类型</div>
                <div class="p3">{{ roundList[curRound].title }}</div>
                <div
                  v-for="(roundListItem, index) in roundList[curRound].list"
                  :key="index"
                  class="p4"
                >
                  {{ roundListItem }}
                </div>
                <el-button
                  class="btn1"
                  size="medium"
                  plain
                  @click="$router.push('/RepresentationOfInterests/index')"
                  >了解更多</el-button
                >
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <div class="pageSection sec6">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="t1">发展历程</div>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-image class="g1" :src="list8Img" fit="cover" lazy
                ><div slot="placeholder" class="emptyImg"
              /></el-image>
              <div class="p1">100余名专业师资团队近百位资深留学顾问</div>
              <div class="p2">
                500余名专业写手为您竭诚服务，我们的服务项目涵盖超过70种科目，
                100%原创。支持多种在线交易方式。
              </div>
              <div class="p3">留学生英文论文辅导服务</div>
            </el-col>
            <el-col :span="8">
              <el-image class="g1" :src="list9Img" fit="cover" lazy
                ><div slot="placeholder" class="emptyImg"
              /></el-image>
              <div class="p1">
                Dr.D 提供高质量，高效率的文章修改润色降重服务
              </div>
              <div class="p2">
                按照顾客的要求，1v1的进行针对性修改。每位导师都会对文章的结构，语法，
                句式，以及逻辑和表达方式上进行精细修改并提供一些建设性意见
              </div>
              <div class="p3">文章修改润色降重服务</div>
            </el-col>
            <el-col :span="8">
              <div class="p4">R&D Writing Services 发展历程</div>
              <div class="p5">
                通过线下与朋友介绍，R&D创始人与几个小
                伙伴开始向多伦多地区的同学提供代写服务...
              </div>
              <div class="p6">2010年-2012年</div>
              <div class="p5">
                筹划建立R&D定制写作机构；重建服务流程，
                建立ESSAYCASE网站（1.0版本），通过...
              </div>
              <div class="p6">2012年</div>
              <div class="p5">
                用户突破500名，在加拿大、美国、中国三地
                设立办公室，为客户提供7X24小时...
              </div>
              <div class="p6">2013年-至今</div>
            </el-col>
          </el-row>
          <div style="text-align: center; margin-top: 10px">
            <el-button class="btn1" size="medium" plain @click="$router.push('/InformationList/index')">了解更多</el-button>
          </div>
        </div>
      </div>
    </div>

    <div class="pageSection sec7">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="t1">客户反馈</div>
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="sec7ColBox">
                <div class="b1">
                  <div class="p1">Selina</div>
                  <div class="p2">利兹大学</div>
                  <el-image class="g1" :src="u1Img" fit="cover" lazy
                    ><div slot="placeholder" class="emptyImg"
                  /></el-image>
                </div>
                <div class="b2">
                  那时因为自身原因被警告要勒令开除，经过朋友介绍找到了
                  他们，客服很有耐心而且把客户当成了朋友一样，谢谢Zoey
                  经理，帮我和学校争取权益,最后也让我顺利毕业了。
                </div>
                <div class="b3">
                  <i class="iconfont iconqipao" />
                  <i class="iconfont iconfenxiang-hudong" /> 10
                  <i class="iconfont iconaixin" /> 5
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="sec7ColBox">
                <div class="b1">
                  <div class="p1">Stacey</div>
                  <div class="p2">牛津大学</div>
                  <el-image class="g1" :src="u2Img" fit="cover" lazy
                    ><div slot="placeholder" class="emptyImg"
                  /></el-image>
                </div>
                <div class="b2">
                  本来以为自己可以在期限内做完，没想到记错了Due，
                  发现时只剩三天，幸亏选择了Dr.D海外教育，在这么短的
                  时间内协助我完成了作业，靠谱！
                </div>
                <div class="b3">
                  <i class="iconfont iconqipao" />
                  <i class="iconfont iconfenxiang-hudong" /> 12
                  <i class="iconfont iconaixin" /> 7
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="sec7ColBox">
                <div class="b1">
                  <div class="p1">Kevin</div>
                  <div class="p2">爱丁堡大学</div>
                  <el-image class="g1" :src="u3Img" fit="cover" lazy
                    ><div slot="placeholder" class="emptyImg"
                  /></el-image>
                </div>
                <div class="b2">
                  这门老师是出了名的刁钻，于是我找了一间辅导,没想到学
                  校抓我去meeting, 在面临被开除的边缘我找到了Dr.D, 我
                  才知道这行水实在太深了, 感谢工作室帮我和校方argue得
                  到多一次resit的机会, 太感谢
                </div>
                <div class="b3">
                  <i class="iconfont iconqipao" />
                  <i class="iconfont iconfenxiang-hudong" /> 9
                  <i class="iconfont iconaixin" /> 8
                </div>
              </div>
            </el-col>
          </el-row>
          <div style="text-align: center; margin-top: 30px">
            <el-button class="btn1" size="medium" plain>了解更多</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const sec1Img = require("@/assets/img/bg1.png");
const list1Img = require("@/assets/img/list1.png");
const list2Img = require("@/assets/img/list2.png");
const list3Img = require("@/assets/img/list3.png");
const list4Img = require("@/assets/img/list4.png");
const list5Img = require("@/assets/img/list5.png");
const list6Img = require("@/assets/img/list6.png");
const list7Img = require("@/assets/img/list7.png");
const list8Img = require("@/assets/img/list8.png");
const list9Img = require("@/assets/img/list9.png");
const list38Img = require("@/assets/img/list38.png");
const u1Img = require("@/assets/img/u1.png");
const u2Img = require("@/assets/img/u2.png");
const u3Img = require("@/assets/img/u3.png");

export default {
  name: "Home3",
  props: {},
  data() {
    return {
      sec1Img,
      list1Img,
      list2Img,
      list3Img,
      list4Img,
      list5Img,
      list6Img,
      list7Img,
      list8Img,
      list9Img,
      list38Img,
      u1Img,
      u2Img,
      u3Img,
      roundList: [
        {
          title: "入學語言不達標",
          list: ["專業老師輔導", "快速達目標門檻"],
        },
        {
          title: "惡意低分",
          list: ["无法正常毕业", "拿不到毕业证书和学位证书"],
        },
        {
          title: "被懷疑學術不端",
          list: ["涉嫌抄袭或作弊", "涉嫌学术造假等学术不诚信行为"],
        },
        {
          title: "掛科想爭取軟過",
          list: ["挂科太多或最终GPA低于要求", "导致被学校开除/劝退"],
        },
        {
          title: "學分不夠",
          list: ["单个学期修的学分低于学校要求", "学分不满足毕业要求"],
        },
        {
          title: "相似度過高",
          list: ["涉嫌参与抄袭或作弊", "涉嫌学术造假等学术不诚信行为"],
        },
        {
          title: "無法面對家人",
          list: ["留学被开除/无法毕业", "难以面对家人"],
        },
        {
          title: "被學校開除",
          list: ["重新获得学校接收", "可以继续留学完成学业"],
        },
        {
          title: "保錄名校碩士",
          list: ["直升英美加澳名校硕士", "拿名校硕士学位"],
        },
      ],
      curRound: 0,
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.sec1 {
  height: calc(100vh - 20px);

  .sec1Box {
    height: 100%;
    color: #fff;
    line-height: 1.5;

    .p1 {
      margin-top: 240px;
      color: #ffe600;
      font-size: 25px;
    }

    .p2 {
      margin-top: 10px;
      font-size: 45px;
    }

    .p3 {
      font-size: 18px;
      padding-left: 5px;
      border-left: 4px solid #ffe600;
    }
  }
}

.sec2 {
  height: 700px;
  margin-top: -180px;
  background: #282830;

  .sec1Box {
    height: 100%;
    color: #fff;
    line-height: 1.5;

    .sec2Col {
      position: relative;

      .p1 {
        padding-left: 20px;
        font-size: 30px;
        margin-bottom: 30px;
      }

      .g1 {
        height: 569px;
        width: 100%;
        cursor: pointer;
      }

      .b1 {
        position: absolute;
        bottom: 0;
        padding: 0 70px 40px 30px;
        cursor: pointer;
        pointer-events: none;

        .p2 {
          font-size: 20px;
          margin-bottom: 20px;
        }

        .p3 {
          font-size: 16px;
          margin-bottom: 35px;
        }

        .p4 {
          font-size: 18px;
          margin-bottom: 5px;
        }

        .p5 {
          font-size: 18px;
        }
      }
    }
  }
}

.sec3 {
  height: 1600px;

  .sec1Box {
    height: 100%;
    color: #2e2e38;
    line-height: 1.5;
    padding-top: 110px;
    padding-bottom: 20px;

    .sec3Row {
      margin-bottom: 85px;
    }

    .g1 {
      width: 100%;
      height: 404px;
    }

    .b1 {
      padding-top: 30px;

      &.right {
        padding-left: 100px;
      }

      &.left {
        padding-right: 100px;
      }
    }

    .p1 {
      font-size: 48px;
    }

    .p2 {
      font-size: 30px;
      margin-top: 30px;
    }

    .p3 {
      font-size: 18px;
      margin-top: 30px;
      cursor: pointer;
    }
  }
}

.sec4 {
  height: 647px;

  .pageSectionContent {
    position: relative;
    width: auto;
    height: 100%;
    overflow: hidden;
  }

  .sec1Box {
    height: 100%;

    .row {
      height: 100%;
      cursor: pointer;

      .col {
        height: 100%;
        pointer-events: none;

        .b1 {
          background: rgba(0, 0, 0, 0.3);
          height: 100%;
          padding: 0 30px 0 70px;

          .p1 {
            padding-top: 450px;
            font-size: 30px;
            font-family: OPPOSans;
            font-weight: 500;
            color: #ffffff;
            padding-bottom: 25px;
          }

          .p2 {
            font-size: 16px;
            font-family: OPPOSans;
            font-weight: 300;
            color: #ffffff;
            line-height: 1.5;
            opacity: 0.8;
            padding-bottom: 10px;
          }

          .p3 {
            font-size: 16px;
            font-family: OPPOSans;
            font-weight: 400;
            color: #ffffff;
            cursor: pointer;

            &:hover {
              color: rgb(255, 208, 75);
            }
          }
        }
      }
    }
  }
}

.sec5 {
  height: 727px;
  background: #111111;

  .sec1Box {
    height: 100%;
    color: #fff;
    line-height: 1.5;

    .round {
      margin-top: 100px;
      width: 536px;
      height: 536px;
      border-radius: 536px;
      position: relative;

      .subRound {
        position: absolute;
        top: 0;
        left: 50%;
        width: 0;
        height: 100%;

        .g1 {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 536px;
          height: 536px;
          margin-top: -268px;
          margin-left: -268px;
        }

        .subRoundContent {
          position: absolute;
          top: 0;
          left: 0;
          width: 110px;
          height: 110px;
          border-radius: 110px;
          background: #2e2e38;
          font-size: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: -55px;
          margin-left: -55px;
          cursor: pointer;
          transition: 0.3s;
          text-align: center;
          padding: 11px;

          &:hover,
          &.active {
            background: #ffe600;
            color: #2e2e38;

            &::before {
              content: "";
              display: block;
              border: 2px solid #ffe600;
              position: absolute;
              top: 50%;
              left: 50%;
              width: 130px;
              height: 130px;
              border-radius: 130px;
              margin-top: -65px;
              margin-left: -65px;
            }
          }
        }

        &.r1 {
          transform: rotate(20deg);

          .subRoundContent {
            transform: rotate(-20deg);
          }
        }

        &.r2 {
          transform: rotate(60deg);

          .subRoundContent {
            transform: rotate(-60deg);
          }
        }

        &.r3 {
          transform: rotate(100deg);

          .subRoundContent {
            transform: rotate(-100deg);
          }
        }

        &.r4 {
          transform: rotate(140deg);

          .subRoundContent {
            transform: rotate(-140deg);
          }
        }

        &.r5 {
          transform: rotate(180deg);

          .subRoundContent {
            transform: rotate(-180deg);
          }
        }

        &.r6 {
          transform: rotate(220deg);

          .subRoundContent {
            transform: rotate(-220deg);
          }
        }

        &.r7 {
          transform: rotate(260deg);

          .subRoundContent {
            transform: rotate(-260deg);
          }
        }

        &.r8 {
          transform: rotate(300deg);

          .subRoundContent {
            transform: rotate(-300deg);
          }
        }

        &.r9 {
          transform: rotate(340deg);

          .subRoundContent {
            transform: rotate(-340deg);
          }
        }
      }
    }

    .b1 {
      padding-left: 120px;
      padding-top: 150px;

      .p1 {
        color: #ffe600;
        font-size: 48px;
        line-height: 55px;
      }

      .p2 {
        font-size: 30px;
        margin-top: 30px;
      }

      .p3 {
        font-size: 18px;
        margin-top: 10px;
        margin-bottom: 10px;
      }

      .p4 {
        font-size: 18px;
        display: flex;
        align-items: center;

        &::before {
          content: "";
          display: inline-block;
          width: 0;
          height: 0;
          border: 8px solid transparent;
          border-left: 8px solid #ffe600;
        }
      }

      .btn1 {
        margin-top: 40px;
        padding: 20px 60px;
        font-size: 18px;
      }
    }
  }
}

.sec6 {
  height: 865px;

  .sec1Box {
    height: 100%;
    line-height: 1.5;

    .t1 {
      padding-top: 60px;
      font-size: 30px;
      margin-bottom: 10px;
    }

    .g1 {
      width: 100%;
      height: 389px;

      ::v-deep .el-image__inner {
        object-fit: contain !important;
      }
    }

    .p1 {
      padding-top: 20px;
      font-size: 20px;
      padding-right: 20px;
    }

    .p2 {
      margin-top: 10px;
      font-size: 16px;
      padding-right: 20px;
    }

    .p3 {
      margin-top: 15px;
      font-size: 16px;
      padding-right: 20px;
    }

    .p4 {
      font-size: 16px;
      color: #747480;
      margin-top: 200px;
      padding-left: 20px;
      margin-bottom: 30px;
    }

    .p5 {
      font-size: 20px;
      color: #2e2e38;
      padding-left: 20px;
      margin-top: 20px;
    }

    .p6 {
      font-size: 14px;
      color: #21212b;
      padding-left: 20px;
      margin-top: 10px;
    }

    .btn1 {
      padding: 20px 60px;
      font-size: 18px;
    }
  }
}

.sec7 {
  height: 580px;

  .sec1Box {
    height: 100%;
    line-height: 1.5;

    .t1 {
      padding: 50px 0 30px;
      text-align: center;
      color: #2e2e38;
      font-size: 36px;
    }

    .btn1 {
      padding: 20px 60px;
      font-size: 18px;
      background: #2e2e38;
      color: #fff;
    }

    .sec7ColBox {
      border: 1px dashed #9a9a9a;
      border-radius: 5px;
      padding: 40px 25px 20px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      height: 267px;

      .b1 {
        position: relative;
        padding-left: 60px;

        .g1 {
          position: absolute;
          top: 0;
          left: 0;
          width: 40px;
          height: 40px;
        }

        .p1 {
          font-size: 18px;
          line-height: 20px;
          color: #2e2e38;
        }

        .p2 {
          font-size: 18px;
          line-height: 20px;
          color: #627587;
        }
      }

      .b2 {
        font-size: 14px;
        margin-top: 20px;
        flex: 1;
      }

      .b3 {
        display: flex;
        align-items: center;

        .iconqipao {
          color: #3da4e5;
        }

        .iconfenxiang-hudong {
          color: #1abe65;
          margin-left: 15px;
          margin-right: 5px;
        }

        .iconaixin {
          color: #d73569;
          margin-left: 15px;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
