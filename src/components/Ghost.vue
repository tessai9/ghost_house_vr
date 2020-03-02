<template lang="html">
  <a-entity
    v-if="isDisplay"
    :geometry="geometry"
    :position="position"
    :material="material"
  ></a-entity>
</template>

<script>
export default {
  name: "Ghost",
  props: {
    img_path: { type: String, required: true },
    isDisplay: { type: Boolean, default: false },
    position: {
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
    event_area: {
      type: Object,
      default: function() {
        return { x_area: [0], z_area: [0] }
      }
    },
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
        src: this.img_path,
        shader: "standard",
        transparent: true
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
