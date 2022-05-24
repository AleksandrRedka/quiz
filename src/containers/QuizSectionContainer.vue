<template>
  <div
      :class="['quiz-section', isActiveQuiz && 'active']"
      :id="`section-${field.id}`"
      @click="isActiveQuiz = true"
      v-click-outside="clickOutside"
  >
    <quiz-section-header
        :main-icon="field.iconType"
        :is-active-quiz="isActiveQuiz"
        @section:action="(eventType) => $emit('section:action', eventType)"
    />

    <div class="quiz-section-body">
      <div class="quiz-section-content">
        <quiz-section-field :field="field"/>
      </div>

      <div class="quiz-section-points">
        <span>Points :</span>
        <input
            v-model="currentPoint"
            type="text"
            class="form-control"
            @input="$emit('point:update', currentPoint)"
        >
      </div>
      <hr>
    </div>

    <quiz-section-footer />
  </div>
</template>

<script>
import QuizSectionHeader from "@/components/QuizSection/QuizSectonHeader";
import QuizSectionFooter from "@/components/QuizSection/QuizSectionFooter";
import QuizSectionField from "@/components/QuizSectionField";

export default {
  name: "QuizSection",
  components: {
    'quiz-section-field': QuizSectionField,
    'quiz-section-footer':QuizSectionFooter,
    'quiz-section-header': QuizSectionHeader,
  },
  props: {
    'field': {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isActiveQuiz: false,
      addAnswerButtonsVisible: false,
      currentPoint: '',

      buttons: [
        {
          id: 1,
          icon: 'duplicate',
          action: 'duplicate',
          title: 'Duplicate'
        },
        {
          id: 2,
          icon: 'delete',
          action: 'delete',
          title: 'Delete'
        },
        {
          id: 3,
          icon: 'drag',
          action: 'drag',
          title: 'Delete'
        }
      ]
    }
  },
  methods: {
    addAnswer() {
      console.log('Add answer')
    },
    clickOutside() {
      this.isActiveQuiz = false
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/components/quiz-section/style";
</style>
