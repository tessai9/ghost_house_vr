<template lang="html">
  <a-entity>
    <a-entity
      :geometry="ground_geometry"
      :material="ground_material"
      :position="setGroundPosition(index)"
      rotation="-90 0 0"
    ></a-entity>
    <a-entity
      :geometry="wall_geometry"
      :material="wall_material"
      :position="setWallPosition(index, 'left')"
      rotation="0 90 0"
    ></a-entity>
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
  name: 'StraightRoad',
  props: {
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
