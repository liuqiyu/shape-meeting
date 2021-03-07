<template>
  <div>
    <el-table :data="tableData"
              border
              style="width: 100%">
      <template v-for="(item, index) in tableList">
        <el-table-column :prop="item.field"
                         :label="item.label"
                         :width="item.width|| ''"
                         :key="index">
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'table-list',
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    tableList: {
      type: Array,
      default: () => []
    }
  }
}
</script>