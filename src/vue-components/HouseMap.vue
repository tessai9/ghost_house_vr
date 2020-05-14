<template lang="html">
  <a-entity>
    <a-entity
      :key="row_index"
      v-for="(map_array, row_index) in map_data"
      :position="rowPosition(row_index)"
    >
      <a-entity
        :key="column_index"
        v-for="(isRoad, column_index) in map_array"
        v-if="!isRoad"
        :position="columnPosition(column_index)"
        geometry="primitive: box;"
        material="src: #wall_img"
        wall-box
        static-body
      ></a-entity>
    </a-entity>
  </a-entity>
</template>

<script>
const WALL_INTERVAL = 10

export default {
  name: "HouseMap",
  props: {
    map_data: { type: Array, required: true },
  },
  methods: {
    rowPosition(row) {
      return {
        x: WALL_INTERVAL * -1,
        y: 0,
        z: (WALL_INTERVAL * row * -1) + WALL_INTERVAL / 2
      }
    },
    columnPosition(column) {
      return {
        x: WALL_INTERVAL * column,
        y: 0,
        z: 0
      }
    },
  }
}
</script>

<style lang="css" scoped>
</style>
