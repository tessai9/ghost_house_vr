<template lang="html">
  <a-entity
    v-if="isDisplay"
    :geometry="geometry"
    :position="cordinate"
    :material="material"
  />
</template>

<script>
export default {
  name: 'Ghost',
  // props: ['img_path', 'cordinate', 'size', 'isDisplay'],
  props: {
    img_path: {
      type: String,
      required: true
    },
    cordinate: {
      type: Object,
      default: function() {
        return { x: 0, y: 0, z: 0 }
      }
    },
    size: {
      type: Object,
      default: function() {
        return { width: 1, height: 1 }
      }
    },
    isDisplay: {
      type: Boolean,
      default: true
    }
  },
  data(){
    return {
      // geometry information
      geometry: {
        primitive: "plane",
        width: this.size.width,
        height: this.size.height,
      },
      // material information
      material: {
        src: this.img_path
      }
    }
  },
  methods: {
    // Some movement for ghost component
    // Need some event listner ?
  }
}
</script>

<style lang="css" scoped>
</style>
