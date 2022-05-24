<template>
  <quiz-builder-layout
      @quiz:save="pageSave"
      @quiz:close="pageClose"
  >
    <template #header-top>
      <div class="col-lg-4 col-md-4 col-sm-5 col-8 order-1">
        <common-input
            v-if="!loading && item"
            id="header-input-name"
            :value="item.title"
            class-wrapper="quiz-name"
            class-name="form-control"
            placeholder="Name of the quiz"
            @input="changeName"
        />
      </div>
      <div class="col-md-6 col-sm-4 order-sm-2 col-12 order-3 pt-2 pt-sm-0">
        <common-date-picker
            v-if="!loading && item"
            class-name="input-group"
            input-class-name="form-control"
            placeholder="Due date"
            format="MM/DD/YYYY"
            :value="item.sendBefore"
            :editable="false"
        />
      </div>
    </template>

    <template #header-bottom>
      <quiz-buttons-panel />
    </template>

    <template #sidebar>
      <common-head tag="h3" title="All components"/>
      <hr>
      <common-draggable
          class-wrapper="quiz-components-list"
          tag="ul"
          :items="fields"
          group-name="sidebar-components"
          animation-class="shake-list"
          :disabled="disabledDragComponentsSidebar"
          v-click-outside="clickOutsideComponentsList"
      >
          <field-component
              v-for="el of fields"
              :key="el.id"
              :field="el"
              @component:click="eventHandlerSidebarComponent"
          />
      </common-draggable>
    </template>

    <template #content>
      <div class="d-flex justify-content-center" v-if="loading && !item">
        Loading....
      </div>
      <common-draggable
          v-else
          class-wrapper="quiz-section-list"
          :items="fields"
          group-name="editor"
          animation-class="shake-list"
          :disabled="disabledDragComponentsContent"
          v-click-outside="clickOutsideSectionList"
      >
          <div
              v-for="el of fields"
              :key="el.id"
          >
            <div v-if="!isDividerElement(el.type)">
              <quiz-section-container
                  :field="el"
                  @section:action="eventHandlerSection"
              />
              <add-section-toggle class-name="sections-divider" />
            </div>
            <div v-else>
            </div>
          </div>
      </common-draggable>
    </template>
  </quiz-builder-layout>
</template>

<script>
import {getItemById} from "@/api/quizes";
import builderElementTypes from "@/data/builderElementTypes";
import fieldsTypes from "@/data/fieldsTypes";

import CommonHead from "@/components/_common/CommonHead";
import CommonInput from "@/components/_common/CommonInputs/CommonInput";
import CommonDraggable from "@/components/_common/CommonDraggable";
import CommonDatePicker from '@/components/_common/CommonInputs/CommonDatePicker';

import QuizBuilderLayout from "@/layouts/QuizBuilderLayout";
import FieldComponent from "@/components/QuizBuilder/Sidebar/FieldComponent";
import QuizSectionContainer from "@/containers/QuizSectionContainer.vue";
import QuizButtonsPanel from "@/components/QuizButtonsPanel";
import AddSectionToggle from "@/components/AddSectionToggle";

export default {
  name: "Quiz",
  components: {
    'add-section-toggle': AddSectionToggle,
    'quiz-buttons-panel': QuizButtonsPanel,
    'quiz-section-container': QuizSectionContainer,
    'common-head': CommonHead,
    'common-input': CommonInput,
    'common-draggable' :CommonDraggable,
    'common-date-picker': CommonDatePicker,
    'field-component': FieldComponent,
    'quiz-builder-layout': QuizBuilderLayout,
  },
  data() {
    return {
      item: null,
      loading: true,
      error: [],
      disabledDragComponentsSidebar: true,
      disabledDragComponentsContent: true,

      elements: builderElementTypes,

      fields: fieldsTypes.fields,
    }
  },
  methods: {
    pageClose() {
      this.$router.push('/')
    },
    pageSave() {
      console.log('Save')
    },
    changeName(value) {
      console.log('name', value)
    },
    elementEventHandler(typeEvent) {
      console.log('Element event add', typeEvent)
      switch (typeEvent) {
            case 'text': break;
            case 'audio': break;
            case 'image': break;
            case 'video': break;
            case 'drawing':break;
            case 'maths': break;
            case 'filling': break;
            case 'choice': break;
            case 'combining': break;

            case 'blank':break;
            case 'dashed':break;
            case 'line':break;

          default: console.log('Listener not found')
      }
    },
    eventHandlerSidebarComponent(typeEvent) {
      console.log('Component event add', typeEvent)
      switch (typeEvent) {
        case 'select':break;

        case 'duplicate':break;
        case 'delete':break;
        case 'drag':{
          this.disabledDragComponentsSidebar = !this.disabledDragComponentsSidebar;
          break
        }
        default: console.log('Listener not found')
      }
    },
    eventHandlerSection(typeEvent) {
      console.log('Component event add', typeEvent)
      switch (typeEvent) {
        case 'select':break;

        case 'duplicate':break;
        case 'delete':break;
        case 'drag':{
          this.disabledDragComponentsContent = !this.disabledDragComponentsContent;
          break;
        }
        default: console.log('Listener not found')
      }
    },
    isDividerElement(type){
      const dividerTypes = ['blank', 'dashed', 'line']
      return dividerTypes.includes(type)
    },
    clickOutsideComponentsList(){
      this.disabledDragComponentsSidebar = true;
    },
    clickOutsideSectionList(){
      this.disabledDragComponentsContent = true;
    }
  },
  async mounted() {
    try {
      this.item = await getItemById(this.$route.params.id)
    } catch {
      this.error.push('Item is not found')
    } finally {
      this.loading = false
    }
  }
}
</script>

<style scoped>
</style>
