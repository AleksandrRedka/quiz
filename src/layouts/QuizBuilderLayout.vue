<template>
  <div class="page-wrapper">
    <header :class="['quiz-builder-header', classHeader]">
      <div :class="['header-top', classHeaderTop]">
        <div class="row align-items-center">
          <slot name="header-top"/>
          <quiz-builder-header-buttons
              @quiz:save="$emit('quiz:save')"
              @quiz:close="$emit('quiz:close')"
          />
        </div>
      </div>
      <div :class="['header-bottom', classHeaderBottom]">
        <slot name="header-bottom" />
      </div>
    </header>

    <section :class="['quiz-builder-body', classSection]">
      <div :class="[
            'quiz-builder-sidebar',
            classSidebar,
            !sidebarIsOpen && 'closed'
          ]">
        <div :class="['quiz-builder-sidebar-components', classSidebarComponents]">
          <slot name="sidebar"/>
        </div>
        <div class="quiz-builder-sidebar-toggle">
          <button type="button" @click="toggleSidebar">
            <icon-arrow-left/>
          </button>
        </div>
      </div>
      <div :class="['quiz-builder-content', classContent]">
        <slot name="content"/>
      </div>
    </section>
  </div>
</template>

<script>
import IconArrowLeft from "@/components/_common/CommonIcon/icons/IconArrowLeft";
import QuizBuilderHeaderButtons from "@/components/QuizBuilder/HeaderButtons/QuizBuilderHeaderButtons";

export default {
  name: "QuizBuilderLayout",
  components: {
    'icon-arrow-left': IconArrowLeft,
    'quiz-builder-header-buttons': QuizBuilderHeaderButtons
  },
  props: {
    'classHeader': {
      type: String,
      default: ''
    },
    'classHeaderTop': {
      type: String,
      default: ''
    },
    'classHeaderBottom': {
      type: String,
      default: ''
    },
    'classSection': {
      type: String,
      default: ''
    },
    'classSidebar': {
      type: String,
      default: ''
    },
    'classSidebarComponents': {
      type: String,
      default: ''
    },
    'classContent': {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      sidebarIsOpen: true
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarIsOpen = !this.sidebarIsOpen
    },
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/layouts/quiz-builder-layout.scss";
</style>
