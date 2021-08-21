<template>
  <div style="padding-top: 84px" class="webPage">
    <div class="nav">
      <div class="navContent">
        <div class="navTop">
          <!-- logo -->
          <div class="navLeft">
            <el-image
              class="g1"
              :src="logoImg"
              fit="cover"
              lazy
            ><div
              slot="placeholder"
              class="emptyImg"
            /></el-image>
          </div>
          <!-- 菜单 -->
          <div class="navRight">
            <el-menu
              :default-active="$route.path"
              router
              mode="horizontal"
              class="navMenu"
              background-color="#000"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-menu-item index="/">首页</el-menu-item>
              <el-submenu index="/x1">
                <template slot="title">海外留学辅导</template>
                <el-menu-item
                  index="/DataComputerGeneration/index"
                >数据计算机辅导</el-menu-item>
                <el-menu-item
                  index="/FinanceAndBusinessStudies/index"
                >金融商科辅导</el-menu-item>
                <el-menu-item
                  index="/HumanitiesAndArtsAgency/index"
                >人文艺术辅导</el-menu-item>
                <el-menu-item
                  index="/OnlineTutorials/index"
                >网课辅导</el-menu-item>
                <el-menu-item
                  index="/TOEFL_IELTS/index"
                >雅思托福/GRE/Gmat</el-menu-item>
                <!-- <el-menu-item index="/GuaranteedAdmission/index">保录升学</el-menu-item> -->
                <!-- <el-menu-item index="/DissertationCorrection/index">论文批改润色</el-menu-item> -->
                <!-- <el-menu-item index="/StudyInUK/index">海外首选英国留学（原）</el-menu-item> -->
              </el-submenu>
              <el-submenu index="/x2">
                <template slot="title">一站式留学申请</template>
                <el-menu-item
                  index="/AbroadAtTopUniversities/index"
                >英美港澳留学申请</el-menu-item>
                <el-menu-item
                  index="/StudyAbroadAdvisory/index"
                >名校保录蓝色通道</el-menu-item>
                <el-menu-item
                  index="/OverseasPreferredStudyInUK/index"
                >海外首选英国留学</el-menu-item>
                <!-- <el-menu-item
                  index="/x21"
                >热门留学国家的差异&排名</el-menu-item> -->
                <el-menu-item
                  index="/ApplicationForStudyAbroadAndDetails/index"
                >申请留学&细节</el-menu-item>
              </el-submenu>
              <el-submenu index="/x3">
                <template slot="title">求学救护站</template>
                <el-menu-item
                  index="/RepresentationOfInterests/index"
                >紧急申述Appeal</el-menu-item>
                <el-menu-item
                  index="/GreenChannelForEmergencyTransfers/index"
                >紧急转学绿色通道</el-menu-item>
                <!-- <el-menu-item index="/x32">升学前置作案top up</el-menu-item> -->
                <el-menu-item
                  index="/CareerCounseling/index"
                >就业辅导</el-menu-item>
              </el-submenu>
              <el-menu-item
                index="/InformationList/index"
              >留学资讯</el-menu-item>
              <el-menu-item index="/ContactUs/index">联系我们</el-menu-item>
            </el-menu>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
    <div class="footer">
      <div class="getMore">
        <el-row style="width: 1200px; margin: 0 auto">
          <el-col :span="5" class="moreLeft">
            <div class="p1">了解更多</div>
            <div class="p2">用心对待每一份订单</div>
          </el-col>
          <el-col :span="7" class="moreLeft">
            <div style="font-size: 16px; margin-bottom: 25px;">扫码立即添加微信咨询</div>
            <el-image
              :src="wechatImg"
              fit="cover"
              style="width: 125px; height: 125px;"
            ><div
              slot="placeholder"
              class="emptyImg"
            /></el-image>
          </el-col>
          <el-col :span="12" class="moreRight">
            <div class="p1">我们的优势</div>
            <div class="p2">
              <div class="moreTag" @click="$router.push('/DissertationRetouchingCoaching/index')">专业</div>
              <div class="moreTag" @click="$router.push('/DissertationRetouchingCoaching/index')">高效</div>
              <div class="moreTag" @click="$router.push('/DissertationRetouchingCoaching/index')">1V1专属客服</div>
              <div class="moreTag" @click="$router.push('/DissertationRetouchingCoaching/index')">7x24</div>
              <div class="moreTag" @click="$router.push('/DissertationRetouchingCoaching/index')">英国G5师资</div>
              <div class="moreTag" @click="$router.push('/DissertationRetouchingCoaching/index')">高品质</div>
              <div class="moreTag" @click="$router.push('/DissertationRetouchingCoaching/index')">均分高</div>
              <div class="moreTag" @click="$router.push('/DissertationRetouchingCoaching/index')">提分快</div>
              <div class="moreTag" @click="$router.push('/DissertationRetouchingCoaching/index')">QSTop200+</div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="copyRight">
        <el-row style="width: 1200px; margin: 0 auto">
          <el-col :span="12" class="copyRightLeft">
            <el-image
              class="g1"
              :src="logo2Img"
              fit="cover"
              lazy
            ><div
              slot="placeholder"
              class="emptyImg"
            /></el-image>
            <div class="p1">
              Dr.D Global
              Education的團隊來自全球，輔導老師在遍佈各個專業領域領域，目前在英美中皆設立了辦公室並提供7X27小時的在線服務。
            </div>
          </el-col>
          <el-col :span="12" class="copyRightRight">
            <div class="p1">
              <el-link @click="$router.push('/ContactUs/index')">与我们联系</el-link>
              <el-link @click="$router.push('/ContactUs/index')">Dr.D所在地</el-link>
            </div>
            <div class="p2">
              <el-image
                :src="icon1Img"
                fit="cover"
                class="iconfont"
                @click="jump('https://www.instagram.com/dr.dessaymentor/')"
              />
              <el-image
                :src="icon2Img"
                fit="cover"
                class="iconfont"
                @click="jump('https://twitter.com/essay_mentor')"
              />
              <el-image
                :src="icon3Img"
                fit="cover"
                class="iconfont"
                @click="jump('https://www.instagram.com/dr.dessaymentor/')"
              />
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="sideWechat">
      <el-image
        :src="wechat2Img"
        fit="cover"
        style="width: 50px; height: 50px"
      ><div
        slot="placeholder"
        class="emptyImg"
      /></el-image>
      <span class="p1"> 微信二维码 </span>
      <br>
      <el-image
        :src="wechatImg"
        fit="cover"
        style="width: 125px; height: 125px; margin: 0 0 10px 10px"
      ><div
        slot="placeholder"
        class="emptyImg"
      /></el-image>
    </div>
    <el-backtop
      target=".webPage"
      style="background-color: #0282d3; color: #fff"
    />
  </div>
</template>

<script>
const topLeftImg = require('@/assets/img/topLeft.png')
const logoImg = require('@/assets/img/logo.png')
const logo2Img = require('@/assets/img/logo2.png')
const wechatImg = require('@/assets/img/wechat.png')
const wechat2Img = require('@/assets/img/wechat2.png')
const icon1Img = require('@/assets/img_new_master/icon1.png')
const icon2Img = require('@/assets/img_new_master/icon2.png')
const icon3Img = require('@/assets/img_new_master/icon3.png')

export default {
  name: 'BaseLayout',
  props: {},
  data() {
    return {
      topLeftImg,
      logoImg,
      logo2Img,
      wechatImg,
      wechat2Img,
      icon1Img,
      icon2Img,
      icon3Img
    }
  },
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.path
    }
  },
  created() {},
  mounted() {
    console.log(this.$route.path)
  },
  methods: {
    jump(url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 84px;
  background: #000;
  z-index: 10;

  .navContent {
    width: 1200px;
    margin: 0 auto;
    position: relative;
    height: 100%;

    .navTop {
      display: flex;
      position: relative;
      height: 100%;

      .navLeft {
        position: relative;
        z-index: 1;

        .g1 {
          margin-top: 17px;
          width: 301px;
          height: 53px;
        }
      }

      .navRight {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 100%;
        overflow: hidden;

        .navMenu {
          .el-menu-item,
          ::v-deep .el-submenu__title {
            height: 84px;
            line-height: 84px;
            border-bottom: none !important;

            &:hover {
              background-color: rgb(84, 92, 100) !important;
            }
          }
        }
      }
    }
  }
}
.footer {
  .getMore {
    height: 380px;
    background-color: #1a1a24;
    color: #fff;

    .moreLeft {
      padding-top: 120px;
      line-height: 1;

      .p1 {
        font-size: 40px;
      }

      .p2 {
        margin-top: 20px;
        font-size: 16px;
      }
    }

    .moreRight {
      padding-top: 120px;
      padding-left: 20px;
      line-height: 1;

      .p1 {
        font-size: 16px;
      }

      .p2 {
        margin: -10px;
        margin-top: 25px;
        display: flex;
        flex-wrap: wrap;

        .moreTag {
          margin: 10px;
          margin-top: 0;
          padding: 7px 10px;
          height: 31px;
          border: 1px solid #656571;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;

          &:hover {
            background: #fff;
            color: #1a1a24;
            border-color: #fff;
          }
        }
      }
    }
  }

  .copyRight {
    height: 285px;

    .copyRightLeft {
      padding-top: 70px;

      .g1 {
        width: 352px;
        height: 63px;
      }

      .p1 {
        margin-top: 40px;
        color: #80808b;
        font-size: 16px;
        line-height: 24px;
      }
    }

    .copyRightRight {
      padding-top: 70px;
      padding-left: 20px;

      .p1 {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        margin: -5px;
        margin-top: 0;

        .el-link {
          margin: 5px;
          margin-top: 0;
          color: #272730;
          font-size: 16px;
          padding-bottom: 4px;

          &::after {
            border-color: #272730;
          }
        }
      }

      .p2 {
        margin-top: 95px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;

        .iconfont {
          margin-left: 10px;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
      }
    }
  }
}

.sideWechat {
  position: fixed;
  z-index: 10;
  top: 300px;
  right: 0;
  background: #007fb8;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  overflow: hidden;
  transition: 0.3s;
  cursor: pointer;
  // height: 50px;
  // width: 50px;
  height: 193px;
  width: 145px;

  .p1 {
    color: #fff;
    line-height: 50px;
    vertical-align: top;
    margin-right: 10px;
    transition: 0.3s;
    overflow: hidden;
    height: 50px;
    display: inline-block;
    white-space: nowrap;
    // width: 0;
    width: 80px;
  }

  // &:hover {
  //   height: 193px;
  //   width: 145px;

  //   .p1 {
  //     width: 80px;
  //   }
  // }
}
</style>
