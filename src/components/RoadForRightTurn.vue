<template lang="html">
  <a-entity
    :position="position"
  >
    <!-- Ceiling -->
    <a-entity
      :geometry="ceiling_geometry"
      :material="ceiling_material"
      position="0 5 0"
      rotation="90 0 0"
    ></a-entity>
    <!-- Ground -->
    <a-entity
      :geometry="ground_geometry"
      :material="ground_material"
      position="0 0 0"
      rotation="-90 0 0"
    ></a-entity>
    <!-- Front Wall -->
    <a-entity
      :geometry="wall_geometry"
      :material="wall_material"
      position="0 2.5 -2.5"
      rotation="0 0 0"
    ></a-entity>
    <!-- Left Wall -->
    <a-entity
      :geometry="wall_geometry"
      :material="wall_material"
      position="-2.5 2.5 0"
      rotation="0 90 0"
    ></a-entity>
  </a-entity>
</template>

<script>
export default {
  name: "RoadForRightTurn",
  props: {
    ceiling_img_path: {
      type: String,
      required: true
    },
    ground_img_path: {
      type: String,
      required: true
    },
    wall_img_path: {
      type: String,
      required: true
    },
    // 曲がり角は基本的に複数並べることはないのでPosition指定
    // 使い勝手悪かったら変える
    position: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      // information of ceiling
      ceiling_geometry: {
        primitive: "plane",
        width: 5,
        height: 5,
      },
      ceiling_material: {
        src: this.ceiling_img_path
      },
      // information of ground
      ground_geometry: {
        primitive: "plane",
        width: 5,
        height: 5,
      },
      ground_material: {
        src: this.ground_img_path
      },
      // information of wall
      wall_geometry: {
        primitive: "plane",
        width: 5,
        height: 5,
      },
      wall_material: {
        src: this.wall_img_path
      },
    }
  },
}
</script>

<style lang="css" scoped>
</style>
