<template lang="html">
  <a-entity id="ghost-house">
    <!-- Title -->
    <a-entity
      v-if="!isGameStart"
      id="start_button"
      geometry="primitive: plane; width: 2; height: 1;"
      material="src: #title_back_img;"
      position="0 0 -5"
      animation__mouseenter="property: scale; to: 1.5 1.5 1.5; startEvents: mouseenter; dur: 200"
      animation__mouseleave="property: scale; to: 1 1 1; startEvents: mouseleave; dur: 200"
    >
      <a-entity
        text="value: Start; align: center; color: #a00e24;"
        scale="10 10 1"
      ></a-entity>
    </a-entity>

    <!-- Ghost Component -->
    <Ghost
      v-for="ghost in ghost_list"
      :key="`ghost-${ghost.no}`"
      :img_path="ghost.image_id"
      :size="ghost.size"
      :position="ghost.position"
      :rotation="ghost.rotation"
      :event_area="ghost.event_area"
      :sound_id="ghost.sound_id"
      :aframe_component="ghost.aframe_component"
    />
    <!-- Sample Ghost Object -->
    <a-entity gltf-model="url(/assets/obj/bleed/scene.gltf)" position="39 -5 -44" scale=".5 .5 .5"></a-entity>
    <!-- Table Object -->
    <a-entity
      class="wall"
      position="20 -3.5 -25"
      geometry="height: 10; depth: 5; width: 3;"
      material="opacity: 0;"
    >
      <a-entity
        gltf-model="url(/assets/obj/old_metal_table/scene.gltf)"
        scale="3 3 3"
        rotation="0 180 0"
      ></a-entity>
    </a-entity>
    <!-- Cabinet -->
    <a-entity
      class="wall"
      position="3 0.6 -17"
      geometry="depth: 0.7;"
      material="opacity: 0;"
    >
      <a-entity
        light="type: spot; intensity: 0.2; distance: 10;"
        position="-4 0 -1"
        rotation="0 -90 0"
      ></a-entity>
      <a-entity
        gltf-model="url(/assets/obj/metal_cabinet/scene.gltf)"
        scale="5 5 5"
        rotation="0 -90 0"
      ></a-entity>
    </a-entity>
    <!-- House Map -->
    <HouseMap :map_data="house_map" />
    <!-- World Light -->
    <a-entity light="type: ambient; intensity: 0.2;"></a-entity>
    <!-- World Sound -->
    <a-entity
      world-sound
      sound="src: #world_sound; loop: true; volume: 3; autoplay: true;"
      ref="world-sound"
    ></a-entity>
  </a-entity>
</template>

<script>
import Ghost from "./Ghost.vue"
import HouseMap from "./HouseMap.vue"
import GhostList from "../GhostList.js"
import { HOUSE_MAP } from "../HouseMap.js"

export default {
  name: "AframeApp",
  data() {
    return {
      map_length: 10,
      ghost_list: GhostList.ghost_list,
      right_turn_position_sample: { x: 0, y: 0, z: -50 },
      house_map: HOUSE_MAP,
    }
  },
  computed: {
    isGameStart() {
      return this.$store.getters.getPlayerMovableStatus
    }
  },
  components: {
    Ghost,
    HouseMap,
  }
}
</script>

<style lang="css" scoped>
</style>
