<template lang="html">
  <a-entity
    :geometry="geometry"
    :material="material"
    :position="setGroundPosition(index)"
    rotation="-90 0 0"
  ></a-entity>
</template>

<script>
export default {
  name: "Ground",
  props: ["img_path", "index"],
  data() {
    return {
      image_space: 1,
      geometry: {
        primitive: "plane",
        width: 3,
        height: 1,
      },
      material: {
        src: this.img_path
      }
    }
  },
  methods: {
    // Set Ground Position
    setGroundPosition(index) {
      const z_position = index > 0 ? index * this.image_space * -1 : index;
      return { x: 0, y: 0, z: z_position }
    }
  },
}
</script>

<style lang="css" scoped>
</style>
