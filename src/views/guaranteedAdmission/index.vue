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
          <div class="p1">
            保证录取升学<br>
            提升留学价值
          </div>
        </div>
      </div>
    </div>

    <div class="pageSection sec2">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="p1">保证录取升学</div>
          <div class="b1">
            <el-image
              class="g1"
              :src="list10Img"
              fit="cover"
              lazy
            ><div
              slot="placeholder"
              class="emptyImg"
            /></el-image>
            <div class="p2">录取升学简介</div>
            <div class="p3">
              保录取作为海外留学长期以来的录取方式越来越被人熟知，实际上对于国外的大学来说，
              除了常规录取的方式途径外，包括教授内推、校董和理事会名额、捐赠名额等都是常见的录
              取形式。相比起国内较为单一的升学升级制度，保录取的方式会令人难以理解有很多同学都
              会被市场上出现的广告所误导，
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pageSection sec3">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="p1">我们的服务</div>
          <div class="b1">
            <el-row class="b1Row">
              <el-col :span="6" class="b1Col">
                <div class="p2">一站式</div>
                <div class="p3">
                  留学规划，培训指导，<br>
                  留学申请提供全程服务
                </div>
                <i class="iconfont iconyizhanshijiejuefangan" />
              </el-col>
              <el-col :span="6" class="b1Col">
                <div class="p2">一对一</div>
                <div class="p3">
                  私人课程或资深老师提供专属服务<br>
                  优化每项步骤
                </div>
                <i class="iconfont iconyonghu" />
              </el-col>
              <el-col :span="6" class="b1Col">
                <div class="p2">定制化</div>
                <div class="p3">
                  根据考生情况量身打造专属培训<br>
                  辅导和申请方案
                </div>
                <i class="iconfont iconyiji-yingyongjianguan" />
              </el-col>
              <el-col :span="6" class="b1Col">
                <div class="p2">全程跟踪</div>
                <div class="p3">
                  整个留学期间专人跟进并及时<br>
                  解决实际问题
                </div>
                <i class="iconfont iconzhengpinbaozhang-duigou" />
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>

    <div class="pageSection sec4">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="p1">留学优势</div>
          <div class="b1">
            <el-row class="b1Row" :gutter="8">
              <el-col :span="8">
                <div class="b1Col">
                  <i class="iconfont iconfengfuduoyuan" />
                  <div class="p2">多元化交流</div>
                  <div class="p3">
                    留学规划，培训指导，留学申请提供<br>
                    全程服务
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="b1Col">
                  <i class="iconfont iconguoji" />
                  <div class="p2">英美国际接轨教育</div>
                  <div class="p3">
                    留学规划，培训指导，留学申请提供<br>
                    全程服务
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="b1Col">
                  <i class="iconfont iconzuobiao" />
                  <div class="p2">地理位置优越</div>
                  <div class="p3">
                    留学规划，培训指导，留学申请提供<br>
                    全程服务
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="b1Col">
                  <i class="iconfont iconwodexiezuo-01" />
                  <div class="p2">学术自由</div>
                  <div class="p3">
                    留学规划，培训指导，留学申请提供<br>
                    全程服务
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="b1Col">
                  <i class="iconfont icondianzan" />
                  <div class="p2">留学性价比高</div>
                  <div class="p3">
                    留学规划，培训指导，留学申请提供<br>
                    全程服务
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="b1Col">
                  <i class="iconfont iconliwu" />
                  <div class="p2">香港留学福利</div>
                  <div class="p3">
                    留学规划，培训指导，留学申请提供<br>
                    全程服务
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>

    <div class="pageSection sec5">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="p1">专家团队</div>
          <div class="b1">
            <el-row class="b1Row" :gutter="8">
              <el-col :span="8">
                <div class="b1Col">
                  <el-image
                    class="g1"
                    :src="list11Img"
                    fit="cover"
                    lazy
                  ><div
                    slot="placeholder"
                    class="emptyImg"
                  /></el-image>
                  <div class="p2">
                    Xiaoliu
                  </div>
                  <div class="p3">
                    澳洲新南威尔士大学<br>
                    会计与金融学硕士
                  </div>
                  <div class="p4">
                    “每个孩子都有无限的可能”
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="b1Col">
                  <el-image
                    class="g1"
                    :src="list12Img"
                    fit="cover"
                    lazy
                  ><div
                    slot="placeholder"
                    class="emptyImg"
                  /></el-image>
                  <div class="p2">
                    Xiaoliu
                  </div>
                  <div class="p3">
                    圣地亚哥大学<br>
                    财务会计、审计学、财务报表分析
                  </div>
                  <div class="p4">
                    “Youth means limitless possibilities. ”
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="b1Col">
                  <el-image
                    class="g1"
                    :src="list13Img"
                    fit="cover"
                    lazy
                  ><div
                    slot="placeholder"
                    class="emptyImg"
                  /></el-image>
                  <div class="p2">
                    Xiaoliu
                  </div>
                  <div class="p3">
                    林肯大学<br>
                    市场营销Marketing
                  </div>
                  <div class="p4">
                    “Youth means limitless possibilities. ”
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>

    <div class="pageSection sec6">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="p1">名校录取通知</div>
          <div class="b1">
            <el-row class="b1Row" :gutter="16">
              <el-col :span="6">
                <div class="b1Col">
                  <el-image
                    class="g1"
                    :src="list14Img"
                    fit="cover"
                    lazy
                  ><div
                    slot="placeholder"
                    class="emptyImg"
                  /></el-image>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="b1Col">
                  <el-image
                    class="g1"
                    :src="list15Img"
                    fit="cover"
                    lazy
                  ><div
                    slot="placeholder"
                    class="emptyImg"
                  /></el-image>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="b1Col">
                  <el-image
                    class="g1"
                    :src="list16Img"
                    fit="cover"
                    lazy
                  ><div
                    slot="placeholder"
                    class="emptyImg"
                  /></el-image>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="b1Col">
                  <el-image
                    class="g1"
                    :src="list17Img"
                    fit="cover"
                    lazy
                  ><div
                    slot="placeholder"
                    class="emptyImg"
                  /></el-image>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>

    <div class="pageSection sec7">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="p1">留学咨询</div>
          <div class="b1">
            <el-row class="b1Row" :gutter="50">
              <el-col :span="12">
                <div class="b1Col">
                  <el-image
                    class="g1"
                    :src="list18Img"
                    fit="cover"
                    lazy
                  ><div
                    slot="placeholder"
                    class="emptyImg"
                  /></el-image>
                  <div class="p2">
                    【留学职业规划】做好了吗？
                  </div>
                  <div class="p3">
                    考虑要让孩子出国留学的家长正在逐渐增加
                    虽然有些家长可能不是特别清楚出...
                  </div>
                  <div class="p4">
                    2019-03-16
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="b1Col">
                  <el-image
                    class="g1"
                    :src="list19Img"
                    fit="cover"
                    lazy
                  ><div
                    slot="placeholder"
                    class="emptyImg"
                  /></el-image>
                  <div class="p2">
                    【留学论文】如何写出高分英国毕业论文
                  </div>
                  <div class="p3">
                    每个英国留学生难以忘怀的记忆，应该是
                    被essay，literature，review....
                  </div>
                  <div class="p4">
                    2019-03-16
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="b1Col">
                  <el-image
                    class="g1"
                    :src="list20Img"
                    fit="cover"
                    lazy
                  ><div
                    slot="placeholder"
                    class="emptyImg"
                  /></el-image>
                  <div class="p2">
                    【英国留学】英国大学硕士期末考试难吗？
                  </div>
                  <div class="p3">
                    快要考试了，刚刚进入英国大学攻读硕士
                    学位的同学是不是在担心期末考试会...
                  </div>
                  <div class="p4">
                    2019-03-16
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="b1Col">
                  <el-image
                    class="g1"
                    :src="list21Img"
                    fit="cover"
                    lazy
                  ><div
                    slot="placeholder"
                    class="emptyImg"
                  /></el-image>
                  <div class="p2">
                    【本科留学】申请英国本科留学须知
                  </div>
                  <div class="p3">
                    随着本科申请留学的市场不断扩大，有
                    很多中国学生会选择去英国读本科...
                  </div>
                  <div class="p4">
                    2019-03-16
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div style="text-align: center; margin-top: 100px; margin-bottom: 120px;">
            <el-button class="btn1" size="medium" plain>了解更多</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const sec1Img = require('@/assets/img/bg2.png')
const list10Img = require('@/assets/img/list10.png')
const list11Img = require('@/assets/img/list11.png')
const list12Img = require('@/assets/img/list12.png')
const list13Img = require('@/assets/img/list13.png')
const list14Img = require('@/assets/img/list14.png')
const list15Img = require('@/assets/img/list15.png')
const list16Img = require('@/assets/img/list16.png')
const list17Img = require('@/assets/img/list17.png')
const list18Img = require('@/assets/img/list18.png')
const list19Img = require('@/assets/img/list19.png')
const list20Img = require('@/assets/img/list20.png')
const list21Img = require('@/assets/img/list21.png')

export default {
  name: 'GuaranteedAdmission',
  props: {},
  data() {
    return {
      sec1Img,
      list10Img,
      list11Img,
      list12Img,
      list13Img,
      list14Img,
      list15Img,
      list16Img,
      list17Img,
      list18Img,
      list19Img,
      list20Img,
      list21Img
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.sec1 {
  height: 696px;

  .sec1Box {
    height: 100%;
    color: #fff;
    line-height: 1.5;

    .p1 {
      padding-top: 260px;
      font-size: 60px;
    }
  }
}

.sec2 {
  height: 620px;

  .sec1Box {
    height: 100%;
    color: #2e2e38;
    line-height: 1.5;
    display: flex;
    flex-direction: column;

    .p1 {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 36px;
    }

    .b1 {
      position: relative;
      height: 424px;
      padding: 100px 100px 0 520px;

      .g1 {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        z-index: -1;

        ::v-deep .el-image__inner {
          object-fit: cover;
        }
      }

      .p2 {
        font-size: 30px;
        font-weight: bold;
      }

      .p3 {
        font-size: 18px;
        margin-top: 20px;
        line-height: 1.8;
      }
    }
  }
}

.sec3 {
  height: 520px;

  .sec1Box {
    height: 100%;
    color: #2e2e38;
    line-height: 1.5;
    display: flex;
    flex-direction: column;

    .p1 {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 36px;
    }

    .b1 {
      height: 320px;

      .b1Row {
        height: 100%;

        .b1Col {
          background: #000000;
          color: #fff;
          padding: 80px 5px 0 25px;
          height: 100%;
          cursor: pointer;
          transition: 0.3s;

          .p2 {
            font-size: 24px;
            font-weight: bold;
          }

          .p3 {
            margin-top: 10px;
            font-size: 18px;
            line-height: 2;
          }

          .iconfont {
            font-size: 30px;
            margin-top: 20px;
            display: block;
          }

          &:hover {
            background: #2b87c9;
          }
        }
      }
    }
  }
}

.sec4 {
  height: 880px;

  .sec1Box {
    height: 100%;
    color: #2e2e38;
    line-height: 1.5;
    display: flex;
    flex-direction: column;

    .p1 {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 36px;
    }

    .b1 {
      height: 680px;

      .b1Row {
        height: 100%;
        margin-top: -8px;

        .b1Col {
          background: #f6f6fa;
          color: #2b87c9;
          padding: 80px 25px 0 25px;
          height: 332px;
          margin-top: 8px;
          cursor: pointer;
          transition: 0.3s;
          text-align: center;

          .p2 {
            font-size: 24px;
            font-weight: bold;
            margin-top: 10px;
          }

          .p3 {
            margin-top: 5px;
            font-size: 18px;
            color: #313236;
          }

          .iconfont {
            font-size: 60px;
            display: block;
            line-height: 1;
          }

          &:hover {
            background: #2b87c9;
            color: #fff;

            .p3 {
              color: #fff;
            }
          }
        }
      }
    }
  }
}

.sec5 {
  height: 950px;

  .sec1Box {
    height: 100%;
    color: #313236;
    line-height: 1.5;
    display: flex;
    flex-direction: column;

    .p1 {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 36px;
    }

    .b1 {
      .b1Row {
        .b1Col {
          height: 750px;
          cursor: pointer;
          transition: 0.3s;
          position: relative;
          padding-left: 60px;
          padding-right: 60px;
          padding-top: 80px;

          .g1 {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
          }

          .p2 {
            font-size: 24px;
            font-weight: bold;
          }

          .p3 {
            font-size: 18px;
            margin-top: 15px;
            line-height: 1.8;
          }

          .p4 {
            font-size: 18px;
            margin-top: 15px;
          }

        }

        .el-col {
          &:nth-child(2n) {
            .b1Col {
              padding-top: 490px;
            }
          }
        }
      }
    }
  }
}

.sec6 {
  height: 686px;

  .sec1Box {
    height: 100%;
    color: #313236;
    line-height: 1.5;
    display: flex;
    flex-direction: column;

    .p1 {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 36px;
    }

    .b1 {
      .b1Row {
        .b1Col {
          height: 486px;
          cursor: pointer;
          transition: 0.3s;
          position: relative;

          .g1 {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            z-index: -1;

            ::v-deep .el-image__inner {
              object-fit: contain;
            }
          }
        }
      }
    }
  }
}

.sec7 {
  height: 1020px;

  .sec1Box {
    height: 100%;
    color: #313236;
    line-height: 1.5;
    display: flex;
    flex-direction: column;

    .p1 {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 36px;
    }

    .b1 {
      .b1Row {
        margin-top: -25px;

        .b1Col {
          height: 255px;
          cursor: pointer;
          transition: 0.3s;
          position: relative;
          margin-top: 25px;
          padding: 40px 60px 0 250px;

          .g1 {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            z-index: -1;

            ::v-deep .el-image__inner {
              object-fit: contain;
            }
          }

          .p2 {
            font-size: 20px;
            font-weight: bold;
            color: #2E2E38;
          }

          .p3 {
            font-size: 18px;
            margin-top: 15px;
          }

          .p4 {
            font-size: 18px;
            color: #313236;
            margin-top: 20px;
          }
        }
      }
    }

    .btn1 {
      padding: 20px 60px;
      font-size: 18px;
      background: #2E2E38;
      color: #fff;
    }
  }
}
</style>
