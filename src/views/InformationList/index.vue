<template>
  <div>
    <div class="pageSection sec1">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <el-row>
            <div @click="$router.push('/passages/index1')">
              <!-- <div @click="goPassage"> -->
              <el-col :span="16" class="sec1Col1">
                <el-image
                  class="g1"
                  :src="list26Img"
                  fit="cover"
                  lazy
                ><div
                  slot="placeholder"
                  class="emptyImg"
                /></el-image>
                <div class="p1">留学辅导</div>
                <!-- <div class="p2">欢迎Teradat新任首席执行官史蒂夫·麦克米兰</div> -->
                <div class="p2">分數低？那是因為你少了批判性思維（Critical Thinking）</div>
                <!-- <div class="p3">
                的董事会已任命史蒂夫麦克米伦担任下一任总裁兼首席执行官。从这篇临时总裁兼首席执行官Vic
                Lund 的文章中了解更多信息. Lund 的文章中了解更多信息.
              </div> -->
                <div class="p3">
                  在歐美教育，學校裡的教學風格和亞洲相差甚大,這一點相信每個在外留學的同學都深有感觸。
                  Critical thinking大部分的人翻译成“批判性思维”，但我觉得差了一點意思。
                </div>
                <div class="p4">2021年11月15日-1分钟读</div>
              </el-col>
            </div>
            <el-col :span="8" class="sec1Col2">
              <div class="b1" @click="$router.push('/passages/index2')">
                <div>
                  <el-image
                    class="g2"
                    :src="list27Img"
                    fit="cover"
                    lazy
                  ><div
                    slot="placeholder"
                    class="emptyImg"
                  /></el-image>
                  <div class="p5">留学辅导</div>
                  <div class="p6">2021 年度10 大最佳降重網站（免费和付费）</div>
                </div>
              </div>
              <div class="b1" @click="$router.push('/passages/index3')">
                <el-image
                  class="g2"
                  :src="list28Img"
                  fit="cover"
                  lazy
                ><div
                  slot="placeholder"
                  class="emptyImg"
                /></el-image>
                <div class="p5">留学辅导</div>
                <div class="p6">挑战全網上最全的论文引用格式解說</div>
              </div>
              <div class="b1">
                <el-image
                  class="g2"
                  :src="list29Img"
                  fit="cover"
                  lazy
                ><div
                  slot="placeholder"
                  class="emptyImg"
                /></el-image>
                <div class="p5">技术趋势</div>
                <div class="p6">
                  在新冠肺炎大流行期间中国 如何使用先进的分析方法
                </div>
              </div>
              <div class="b1">
                <el-image
                  class="g2"
                  :src="list30Img"
                  fit="cover"
                  lazy
                ><div
                  slot="placeholder"
                  class="emptyImg"
                /></el-image>
                <div class="p5">技术趋势</div>
                <div class="p6">利用Vantage风险分析技术， 建立早期预警系统</div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <!-- <div class="pageSection sec2">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <el-row :gutter="30" class="sec2Row" type="flex">
            <el-col :span="8" class="sec2Col">
              <el-image
                class="g1"
                :src="list31Img"
                fit="cover"
                lazy
              ><div
                slot="placeholder"
                class="emptyImg"
              /></el-image>
              <div class="p1">万物云</div>
              <div class="p2">有利条件试验解决云数据分析用户</div>
              <div class="p3">
                有利条件试验为分析人员、开发人员和操作人员提供了
                免费的、为期30天的云中TeradataVantage访问。
              </div>
              <div class="p4">2020年5月7日-1分钟读</div>
            </el-col>
            <el-col :span="8" class="sec2Col">
              <el-image
                class="g1"
                :src="list32Img"
                fit="cover"
                lazy
              ><div
                slot="placeholder"
                class="emptyImg"
              /></el-image>
              <div class="p1">业务分析</div>
              <div class="p2">
                数字支付分析对不断变化的偏好和新出现的价值 主张迅速作出反应
              </div>
              <div class="p3">
                有利条件试验为分析人员、开发人员和操作人员提供了
                免费的、为期30天的云中TeradataVantage访问。
              </div>
              <div class="p4">2021年2月1日-3分钟读</div>
            </el-col>
            <el-col :span="8" class="sec2Col">
              <el-image
                class="g1"
                :src="list33Img"
                fit="cover"
                lazy
              ><div
                slot="placeholder"
                class="emptyImg"
              /></el-image>
              <div class="p1">业务分析</div>
              <div class="p2">关于数据策略的常规智慧的六大改进</div>
              <div class="p3">
                这篇文章突出了你已经知道的东西之间的区别&你真正需
                要更具体的指导来创建一个成功的数据策略。
              </div>
              <div class="p4">2021年1月29日-7分钟</div>
            </el-col>
            <el-col :span="8" class="sec2Col">
              <el-image
                class="g1"
                :src="list34Img"
                fit="cover"
                lazy
              ><div
                slot="placeholder"
                class="emptyImg"
              /></el-image>
              <div class="p1">技术趋势</div>
              <div class="p2">新冠肺炎有效应对大流行风险建模</div>
              <div class="p3">
                Teradat专家提出了一个风险模型来量化新冠肺炎的感染
                风险和脆弱性，使用个人层面的人口统计和行为数据。
              </div>
              <div class="p4">2021年1月27日-4分钟</div>
            </el-col>
            <el-col :span="8" class="sec2Col">
              <el-image
                class="g1"
                :src="list35Img"
                fit="cover"
                lazy
              ><div
                slot="placeholder"
                class="emptyImg"
              /></el-image>
              <div class="p1">业务分析</div>
              <div class="p2">零售和CPG中的大数据需要手术刀，而不是斧头</div>
              <div class="p3">
                为了满足客户不断变化的需求，首席商业官需要使用精确
                的手术刀而不是钝斧在零售和CPG中使用大数据。
              </div>
              <div class="p4">2020年1月25日-1分钟读</div>
            </el-col>
            <el-col :span="8" class="sec2Col">
              <el-image
                class="g1"
                :src="list36Img"
                fit="cover"
                lazy
              ><div
                slot="placeholder"
                class="emptyImg"
              /></el-image>
              <div class="p1">业务分析</div>
              <div class="p2">
                在您的银行提供良好的客户体验的业务案例是什么？
              </div>
              <div class="p3">
                大多数银行都在谈论如何发展良好的客户体验，但却不明
                白投资带来的价值。了解银行解决这一问题所需的6项关 键能力。
              </div>
              <div class="p4">2020年6月7日-1分钟读</div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div> -->
    <passage-item />

    <!-- <div class="pageSection sec3">
      <div class="pageSectionContent">
        <MoreRow />
      </div>
    </div> -->
  </div>
</template>

<script>
const list26Img = require('@/assets/img/list26.png')
const list27Img = require('@/assets/img/list27.png')
const list28Img = require('@/assets/img/list28.png')
const list29Img = require('@/assets/img/list29.png')
const list30Img = require('@/assets/img/list30.png')
const list31Img = require('@/assets/img/list31.png')
const list32Img = require('@/assets/img/list32.png')
const list33Img = require('@/assets/img/list33.png')
const list34Img = require('@/assets/img/list34.png')
const list35Img = require('@/assets/img/list35.png')
const list36Img = require('@/assets/img/list36.png')
// import MoreRow from '@/views/Common/MoreRow'
import PassageItem from './component/passageItem.vue'

export default {
  name: 'InformationList',
  components: {
    // MoreRow,
    PassageItem },
  props: {},
  data() {
    return {
      list26Img,
      list27Img,
      list28Img,
      list29Img,
      list30Img,
      list31Img,
      list32Img,
      list33Img,
      list34Img,
      list35Img,
      list36Img,

      config: {
        pageNumber: 1,
        pageSize: 30,
        loading: false,
        tag: '',
        title: ''
      }
    }
  },
  created() {
    this.getList()
  },
  mounted() {},
  methods: {
    getList(title = '') {
      this.config.loading = true
      // 搜索时，页码需要设置为1，才能正确返回数据，因为数据是从第一页开始返回的
      title ? (this.config.pageNumber = 1) : ''
      this.$http
        .post('/api/api/sysArticle/page', {
          params: {
            page: this.config,
            title
          }
        })
        .then(res => {
          console.log(res)
          // this.tableData = res.data.data.map(item => {
          //   return item
          // })
          // this.config.pageSize = res.data.count
          this.config.loading = false
        })
    },

    goPassage() {
      const id = 5
      this.$router.push({
        path: '/passage/' + id
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.sec1 {
  height: auto;

  .pageSectionContent {
    position: relative;
  }

  .sec1Box {
    height: 100%;
    margin-top: 50px;
    margin-bottom: 60px;

    .sec1Col1 {
      padding: 40px 40px 40px 0;
      cursor: pointer;

      .g1 {
        height: 291px;
        width: 100%;
      }

      .p1 {
        font-size: 14px;
        font-weight: 500;
        color: #0086bf;
        margin-top: 30px;
      }

      .p2 {
        font-size: 24px;
        font-weight: bold;
        color: #2e2e38;
        margin-top: 10px;
      }

      .p3 {
        font-size: 14px;
        font-weight: 300;
        color: #2e2e38;
        line-height: 1.8;
        padding-right: 50px;
        margin-top: 10px;
      }

      .p4 {
        font-size: 11px;
        font-weight: 300;
        color: #2e2e38;
        margin-top: 25px;
      }
    }

    .sec1Col2 {
      padding: 70px 50px 70px 20px;
      border-left: 2px dashed rgba(237, 237, 237, 1);
      margin-top: -25px;

      .b1 {
        margin-top: 25px;
        padding-right: 50px;
        position: relative;
        padding-left: 120px;
        height: 102px;
        cursor: pointer;

        .g2 {
          position: absolute;
          left: 0;
          top: 0;
          width: 102px;
          height: 102px;

        }

        .p5 {
          font-size: 14px;
          font-weight: 500;
          color: #0086bf;
          padding-top: 10px;
        }

        .p6 {
          font-size: 14px;
          font-weight: 500;
          color: #2e2e38;
          margin-top: 8px;
          line-height: 1.5;
        }
      }
    }
  }
}

.sec2 {
  height: auto;

  .pageSectionContent {
    position: relative;
  }

  .sec1Box {
    height: 100%;

    .sec2Row {
      flex-wrap: wrap;

      .sec2Col {
        margin-bottom: 80px;

        .g1 {
          width: 100%;
          height: 177px;
        }

        .p1 {
          font-size: 14px;
          font-weight: 500;
          color: #0086bf;
          margin-top: 25px;
        }

        .p2 {
          font-size: 16px;
          font-weight: 500;
          color: #2e2e38;
          margin-top: 18px;
        }

        .p3 {
          font-size: 14px;
          font-weight: 300;
          color: #2e2e38;
          line-height: 18px;
          margin-top: 15px;
        }

        .p4 {
          font-size: 11px;
          font-weight: 300;
          color: #2e2e38;
          margin-top: 20px;
        }
      }
    }
  }
}

.sec3 {
  height: auto;

  .pageSectionContent {
    position: relative;
  }
}
</style>
