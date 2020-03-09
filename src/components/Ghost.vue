<template lang="html">
  <a-entity
    :visible="is_display"
    :geometry="geometry"
    :position="position"
    :material="material"
    @loaded="addEventListener()"
  ></a-entity>
</template>

<script>
export default {
  name: 'Ghost',
  props: {
    img_path: { type: String, required: true },
    is_display: { type: Boolean, default: false },
    event_listener: { type: String, default: "" },
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
        return { x_area: [], z_area: [] }
      }
    },
  },
  data() {
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
    // add event listener to component
    addEventListener() {
      const dataForEventListener = {
        event_area: this.event_area,
        player_position: {x: 2, z: -9},
        is_display: this.is_display,
      }
      // set event listener key named for aframe
      this.$el.setAttribute(this.event_listener, dataForEventListener)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
