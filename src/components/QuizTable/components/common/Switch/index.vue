<template>
  <div class="toggle-btn">
    <input type="checkbox"
           :id="'quiz'+ item.id"
           v-model="currentValue"
           @change.stop.prevent ="$emit('item:update', currentValue)"
    >
    <label :for="'quiz'+ item.id"></label>
  </div>
</template>

<script>
export default {
  name: "QuizSwitch",
  props: ['item', 'value'],
  data() {
    return {
      currentValue: false
    }
  },
  mounted() {
    this.currentValue = this.value
  }
}
</script>

<style scoped>
  input {
    display: none;
  }
  .toggle-btn {
    height: 20px;
  }
  .toggle-btn input[type="checkbox"] {
    display: none;
  }
  .toggle-btn label {
    cursor: pointer;
    position: relative;
    height: 20px;
    width: 37px;
    margin-bottom: 0;
  }
  .toggle-btn input[type="checkbox"] + label::before {
    content: ' ';
    display: block;
    height: 20px;
    width: 37px;
    border: 1px solid #E0E0E0;
    border-radius: 20px;
    position: absolute;
    top: 0;
    left: 0;
    background: #E0E0E0;
  }
  .toggle-btn input[type="checkbox"] + label::after {
    content: ' ';
    display: block;
    height: 14px;
    width: 14px;
    border: 1px solid #fff;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 3px;
    background: #fff;
    transition: all 0.3s ease-in;
  }
  .toggle-btn input[type="checkbox"]:checked + label::before {
    background-color: #2CF2FF;
    border-color: #2CF2FF;
  }
  .toggle-btn input[type="checkbox"]:checked + label::after {
    left: 20px;
    transition: all 0.3s ease-in;
  }
</style>
