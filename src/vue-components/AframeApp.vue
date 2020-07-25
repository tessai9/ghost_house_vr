<template lang="html">
  <a-scene vr-mode-ui="enabled: true">
    <!-- Asset Files -->
    <Assets />
    <!-- Title -->
    <a-entity
      v-if="is_vr_mode"
      id="start_button"
      geometry="primitive: plane; width: 2; height: 1;"
      material="src: #title_back_img;"
      position="0 0 -5"
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
      >
      </a-entity>
    </a-entity>
    <!-- House Map -->
    <HouseMap :map_data="house_map" />
    <!-- light -->
    <a-entity light="type: ambient; intensity: 0.2;"></a-entity>
    <!-- World sound -->
    <a-entity
      world_sound
      sound="src: #world_sound; loop: true; volume: 3; autoplay: true;"
      ref="world_sound"
    ></a-entity>

    <!-- Player Component -->
    <Player />
    <PlayerPosDisplay />
  </a-scene>
</template>

<script>
import Assets from "./Assets.vue"
import Ghost from "./Ghost.vue"
import HouseMap from "./HouseMap.vue"
import Player from "./Player.vue"
import PlayerPosDisplay from "./PlayerPosDisplay.vue"
import GhostList from "../GhostList.js"
import { HOUSE_MAP } from "../HouseMap.js"
import { isVrMode } from "../utils/device-utils.js"

export default {
  name: "AframeApp",
  data(){
    return {
      map_length: 10,
      ghost_list: GhostList.ghost_list,
      right_turn_position_sample: { x: 0, y: 0, z: -50 },
      house_map: HOUSE_MAP,
      is_vr_mode: true,
    }
  },
  mounted() {
    // VRゴーグルで起動しているかどうか
    this.is_vr_mode = isVrMode()
  },
  methods: {},
  components: {
    Assets,
    Ghost,
    Player,
    PlayerPosDisplay,
    HouseMap,
  }
}
</script>

<style lang="css" scoped>
</style>
