<template>
  <div style="padding-top: 120px" class="webPage">
    <div class="nav">
      <div class="navContent">
        <div class="navTop">
          <div class="navLeft">
            <el-image class="g1" :src="topLeftImg" fit="cover" lazy
              ><div slot="placeholder" class="emptyImg"
            /></el-image>
            <div class="p1">高效，优质，轻量化的学术平台</div>
          </div>
          <div class="navRight">
            <div class="workInfoBox">
              <div class="infoItem">
                <i class="iconfont icon01yonghu"></i>
                <span class="p2">微信：han80888y</span>
              </div>
              <div class="infoItem">
                <i class="iconfont icon02duanxin"></i>
                <span class="p2">工作时间：周一至周日</span>
              </div>
            </div>
          </div>
        </div>
        <div class="navBottom">
          <div class="navLeft">
            <el-image class="g1" :src="logoImg" fit="cover" lazy
              ><div slot="placeholder" class="emptyImg"
            /></el-image>
          </div>
          <div class="navRight">
            <div class="menuBox">
              <div class="infoItem">
                <span
                  class="p2"
                  :class="$route.path === '/home1/index' ? 'active' : ''"
                  @click="
                    () => {
                      $router.push('/home1/index');
                    }
                  "
                  >首页</span
                >
              </div>
              <div class="infoItem">
                <span
                  class="p2"
                  :class="$route.path === '/home2/index' ? 'active' : ''"
                  @click="
                    () => {
                      $router.push('/home2/index');
                    }
                  "
                  >服務範圍</span
                >
              </div>
            </div>
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
            <el-image class="g1" :src="logo2Img" fit="cover" lazy
              ><div slot="placeholder" class="emptyImg"
            /></el-image>
            <div class="p1">
              Dr.D Writer Studio，全英最大教学辅导机构
            </div>
            <el-button class="btn1" type="primary">了解更多</el-button>
          </el-col>
          <el-col :span="12" style="text-align: center">
            <div style="text-align: left; display: inline-block">
              <div class="p2">联系方式</div>
              <div class="p3">
                <i class="iconfont icon01yonghu"></i>
                <div class="p33">微信：han80888y</div>
                <div class="p33">工作时间：周一至周日</div>
              </div>
              <div class="p4">
                <el-image class="g2" :src="wechatImg" fit="cover" lazy
                  ><div slot="placeholder" class="emptyImg"
                /></el-image>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="copyRight">Dr.D Writer Studio @2011-2020 copyright</div>
    </div>
    <div class="sideWechat">
      <el-image :src="wechat2Img" fit="cover" style="width: 50px; height: 50px"
        ><div slot="placeholder" class="emptyImg"
      /></el-image>
      <span class="p1"> 微信二维码 </span>
      <br />
      <el-image :src="wechatImg" fit="cover" style="width: 125px; height: 125px; margin: 0 0 10px 10px;"
        ><div slot="placeholder" class="emptyImg"
      /></el-image>
    </div>
    <el-backtop
      target=".webPage"
      style="background-color: #0282d3; color: #fff"
    ></el-backtop>
  </div>
</template>

<script>
const topLeftImg = require("@/assets/img/topLeft.png");
const logoImg = require("@/assets/img/logo.png");
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
  height: 60px;
  background: #efefef;
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
          position: absolute;
          z-index: -1;
          left: 0;
          top: 0;
          width: 370px;
          height: 35px;
        }

        .p1 {
          width: 370px;
          text-align: center;
          line-height: 35px;
          color: #fff;
          padding: 0 26px;
          font-size: 14px;
        }
      }

      .navRight {
        height: 100%;
        flex: 1;

        .workInfoBox {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          height: 100%;

          .infoItem {
            position: relative;
            display: flex;
            align-items: center;

            .iconfont {
              color: #0282d3;
              font-size: 33px;
              margin-right: 12px;
            }

            .p2 {
              font-size: 16px;
              font-weight: 400;
              color: #333333;
            }
          }

          .infoItem + .infoItem {
            margin-left: 35px;
            padding-left: 35px;

            &:before {
              content: "";
              width: 1px;
              height: 38px;
              background-color: #bababa;
              position: absolute;
              top: 50%;
              left: 0;
              transform: translate(0, -50%);
              width: 0;
              background-color: transparent;
              border-left: 1px dashed #b2b2b2;
            }
          }
        }
      }
    }

    .navBottom {
      display: flex;
      position: absolute;
      top: 60px;
      height: 100px;
      width: 100%;
      background-color: #f6f6f6;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);

      .navLeft {
        position: relative;
        z-index: 1;

        .g1 {
          position: absolute;
          z-index: -1;
          left: 27px;
          top: 20px;
          width: 340px;
          height: 60px;
        }
      }

      .navRight {
        height: 100%;
        flex: 1;

        .menuBox {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          height: 100%;
          padding-right: 20px;

          .infoItem {
            position: relative;
            margin: 0 17px;

            .p2 {
              font-size: 16px;
              color: #000;
              font-weight: 600;
              cursor: pointer;

              &.active {
                color: #0282d3;
              }
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
