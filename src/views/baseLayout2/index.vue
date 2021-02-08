<template>
  <div style="padding-top: 120px" class="webPage">
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
              <el-menu-item index="/home1">首页</el-menu-item>
              <el-submenu index="/x">
                <template slot="title">海外留学辅导</template>
                <el-menu-item index="/home2/index">网课辅导</el-menu-item>
                <el-menu-item index="/xx">雅思/托福/GRE/Gmat</el-menu-item>
              </el-submenu>
              <el-submenu index="/x1">
                <template slot="title">一站式留学申请</template>
                <el-menu-item index="/x11">热门留学国家的差异或排名</el-menu-item>
                <el-menu-item index="/x12">申请留学或细节</el-menu-item>
              </el-submenu>
              <el-submenu index="/x2">
                <template slot="title">求学救护站</template>
                <el-menu-item index="/x21">紧急转学绿色通道</el-menu-item>
                <el-menu-item index="/x22">升学前置作案top up</el-menu-item>
              </el-submenu>
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
      <div class="contact">
        <el-row style="width: 1200px; margin: 0 auto">
          <el-col :span="12">
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
              Dr.J Writer Studio，全网最大英文写手高薪兼职平台
            </div>
            <el-button class="btn1" type="primary">了解更多</el-button>
          </el-col>
          <el-col :span="12" style="text-align: center">
            <div style="text-align: left; display: inline-block">
              <div class="p2">联系方式</div>
              <div class="p3">
                <i class="iconfont icon01yonghu" />
                <div class="p33">微信：ReportJ888</div>
                <div class="p33">工作时间：周一至周日</div>
              </div>
              <div class="p4">
                <el-image
                  class="g2"
                  :src="wechatImg"
                  fit="cover"
                  lazy
                ><div
                  slot="placeholder"
                  class="emptyImg"
                /></el-image>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="copyRight">Dr.J Writer Studio @2011-2020 copyright</div>
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

export default {
  name: 'BaseLayout',
  props: {},
  data() {
    return {
      topLeftImg,
      logoImg,
      logo2Img,
      wechatImg,
      wechat2Img
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
  methods: {}
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

        .navMenu {
          .el-menu-item,
          ::v-deep .el-submenu__title {
            height: 84px;
            line-height: 84px;
            border-bottom: none !important;

            &:hover {
              background-color: rgb(84,92,100) !important;
            }
          }
        }
      }
    }
  }
}
.footer {
  .contact {
    height: 416px;
    background-color: rgba(28, 58, 85, 1);
    padding-top: 90px;

    .g1 {
      width: 315px;
      height: 108px;
    }

    .p1 {
      font-size: 16px;
      font-weight: 400;
      color: #ffffff;
      margin: 30px 0;
    }

    .btn1 {
      font-size: 20px;
      height: 60px;
      background: rgba(0, 79, 160, 1);
      border-color: rgba(0, 79, 160, 1);
    }

    .p2 {
      font-size: 18px;
      font-weight: 800;
      color: #ffffff;
    }

    .p3 {
      position: relative;
      margin: 30px 0;
      padding-left: 40px;

      .iconfont {
        position: absolute;
        left: 0;
        top: 0;
        font-size: 32px;
        color: #fff;
      }

      .p33 {
        font-size: 14px;
        color: #333333;
        line-height: 18px;
        color: #fff;
      }
    }

    .g2 {
      width: 121px;
      height: 121px;
    }
  }

  .copyRight {
    background: rgba(14, 14, 14, 1);
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
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
