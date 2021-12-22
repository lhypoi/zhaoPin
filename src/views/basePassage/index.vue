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
      <h1 class=" title">{{ passage.title }}</h1>
      <div v-html="passage.content" />
    </div>

  </div>
</template>

<script>
const list1Img = require('@/assets/img/bg6.png')
export default {
  data() {
    return {
      list1Img,
      content: {
        position: '',
        articleDate: '',
        tag: '',
        title: '',
        articleSummary: '',
        content: '',
        image: '',
        id: ''
      },
      passage: {}
    }
  },
  mounted() {
    this.getEditorList()
  },
  created() {

  },
  methods: {
    getEditorList() {
      const id = this.$route.query.id
      this.$http
        .get('/api/api/sysArticle/get', {
          params: {
            id
          }
        })
        .then(res => {
          this.passage = res.data.data
          // console.log(this.passage);
        })
    }
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
