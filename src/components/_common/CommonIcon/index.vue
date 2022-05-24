<template>
  <component :is="`icon-${icon}`"/>
</template>

<script>
export default {
  name: "CommonIcon",
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  components: {
    'icon-text': () => import( /* webpackChunkName: "icon-text"*/  "@/components/_common/CommonIcon/icons/IconText"),
    'icon-audio': () => import( /* webpackChunkName: "icon-audio"*/  "@/components/_common/CommonIcon/icons/IconAudio"),
    'icon-image': () => import( /* webpackChunkName: "icon-image"*/  "@/components/_common/CommonIcon/icons/IconImage"),
    'icon-drawing': () => import( /* webpackChunkName: "icon-drawing"*/  "@/components/_common/CommonIcon/icons/IconDrawing"),
    'icon-maths': () => import( /* webpackChunkName: "icon-maths"*/  "@/components/_common/CommonIcon/icons/IconMaths"),
    'icon-video': () => import( /* webpackChunkName: "icon-video"*/  "@/components/_common/CommonIcon/icons/IconVideo"),
    'icon-filling': () => import( /* webpackChunkName: "icon-filling"*/  "@/components/_common/CommonIcon/icons/IconFilling"),
    'icon-choice': () => import( /* webpackChunkName: "icon-choice"*/  "@/components/_common/CommonIcon/icons/IconCheck"),
    'icon-combining': () => import( /* webpackChunkName: "icon-combining"*/  "@/components/_common/CommonIcon/icons/IconCombining"),
    'icon-blank': () => import( /* webpackChunkName: "icon-blank"*/  "@/components/_common/CommonIcon/icons/IconBlank"),
    'icon-dashed': () => import( /* webpackChunkName: "icon-dashed"*/  "@/components/_common/CommonIcon/icons/IconDashed"),
    'icon-line': () => import( /* webpackChunkName: "icon-line"*/  "@/components/_common/CommonIcon/icons/IconLine"),
    'icon-ellipsis': () => import( /* webpackChunkName: "icon-ellipsis"*/  "@/components/_common/CommonIcon/icons/IconEllipsis"),
    'icon-duplicate': () => import( /* webpackChunkName: "icon-duplicate"*/  "@/components/_common/CommonIcon/icons/IconDuplicate"),
    'icon-delete': () => import( /* webpackChunkName: "icon-delete"*/  "@/components/_common/CommonIcon/icons/IconDelete"),
    'icon-drag': () => import( /* webpackChunkName: "icon-drag"*/  "@/components/_common/CommonIcon/icons/IconDrag"),
    'icon-plus': () => import( /* webpackChunkName: "icon-plus"*/  "@/components/_common/CommonIcon/icons/IconPlus"),
    'icon-minus': () => import( /* webpackChunkName: "icon-minus"*/  "@/components/_common/CommonIcon/icons/IconMinus"),
    'icon-recording': () => import( /* webpackChunkName: "icon-recording"*/  "@/components/_common/CommonIcon/icons/IconRecording"),
    'icon-inner-text': () => import( /* webpackChunkName: "icon-write-text"*/  "@/components/_common/CommonIcon/icons/IconInnerText"),
    'icon-undo': () => import( /* webpackChunkName: "icon-write-text"*/  "@/components/_common/CommonIcon/icons/IconUndo"),
    'icon-redo': () => import( /* webpackChunkName: "icon-write-text"*/  "@/components/_common/CommonIcon/icons/IconRedo"),
    'icon-formula': () => import( /* webpackChunkName: "icon-write-formula"*/  "@/components/_common/CommonIcon/icons/IconFormula"),
    'icon-save': () => import( /* webpackChunkName: "icon-save"*/  "@/components/_common/CommonIcon/icons/IconSave"),
    'icon-close': () => import( /* webpackChunkName: "icon-close"*/  "@/components/_common/CommonIcon/icons/IconClose"),
  }
}
</script>

<style scoped>
</style>
