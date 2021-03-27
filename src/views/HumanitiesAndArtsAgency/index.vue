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
            <div class="moduleBgTitle">Humanities and Arts Major</div>
            <div class="moduleMainTitle">人文艺术专业ASSIGNMET辅导</div>
          </div>
          <div class="p1 normalP">
            Dr.D辅导机构有丰富的人文艺术等社科代写经验，我们的人文社科essay或report代写课程包含不仅限于哲学、经济学、政治学、社会学、历史、法律专业、语言学、教育学、心理学、人类学、传媒专业、神学和宗教、艺术史、考古学。人文学科帮助我们理解和定义包括历史、人类学、文学、艺术史、伦理学、哲学和法学在内的文化和人类经验。它是关于人们如何处理和记录人类经验的研究。人文是艺术、文化和哲学。人文学科及其相关主题的学习，使人文学科的学习者更具有人情味，使他们实现自身和他人作为人的潜能。人文学科认为一切事物都像蜘蛛网一样联系在一起，
            不考虑纺丝中的细微之处。人文- Humanus- Human,
            Humanity-是指一个人的品质，人类，文明和有教养。学习人文学科是很重要的，因为它能帮助我们与没有去过的地方联系起来，并理解过去对现在的重要性。它使人类了解过去的有价值的发现。它有助于通过不同的艺术展示在社区和文化之间建立联系。通过对世界文明的理解，将会有对个人和文化差异的真正理解和尊重。通过人文学习世界文化，可以获得全球视野。最后，它也有助于建立一个职业生涯的关注生活和工作作为一个有效的团队的一部分。
          </div>
          <div class="normalPTitle p2">我们的人文服务课程有</div>
          <div class="p3 normalP">
            社会学Sociology Assignment 、政治学Political Science
            、宗教学Assignment Religion 、公共管理Assignment Public
            、政策学Policy Assignment 、环境政治Environmental Politics
            Assignment 、心理学Psychology Assignment 、哲学Philosophy Assignment
            、人类学Anthropology Assignment 、地理学Geography
            Assignment、地质学Geology Assignment 、全球化Globalisation
            Assignment 、历史History Assignment 、语言学Linguistics Assignment
            、国际关系学International Relations Assignment、融合教育Inclusive
            Education Assignment 、环境科学Environmental Science Assignment
          </div>
          <div class="normalPTitle p2">我们的艺术服务课程有</div>
          <div class="p3 normalP">
            室内设计Interior design 、服装设计Fashion design
            、工业设计Industrial design specialty 、建筑设计Architectural design
            、音乐类专业Music major 、创意产业Creative industries
            、视觉传达Visual communication 、动画设计Animation design
            、插画专业Illustration design 、电影艺术Film art
            、文艺编导Literature and art director 、声乐教育Vocal music
            education 、城市设计Urban design 、社会艺术教育与管理Social arts
            education and management
          </div>
          <div class="normalPTitle p2">我们的专家为您提供</div>
          <div class="p3 normalP">
            我们的专家为您提供及时、概念清晰、结构严谨的论文，而不考虑复杂的主题。力求带来大量领域层面的经验和专业知识，以及深入的专业知识。更重要的是，他们是真正对自己的知识领域感兴趣的人，总是试图提高自己的技能，并把这种专业知识传授给该领域的其他人。我们擅长处理与“政治学”、“公共政策”、“国际关系”、“地质学”、“历史”、“地理”、“宗教”、“哲学”、“社会科学”、“视觉与表演艺术”、“文化与传播研究”、“人类学”、“区域研究”和“语言艺术”等等相关的任何人文艺术学科的课题。
          </div>
          <div class="normalPTitle p2">Dr.D提供最优质的辅导服务</div>
          <div class="p3 normalP">
            Dr.D提供最优质的辅导服务，凭借专业知识和专业知识，我们的专家为您的作业和论文增值加分，帮助您取得更高的分数。人文艺术学科的研究需要多年的经验来理解一个学科所涉及的复杂性。我们的专家不仅为您完成了一项任务，而且由于他们的学科专长，为您的任务增加了价值。
            人文艺术学科是一门复杂的学科，它需要多方面的学习方法，即吸收来自不同来源和理论的知识，并将其整理成像样的形式，再加上必要的个人接触，使你的作品脱颖而出。我们在“我的任务服务”帮助您高质量的工作，以负担得起的价格，而不妥协的周转时间和最终用户的要求。
            我们的专家老师可以24小时帮助你，帮助在外留学的学生们是机构的初衷，真挚和诚实是我们信奉的唯一教条。
          </div>
        </div>
      </div>
    </div>

    <div class="pageSection sec3">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="moduleTitle">
            <div class="moduleBgTitle">3D modeling display</div>
            <div class="moduleMainTitle">3D建模展示</div>
          </div>
          <div style="text-align: center; margin-bottom: 90px">
            <el-button class="btn1" size="medium" plain
              >批改+proofreading</el-button
            >
          </div>
          <el-row :gutter="32" class="sec3Row">
            <el-col :span="24" class="sec3Col">
              <el-image class="g1" :src="sec7Img" fit="cover" lazy
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
const sec1Img = require("@/assets/img_new_master/bg9.png");
const sec7Img = require("@/assets/img_new_master/bg10.png");

// 人文艺术代做
export default {
  name: "HumanitiesAndArtsAgency",
  props: {},
  data() {
    return {
      sec1Img,
      sec7Img,
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
