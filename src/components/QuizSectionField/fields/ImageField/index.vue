<template>
  <div :class="['image-field', className]">
    <common-upload-file
        icon="image"
        label="Upload Image"
        accept-types="image/*,"
    />
  </div>
</template>

<script>
import CommonUploadFile from "@/components/_common/CommonInputs/CommonUploadFile";

export default {
  name: "ImageField",
  components: {
    'common-upload-file': CommonUploadFile
  },
  props: {
    'className': {
      type: String,
    },
    'data': {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
