<template>
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
      <!-- Ground -->
      <a-entity
        :key="`ground-${column_index}`"
        v-for="(isRoad, column_index) in map_array"
        :position="groundColumnPositoin(column_index)"
        material="src: #ground_img;"
        geometry="primitive: plane; width: 10; height: 10;"
        rotation="-90 0 0"
        :goal="goalArea(row_index, column_index, isRoad)"
      ></a-entity>
    </a-entity>
  </a-entity>
  <a-entity
    :key="object_no"
    v-for="(map_object_info, object_no) in object_list"
    :position="map_object_info.position"
    :rotation="map_object_info.rotation"
  >
    <Ghost
      v-if="map_object_info.type == object_type.GHOST_2D"
      :size="map_object_info.size"
      :img_path="map_object_info.image_id"
      :sound_id="map_object_info.sound_id"
      :event_area="map_object_info.event_area"
      :aframe_component="map_object_info.aframe_component"
    />
    <a-entity
      
    ></a-entity>
  </a-entity>
</template>

<script>
import Ghost from "./Ghost.vue"
import { OBJECT_TYPE } from "../const/ObjectType.js"

const WALL_INTERVAL = 10

export default {
  name: "Stage",
  props: {
    stage_info: { type: Object, required: true }
  },
  data() {
    return {
      stage_no: 0,
      map_array: [],
      object_list: [],
      object_type: OBJECT_TYPE
    }
  },
  mounted() {
    this.stage_no = this.stage_info.StageNo
    this.map_array = this.stage_info.MapInfo
    this.object_list = this.stage_info.ObjectList
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
    goalArea(row, column, isRoad) {
      const xBaseAreaValue = WALL_INTERVAL * column + WALL_INTERVAL * -1.5
      const zBaseAreaValue = WALL_INTERVAL * row * -1

      return {
        x_area: [
          xBaseAreaValue,
          xBaseAreaValue + 10
        ],
        z_area: [
           zBaseAreaValue,
           zBaseAreaValue + 10
        ],
        isGoal: isRoad == 9
      }
    },
  }
}
</script>
