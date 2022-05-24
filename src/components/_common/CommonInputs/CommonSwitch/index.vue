<template>
  <div class="toggle-btn">
    <input
        type="checkbox"
        :id="id"
        v-model="currentValue"
        @change.stop.prevent="$emit('item:update', currentValue)"
    >
    <label :for="id"></label>
  </div>
</template>

<script>
export default {
  name: "CommonSwitch",
  props: {
    'id': {
      type: String,
      required: true
    },
    'item': {
      type: Object,
    },
    'value': {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../assets/styles/components/_common/inputs/switch/style.scss";
</style>
