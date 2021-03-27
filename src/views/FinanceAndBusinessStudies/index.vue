<template>
  <div>
    <div class="pageSection sec1">
      <el-image class="pageSectionImg" :src="sec1Img" fit="cover" lazy
        ><div slot="placeholder" class="emptyImg"
      /></el-image>
    </div>

    <div class="pageSection sec2">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="moduleTitle">
            <div class="moduleBgTitle">Financial Engineering</div>
            <div class="moduleMainTitle">金融商科代做</div>
          </div>
          <div class="p1 normalP">
            最近有很多小伙伴私信我问什么是金融工程，想了解金融工程到底是学习什么？金融工程专业主要学习经济学、金融学、金融工程和风险管理方法与技能的基本训练，如果未来想当风投机构的投资人，享受一人之下万人之上的感受，那就一定得把这领域的基本功做好。最近有很多小伙伴私信我问什么是金融工程，想了解金融工程到底是学习什么？金融工程专业主要学习经济学、金融学、金融工程和风险管理方法与技能的基本训练，如果未来想当风投机构的投资人，享受一人之下万人之上的感受，那就一定得把这领域的基本功做好。
          </div>
          <div class="normalPTitle p2">金融工程专业学什么</div>
          <div class="p3 normalP">
            政治经济学、微观经济学、宏观经济学、计量经济学、货币银行学、金融经济学，金融市场学，证券投资学，衍生金融工具，固定收益证券，公司金融，金融工程学，金融会计、随机过程，时间序列分析，金融统计与分析应用，商业银行经营与管理，保险与精算，博弈论与信息经济学，金融风险管理，投资银行学，国际金融，国际投资，金融法等。
          </div>
          <div class="normalPTitle p2">金融工程专业简介</div>
          <div class="p3 normalP">
            本专业学生主要学习经济学、金融学、金融工程和金融管理方面的基本理论和基础知识，接受理财、投融资、以及风险管理方法与技能的基本训练，具有设计、开发综合运用各种金融工具创造性解决金融实务问题的基本能力，开展金融风险管理、公司理财、投资战略策划以及金融产品定价研究，能在跨国公司和金融机构从事金融财务管理、金融分析和策划的高素质复合型现代金融人才。有不理解的地方可以找我们云优课留学课程辅导进行进一步沟通。金融工程专业坚持“面向现代化、面向世界、面向未来”的人才培养理念，合理设置课程体系，培养具有良好政治素质、合理知识结构，系统掌握金融学基本理论及金融工程的基本原理与技术，具备经济、管理、法律以及金融财务方面的知识，能够开发、设计新型金融工具和金融手段，创造性和个性化地提出解决金融问题的方案，开展金融风险管理、公司理财、投资战略策划以及金融产品定价研究，能在跨国公司和金融机构从事金融财务管理、金融分析和策划的高素质复合型现代金融人才。
          </div>
          <div class="normalPTitle p2">金融工程专业就业前景</div>
          <div class="p3 normalP">
            金融工程专业主要是用计算机来实现数学模型，从而解决金融相关的问题。所以，金融工程不同于MBA和MSP，它主要是培养金融界的技术工作者，也称作金融工程师——Quant。
            Quant
            的职位主要集中在投资银行、对冲基金、商业银行和金融机构。负责的主要工作根据职位也有很大区别，比较有代表性的包括pricing、model
            validation、research、develop and risk
            management，分别负责衍生品定价模型的建立和应用、模型验证、模型研究、程序开发和风险管理。总体来说工作相对辛苦，收入比其他行业高很多。以Quant
            Developer为例，虽然实际工作和其他行业的程序员没有本质区别，但不仅收入高，而且很容易找到工作。就现在来说，金融工程在中国的就业主要在以下几个领域：
            基金公司：基金公司非常需要能做基金绩效评估风险控制、资产配置的人才。证券公司：证券公司正处在一个艰难的时期，同时也在通过集合理财产品设计等寻求生存的机会。银行：最传统的银行也在起着微妙的变化。各大银行的总行正在着手建立内部风险管理模型，急需这方面的人才，可是，由于银行用人制度比较僵化，真正有水平的人未必能进去做这个事情。银行内部的另外一个重要部门——资金部，也需要金融工程的人才，他们一方面在银行间债券市场操作，是未来固定收益证券这一块的主力，同时也是未来大有发展空间的公司债券市场、抵押支持债券这些金融工程产品的设计主力。
          </div>
        </div>
      </div>
    </div>

    <div class="pageSection sec3">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="moduleTitle">
            <div class="moduleBgTitle">Programming Show</div>
            <div class="moduleMainTitle">编程展示</div>
          </div>
          <div
            style="text-align: center; margin-bottom: 90px"
          >
            <el-button class="btn1" size="medium" plain
              >批改+proofreading</el-button
            >
          </div>
          <el-row :gutter="32" class="sec3Row">
            <el-col :span="12" class="sec3Col">
              <el-image class="g1" :src="sec7Img" fit="cover" lazy
                ><div slot="placeholder" class="emptyImg"
              /></el-image>
            </el-col>
            <el-col :span="12" class="sec3Col">
              <el-image class="g1" :src="sec8Img" fit="cover" lazy
                ><div slot="placeholder" class="emptyImg"
              /></el-image>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const sec1Img = require("@/assets/img_new_master/bg6.png");
const sec7Img = require("@/assets/img_new_master/bg7.png");
const sec8Img = require("@/assets/img_new_master/bg8.png");

// 金融商科代做
export default {
  name: "FinanceAndBusinessStudies",
  props: {},
  data() {
    return {
      sec1Img,
      sec7Img,
      sec8Img
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.sec1 {
  height: 620px;
}

.sec2 {
  height: auto;

  .pageSectionContent {
    position: relative;
  }

  .sec1Box {
    height: 100%;

    .p1 {
      padding-top: 40px;
    }

    .p2 {
      padding-top: 56px;
    }

    .p3 {
      padding-top: 9px;
    }
  }
}

.sec3 {
  height: auto;

  .pageSectionContent {
    position: relative;
  }

  .sec1Box {
    height: 100%;
    margin-bottom: 80px;

    .btn1 {
      padding: 20px 60px;
      font-size: 18px;
      background: #2e2e38;
      color: #fff;
    }

    .sec3Row {
      margin-top: -32px;

      .sec3Col {
        padding-top: 32px;
        .g1 {
          width: 100%;
          height: 696px;
        }
      }
    }
  }
}
</style>
