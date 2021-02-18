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
            名校保录服务
          </div>
          <div class="p2">
            我们专注( 美/英/澳/加 ) 顶尖名校高端申请，有保录取项目<br>
            (美国TOP50/英国TOP30/加拿大TOP10/澳洲G8 ) 而且保證合作前後態度一致
          </div>
          <div class="b1">
            <el-row :gutter="50">
              <el-col :span="6">
                <div class="sec2Col">
                  <div class="sec2ColBg" />
                  <div class="sec2ColBox">
                    <i class="iconfont iconsvip" />
                    <div class="p3">
                      教授内推名额
                    </div>
                    <div class="p4">
                      拥有每年限定的招生官
                      <br>
                      教授内推名额
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="sec2Col">
                  <div class="sec2ColBg" />
                  <div class="sec2ColBox">
                    <i class="iconfont iconyidongduan_dianzan" />
                    <div class="p3">
                      专业靠谱
                    </div>
                    <div class="p4">
                      100%消除录取概率风险
                      <br>
                      确保拿到offer
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="sec2Col">
                  <div class="sec2ColBg" />
                  <div class="sec2ColBox">
                    <i class="iconfont iconhezuo  " />
                    <div class="p3">
                      名校深度合作
                    </div>
                    <div class="p4">
                      度挖掘学生背景和申请优势
                      <br>
                      完美匹配理想院校
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="sec2Col">
                  <div class="sec2ColBg" />
                  <div class="sec2ColBox">
                    <i class="iconfont iconshuqian" />
                    <div class="p3">
                      针对性文书
                    </div>
                    <div class="p4">
                      文书质量高
                      <br>
                      院校申请成功率高
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>

    <div class="pageSection sec3">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <el-row :gutter="80">
            <el-col :span="12" class="sec3Col">
              <div class="b1">
                <div class="p1">
                  <span class="p1TiTle">
                    1）
                  </span>
                  100%独家保录渠道：
                </div>
                <div class="p2">
                  与英、美、澳、加顶尖名校深度合作，不受录取率限制，不受专业限制，只需”满足
                  最低入学要求，符合评估最低条件”，即可攻克TOP50名校
                </div>
              </div>
              <div class="b1">
                <div class="p1">
                  <span class="p1TiTle">
                    3）
                  </span>
                  文书专人专用：
                </div>
                <div class="p2">
                  拒绝千篇一律的文书模板，依据学生申请院校不同进行有针对性的撰写，文书质
                  量高，院校申请成功率高
                </div>
              </div>
              <div class="b1">
                <div class="p1">
                  <span class="p1TiTle">
                    5）
                  </span>
                  申请误区全击破：
                </div>
                <div class="p2">
                  保录取不受标化考试限制，突破语言障碍，无雅思/托福成绩要求，个性化制定
                  明确的申请时间表，能帮助你以最快速度完成申请，最快可达一个月内拿到OFFER，
                  保录取率业内领先
                </div>
              </div>
            </el-col>
            <el-col :span="12" class="sec3Col">
              <div class="b1">
                <div class="p1">
                  <span class="p1TiTle">
                    2）
                  </span>
                  顶尖名校深度合作：
                </div>
                <div class="p2">
                  与百所名校建立保录取合作关系，降低学校录取门槛，可以为学生提供名校直录通道
                </div>
              </div>
              <div class="b1">
                <div class="p1">
                  <span class="p1TiTle">
                    4）
                  </span>
                  深谙录取政策和偏好：
                </div>
                <div class="p2">
                  和结合海外合作校方资源，获取最新招生政策与录取偏好，针对目标院校与专业深度
                  剖析，海归导师结合从业多年高端申请经验，深度挖掘学生背景和申请优势，完美匹
                  配理想院校
                </div>
              </div>
              <div class="b1">
                <div class="p1">
                  <span class="p1TiTle">
                    6）
                  </span>
                  为你解决择校困难症：
                </div>
                <div class="p2">
                  参考学校排名和专业特色，海归导师全程辅导与规划，个性化定制VIP式保录取方案，
                  助你申请到适合自己的学校
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <div class="pageSection sec4">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="p1">
            Q&A
          </div>
          <div class="p2">
            <div class="p21">
              有人問為什麼網路上有人說保錄項目不靠譜？
            </div>
            <div class="p22">
              DrD：俗话说“闻道有先后，术业有专攻”，有些教育机构在其他领域做的好，名气大，但并不能说明在留学领域做的很好，做留学輔導的教育机构我們是專門的，更甚者核心團隊的成員
              都是喝了許多年洋墨水的老師們，手邊人脈资源和渠道都要更熟悉。
            </div>
          </div>
          <div class="p2">
            <div class="p21">
              “ 名校保录取 ” 已经是我们非常成熟的项目
            </div>
            <div class="p22">
              保录取并不是像网络形容的给钱拿offer。（不否認有這種方式，下面能分享第三方機構內部的價格方案）我們的名校保录取项目是要弱化学生短板，学生必须满足学校最低入学要求，
              成绩符合评估最低标准，通过背景提升、文书等方面加大录取概率，100%消除录取概率风险，确保拿到offer。
            </div>
          </div>
          <div class="p2">
            <div class="p21">
              独家保录取方案 “ 教授内推名额 ”
            </div>
            <div class="p22">
              然而我們獨家的名校“保录取方案”（也是最靠谱的）有著每年限定的招生官、教授内推名额！！！  有興趣的可以直接聯繫我們，不需要走常規模式名校保录取项目主要针对想要去美国
              名校读书的基础薄弱或某方面有短板的学生，学生只需要确定自己未来的所学专业，我们会根据学生的详细背景和需求，为其量身定制个性化保录取留学方案，直接点对点申请心仪名
              校并100%消除录取概率风险。"保录取"顾名思义"保证录取"，学生必须满足学校最低入学要求，成绩符合评估最低标准，通过背景提升、文书等方面加大录取概率。那相对于市面上的
              保录取项目我们的优势在哪呢？  高端100%名校保录取，逆袭名校有何不可？
            </div>
          </div>
          <div class="p3">
            <div class="p31">
              7步保录取申请流程：
            </div>
            <div class="p32">
              留学初步咨询&评估了解学生背景  →  确定学生目标学校和专业&制定申请计划  →  考试指导规划  →  专业背景提升  →  匹配学校正式投递申请资料  →  斩获梦校offer  →  签证服务
            </div>
          </div>
          <div style="text-align: center; margin-top: 50px;">
            <el-button class="btn1" size="medium" plain>联系我们</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const sec1Img = require('@/assets/img/bg3.png')

export default {
  name: 'StudyAbroadAdvisory',
  props: {},
  data() {
    return {
      sec1Img
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.sec1 {
  height: 615px;
}

.sec2 {
  height: 593px;

  .sec1Box {
    height: 100%;

    .p1 {
      padding-top: 80px;
      font-size: 36px;
      color: #2E2E38;
      font-weight: bold;
      line-height: 1;
      text-align: center;
    }

    .p2 {
      padding-top: 40px;
      font-size: 24px;
      line-height: 1.5;
      color: #2E2E38;
      text-align: center;
    }

    .b1 {
      margin-top: 50px;

      .sec2Col {
        display: inline-block;
        position: relative;
        width: 100%;

        .sec2ColBg {
          margin-top: 100%;
        }

        .sec2ColBox {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          border-radius: 50%;
          background: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          cursor: pointer;

          .iconfont {
            color: #F37440;
            font-size: 40px;
          }

          .p3 {
            padding-top: 10px;
            font-size: 20px;
            color: #fff;
          }

          .p4 {
            padding-top: 15px;
            line-height: 1.8;
            font-size: 15px;
            color: #fff;
            text-align: center;
          }
        }
      }
    }
  }
}

.sec3 {
  height: 530px;
  background: #F4F4F4;

  .sec1Box {
    height: 100%;

    .sec3Col {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 530px;
      padding: 60px 0;

      .b1 {
        .p1 {
          font-size: 18px;
          line-height: 2;
          color: #2E2E38;
          font-weight: bold;

          .p1TiTle {
            color: #F37440;
          }
        }

        .p2 {
          font-size: 16px;
          line-height: 2;
          color: #2E2E38;
        }
      }
    }
  }
}

.sec4 {
  height: auto;

  .pageSectionContent {
    position: relative;
  }

  .sec1Box {
    height: 100%;
    padding: 60px 0 80px;

    .p1 {
      font-size: 36px;
      font-weight: bold;
      color: #F37440;
      margin-bottom: 50px;
    }

    .p2 {
      border-top: 2px solid #EDEDED;
      padding: 20px 0 40px;

      .p21 {
        font-size: 16px;
        font-weight: bold;
        color: #2E2E38;
        line-height: 2;
      }

      .p22 {
        font-size: 16px;
        color: #2E2E38;
        line-height: 2;
      }
    }

    .p3 {
      border-top: 2px solid #EDEDED;
      padding: 20px 0 40px;

      .p31 {
        font-size: 28px;
        font-weight: bold;
        color: #2E2E38;
        line-height: 2;
      }

      .p32 {
        font-size: 15px;
        color: #2E2E38;
        line-height: 2;
      }
    }

    .btn1 {
      padding: 20px 60px;
      font-size: 18px;
      background: #F37440;
      color: #fff;
    }
  }
}
</style>
