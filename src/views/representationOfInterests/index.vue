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
            权益申述 Appeal
          </div>
          <div class="p2">
            通过申诉解决考试挂科、论文被判定为学术不端等问题<br>
            还中国学生一個公平、健康的学习环境
          </div>
        </div>
      </div>
    </div>

    <div class="pageSection sec2">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="p1">
            Appeal I 九大情況
          </div>
          <el-row :gutter="100">
            <el-col :span="8" class="sec2Col">
              <div class="p2">
                <span class="p22">
                  · 1
                </span>
                入學語言不達標?
              </div>
              <div class="p2">
                <span class="p22">
                  · 4
                </span>
                掛科想爭取軟過?
              </div>
              <div class="p2">
                <span class="p22">
                  · 7
                </span>
                出席率低?
              </div>
            </el-col>
            <el-col :span="8" class="sec2Col">
              <div class="p2">
                <span class="p22">
                  · 2
                </span>
                不公正的惡意低分?
              </div>
              <div class="p2">
                <span class="p22">
                  · 5
                </span>
                學分不夠?
              </div>
              <div class="p2">
                <span class="p22">
                  · 8
                </span>
                作業延誤提交?
              </div>
            </el-col>
            <el-col :span="8" class="sec2Col">
              <div class="p2">
                <span class="p22">
                  · 3
                </span>
                無辜被懷疑學術不端?
              </div>
              <div class="p2">
                <span class="p22">
                  · 6
                </span>
                相似度過高?
              </div>
              <div class="p2">
                <span class="p22">
                  · 9
                </span>
                被小組成員排擠?
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <div class="pageSection sec3">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="b1">
            <el-image
              class="g1"
              :src="list22Img"
              fit="cover"
              lazy
            ><div
              slot="placeholder"
              class="emptyImg"
            /></el-image>
            <div class="p1">
              Arika
            </div>
            <div class="p2">
              Academic Writing
            </div>
            <div class="p3">
              王牌讲师
            </div>
            <div class="p4">
              深入研究了该门课程的课件与之前的作业，详细地归纳出核心
              知识点（期末考试得分点），
            </div>
            <div class="p4">
              在与学生耐心的沟通过程中，引导学生回忆起期末考试的试卷
              细节和答题情况，对试卷进行了深入剖析，根据学生的答案撰
              写了逻辑严密、论证有力的申请书。
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pageSection sec4">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="p1">
            权益申述服务
          </div>
          <el-row class="sec4Row">
            <el-col :span="12" class="sec4Col1">
              <div class="p21">
                成功案例
              </div>
              <div class="p22">
                卡思商學院
              </div>
              <div class="p23">
                陈同学
              </div>
              <div class="p24">
                <span class="p24Label">
                  <pre>留学国家 ：</pre>
                </span>
                英国
              </div>
              <div class="p24">
                <span class="p24Label">
                  <pre>专       业 ：</pre>
                </span>
                计算机科学
              </div>
              <div class="p24">
                <span class="p24Label">
                  <pre>学       历 ：</pre>
                </span>
                本科
              </div>
              <div class="p24">
                <span class="p24Label">
                  <pre>年       级 ：</pre>
                </span>
                大一
              </div>
              <div class="p24">
                <span class="p24Label">
                  <pre>辅导科目 ：</pre>
                </span>
                权益申述
              </div>
            </el-col>
            <el-col :span="12" class="sec4Col2">
              <div class="b1">
                <div class="p31">
                  拯救方案
                </div>
                <div class="p32">
                  由于是学生个人原因导致的校方勸退，这次申诉难度
                  很大。
                  <br>
                  <br>
                  團隊討論後決定讓安排了在英國有著10年學習經歷的
                  Tian老师，以学生已经完成的课业成绩为证据， 并且
                  制定了详细可行的后续学习计划， 向院系证明该学生
                  的学习态度端正，有能力重修补上必修课程，完成后
                  续学习。
                  <br>
                  <br>
                  最后用逐字逐句都经过锤炼的申诉书，对导师动之以情。
                </div>
                <div class="p33" />
              </div>
            </el-col>
            <div class="b2">
              <div class="p41">
                辅导需求
              </div>
              <div class="p42">
                多门专业课压力太大，没有适应海外的
                教学模式，学业繁重压力很大。
              </div>
              <div class="p42">
                因为家庭重重变故占用大量时间，心理
                状态遭受严重打击。
              </div>
              <div class="p42">
                多次作业未完成，被学校劝退
              </div>
            </div>
          </el-row>
        </div>
      </div>
    </div>

    <div class="pageSection sec5">
      <el-image
        class="pageSectionImg"
        :src="sec2Img"
        fit="cover"
        lazy
      ><div
        slot="placeholder"
        class="emptyImg"
      /></el-image>
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="p1">
            4种申述类型及流程
          </div>
          <div class="b1">
            <div class="p21">
              1
            </div>
            <div class="p22">
              <div class="p23">
                非正式申诉
              </div>
              <div class="p24">
                通过电话、邮件面谈等方式联系需要申诉课程<br>
                对应的负责老师，申请Review试卷，并争取提分。
              </div>
            </div>

          </div>
          <div class="b1">
            <div class="p21">
              2
            </div>
            <div class="p22">
              <div class="p23">
                正式申诉
              </div>
              <div class="p24">
                当非正式申诉失败时，可通过学院官方申诉途径<br>
                进行正式申诉，流程更详细，需要提供的证据、细节更多。
              </div>
            </div>
          </div>
          <div class="b1">
            <div class="p21">
              3
            </div>
            <div class="p22">
              <div class="p23">
                校级申诉
              </div>
              <div class="p24">
                当对正式申诉结果仍不满意，学生还可以向机构Student Appeals Body(SAB)申诉。<br>
                此阶段的申诉需要学生提交之前学院申诉的结果不能让人信服的有效理由，以及相关证明文件等资料。
              </div>
            </div>
          </div>
          <div class="b1">
            <div class="p21" style="color: #FF8636;">
              4
            </div>
            <div class="p22">
              <div class="p23">
                Dr.D特級申訴 - 通过率高达
                <span style="font-size: 48px;color: #FF8636;">95</span>
                <span style="color: #FF8636;">%+！</span>
              </div>
              <div class="p24">
                直接和負責審判事件的校方負責人報告事由經過，不經由第三方的<br>
                加油添醋還原事情的原始面貌，還中國學生一個公平、健康的學習環境！
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pageSection sec6">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="p1">
            申述服务介绍
          </div>
          <div class="p2">
            想要通过申诉解决考试挂科、论文被判定为学术不端等问题？留学生仅凭自己的主观臆断来撰写材料是有极大可能失败的。
            <br>
            <br>
            因此，选择Dr.D专业的Appeal申诉教师团队进行咨询、材料证据收集、深入分析、文稿撰写才是最好的选择！
            <br>
            <br>
            遇到Meeting不用慌，专业指导来帮忙！ 被学校怀疑代写，抄袭或者申诉成绩不公正都会收到学校的meeting通知，无
            法通过学校的质疑，就会受到被劝退的风险。 Dr.D的听证会指导就是根据学生遭遇劝退，重修，转学等紧急状况，寻找
            对应方案，指导应对技巧，为学生取得公平的學習環境。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const sec1Img = require('@/assets/img/bg4.png')
const sec2Img = require('@/assets/img/bg5.png')
const list22Img = require('@/assets/img/list22.png')

export default {
  name: 'RepresentationOfInterests',
  props: {},
  data() {
    return {
      sec1Img,
      sec2Img,
      list22Img
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.sec1 {
  height: 695px;

  .sec1Box {
    height: 100%;
    color: #fff;
    line-height: 1.5;

    .p1 {
      padding-top: 218px;
      font-size: 42px;
      color: #2E2E38;
      font-weight: bold;
    }

    .p2 {
      padding-top: 15px;
      font-size: 24px;
      color: #2E2E38;
      line-height: 36px;
    }
  }
}

.sec2 {
  height: 516px;
  background: #2E2E38;

  .sec1Box {
    height: 100%;

    .p1 {
      padding: 80px 0 40px;
      font-size: 36px;
      font-weight: bold;
      color: #FFFFFF;
      text-align: center;
    }

    .sec2Col {
      border-right: 2px solid #fff;

      .p2 {
        padding: 25px 0;
        font-size: 24px;
        color: #fff;
        display: flex;
        align-items: center;

        .p22 {
          font-weight: bold;
          font-size: 48px;
          padding-right: 15px;
        }
      }

      &:last-child {
        border-right: none;
      }
    }
  }
}

.sec3 {
  height: 760px;
  background: #F8F8F8;

  .sec1Box {
    height: 100%;

    .b1 {
      position: relative;
      margin-top: 160px;
      padding-left: 520px;

      .g1 {
        position: absolute;
        left: 0;
        top: 0;
        width: 482px;
        height: 482px;
      }

      .p1 {
        padding-top: 20px;
        font-size: 60px;
        font-weight: bold;
        color: #2E2E38;
      }

      .p2 {
        font-size: 24px;
        color: #2E2E38;
        padding-top: 30px;
      }

      .p3 {
        font-size: 24px;
        color: #2E2E38;
        padding-top: 15px;
        font-weight: bold;
        padding-bottom: 10px;
      }

      .p4 {
        padding-top: 40px;
        color: #2E2E38;
        font-size: 24px;
        line-height: 1.5;
      }
    }
  }
}

.sec4 {
  height: 840px;

  .sec1Box {
    height: 100%;

    .p1 {
      padding: 100px 0 80px;
      font-size: 36px;
      font-weight: bold;
      color: #26262E;
      text-align: center;
    }

    .sec4Row {
      position: relative;

      .sec4Col1 {
        padding-right: 200px;

        .p21 {
          padding-top: 60px;
          font-size: 48px;
          color: #FF8636;
        }

        .p22 {
          padding-top: 40px;
          font-size: 24px;
          font-weight: bold;
          color: #2E2E38;
        }

        .p23 {
          padding-top: 10px;
          font-size: 24px;
          color: #2E2E38;
          padding-bottom: 50px;
          border-bottom: 2px solid #DDDDDD;
          margin-bottom: 30px;
        }

        .p24 {
          font-size: 24px;
          color: #2E2E38;
          line-height: 40px;

          .p24Label {
            pre {
              font-weight: bold;
              display: inline;
              font-family: inherit;
            }
          }
        }
      }

      .sec4Col2 {
        .b1 {
          background: #F8F8F8;
          padding: 0 60px 0 200px;
          border-radius: 10px;

          .p31 {
            background: #FF8636;
            font-size: 24px;
            font-weight: bold;
            color: #FFFFFF;
            padding: 15px 0;
            text-align: center;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
            margin-bottom: 40px;
          }

          .p32 {
            font-size: 16px;
            color: #2E2E38;
            line-height: 30px;
          }

          .p33 {
            margin-top: 50px;
            height: 20px;
            background: #2E2E38;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
          }
        }
      }

      .b2 {
        position: absolute;
        top: 80px;
        left: 50%;
        margin-left: -160px;
        width: 320px;

        .p41 {
          text-align: center;
          background: #FF8636;
          font-size: 24px;
          font-weight: bold;
          color: #FFFFFF;
          padding: 15px;
          border-radius: 10px;
          box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
          cursor: pointer;
          margin-bottom: 30px;
        }

        .p42 {
          background: #2E2E38;
          height: 80px;
          font-size: 14px;
          color: #FFFFFF;
          padding: 0 30px;
          border-radius: 10px;
          box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
          cursor: pointer;
          line-height: 2;
          margin-top: 20px;
          display: flex;
          align-items: center;
        }
      }
    }
  }
}

.sec5 {
  height: auto;

  .pageSectionContent {
    position: relative;
  }

  .sec1Box {
    height: 100%;
    margin-bottom: 80px;

    .p1 {
      text-align: center;
      padding: 0 0 80px;
      font-size: 36px;
      font-weight: bold;
      color: #26262E;
    }

    .b1 {
      margin-bottom: 50px;
      display: flex;

      .p21 {
        font-size: 140px;
        font-weight: bold;
        color: #2E2E38;
        padding-right: 20px;
        border-right: 3px solid #AAAAAA;
        line-height: 1;
      }

      .p22 {
        padding-left: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .p23 {
          font-size: 30px;
          font-weight: bold;
          color: #26262E;
        }

        .p24 {
          font-size: 24px;
          color: #26262E;
          line-height: 1.8;
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

    .p1 {
      text-align: center;
      padding: 60px 0 50px;
      font-size: 36px;
      font-weight: bold;
      color: #26262E;
    }

    .p2 {
      padding: 40px 0;
      font-size: 22px;
      font-weight: 500;
      color: #2E2E38;
      line-height: 36px;
      margin-bottom: 80px;
      border-top: 2px solid #EDEDED;
      border-bottom: 2px solid #EDEDED;
    }
  }
}
</style>
