<template>
  <el-form ref="form"
           inline
           :model="form"
           label-width="80px">
    <form-item v-for="(item, index) in formList"
               :key="index"></form-item>
    <slot>123</slot>
  </el-form>
</template>

<script>
import FormItem from './../form-item'

export default {
  name: 'form-wrapper',
  components: {
    FormItem
  },
  props: {
    formList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      form: {}
    }
  }
}
</script>