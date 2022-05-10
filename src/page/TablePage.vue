<template>
  <div class="wrapper">
    <quiz-search @search:update="updateSearch"/>
    <quiz-table :items="filteredItems"/>
  </div>
</template>

<script>
import QuizTable from "@/components/QuizTable";
import data from "@/data";
import QuizSearch from "@/components/QuizSearch";

export default {
  name: "TablePage",
  components: {
    QuizSearch,
    "quiz-table": QuizTable
  },
  data() {
    return {
      items: data.items,
      searchValue: ''
    }
  },
  computed: {
    filteredItems() {
      if (!this.searchValue) return this.items;
      return this.items.filter(({ title }) => title.includes(this.searchValue))
    }
  },
  methods: {
    updateSearch(value) {
      this.searchValue = value;
    }
  }

}
</script>

<style scoped>
  .wrapper {
    margin-top: 50px;
  }
</style>
