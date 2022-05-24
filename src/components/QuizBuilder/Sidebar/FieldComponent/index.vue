<template>
  <li
      :class="['field-component',active && 'active']"
      v-click-outside="deactivate"
      @click="activate"
  >
    <div class="field-component-wrapper">
      <div class="field-component-content">
        <common-icon :icon="field.iconType" />
        <span>{{field.title}}</span>
      </div>
      <div class="field-component-more">
        <button type="button">
          <common-icon icon="ellipsis"/>
        </button>
        <ul class="field-component-actions">
            <li v-for="btn in buttons"
                :key="btn.id"
            >
              <button
                  :title="btn.title"
                  type="button"
                  @click.prevent="$emit('component:click', btn.action )"
              >
                <common-icon :icon="btn.icon" />
              </button>
            </li>
        </ul>
      </div>
    </div>
  </li>
</template>

<script>
import CommonIcon from "@/components/_common/CommonIcon";
import buttons from './buttons'

export default {
  name: "FieldComponent",
  components: {
    'common-icon': CommonIcon
  },
  props: {
    'field': {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      buttons: buttons.buttons,
      active: false
    }
  },
  methods:{
    activate(){
      this.active = true
      const header = document.getElementsByClassName(`quiz-builder-header`)[0];
      const section = document.getElementById(`section-${this.field.id}`)
      if(header && section) {
        const heightHeader = header.offsetHeight
        const sectionOffsetTop = section.offsetTop
        document.getElementsByClassName('quiz-builder-content')[0].scrollTo({ top: sectionOffsetTop - heightHeader, behavior: "smooth"})
      }

    },
    deactivate(){
      this.active = false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "src/assets/styles/components/quiz-builder/field-component/style";
</style>
