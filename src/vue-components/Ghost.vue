<template lang="html">
  <a-entity
    ref="entity"
    :geometry="geometry"
    :position="position"
    :rotation="rotation"
    :material="material"
    :sound="sound"
  ></a-entity>
</template>

<script>
export default {
  name: "Ghost",
  props: {
    img_path: { type: String, required: true },
    aframe_component: { type: String, default: "" },
    sound_id: { type: String, default: "" },
    position: {
      type: Object,
      default: function() {
        return { x: 0, y: 0, z: 0 }
      }
    },
    rotation: {
      type: Object,
      default: function() {
        return { x: 0, y: 0, z:0 }
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
      },
      // sound information
      sound: {
        src: this.sound_id,
        volume: 3,
      },
    }
  },
  mounted() {
    // event area
    const dataForComponent = {
      x_area: this.event_area.x_area,
      z_area: this.event_area.z_area
    }
    // set event listener key named for aframe
    this.$refs.entity.setAttribute(this.aframe_component, dataForComponent)
  },
  methods: {
    // something methods
  }
}
</script>

<style lang="css" scoped>
</style>
