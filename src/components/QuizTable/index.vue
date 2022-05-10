<template>
  <div class="table-wrapper">
    <table class="table table-striped table-quiz table-borderless">
      <thead>
      <tr>
        <th
            v-for="head in setting"
            :key="head.id"
            :class="head.className"
        >
          {{ head.header }}
        </th>
      </tr>
      </thead>
      <tbody>
      <template>
        <quiz-table-item
            v-for="item in items"
            :key="item.id"
            :item="item"
            :cells="setting"
        />
      </template>
      </tbody>
    </table>
  </div>
</template>

<script>

import QuizTableItem from "@/components/QuizTable/Item";
import tableSettings from './settings';

export default {
  name: "QuizTable",
  props: [
    'items'
  ],
  components: {
    'quiz-table-item': QuizTableItem,
  },
  data() {
    return {
      setting: tableSettings.config
    }
  }
}
</script>

<style scoped>
.table-wrapper {
  width: 100%;
  overflow-x: auto;
}

table th {
  padding: 0.75rem;
}
</style>

<style>
.table-quiz {
  width: 100%;
  min-width: 800px;
  color: #212529;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, .025);
}

.table-quiz tbody tr:hover {
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.16);
}

.table.table-quiz td, .table.table-quiz th {
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  color: #333333;
  vertical-align: middle;
  text-align: center;
}

.table.table-quiz th {
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
}

.table.table-quiz td {
  font-family: 'Poppins', sans-serif;
  padding: 0.75rem;
}

</style>
