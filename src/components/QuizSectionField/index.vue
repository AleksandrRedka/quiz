<template>
  <component
      :class="['quiz-section-field', className]"
      :is="`${field.type}-field`"
      :data="field"
  ></component>
</template>

<script>
export default {
  name: "QuizSectionField",
  props:{
    'field': {
      type: Object,
      required: true
    },
    'className': {
      type: String,
    }
  },
  components: {
    'text-field': () => import( /* webpackChunkName: "field-text"*/  "@/components/QuizSectionField/fields/TextField"),
    'audio-field': () => import( /* webpackChunkName: "field-audio"*/  "@/components/QuizSectionField/fields/AudioField"),
    'image-field': () =>import( /* webpackChunkName: "field-image"*/  "@/components/QuizSectionField/fields/ImageField"),
    'video-field': () => import( /* webpackChunkName: "field-video"*/  "@/components/QuizSectionField/fields/VideoField"),
    'drawing-field': () => import( /* webpackChunkName: "field-drawing"*/  "@/components/QuizSectionField/fields/DrawingField"),
    'maths-field': () => import( /* webpackChunkName: "field-maths"*/  "@/components/QuizSectionField/fields/MathsField"),
    'filling-field': () => import( /* webpackChunkName: "field-filling"*/  "@/components/QuizSectionField/fields/TextField"),
    'choice-field': () => import( /* webpackChunkName: "field-choice"*/  "@/components/QuizSectionField/fields/TextField"),
    'combining-field': () => import( /* webpackChunkName: "field-combining"*/  "@/components/QuizSectionField/fields/CombiningField"),
  }
}
</script>

<style scoped>
</style>
