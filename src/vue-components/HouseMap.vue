<template lang="html">
  <a-entity>
    <a-entity
      :key="row_index"
      v-for="(map_array, row_index) in map_data"
      :position="rowPosition(row_index)"
    >
      <!-- Ceiling -->
      <a-entity
        :key="`ceiling-${column_index}`"
        v-for="(isRoad, column_index) in map_array"
        :position="ceilingColumnPosition(column_index)"
        material="src: #ceiling_img;"
        geometry="primitive: plane; width: 10; height: 10;"
        rotation="90 0 0"
      ></a-entity>
      <!-- Wall box -->
      <a-entity
        :key="`wall-${column_index}`"
        v-for="(isRoad, column_index) in map_array"
        v-if="!isRoad"
        :position="boxColumnPosition(column_index)"
        geometry="primitive: box;"
        material="src: #wall_img"
        wall-box
        class="wall"
      ></a-entity>
      <!-- Ground Goal-->
      <a-entity
        :key="`goal-${column_index}`"
        v-for="(isRoad, column_index) in map_array"
        v-if="isRoad == 9"
        :position="groundColumnPositoin(column_index)"
        material="src: #ground_img;"
        geometry="primitive: plane; width: 10; height: 10;"
        rotation="-90 0 0"
        :goal="goalArea(row_index, column_index)"
      ></a-entity>
      <!-- Ground -->
      <a-entity
        :key="`ground-${column_index}`"
        v-for="(isRoad, column_index) in map_array"
        v-if="isRoad != 9"
        :position="groundColumnPositoin(column_index)"
        material="src: #ground_img;"
        geometry="primitive: plane; width: 10; height: 10;"
        rotation="-90 0 0"
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
    boxColumnPosition(column) {
      return {
        x: WALL_INTERVAL * column,
        y: 0,
        z: 0
      }
    },
    ceilingColumnPosition(column) {
      return {
        x: WALL_INTERVAL * column,
        y: 5,
        z: 0
      }
    },
    groundColumnPositoin(column) {
      return {
        x: WALL_INTERVAL * column,
        y: -5,
        z: 0
      }
    },
    goalArea(row, column) {
      return {
        x_area: [
                  WALL_INTERVAL * column + WALL_INTERVAL * -1.5, 
                  WALL_INTERVAL * column + WALL_INTERVAL * -1.5 + 10
                ],
        z_area: [
                  (WALL_INTERVAL * row * -1), 
                  (WALL_INTERVAL * row * -1) + 10
                ]
      }
    },
  }
}
</script>

<style lang="css" scoped>
</style>
