<template>
  <div :class="['common-upload-file']">
        <label>
          <common-button
              :icon="icon"
              :text="label"
          />
          <input
              type="file"
              :accept="acceptTypes"
              @change="(e) => changeFile(e)"
          >
          <span v-if="file">{{file.name}}</span>
        </label>
  </div>
</template>

<script>
import CommonButton from "@/components/_common/Buttons/CommonButton";

export default {
  name: "CommonUploadFile",
  components: {
    'common-button': CommonButton
  },
  props: {
    'className': {
      type: String
    },
    'label': {
      type: String,
      default: 'Upload File'
    },
    'icon': {
      type: String,
      default: ''
    },
    'acceptTypes': {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      file: null
    }
  },
  methods: {
    changeFile(e) {
      this.file = e.target.files[0];
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/components/_common/inputs/file/style.scss";
</style>
