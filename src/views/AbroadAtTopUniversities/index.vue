<template>
  <div>
    <div class="pageSection sec1">
      <el-image class="pageSectionImg" :src="sec1Img" fit="container" lazy
        ><div slot="placeholder" class="emptyImg"
      /></el-image>
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="p1">
            英美澳等名校<br />
            一站式留学申請
          </div>
          <div class="p2">
            一站式留学申请、前期辅导，背景提升，专业择校，<br />
            文书策划，面试及套磁，签证协助等多种服务，助力实现留学梦。
          </div>
        </div>
      </div>
    </div>

    <div class="pageSection sec2">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <el-row>
            <el-col :span="8" class="col">
              <div class="p1">800+</div>
              <div class="p2">导师遍布北美，欧洲和澳洲</div>
            </el-col>
            <el-col :span="8" class="col">
              <div class="p1">TOP 30+</div>
              <div class="p2">90%以上的导师来自世界排名TOP30的学校</div>
            </el-col>
            <el-col :span="8" class="col">
              <div class="p1">62.3%+</div>
              <div class="p2">英美澳等海外名校录取率</div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <div class="pageSection sec3">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="b1">
            <el-image class="g1" :src="list37Img" fit="cover" lazy
              ><div slot="placeholder" class="emptyImg"
            /></el-image>
            <div class="p2">一站式留学申请</div>
            <div class="p3">
              适合对象：已确定留学意向但尚未著手准备，或著需要全程指导的同学。
              我们的服务是
              一分钱一分货，我们担保每一份申请资料都是根据学生的情况量身定做，在专业导师的指
              导和学生的配合下，共同制定留学申请时间规划，按部就班地完成留学申请工作，并获得
              理想的offer，完成名校梦想。
              这个过程中，我们将会调动资源为每一位一站式申请服务
              的同学提供优质贴心的服务，当你顺利出国后当学业遇到问题，我们的辅导部门也能一直
              协助您到学成归国，实现美好未来！
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pageSection sec4">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="p1">服务流程</div>
          <div class="row">
            <div class="col">
              <div class="b1">
                <i class="iconfont iconyonghu" />
              </div>
              <div class="p2">1.前期辅导</div>
            </div>
            <div class="col">
              <div class="b1">
                <i class="iconfont iconbeijingtisheng" />
              </div>
              <div class="p2">2.背景提升</div>
            </div>
            <div class="col">
              <div class="b1">
                <i class="iconfont iconzhuanyezexiao" />
              </div>
              <div class="p2">3.专业择校</div>
            </div>
            <div class="col">
              <div class="b1">
                <i class="iconfont iconwenshucehua" />
              </div>
              <div class="p2">4.文书策划</div>
            </div>
            <div class="col">
              <div class="b1">
                <i class="iconfont iconchuOfficedingxiao" />
              </div>
              <div class="p2">5.出Offer定校</div>
            </div>
            <div class="col">
              <div class="b1">
                <i class="iconfont iconshenqingqianzheng" />
              </div>
              <div class="p2">6.申请签证</div>
            </div>
            <div class="col">
              <div class="b1">
                <i class="iconfont iconhangchengzhidao" />
              </div>
              <div class="p2">7.行程指导</div>
            </div>
            <div class="col">
              <div class="b1">
                <i class="iconfont icondidafankui" />
              </div>
              <div class="p2">8.抵达反馈</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pageSection sec5">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="p1">匹配同领域导师</div>
          <div class="p2">與文書老師和Native名校導師幫助學員做好申請工作</div>
          <div class="row">
            <div class="col">北美申请</div>
            <div class="col">欧洲申请</div>
            <div class="col">澳洲申请</div>
            <div class="col">
              香港<br />
              星加坡
            </div>
          </div>
          <div class="table">
            <div class="tableRow">
              <div class="tableCol">
                <span class="tableLabelCol"> 北美申请 </span>
              </div>
              <div class="tableCol">
                <span> ￥30000 </span>
              </div>
              <div class="tableCol">
                <span> 早期规划 </span>
                <span class="tableCheck"> √ </span>
              </div>
              <div class="tableCol">
                <span> 申请指导 </span>
                <span class="tableCheck"> √ </span>
              </div>
              <div class="tableCol">
                <span> 面试指导 </span>
                <span class="tableCheck"> √ </span>
              </div>
              <div class="tableCol">
                <span> 行程规划 </span>
                <span class="tableCheck"> √ </span>
              </div>
              <div class="tableCol">
                <span> 可选6所院校 </span>
                <span class="tableCheck"> √ </span>
              </div>
            </div>
            <div class="tableRow">
              <div class="tableCol">
                <span class="tableLabelCol"> 欧洲申请 </span>
              </div>
              <div class="tableCol">
                <span> ￥25000 </span>
              </div>
              <div class="tableCol">
                <span> 早期规划 </span>
                <span class="tableCheck"> √ </span>
              </div>
              <div class="tableCol">
                <span> 申请指导 </span>
                <span class="tableCheck"> √ </span>
              </div>
              <div class="tableCol">
                <span> 面试指导 </span>
                <span class="tableCheck"> √ </span>
              </div>
              <div class="tableCol">
                <span> 行程规划 </span>
                <span class="tableCheck"> √ </span>
              </div>
              <div class="tableCol">
                <span> 可选G5院校 </span>
                <span class="tableCheck"> √ </span>
              </div>
            </div>
            <div class="tableRow">
              <div class="tableCol">
                <span class="tableLabelCol"> 澳洲申请 </span>
              </div>
              <div class="tableCol">
                <span> ￥28800 </span>
              </div>
              <div class="tableCol">
                <span> 早期规划 </span>
                <span class="tableCheck"> √ </span>
              </div>
              <div class="tableCol">
                <span> 申请指导 </span>
                <span class="tableCheck"> √ </span>
              </div>
              <div class="tableCol">
                <span> 视频咨询 </span>
                <span class="tableCheck"> √ </span>
              </div>
              <div class="tableCol">
                <span> 行程规划 </span>
                <span class="tableCheck"> √ </span>
              </div>
              <div class="tableCol">
                <span> 可选6所院校 </span>
                <span class="tableCheck"> √ </span>
              </div>
            </div>
            <div class="tableRow">
              <div class="tableCol">
                <span class="tableLabelCol"> 香港新加坡 </span>
              </div>
              <div class="tableCol">
                <span> ￥18800 </span>
              </div>
              <div class="tableCol">
                <span> 早期规划 </span>
                <span class="tableCheck"> √ </span>
              </div>
              <div class="tableCol">
                <span> 申请指导 </span>
                <span class="tableCheck"> √ </span>
              </div>
              <div class="tableCol">
                <span> 多人指导 </span>
                <span class="tableCheck"> √ </span>
              </div>
              <div class="tableCol">
                <span> 行程规划 </span>
                <span class="tableCheck"> √ </span>
              </div>
              <div class="tableCol">
                <span> 可选6所院校 </span>
                <span class="tableCheck"> √ </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pageSection sec6">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="pt">10项优质服务详情</div>
          <el-row :gutter="80">
            <el-col :span="12" class="sec6Col">
              <div class="b1">
                <div class="p1">
                  <span class="p1TiTle"> 1） </span>
                  前期咨询和答疑：
                </div>
                <div class="p2">
                  初步了解学生的需求和自我定位，介绍留学服务的内容及理念，指导填写信息收
                  集表并匹配专业导师。
                </div>
              </div>
              <div class="b1">
                <div class="p1">
                  <span class="p1TiTle"> 3） </span>
                  标准化考试规划：
                </div>
                <div class="p2">
                  介绍出国考试内容并了解学生考试准备进度，合理规划学习及考试时间安排，指
                  导学生开展自学或报班准备考试。
                </div>
              </div>
              <div class="b1">
                <div class="p1">
                  <span class="p1TiTle"> 5） </span>
                  文书策划和制作：
                </div>
                <div class="p2">
                  导师根据收集的文字资料和综合背景设计文书方案，由Dr.D留学导师按所设计文书
                  结构与闪光点进行文书写作，专业文书导师多轮互动修改直至完成一整套文书材料。
                </div>
              </div>
              <div class="b1">
                <div class="p1">
                  <span class="p1TiTle"> 7） </span>
                  面试及套瓷辅导：
                </div>
                <div class="p2">
                  针对不同的学校，进行一对一外教模拟面试，进行套瓷指导，协助申请修改套瓷信。
                </div>
              </div>
              <div class="b1">
                <div class="p1">
                  <span class="p1TiTle"> 9） </span>
                  行前指导：
                </div>
                <div class="p2">
                  提供一对一签证培训，确保100%签证通过率，制定出国行程安排及机票代购等，也
                  可由学生自行购买，与校方联系安排住宿事宜及确定行程接机事宜，准备相关生活
                  必需品等。
                </div>
              </div>
            </el-col>
            <el-col :span="12" class="sec6Col">
              <div class="b1">
                <div class="p1">
                  <span class="p1TiTle"> 2） </span>
                  留学定位及选校方案：
                </div>
                <div class="p2">
                  综合评价学生背景能力及定位的合理性，导师和学生共同确定学校和专业范围，根据
                  学术和非学术背景进行最终院校确定。，分析申请进程，确立留学规划时间表。
                </div>
              </div>
              <div class="b1">
                <div class="p1">
                  <span class="p1TiTle"> 4） </span>
                  背景提升计划:
                </div>
                <div class="p2">
                  挖掘及放大申请人的优势，导师指定背景提升计划，督促学生积极开展背景提升方案。
                </div>
              </div>
              <div class="b1">
                <div class="p1">
                  <span class="p1TiTle"> 6） </span>
                  协助网申：
                </div>
                <div class="p2">
                  协助学生进行在线申请，指导学生准备相关材料，包括成绩单、资金证明等申请必须
                  材料，提供成绩单翻译、资金证明翻译等服务。
                </div>
              </div>
              <div class="b1">
                <div class="p1">
                  <span class="p1TiTle"> 8） </span>
                  确定学校录取结果：
                </div>
                <div class="p2">
                  指导学生筛选最优offer，指导学生办理相应的手续并回函确认。
                </div>
              </div>
              <div class="b1">
                <div class="p1">
                  <span class="p1TiTle"> 10） </span>
                  抵达反馈：
                </div>
                <div class="p2">
                  反馈学生到达信息，并指导学生入校注册，反馈学生生活信息，并指导其他疑问问题。
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
const sec1Img = require("@/assets/img/bg9.png");
const list37Img = require("@/assets/img/list37.png");

export default {
  name: "AbroadAtTopUniversities",
  props: {},
  data() {
    return {
      sec1Img,
      list37Img,
    };
  },
  created() {},
  mounted() {
    console.log("rounded-lg");
  },
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

  .sec1Box {
    height: 100%;
    color: #fff;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .p1 {
      font-size: 42px;
      color: #fff;
      font-weight: bold;
    }

    .p2 {
      padding-top: 15px;
      font-size: 24px;
      color: #fff;
      line-height: 36px;
    }
  }
}

.sec2 {
  height: auto;
  background: #26262e;

  .pageSectionContent {
    position: relative;
  }

  .sec1Box {
    height: 100%;

    .col {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 70px 0;

      .p1 {
        font-size: 60px;
        font-weight: 400;
        color: #f37440;
        margin-bottom: 20px;
        font-family: Impact;
      }

      .p2 {
        font-size: 18px;
        font-weight: 500;
        color: #ffffff;
      }
    }
  }
}

.sec3 {
  height: 518px;

  .sec1Box {
    height: 100%;

    .b1 {
      position: relative;
      height: 323px;
      margin: 104px 0 90px;
      padding: 20px 0 0 523px;

      .g1 {
        position: absolute;
        top: 0;
        left: 0;
        width: 463px;
        height: 323px;
        z-index: -1;

        ::v-deep .el-image__inner {
          object-fit: cover;
        }
      }

      .p2 {
        font-size: 30px;
        font-family: OPPOSans;
        font-weight: bold;
        color: #2e2e38;
        line-height: 60px;
      }

      .p3 {
        font-size: 18px;
        font-family: OPPOSans;
        font-weight: 400;
        color: #2e2e38;
        line-height: 36px;
      }
    }
  }
}

.sec4 {
  height: auto;
  background: #f4f4f4;

  .pageSectionContent {
    position: relative;
  }

  .sec1Box {
    height: 100%;
    padding: 80px 0 110px;

    .p1 {
      font-size: 30px;
      font-family: OPPOSans;
      font-weight: bold;
      color: #26262e;
      padding-bottom: 65px;
      text-align: center;
    }

    .row {
      margin: -70px auto 0;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 960px;

      .col {
        width: 240px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 70px;

        .b1 {
          width: 76px;
          height: 76px;
          border-radius: 100%;
          background: #f37440;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;

          .iconfont {
            font-size: 35px;
          }
        }

        .p2 {
          padding-top: 16px;
          font-size: 24px;
          font-family: OPPOSans;
          font-weight: 800;
          color: #2e2e38;
        }
      }
    }
  }
}

.sec5 {
  height: auto;
  background: #26262e;

  .pageSectionContent {
    position: relative;
  }

  .sec1Box {
    height: 100%;
    padding: 80px 60px;

    .p1 {
      font-size: 36px;
      font-family: OPPOSans;
      font-weight: bold;
      color: #ffffff;
      line-height: 36px;
      text-align: center;
    }

    .p2 {
      font-size: 24px;
      font-family: OPPOSans;
      font-weight: 500;
      color: #ffffff;
      line-height: 36px;
      padding-top: 20px;
      text-align: center;
    }

    .row {
      margin: 60px auto;
      width: 1080px;
      display: flex;
      flex-direction: row;

      .col {
        margin-right: 40px;

        &:last-child {
          margin-right: 0;
        }

        &:nth-child(2n) {
          background: #fff;
          color: #26262e;
        }

        &:nth-child(2n + 1) {
          background: #f37a48;
          color: #fff;
        }

        width: 250px;
        height: 250px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 36px;
        font-family: OPPOSans;
        font-weight: 500;
        line-height: 50px;
        text-align: center;
        cursor: pointer;
      }
    }

    .table {
      border-top: 1px solid #f7f6fb;
      margin-left: -60px;
      margin-right: -60px;

      .tableRow {
        border-bottom: 1px solid #f7f6fb;
        padding: 50px 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

        .tableCol {
          font-size: 24px;
          font-family: OPPOSans;
          font-weight: 500;
          color: #fff;

          .tableLabelCol,
          .tableCheck {
            color: #f37440;
          }

          .tableLabelCol {
            width: 130px;
            display: block;
          }
        }
      }
    }
  }
}

.sec6 {
  height: auto;

  .pageSectionContent {
    position: relative;
  }

  .sec1Box {
    height: 100%;

    .pt {
      font-size: 36px;
      font-family: OPPOSans;
      font-weight: bold;
      color: #26262e;
      text-align: center;
      padding-top: 70px;
    }

    .sec6Col {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 900px;
      padding: 60px 0;

      .b1 {
        flex: 1;

        .p1 {
          font-size: 18px;
          line-height: 2;
          color: #2e2e38;
          font-weight: bold;

          .p1TiTle {
            color: #f37440;
          }
        }

        .p2 {
          font-size: 16px;
          line-height: 2;
          color: #2e2e38;
        }
      }
    }
  }
}
</style>
