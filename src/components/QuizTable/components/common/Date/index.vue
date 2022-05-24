<template>
  <div>
    {{ getDate }}
  </div>
</template>

<script>
export default {
  name: "QuizDate",
  props: ['id', 'item', 'value', 'defaultValue'],
  computed: {
    dayAgo() {
      const endDate = new Date().toISOString().slice(0, 10)
      const diffInMs = new Date(endDate) - new Date(this.value)
      const diffInDays = diffInMs / (1000 * 60 * 60 * 24)

      return Math.round(diffInDays)
    },
    getDate() {
      if ( this.dayAgo > 7 ) return new Date(this.value).toString().slice(0, 15)
      if ( this.dayAgo === 7 ) return 'week ago'
      if ( this.dayAgo === 0 ) return 'today';
      return this.dayAgo + ' days ago'
    }
  }
}
</script>

<style scoped>

</style>
