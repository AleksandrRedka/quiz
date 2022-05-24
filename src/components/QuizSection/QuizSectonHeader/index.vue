<template>
  <div class="quiz-section-header">
    <common-icon
        :icon="mainIcon"
    />
    <ul class="quiz-section-header__actions">
      <li v-for="btn in buttons"
          :key="btn.id"
      >
        <button
            :title="btn.title"
            type="button"
            @click.prevent="$emit('section:action', btn.action )"
        >
          <common-icon
              :icon="btn.icon"
          />
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import CommonIcon from "@/components/_common/CommonIcon";


export default {
  name: "QuizSectionHeader",
  components: {
    'common-icon': CommonIcon
  },
  props: {
    'mainIcon': {
      type: String,
    },
    'isActiveQuiz': {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
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
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/components/quiz-section/quiz-section-header/style";
</style>
