<template>
  <div style="padding-top: 120px">
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
                <span class="p2">微信：ReportJ888</span>
              </div>
              <div class="infoItem">
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
                <span class="p2" :class="$route.path === '/home1/index' ? 'active' : ''" @click="() => {
                  $router.push('/home1/index')
                }">首页</span>
              </div>
              <div class="infoItem">
                <span class="p2" :class="$route.path === '/home2/index' ? 'active' : ''" @click="() => {
                  $router.push('/home2/index')
                }">资历要求</span>
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
  </div>
</template>

<script>
const topLeftImg = require("@/assets/img/topLeft.png");
const logoImg = require("@/assets/img/logo.png");

export default {
  name: "BaseLayout",
  props: {},
  data() {
    return {
      topLeftImg,
      logoImg,
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
    console.log(this.$route.path)
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
</style>
