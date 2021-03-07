<template>
  <div class="button-list">
    <template v-for="(item, index) in buttonList">
      <el-button v-bind="item.props"
                 :key="index"
                 @click="handleClick(item)">{{item.label}}</el-button>
    </template>
  </div>
</template>

<script>
export default {
  name: 'button-list',
  props: {
    buttonList: {
      require: true,
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleClick (item) {
      try {
        if (item.events && Object.keys(item.events).length > 0 && item.events.clickFunc && typeof item.events.clickFunc === 'function') {
          item.events.clickFunc(item)
        }
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
</script>
