<template>
  <div>{{!!value ? value : defaultValue}}</div>
</template>

<script>
export default {
  name: "QuizText",
  props: ['id', 'item', 'value', 'defaultValue']
}
</script>

<style scoped>
</style>
