<template>
  <div>
    <div class="pageSection sec2">
      <div class="pageSectionContent">
        <div class="sec1Box">
          <el-col v-for="(item,index) in passageList" :key="index" :span="8" class="sec2Col">
            <el-image
              class="g1"
              :src="item.imgPath"
              fit="cover"
              lazy
            />
            <div class="p1">{{ item.tag }}</div>
            <div class="p2">{{ item.title }}</div>
            <div class="p3">
              {{ item.content }}
            </div>
            <div class="p4">{{ item.date }}</div>
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
      passageList: [],
      currentPage: 0,
      pageSize: 6
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
        imgPath: require('@/assets/img/list31.png'),
        tag: '万物云',
        title: '有利条件试验解决云数据分析用户',
        content: '有利条件试验为分析人员、开发人员和操作人员提供了免费的、为期30天的云中TeradataVantage访问。',
        date: '2020年5月7日-1分钟读'
      },
      {
        imgPath: require('@/assets/img/list32.png'),
        tag: '万物云',
        title: '有利条件试验解决云数据分析用户',
        content: '有利条件试验为分析人员、开发人员和操作人员提供了免费的、为期30天的云中TeradataVantage访问。',
        date: '2020年5月7日-1分钟读'
      },
      {
        imgPath: require('@/assets/img/list33.png'),
        tag: '万物云',
        title: '有利条件试验解决云数据分析用户',
        content: '有利条件试验为分析人员、开发人员和操作人员提供了免费的、为期30天的云中TeradataVantage访问。',
        date: '2020年5月7日-1分钟读'
      },
      {
        imgPath: require('@/assets/img/list34.png'),
        tag: '万物云',
        title: '有利条件试验解决云数据分析用户',
        content: '有利条件试验为分析人员、开发人员和操作人员提供了免费的、为期30天的云中TeradataVantage访问。',
        date: '2020年5月7日-1分钟读'
      },
      {
        imgPath: require('@/assets/img/list35.png'),
        tag: '万物云',
        title: '有利条件试验解决云数据分析用户',
        content: '有利条件试验为分析人员、开发人员和操作人员提供了免费的、为期30天的云中TeradataVantage访问。',
        date: '2020年5月7日-1分钟读'
      },
      {
        imgPath: require('@/assets/img/list36.png'),
        tag: '万物云',
        title: '有利条件试验解决云数据分析用户',
        content: '有利条件试验为分析人员、开发人员和操作人员提供了免费的、为期30天的云中TeradataVantage访问。',
        date: '2020年5月7日-1分钟读'
      }

    ]

    this.currentPage = 1
  },
  methods: {
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
