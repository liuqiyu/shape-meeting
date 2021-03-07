<template>
  <div id="app">
    <query-table :form-list="formList"
                 :form-button-list="formButtonList"
                 :button-list="buttonList"
                 :table-list="tableList"
                 :table-data="tableData"></query-table>
  </div>
</template>

<script>
// import QueryTable from './components/query-table'

export default {
  name: 'app',
  // components: {
  //   QueryTable
  // },
  data () {
    return {
      buttonList: [
        {
          label: '搜索',
          props: {
            icon: 'el-icon-search',
            type: 'primary'
          },
          events: {
            clickFunc () {
              alert(123)
            }
          }
        },
        {
          label: '重置',
          props: {
            icon: 'el-icon-refresh-right',
            type: 'primary'
          },
          events: {
            clickFunc () {
              alert(123)
            }
          }
        },
        {
          label: '导出',
          props: {
            icon: 'el-icon-download',
            type: 'primary'
          },
          events: {
            clickFunc () {
              alert(123)
            }
          }
        }
      ],
      formButtonList: [
        {
          label: '搜索',
          props: {
            icon: 'el-icon-search',
            type: 'primary'
          },
          events: {
            clickFunc () {
              alert(123)
            }
          }
        },
        {
          label: '重置',
          props: {
            icon: 'el-icon-refresh-right',
            type: 'primary'
          },
          events: {
            clickFunc () {
              alert(123)
            }
          }
        },
        {
          label: '导出',
          props: {
            icon: 'el-icon-download',
            type: 'primary'
          },
          events: {
            clickFunc () {
              alert(123)
            }
          }
        }
      ],
      formList: [
        {
          type: 'input',
          props: {
            size: 'mini'
          }
        },
        {
          type: 'input',
          props: {
            size: 'mini'
          }
        },
        {
          type: 'input',
          props: {
            size: 'mini'
          }
        }
      ],
      tableList: [
        {
          field: 'name',
          label: '姓名'
        },
        {
          field: 'age',
          label: '年龄'
        },
        {
          field: 'address',
          label: '地址'
        }
      ],
      tableData: [
        {
          name: '张三',
          age: 18,
          address: '深港产学研基地'
        },
        {
          name: '张三',
          age: 18,
          address: '深港产学研基地'
        },
        {
          name: '张三',
          age: 18,
          address: '深港产学研基地'
        },
        {
          name: '张三',
          age: 18,
          address: '深港产学研基地'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
