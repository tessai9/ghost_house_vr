<template lang="html">
  <a-entity>
    <!-- Ceiling -->
    <a-entity
      :geometry="ceiling_geometry"
      :material="ceiling_material"
      :position="setCeilingPosition(index)"
      rotation="90 0 0"
    ></a-entity>
    <!-- Ground -->
    <a-entity
      :geometry="ground_geometry"
      :material="ground_material"
      :position="setGroundPosition(index)"
      rotation="-90 0 0"
    ></a-entity>
    <!-- Left Wall -->
    <a-entity
      :geometry="wall_geometry"
      :material="wall_material"
      :position="setWallPosition(index, 'left')"
      rotation="0 90 0"
    ></a-entity>
    <!-- Right Wall -->
    <a-entity
      :geometry="wall_geometry"
      :material="wall_material"
      :position="setWallPosition(index, 'right')"
      rotation="0 -90 0"
    ></a-entity>
  </a-entity>
</template>

<script>
export default {
  name: "StraightRoad",
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
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      ceiling_geometry: {
        primitive: "plane",
        width: 5,
        height: 10,
      },
      ceiling_material: {
        src: this.ceiling_img_path
      },
      ground_geometry: {
        primitive: "plane",
        width: 5,
        height: 10,
      },
      ground_material: {
        src: this.ground_img_path
      },
      wall_geometry: {
        primitive: "plane",
        width: 10,
        height: 5,
      },
      wall_material: {
        src: this.wall_img_path
      }
    }
  },
  methods: {
    setCeilingPosition(index) {
      const z_position = (index - 1) * this.ceiling_geometry.height * -1;
      return { x: 0, y: 5, z: z_position }
    },
    setGroundPosition(index) {
      const z_position = (index - 1) * this.ground_geometry.height * -1;
      return { x: 0, y: 0, z: z_position }
    },
    setWallPosition(index, side) {
      const z_position = (index - 1) * this.wall_geometry.width * -1;
      return { x: side == "left" ? -2.5 : 2.5, y: 2.5, z: z_position }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
