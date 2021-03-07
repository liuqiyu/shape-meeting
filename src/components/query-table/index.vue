<template>
  <div class="query-table">
    <form-wrapper :form-list="formList">
      <button-list class="formButtonList"
                   :button-list="formButtonList"></button-list>
    </form-wrapper>
    <button-list :button-list="buttonList"></button-list>
    <table-list :table-list="tableList"
                :table-data="tableData"></table-list>
    <el-pagination @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page="currentPage4"
                   :page-sizes="[100, 200, 300, 400]"
                   :page-size="100"
                   layout="total, sizes, prev, pager, next, jumper"
                   :total="400">
    </el-pagination>
  </div>
</template>

<script>
import FormWrapper from './../form-wrapper'
import ButtonList from './../button-list'
import TableList from './../table-list'

export default {
  name: 'query-table',
  components: {
    ButtonList,
    FormWrapper,
    TableList
  },
  props: {
    formList: {
      type: Array,
      default: () => []
    },
    formButtonList: {
      type: Array,
      default: () => []
    },
    buttonList: {
      type: Array,
      default: () => []
    },
    tableList: {
      type: Array,
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      currentPage4: 1
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style scoped>
.formButtonList {
  display: inline-block;
}
</style>