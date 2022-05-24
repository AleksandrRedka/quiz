<template>
  <div class="add-answer-panel">
    <span
        class="add-answer-panel__title"
        v-html="'Add Answer'"
    />
    <add-section-toggle class-name="add-answer"/>
  </div>
</template>

<script>
import AddSectionToggle from "@/components/AddSectionToggle";

export default {
  name: "AddAnswerPanel",
  components: {
    'add-section-toggle': AddSectionToggle,
  },
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/components/add-answer-panel/style.scss";
</style>
