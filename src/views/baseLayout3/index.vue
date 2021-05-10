<template>
  <div style="padding-top: 100px" class="webPage">
    <div class="nav">
      <div class="navContent">
        <!-- 左菜单 -->
        <div class="navMenuBox">
          <el-menu
            :default-active="$route.path"
            router
            mode="horizontal"
            class="navMenu"
            background-color="#fff"
            text-color="#333333"
            active-text-color="#E66717"
          >
            <el-menu-item index="/home3/index">首页</el-menu-item>
            <el-menu-item index="/home3/index2">产品中心</el-menu-item>
            <el-menu-item index="/home3/index3">品牌实力</el-menu-item>
            <el-menu-item index="/home3/index4">关于展翠</el-menu-item>
          </el-menu>
        </div>
        <!-- logo -->
        <div class="navLogo">
          <el-image class="g1" :src="logoImg" fit="contain" lazy
            ><div slot="placeholder" class="emptyImg"
          /></el-image>
        </div>
        <!-- 右菜单 -->
        <div class="navMenuBox">
          <el-menu
            :default-active="$route.path"
            router
            mode="horizontal"
            class="navMenu"
            background-color="#fff"
            text-color="#333333"
            active-text-color="#E66717"
          >
            <el-menu-item index="/home3/index5">业务范围</el-menu-item>
            <el-menu-item index="/home3/index6">新闻中心</el-menu-item>
            <el-menu-item index="/home3/index7">联系我们</el-menu-item>
          </el-menu>
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
          <el-col :span="12" class="moreLeft">
            <div class="p1">了解更多</div>
            <div class="p2">用心对待每一份订单</div>
          </el-col>
          <el-col :span="12" class="moreRight">
            <div class="p1">我们的优势</div>
            <div class="p2">
              <div class="moreTag">专业</div>
              <div class="moreTag">高效</div>
              <div class="moreTag">1V1专属客服</div>
              <div class="moreTag">7x24</div>
              <div class="moreTag">英国G5师资</div>
              <div class="moreTag">高品质</div>
              <div class="moreTag">均分高</div>
              <div class="moreTag">提分快</div>
              <div class="moreTag">QSTop200+</div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="copyRight">
        <el-row style="width: 1200px; margin: 0 auto">
          <el-col :span="12" class="copyRightLeft">
            <el-image class="g1" :src="logo2Img" fit="cover" lazy
              ><div slot="placeholder" class="emptyImg"
            /></el-image>
            <div class="p1">
              Dr.D Global
              Education的團隊來自全球，輔導老師在遍佈各個專業領域領域，目前在英美中皆設立了辦公室並提供7X27小時的在線服務。
            </div>
          </el-col>
          <el-col :span="12" class="copyRightRight">
            <div class="p1">
              <el-link>与我们联系</el-link>
              <el-link>Dr.D所在地</el-link>
              <el-link>入口网站</el-link>
              <el-link>网站地图</el-link>
              <el-link>免责及隐私声明</el-link>
            </div>
            <div class="p2">
              <i class="iconfont iconfacebook" />
              <i class="iconfont icontuite1" />
              <i class="iconfont iconyoutube" />
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="sideWechat">
      <el-image :src="wechat2Img" fit="cover" style="width: 50px; height: 50px"
        ><div slot="placeholder" class="emptyImg"
      /></el-image>
      <span class="p1"> 微信二维码 </span>
      <br />
      <el-image
        :src="wechatImg"
        fit="cover"
        style="width: 125px; height: 125px; margin: 0 0 10px 10px"
        ><div slot="placeholder" class="emptyImg"
      /></el-image>
    </div>
    <el-backtop
      target=".webPage"
      style="background-color: #0282d3; color: #fff"
    />
  </div>
</template>

<script>
const topLeftImg = require("@/assets/img/topLeft.png");
const logoImg = require("@/assets/img_food/logo.png");
const logo2Img = require("@/assets/img/logo2.png");
const wechatImg = require("@/assets/img/wechat.png");
const wechat2Img = require("@/assets/img/wechat2.png");

export default {
  name: "BaseLayout",
  props: {},
  data() {
    return {
      topLeftImg,
      logoImg,
      logo2Img,
      wechatImg,
      wechat2Img,
    };
  },
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews;
    },
    key() {
      return this.$route.path;
    },
  },
  created() {},
  mounted() {
    console.log(this.$route.path);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: #fff;
  z-index: 10;

  .navContent {
    width: 1200px;
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin: 0 auto;

    .navLogo {
      display: flex;
      height: 100%;
      align-items: center;

      .g1 {
        width: auto;
        height: 60px;
      }
    }

    .navMenuBox {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 100%;
      overflow: hidden;

      .navMenu {
        width: 100%;
        display: flex;
        justify-content: space-around;

        .el-menu-item,
        ::v-deep .el-submenu__title {
          height: 100px;
          line-height: 100px;
          border-bottom: none !important;
          font-size: 20px;
          font-weight: bold;

          &:hover {
            background: #fff !important;
            color: #e66717 !important;
          }

          &.is-active {
            font-size: 28px;
            background: #fff !important;
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
          border-radius: 44px;
          border: 2px solid #e0e0e5;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;

          &:nth-child(2n) {
            background: #2e2e38;
            color: #fff;
            border-color: #2e2e38;
          }
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
  height: 50px;
  transition: 0.3s;
  width: 50px;
  cursor: pointer;

  .p1 {
    color: #fff;
    line-height: 50px;
    vertical-align: top;
    margin-right: 10px;
    transition: 0.3s;
    overflow: hidden;
    width: 0;
    height: 50px;
    display: inline-block;
    white-space: nowrap;
  }

  &:hover {
    height: 193px;
    width: 145px;

    .p1 {
      width: 80px;
    }
  }
}
</style>
