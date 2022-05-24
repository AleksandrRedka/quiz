<template>
  <div :class="[classWrapper]">
    <label v-if="inputLable" :for="id">{{inputLable}}</label>
    <input
        :id="id"
        :type="type"
        :value="value"
        :class="['form-control', 'common-input', className]"
        :placeholder="placeholder"
        v-model="currentValue"
        @focus.prevent="$emit('focus', $event)"
        @input.prevent="$emit('input', currentValue)"
        @change.prevent="$emit('change', $event)"
    >
  </div>
</template>

<script>
export default {
  name: "CommonInput",
  props: {
    "classWrapper": {
      type: String,
      default: ''
    },
    'type': {
      type: String,
      default: 'text'
    },
    'value': {
      type: String,
      default: ''
    },
    'placeholder': {
      type: String,
      default: ''
    },
    'className': {
      type: String,
      default: ''
    },
    'inputLable': {
      type: String,
      default: ''
    },
    'id': {
      type: String,
      required: true
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
@import "../../../../assets/styles/components/_common/inputs/input/style.scss";
</style>
