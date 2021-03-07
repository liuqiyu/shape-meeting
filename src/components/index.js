import QueryTable from './query-table'

/* istanbul ignore next */
QueryTable.install = function (Vue) {
  Vue.component(QueryTable.name, QueryTable)
}

export default QueryTable