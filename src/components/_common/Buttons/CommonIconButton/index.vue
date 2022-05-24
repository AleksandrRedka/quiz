<template>
  <button :class="className"
          type="button"
          :title="title"
          @click="$emit('button:click')">
    <common-icon
        :icon="icon"
    />
    <slot/>
  </button>
</template>

<script>
import CommonIcon from "@/components/_common/CommonIcon";

export default {
  name: "CommonIconButton",
  components: {
    'common-icon': CommonIcon
  },
  props: {
    'icon': {
      type: String,
      default: "ellipsis"
    },
    'className': {
      type: String,
    },
    'title': {
      type: String,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../../../assets/styles/components/_common/buttons/button-icon/style";
</style>
