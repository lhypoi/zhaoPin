<template>
  <div>
    <div class="pageSection sec1">
      <el-image
        class="pageSectionImg"
        :src="sec1Img"
        fit="container"
        lazy
      ><div
        slot="placeholder"
        class="emptyImg"
      /></el-image>
    </div>

    <div class="pageSection sec2">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="contact_con">
            <div class="contact_tit">
              <h2>联系我们</h2>
              <em />
              <h3
                style="
                  font-size: 18px;
                  padding-bottom: 10px;
                  font-weight: normal;
                  color: #2d4a65;
                  padding-top: 10px;
                "
              >
                Contact Us
              </h3>
            </div>
            <div class="contact_txt">
              伦敦总公司<br>电话 : 0754332752<br>邮编 : E16 1AH<br>地址:UNIT G25
              WATERFRONT STUDIOS 1 DOCK ROADROAD <br>工作时间: 9:00-22:00
              (GMT) Mon-Fri<br><br><br>广州分公司
              <br>工作时间：9:00-22:00
              (GMT+8) Mon-Sun
            </div>
            <div class="contact_txt">
              <div style="margin-bottom: 5px;">扫码立即添加微信咨询</div>
              <el-image
                :src="wechatImg"
                fit="cover"
                style="width: 125px; height: 125px;"
              ><div
                slot="placeholder"
                class="emptyImg"
              /></el-image>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const sec1Img = require('@/assets/img/bg3.png')
const list23Img = require('@/assets/img/list23.png')
const list24Img = require('@/assets/img/list24.png')
const list25Img = require('@/assets/img/list25.png')
const wechatImg = require('@/assets/img/wechat.png')

// 联系我们
export default {
  name: 'ContactUs',
  props: {},
  data() {
    return {
      sec1Img,
      list23Img,
      list24Img,
      list25Img,
      wechatImg
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.sec1 {
  height: auto;

  .pageSectionImg {
    position: relative;
    display: block;
  }
}

.sec2 {
  height: auto;

  .pageSectionContent {
    position: relative;
  }

  .sec1Box {
    height: 100%;
    margin-bottom: 80px;

    .contact_con {
      padding-top: 50px;
    }
    .contact_tit {
      text-align: center;
    }
    .contact_tit h2 {
      font-size: 30px;
      padding-bottom: 10px;
      font-weight: normal;
      color: #2d4a65;
    }
    .contact_tit i {
      display: block;
      width: 120px;
      height: 2px;
      margin: 0 auto;
      background: #2d4a65;
    }
    .contact_txt {
      padding: 20px 0px;
      text-align: center;
      font-size: 20px;
      color: #000;
      line-height: 39px;
    }
  }
}
</style>
