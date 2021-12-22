<template>
  <div>
    <div class="pageSection sec2">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <el-col v-for="(item,index) in showPassageList" :key="index" :span="8" class="sec2Col">
            <el-image
              class="g1"
              :src="require('@/assets/img/list31.png')"
              fit="cover"
              lazy
            />
            <div class="p1">{{ item.tag }}</div>
            <div class="p2">{{ item.title }}</div>
            <div class="p3">
              {{ item.articleSummary }}
            </div>
            <div class="p4">{{ item.articleDate }}</div>
          </el-col>
        </div>
      </div>
    </div>

    <pagination
      :total="passageList.length"
      :current-page="currentPage"
      @current-change="handleCurrentChange"
    />

    <div class="pageSection sec3">
      <div class="pageSectionContent">
        <MoreRow />
      </div>
    </div>

  </div>
</template>

<script>
import pagination from './Pagination.vue'
import MoreRow from '@/views/Common/MoreRow'
export default {
  components: { pagination, MoreRow },
  data() {
    return {
      passageList: [
        {
          id: '',
          position: '',
          tag: '',
          title: '',
          articleSummary: '',
          articleDate: ''
        }
      ],
      imageList: [

      ],
      currentPage: 0,
      pageSize: 6,
      config: {
        pageNumber: 1,
        pageSize: 30,
        loading: false,
        tag: '',
        title: ''
      }
    }
  },
  computed: {
    showPassageList() {
      const skipNum = (this.currentPage - 1) * this.pageSize
      const showPassageList = (skipNum + this.pageSize >= this.passageList.length) ? this.passageList.slice(skipNum, this.passageList.length) : this.passageList.slice(skipNum, skipNum + this.pageSize)
      return showPassageList
    }
  },
  mounted() {
    this.passageList = [
      {
        imgPath: require('@/assets/img/list31.png')

      },
      {
        imgPath: require('@/assets/img/list32.png')

      },
      {
        imgPath: require('@/assets/img/list33.png')
      },
      {
        imgPath: require('@/assets/img/list34.png')
      },
      {
        imgPath: require('@/assets/img/list35.png')

      },
      {
        imgPath: require('@/assets/img/list36.png')

      },
      {
        imgPath: require('@/assets/img/list36.png')
      }
    ]

    this.currentPage = 1
  },
  created() {
    this.getList()
  },
  methods: {
    // 请求文章信息
    getList(title = '') {
      this.config.loading = true
      // 搜索时，页码需要设置为1，才能正确返回数据，因为数据是从第一页开始返回的
      title ? (this.config.pageNumber = 1) : ''
      this.$http
        .post('/api/api/sysArticle/page', {
          params: {
            page: this.config,
            title
          }
        })
        .then(res => {
          // console.log(res);
          this.passageList = res.data.data
          // console.log(this.passageList);
          // console.log(res)
          // this.tableData = res.data.data.map(item => {
          //   return item
          // })
          this.config.pageSize = res.data.count
          this.config.loading = false
        })
    },

    handleCurrentChange(val) {
      this.currentPage = val
    }
  }
}
</script>

<style lang="scss" scoped>
.sec2 {
  height: auto;

  .pageSectionContent {
    position: relative;
  }

  .sec1Box {
    height: 100%;
    display: flex;
    flex-wrap: wrap;

    // .sec2Row {
      // flex-wrap: wrap;

      .sec2Col {
        margin-bottom: 80px;
        padding-right: 30px;
        padding-left: 30px;

        .g1 {
          width: 100%;
          height: 177px;
        }

        .p1 {
          font-size: 14px;
          font-weight: 500;
          color: #0086bf;
          margin-top: 25px;
        }

        .p2 {
          font-size: 16px;
          font-weight: 500;
          color: #2e2e38;
          margin-top: 18px;
        }

        .p3 {
          font-size: 14px;
          font-weight: 300;
          color: #2e2e38;
          line-height: 18px;
          margin-top: 15px;
        }

        .p4 {
          font-size: 11px;
          font-weight: 300;
          color: #2e2e38;
          margin-top: 20px;
        }
      // }
    }
  }
}

.sec3 {
  height: auto;

  .pageSectionContent {
    position: relative;
  }
}
</style>
