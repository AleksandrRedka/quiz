<template>
    <draggable
        :tag="tag"
        :class="[classWrapper, !disabled && animationClass]"
        :list="items"
        :group="groupName"
        :disabled="disabled"
    >
      <slot></slot>
    </draggable>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: "CommonDraggable",
  components: {
    draggable
  },
  props: {
    'classWrapper': {
      type: String,
    },
    'groupName': {
      type: String,
      required: true,
    },
    'items': {
      type: Array,
      required: true
    },
    'tag': {
      type: String,
      default: 'div',
    },
    'disabled': {
      type: Boolean,
      default: true
    },
    'animationClass': {
      type: String,
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/components/_common/draggable/style.scss";
</style>
