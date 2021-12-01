<template>
  <div class="passage1">
    <div class="pageSection sec1">
      <el-image
        class="pageSectionImg"
        :src="list1Img"
        fit="container"
        lazy
      ><div
        slot="placeholder"
        class="emptyImg"
      /></el-image>
    </div>
    <div class=" passageStart">
      <h1 class=" title">分數低？那是因為你少了批判性思維（Critical Thinking）</h1>
      <div class=" img1div"><img :src="list26Img" class=" img1"></div>

      <p class=" text-lg text-red-500">
        在歐美教育，學校裡的教學風格和亞洲相差甚大,這一點相信每個在外留學的同學都深有感觸。Critical thinking大部分的人翻译成“批判性思维”，但我觉得差了一點意思。Critical這個單詞來源於希腊krinō，意思是“挑选、决定和判断”，類似的像是krites 是观察家、法官、仲裁人之意，kritikos 是指有观察、思考和决定能力的人。所以我常和在寫論問的同學說，當在撰寫這Critical Thinking的時候，你就把自己當成是一個獨立的法官或評審，站在你自己的文章內容，收集的數據等等的維度上，寫上屬於自己主觀但必須同時帶有批判、挑剔、苛刻、审慎的評論。
      </p>

    </div>
  </div>
</template>

<script>
const list1Img = require('@/assets/img/bg6.png')
const list26Img = require('@/assets/img/list40.png')

export default {
  data() {
    return {
      list1Img,
      list26Img
    }
  },
  created() {
    // const { id } = this.$route.params
    // console.log(id)

    // this.getEditorList()
  },
  methods: {
    // getEditorList() {
    //   this.$http
    //     .get('api/api/sysArticle/get', {
    //       params: {
    //         id
    //       }
    //     })
    //     .then(res => {
    //       console.log(res)
    //     })
    // }
  }

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
.passageStart{
  margin:0 auto;
  width:1000px;
  margin-bottom: 60px;
}
.title{
  color:#f37440;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 80px;
}
.img1div{
  text-align: center;
}
.img1{

 display: inline-block;
  vertical-align: middle;
}
p{
  text-indent: 2em;
  line-height: 35px;
  text-align: start;
}
h2{
  text-align: start;
}
</style>
