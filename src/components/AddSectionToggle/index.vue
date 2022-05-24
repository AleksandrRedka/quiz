<template>
  <div :class="['add-section-toggle', className]">
    <div class="add-section-toggle__btn">
      <common-icon-button
          :title="controlsIsVisible ?  'Close' : 'Add'"
          :icon="controlsIsVisible ?  'minus' : 'plus'"
          @button:click="controlsIsVisible = !controlsIsVisible"
      />
    </div>
    <div
        v-if="controlsIsVisible"
        class="add-section-toggle__panel"
    >
      <quiz-buttons-panel/>
    </div>
  </div>
</template>

<script>
import QuizButtonsPanel from "@/components/QuizButtonsPanel";
import CommonIconButton from "@/components/_common/Buttons/CommonIconButton";

export default {
  name: "AddSectionToggle",
  components: {
    'quiz-buttons-panel': QuizButtonsPanel,
    'common-icon-button': CommonIconButton,
  },
  props: {
    'className': {
      type: String,
    }
  },
  data() {
    return {
      controlsIsVisible: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/components/add-section-toggle/style.scss";
</style>
