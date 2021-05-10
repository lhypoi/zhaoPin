<template>
  <div>
    <div class="pageSection sec1">
      <el-carousel indicator-position="outside" height="50vh">
        <el-carousel-item v-for="item in 2" :key="item">
          <el-image class="pageSectionImg" :src="sec1Img" fit="cover"
            ><div slot="placeholder" class="emptyImg"
          /></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="pageSection sec2">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <div class="row">
            <div class="col" v-for="item in sec2List" :key="item.name">
              <div class="colBox">
                <el-image class="g1" :src="item.img" fit="cover" lazy
                  ><div slot="placeholder" class="emptyImg"
                /></el-image>
                <div class="p1">{{ item.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const sec1Img = require("@/assets/img_food/home/1.png");
const sec2Img = require("@/assets/img_food/home/2.png");
const sec3Img = require("@/assets/img_food/home/3.png");
const sec4Img = require("@/assets/img_food/home/4.png");
const sec5Img = require("@/assets/img_food/home/5.png");
const sec6Img = require("@/assets/img_food/home/6.png");

// 首页
export default {
  name: "Home",
  props: {},
  data() {
    return {
      sec1Img,
      sec2Img,
      sec3Img,
      sec4Img,
      sec5Img,
      sec6Img,
      sec2List: []
    };
  },
  created() {},
  mounted() {
    this.sec2List = [{
      img: this.sec2Img,
      name: '糖果系列'
    }, {
      img: this.sec3Img,
      name: '燕麦系列'
    }, {
      img: this.sec4Img,
      name: '佛手果系列'
    }, {
      img: this.sec5Img,
      name: '巧克力系列'
    }, {
      img: this.sec6Img,
      name: '饼干系列'
    }]
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.sec1 {
  height: auto;

  .pageSectionImg {
    height: 50vh;
  }
}

.sec2 {
  height: auto;

  .pageSectionContent {
    position: relative;
  }

  .sec1Box {
    height: 100%;

    .row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-top: 30px;
      padding-bottom: 60px;

      .col {
        .colBox {
          display: flex;
          flex-direction: column;
          align-items: center;

          .g1 {
            width: 120px;
            height: 120px;
          }

          .p1 {
            padding-top: 20px;
            font-size: 28px;
            font-weight: bold;
            color: #333333;
          }
        }
      }
    }
  }
}
</style>
