<template lang="html">
  <a-entity
    :geometry="geometry"
    :material="material"
    :position="setGroundPosition(index)"
    rotation="-90 0 0"
  />
</template>

<script>
export default {
  name: "Ground",
  props: ["img_path", "index"],
  data() {
    return {
      // geometry information
      geometry: {
        primitive: "plane",
        width: 5,
        height: 7,
      },
      // material information
      material: {
        src: this.img_path
      }
    }
  },
  methods: {
    // Set Ground Image Position
    setGroundPosition(index) {
      const z_position = (index - 1) * this.geometry.height * -1;
      return { x: 0, y: 0, z: z_position }
    }
  },
}
</script>

<style lang="css" scoped>
</style>
