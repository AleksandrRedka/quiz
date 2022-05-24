<template>
  <VueEditor
      class="text-editor"
      v-model="content"
      :editorToolbar="customToolbar"
  />
</template>

<script>
import { VueEditor, Quill } from "vue2-editor";
const sizeStyle = Quill.import('attributors/style/size')
sizeStyle.whitelist = ['10px', '12px', '14px', '16px', '18px', '20px', '24px', '30px', '32px', '36px']
Quill.register(sizeStyle, true)

export default {
  components: {
    VueEditor
  },
  name: 'CommonTextField',
  props: {
    data: {
      type: Object,
    },
    'className': {
      type: String,
    }
  },
  data() {
    return {
      content: "",
      customToolbar: [
        [ { 'font': [] }],
        [{ 'size': [false, '10px', '12px', '14px', '16px', '18px', '20px', '24px', '30px', '32px', '36px'] }],
        [{ color: [] }],
        [ "bold", "italic", "underline", "strike"],
        [ { list: "ordered" }, { list: "bullet" }, { list: "check" }],
        [
          { align: "" },
          { align: "center" },
          { align: "right" },
          { align: "justify" }
        ],
      ]
    };
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../assets/styles/components/quiz-section-filed/text-editor/style";
</style>
