<template>
  <div :class="['audio-field', className]">
    <common-upload-file
        icon="recording"
        label="Upload Audio"
        accept-types="audio/*,"
    />
    <span class="divider-or">OR</span>
    <common-button
        icon="audio"
        :text="isOpenRecord ? 'Close Record' : 'Record'"
        @button:click="isOpenRecord = !isOpenRecord"
    />
    <audio-recorder
        v-if="isOpenRecord"
        class="audio-record"
        :upload-url="uploadUrl"
        :time="10"
    />
  </div>
</template>

<script>
import CommonUploadFile from "@/components/_common/CommonInputs/CommonUploadFile";
import CommonButton from "@/components/_common/Buttons/CommonButton";

export default {
  name: "CommonAudioField",
  components: {CommonButton, CommonUploadFile},
  props: {
    'className': {
      type: String,
    },
    'uploadUrl': {
      type: String,
      default: ''
    },
    'data': {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isOpenRecord: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../assets/styles/components/quiz-section-filed/audio/style";
</style>
