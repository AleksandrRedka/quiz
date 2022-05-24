<template>
  <div class="pair-item">
    <div class="pair-item-content">
      <common-icon-button icon="formula" title="Formula" />
      <common-icon-button icon="inner-text" title="Inner text" />
      <input type="text" placeholder="Type here ...">
    </div>
    <div class="pair-item-actions">
      <common-icon-button icon="drag" title="Drag" />
    </div>
  </div>
</template>

<script>
import CommonIconButton from "@/components/_common/Buttons/CommonIconButton";
export default {
  name: "PairItem",
  components: {CommonIconButton}
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/components/quiz-section-filed/combining/pair-item/style.scss";
</style>
