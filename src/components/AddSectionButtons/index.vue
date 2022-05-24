<template>
  <ul :class="['add-section-buttons', wrapperClass]">
    <add-section-button
        v-for="element in elements"
        :key="element.title"
        :element-type="element.type"
        :element-title="element.title"
        :element-icon="element.iconType"
        @button:click="(typeEvent) => $emit('section:add', typeEvent)"
    />
  </ul>
</template>

<script>
import AddSectionButton from "@/components/AddSectionButtons/item/AddSectionButton";

export default {
  name: "AddSectionButtons",
  components: {
    'add-section-button': AddSectionButton
  },
  props: {
    'wrapperClass': {
      type: String,
      default: ''
    },
    'isDividedList': {
      type: Boolean,
      default: false,
    },
    'elements': {
      type: Array,
      required: true
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "src/assets/styles/components/quiz-builder/quiz-builder-elements-list/style";
</style>
