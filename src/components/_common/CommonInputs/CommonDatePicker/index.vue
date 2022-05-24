<template>
  <date-picker
      v-model="currentValue"
      :class="className"
      :input-class="inputClassName"
      :placeholder="placeholder"
      :editable="editable"
      :format="format"
      :title-format="format"
      @change="$emit('change')"
      :defaultValue="value"
  >
    <template #icon-calendar>
      <icon-calendar />
    </template>
  </date-picker>
</template>

<script>
import DatePicker from "vue2-datepicker";

export default {
  name: "CommonDatePicker",
  components: {
    IconCalendar: () => (import(/* webpackChunkName: "icon-calendar"*/ "@/components/_common/CommonIcon/icons/IconCalendar")),
    'date-picker': DatePicker
  },
  props: {
    value: {
      type: String,
      default: null
    },
    'className': {
      type: String,
      default: ''
    },
    'inputClassName': {
      type: String,
      default: ''
    },
    'placeholder': {
      type: String,
      default: ''
    },
    'editable': {
      type: Boolean,
      default: true
    },
    'format': {
      type: String, // like 'YYYY-MM-DD'
      default: 'YYYY-MM-DD'
    },
  },
  data() {
    return {
      currentValue: '',
    }
  },
  mounted() {
    if(this.value) {
      this.currentValue = new Date(this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../../assets/styles/components/_common/inputs/datepicker/style";
</style>
