<template>
  <div class="page-wrapper">
    <div class="container-fluid py-4">
      <quiz-input
          id="table-quiz-search"
          class-name="search-quiz mb-1"
          placeholder="Search quiz"
          @input="updateSearch"
      />
      <quiz-table :items="filteredItems"/>
    </div>
  </div>
</template>

<script>
import QuizTable from "@/components/QuizTable";
import data from "@/data";
import QuizInput from "@/components/_common/CommonInputs/CommonInput";

export default {
  name: "QuizTable",
  components: {
    "quiz-input": QuizInput,
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
</style>
