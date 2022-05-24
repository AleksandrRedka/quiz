<template>
  <tr class="quiz-item">
    <td v-for="cell of cells"
        :key="cell.id"
        :class="cell.className"
    >
      <component
          :is="`quiz-${cell.type}`"
          :id="'quiz' + item.id"
          :item="item"
          :value="item[cell.field]"
          :defaultValue="item[cell.default]"
          @item:update="(value) => itemUpdateHandler(cell.field, value)"
          @item:action="(action) => itemActionHandler(action, item)"
      />
    </td>
  </tr>
</template>

<script>
import QuizSwitch from "@/components/_common/CommonInputs/CommonSwitch";
import QuizText from "@/components/QuizTable/components/common/Text";
import QuizDate from "@/components/QuizTable/components/common/Date";
import QuizItemActions from "@/components/QuizTable/components/QuizTableActions/QuizItemActions";

export default {
  name: "QuizTableItem",
  components: {
    'quiz-switch': QuizSwitch,
    'quiz-text': QuizText,
    'quiz-date': QuizDate,
    'quiz-actions': QuizItemActions
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    cells: {
      type: Array,
      required: true
    }
  },
  methods: {
    itemUpdateHandler(field, value) {
      this.item[field] && (this.item[field] = value)
    },
    itemActionHandler(action, item) {
      const actionsListeners = {
        'edit': this.editEl,
        'view': () => console.log('View', item),
        'duplicate': () => console.log('Duplicate', item),
        'delete': () => console.log('Delete', item),
        'drag': () => console.log('Drag', item),
        'share': () => console.log('Share', item),
      }
      if(actionsListeners[action]){
        actionsListeners[action]()
      } else {
        console.error('Action is not found', action)
      }
    },
    editEl() {
      this.$router.push({ path: `/quiz/${this.item.id}`})
    }
  }
}
</script>

<style>
.quiz-item-actions {
  width: 250px;
}
</style>

<style scoped>
  .quiz-item > td:first-child {
    text-align: left;
  }
</style>
