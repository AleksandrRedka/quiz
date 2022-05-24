<template>
  <div type="button" :class="['common-button']" @click="$emit('button:click')">
    <common-icon v-if="icon" :icon="icon"/>
    <span>{{ text }}</span>
  </div>
</template>

<script>
import CommonIcon from "@/components/_common/CommonIcon";

export default {
  name: "CommonButton",
  components: {
    'common-icon': CommonIcon
  },
  props: {
    'className':{
      type: String
    },
    'text': {
      type: String,
      default: 'Upload File'
    },
    'icon': {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/components/_common/buttons/button/style.scss";
</style>
