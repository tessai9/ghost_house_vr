<template lang="html">
  <a-entity
    :position="road_position"
    :rotation="road_rotation"
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
    <!-- Left Wall -->
    <a-entity
      :geometry="wall_geometry"
      :material="wall_material"
      position="-2.5 2.5 0"
      rotation="0 90 0"
    ></a-entity>
    <!-- Right Wall -->
    <a-entity
      :geometry="wall_geometry"
      :material="wall_material"
      position="2.5 2.5 0"
      rotation="0 -90 0"
    ></a-entity>
  </a-entity>
</template>

<script>
const ROAD_INTERVAL = 5

export default {
  name: "RoadForStraight",
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
    },
    direction: {
      type: String,
      default: "vertical"
    }
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
      // road position
      road_position: {},
      // road rotation
      road_rotation: {}
    }
  },
  mounted() {
    this.road_position = this.setRoadPosition(this.index)
    this.road_rotation = this.setRoadRotation(this.direction)
  },
  methods: {
    setRoadPosition(index) {
      const z_position = (index - 1) * ROAD_INTERVAL * -1
      return { x: 0, y: 0, z: z_position }
    },
    setRoadRotation(direction) {
      switch(direction) {
      case "vertical":
        return { x: 0, y: 0, z: 0 }
      case "horizontal":
        return { x: 0, y: 90, z: 0 }
      default:
        return { x: 0, y: 0, z: 0 }
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
