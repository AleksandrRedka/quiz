<template>
  <li>
    <button
        type="button"
        :title="elementTitle"
        :class="['add-section-button']"
        @click="$emit('button:click', elementType)"
    >
      <icon :icon="elementIcon"/>
    </button>
  </li>
</template>

<script>
export default {
  name: "QuizBuilderListElement",
  components: {
    'icon': () => import(/* webpackChunkName: "icon-component"*/ "@/components/_common/CommonIcon")
  },
  props: {
    elementType: {
      type: String,
      required: true
    },
    elementIcon: {
      type: String,
      default: ""
    },
    elementTitle: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/components/quiz-builder/quiz-builder-element/style";
</style>
