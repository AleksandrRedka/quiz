<template>
  <div class="quiz-buttons-panel">
    <add-section-buttons
        :elements="elements.sections"
        @section:add="addSection"
    />
    <add-section-buttons
        wrapper-class="--dividers"
        :elements="elements.dividers"
        @section:add="addSection"
    />
  </div>
</template>

<script>
import AddSectionButtons from "@/components/AddSectionButtons";
import builderElementTypes from "@/data/builderElementTypes";

export default {
  name: "QuizButtonsPanel",
  components: {
    'add-section-buttons': AddSectionButtons,
  },
  data() {
    return {
      elements: builderElementTypes,
    }
  },
  methods: {
    addSection(typeSection) {
      console.log('addSection', typeSection)
    },
  }
}
</script>

<style lang="scss" scoped>
 @import "src/assets/styles/components/quiz-buttons-panel/style.scss";
</style>
