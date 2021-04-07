<template>
  <div class="sec1Box">
    <div class="p1">其它你想知道的</div>
    <div class="b1">
      <el-row class="b1Row" :gutter="30">
        <el-col :span="8">
          <div class="b1Col">
            <el-image class="g1" :src="list23Img" fit="cover" lazy
              ><div slot="placeholder" class="emptyImg"
            /></el-image>
            <div class="p2">English thesis guidance</div>
            <div class="p3">
              英文论文辅导<br />
              全学科覆盖
            </div>
            <div class="p4" @click="$router.push('/DissertationRetouchingCoaching/index')">了解更多<i class="iconfont icon-_jiantou" /></div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="b1Col">
            <el-image class="g1" :src="list24Img" fit="cover" lazy
              ><div slot="placeholder" class="emptyImg"
            /></el-image>
            <div class="p2">Study abroad service</div>
            <div class="p3">
              留学申请文书<br />
              辅导服务
            </div>
            <div class="p4" @click="() => $router.push(`/GuaranteedAdmission`)">了解更多<i class="iconfont icon-_jiantou" /></div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="b1Col">
            <el-image class="g1" :src="list25Img" fit="cover" lazy
              ><div slot="placeholder" class="emptyImg"
            /></el-image>
            <div class="p2">Rights protection service</div>
            <div class="p3">
              留学权益<br />
              申述服务
            </div>
            <div class="p4" @click="$router.push('/RepresentationOfInterests/index')">了解更多<i class="iconfont icon-_jiantou" /></div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div style="text-align: center; margin-top: 50px">
      <el-button class="btn1" size="medium" plain @click="() => $router.push(`/ContactUs`)">联系我们</el-button>
    </div>
  </div>
</template>

<script>
const list23Img = require("@/assets/img/list23.png");
const list24Img = require("@/assets/img/list24.png");
const list25Img = require("@/assets/img/list25.png");

export default {
  name: "MoreRow",
  props: {},
  data() {
    return {
      list23Img,
      list24Img,
      list25Img,
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.sec1Box {
  height: 100%;
  margin-bottom: 60px;

  .p1 {
    padding: 50px 0;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: #2e2e38;
  }

  .b1 {
    .b1Row {
      .b1Col {
        height: 348px;
        transition: 0.3s;
        position: relative;
        padding-left: 40px;
        padding-top: 50px;

        .g1 {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .p2 {
          font-size: 14px;
          color: #ffffff;
          margin-bottom: 15px;
        }

        .p3 {
          font-size: 24px;
          font-weight: bold;
          color: #ffffff;
          line-height: 34px;
          margin-bottom: 50px;
        }

        .p4 {
          font-size: 14px;
          color: #ffc74e;
          cursor: pointer;
        }
      }
    }
  }

  .btn1 {
    padding: 20px 60px;
    font-size: 18px;
    background: #f37440;
    color: #fff;
  }
}
</style>
