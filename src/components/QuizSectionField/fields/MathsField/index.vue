<template>
  <div :class="['maths-field', className]">
    <p>
      Text and mathematical formula (
      <a href="https://katex.org/docs/supported.html" target="_blank">Katex</a>
      syntax between "$$"):
    </p>
    <div class="example">
      <p><strong>Example:</strong> $$f(x) = \int_{-\infty}^\infty \hat f(\xi)\,e^{2 \pi i \xi x} \,d\xi$$</p>
    </div>
    <p>Text and formatted mathematical formula:</p>
    <textarea type="text" v-model="formula" />
    <p>Result:</p>
      <div v-for="(el, index) of resultArr" :key="index" v-katex="el"></div>
  </div>
</template>

<script>
export default {
  name: "MathsField",
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
      formula: ''
    }
  },
  computed: {
    katexSetup() {
      return {
        expression: this.formula,
        options: {
          displayMode: true
        }}
    },
    resultArr() {
      return this.formula.split('$$')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/components/quiz-section-filed/maths/style.scss";
</style>
