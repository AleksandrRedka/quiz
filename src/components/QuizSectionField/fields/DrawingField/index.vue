<template>
  <div ref="drawingField" :class="['drawing-field', className]">
    <div class="drawing-field-tools">
      <div :class="['drawing-field-tool', activeTool === toolEl.type && 'active']"
           v-for="toolEl of tools"
           :key="toolEl.id"
      >
        <common-icon-button
            v-if="toolEl.type !== 'color'"
            :title="toolEl.title"
            :icon="toolEl.iconType"
            @button:click="toolsEventHandler(toolEl.type)"
        />
        <div v-else>
          <input
              class="color-picker"
              type="color"
              v-model="color"
              @change="changeColor"
              />
        </div>
      </div>
    </div>
    <editor :canvasWidth="900" :canvasHeight="200" ref="editor" editorId="canvasId"/>
  </div>
</template>-

<script>
import tools from "./tools"

import Editor from 'vue-image-markup';
import CommonIconButton from "@/components/_common/Buttons/CommonIconButton";


export default {
  name: "DrawingField",
  components: {
    'common-icon-button':CommonIconButton,
    'editor': Editor
  },
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
      color: '#000000',
      editorWidth: 600,
      editorHeight: 300,
      activeTool: '',
      tools: tools
    }
  },
  methods: {
    toolsEventHandler(tool){
      this.activeTool = tool;

      switch (tool) {
        case 'inner-text': {
          this.addText()
          break
        }
        case 'filling': {
          this.filing()
          break
        }
        case 'drawing': {
          this.drawing()
          break
        }
        case 'undo': {
          this.undo()
          break
        }
        case 'redo': {
          this.redo()
          break
        }
        case 'delete': {
          this.deleteEditable()
          break
        }
        default: return
      }
    },
    undo() {
      this.$refs.editor.undo();
    },
    redo() {
      this.$refs.editor.redo();
    },
    changeColor() {
      this.$refs.editor.set("reset");
      this.toolsEventHandler(this.activeTool)
      this.$refs.editor.changeColor(this.color);
    },
    deleteEditable() {
      this.$refs.editor.clear();
    },
    drawing() {
      let customizeFreeDrawing = { stroke: this.color, strokeWidth: "5" };
      this.$refs.editor.set("freeDrawing", customizeFreeDrawing);
    },
    filing() {
      let customizeFreeDrawing = { stroke: this.color, strokeWidth: "1" };
      this.$refs.editor.set("freeDrawing", customizeFreeDrawing);
    },
    addText(){
      let textModeOptions = {
        fill: this.color,
        fontSize: 20,
      };
      this.$refs.editor.set("text", textModeOptions);
    }
  },
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/components/quiz-section-filed/drawing/style.scss";
</style>
