<template>
  <el-form-item label="活动名称">
    <component :is="currentComponent"></component>
  </el-form-item>
</template>

<script>
export default {
  name: 'form-item',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    currentComponent () {
      return 'el-input'
    }
  }
}
</script>