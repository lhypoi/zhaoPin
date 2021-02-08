<template>
  <div>
    <div class="pageSection sec1">
      <el-image
        class="pageSectionImg"
        :src="sec1Img"
        fit="cover"
        lazy
      ><div
        slot="placeholder"
        class="emptyImg"
      /></el-image>
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="p1">论文辅导</div>
          <div class="p2">
            定期更新的安永 COVID-19 <br>
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
              ><div
                slot="placeholder"
                class="emptyImg"
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
              ><div
                slot="placeholder"
                class="emptyImg"
              /></el-image>
              <div class="b1">
                <div class="p2">留学申请文书代写服务</div>
                <div class="p3">
                  根据所申请学校不同的背景和要求，有针对性进行文书写作
                  和深度精修工作，所有完成文稿逻辑合理，重点表述正确突出。
                </div>
                <div class="p4">$ 30 起</div>
                <div class="p5"><br></div>
              </div>
            </el-col>
            <el-col class="sec2Col" :span="8">
              <div class="p1">權益申訴Appeal</div>
              <el-image
                class="g1"
                :src="list3Img"
                fit="cover"
                lazy
              ><div
                slot="placeholder"
                class="emptyImg"
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
              <el-image
                class="g1"
                :src="list4Img"
                fit="cover"
                lazy
              ><div
                slot="placeholder"
                class="emptyImg"
              /></el-image>
            </el-col>
            <el-col :span="12" class="b1 right">
              <div class="p1">Data computer type</div>
              <div class="p2">数据计算机简介</div>
              <div class="p3">
                具备统计、金融、商业分析、工商管理、经济、Marketing等具备较强的
                计算机编程能力，熟悉Python/C/C++/R/Java/VBA/SQL中任意
              </div>
              <div class="p3">了解更多</div>
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
              <div class="p3">了解更多</div>
            </el-col>
            <el-col :span="12">
              <el-image
                class="g1"
                :src="list5Img"
                fit="cover"
                lazy
              ><div
                slot="placeholder"
                class="emptyImg"
              /></el-image>
            </el-col>
          </el-row>
          <el-row class="sec3Row">
            <el-col :span="12">
              <el-image
                class="g1"
                :src="list6Img"
                fit="cover"
                lazy
              ><div
                slot="placeholder"
                class="emptyImg"
              /></el-image>
            </el-col>
            <el-col :span="12" class="b1 right">
              <div class="p1">Data computer type</div>
              <div class="p2">人文艺术类简介</div>
              <div class="p3">
                具备统计、金融、商业分析、工商管理、经济、Marketing等具备较强的
                计算机编程能力，熟悉Python/C/C++/R/Java/VBA/SQL中任意
              </div>
              <div class="p3">了解更多</div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <div class="pageSection sec4">
      <!-- TODO:待做 -->
    </div>

    <div class="pageSection sec5">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <el-row>
            <el-col :span="12">
              <div class="round">
                <el-image
                  class="g1"
                  :src="list7Img"
                  fit="cover"
                  lazy
                ><div
                  slot="placeholder"
                  class="emptyImg"
                /></el-image>
                <div class="subRound r1">
                  <div class="subRoundContent">
                    时效性
                  </div>
                </div>
                <div class="subRound r2">
                  <div class="subRoundContent">
                    及时反馈
                  </div>
                </div>
                <div class="subRound r3">
                  <div class="subRoundContent">
                    省心
                  </div>
                </div>
                <div class="subRound r4">
                  <div class="subRoundContent">
                    专注
                  </div>
                </div>
                <div class="subRound r5">
                  <div class="subRoundContent">
                    名师辅导
                  </div>
                </div>
                <div class="subRound r6">
                  <div class="subRoundContent">
                    海外院校
                  </div>
                </div>
                <div class="subRound r7">
                  <div class="subRoundContent">
                    学术背景
                  </div>
                </div>
                <div class="subRound r8">
                  <div class="subRoundContent">
                    迅速响应
                  </div>
                </div>
                <div class="subRound r9">
                  <div class="subRoundContent">
                    专业
                  </div>
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
const sec1Img = require('@/assets/img/bg1.png')
const list1Img = require('@/assets/img/list1.png')
const list2Img = require('@/assets/img/list2.png')
const list3Img = require('@/assets/img/list3.png')
const list4Img = require('@/assets/img/list4.png')
const list5Img = require('@/assets/img/list5.png')
const list6Img = require('@/assets/img/list6.png')
const list7Img = require('@/assets/img/list7.png')

export default {
  name: 'Home3',
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
      list7Img
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.sec1 {
  height: 950px;

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
  height: 900px;
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
        height: 769px;
        width: 100%;
      }

      .b1 {
        position: absolute;
        bottom: 0;
        padding: 0 70px 40px 30px;

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
  height: 2200px;

  .sec1Box {
    height: 100%;
    color: #2E2E38;
    line-height: 1.5;
    padding-top: 110px;
    padding-bottom: 20px;

    .sec3Row {
      margin-bottom: 85px;
    }

    .g1 {
      width: 100%;
      height: 604px;
    }

    .b1 {
      padding-top: 100px;

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
      margin-top: 50px;
    }

    .p3 {
      font-size: 18px;
      margin-top: 50px;
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
          background: #2E2E38;
          font-size: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: -55px;
          margin-left: -55px;
          cursor: pointer;
          transition: 0.3s;

          &:hover {
            background: #FFE600;
            color: #2E2E38;

            &::before {
              content: '';
              display: block;
              border: 2px solid #FFE600;
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
  }
}
</style>
