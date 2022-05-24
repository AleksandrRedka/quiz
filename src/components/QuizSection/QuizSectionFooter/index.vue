<template>
  <div class="quiz-section-footer">
    <add-answer-panel />
  </div>
</template>

<script>

import AddAnswerPanel from "@/components/AddAnswerPanel";

export default {
  name: "QuizSectionFooter",
  components: {
    'add-answer-panel': AddAnswerPanel,
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/components/quiz-section/quiz-section-footer/style.scss";
</style>
