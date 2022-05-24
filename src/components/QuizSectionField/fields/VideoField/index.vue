<template>
  <div :class="['video-field', className]">
    <label :for="`video-field${data.id}`">URL ADDRESS:</label>
    <input
        :id="`video-field${data.id}`"
        type="text"
        @input="$emit('field:change', currentValue)"
    />
  </div>
</template>

<script>
export default {
  name: "VideoField",
  props: {
    'className': {
      type: String,
    },
    'data': {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      currentValue: ''
    }
  },
  mounted() {
    if(this.value) this.currentValue = this.value
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/components/quiz-section-filed/video/style.scss";
</style>
