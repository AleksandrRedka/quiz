<template>
  <div :class="['combining-field', className]">
    <div class="combining-field-pairs">
      <common-draggable
          group-name="first-col"
          :items="firstCol"
      >
        <div
            v-for="el of firstCol"
            :key="el"
        >
          <pair-item/>
        </div>
      </common-draggable>
      <common-draggable
          group-name="second-col"
          :items="secondCol"
      >
        <div
            v-for="el of secondCol"
            :key="el"
        >
          <pair-item/>
        </div>
      </common-draggable>
    </div>
    <common-button
        text="Add a Pair"
        @button:click="addPair()"
    />
  </div>
</template>

<script>
import CommonDraggable from "@/components/_common/CommonDraggable";
import CommonButton from "@/components/_common/Buttons/CommonButton";
import PairItem from "@/components/QuizSectionField/fields/CombiningField/components/PairItem";

export default {
  name: "CombiningField",
  components: {PairItem, CommonButton, CommonDraggable},
  props: {
    'className': {
      type: String,
    },
    'data': {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      firstCol: ['Type here',],
      secondCol: ['Type here']
    }
  },
  methods: {
    addPair() {
      console.log('Add pair')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/components/quiz-section-filed/combining/style.scss";
</style>
