<template>
  <div class="col-md-2 col-sm-3 order-sm-3 col-4 order-2 quiz-actions">
    <common-icon-button
        v-for="btn of buttons"
        :key="btn.id"
        :icon="btn.typeIcon"
        :title="btn.title"
        @button:click="$emit(`quiz:${btn.action}`)"
    />
  </div>
</template>

<script>
import CommonIconButton from "@/components/_common/Buttons/CommonIconButton";

export default {
  name: "QuizBuilderHeaderButtons",
  components: {
    'common-icon-button': CommonIconButton,
  },
  data(){
    return {
      buttons: [
        {
          id: 1,
          typeIcon: 'save',
          title: 'Save',
          action: 'save'
        },
        {
          id: 2,
          typeIcon: 'close',
          title: 'Close',
          action: 'close'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/components/quiz-builder/quiz-builder-actions/style.scss";
</style>
