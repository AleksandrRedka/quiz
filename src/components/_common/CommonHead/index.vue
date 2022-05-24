<template>
  <component :is="tag" :class="className">
    {{ title }}
  </component>
</template>

<script>
export default {
  name: "HeadTitle",
  props: {
    'tag': {
      type: String,
      required: true
    },
    'title': {
      type: String,
      required: true
    },
    'className': {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
 @import "../../../assets/styles/components/_common/head/style";
</style>
