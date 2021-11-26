<template>
  <div class="Pagination flex justify-center">
    <el-pagination
      layout="prev, pager, next"
      prev-text="上一页"
      next-text="下一页"
      :pager-count="5"
      :page-size="pageSize"
      :current-page="currentPage"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    // 总页数
    total: {
      type: Number,
      default: 0
    },
    // 默认尺寸8
    pageSize: {
      type: Number,
      default: 6
    },
    // 当前页
    currentPage: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {

    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('size-change', val)
    },
    handleCurrentChange(val) {
      this.$emit('current-change', val)
    }
  }
}
</script>

<style lang="scss">
.Pagination {
  display: flex;
  justify-content: center;

  .number,
  .btn-prev,
  .btn-next,
  .more {
    height: 32px !important;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(156, 163, 175) !important;
    margin: 0 4px;
    padding: 0 8px;
    color: rgb(156, 163, 175) !important;
    font-weight: normal;

    &:hover,
    &.active {
      color: rgb(255, 172, 5) !important;
      border-color: rgb(255, 172, 5) !important;
    }
  }

  .more {
    &::before {
      line-height: 1;
    }
  }
}
</style>

