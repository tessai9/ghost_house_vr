<template lang="html">
  <a-scene>
    <!-- Asset Files -->
    <Assets />

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

export default {
  name: "AframeApp",
  data(){
    return {
      map_length: 10,
      ghost_list: GhostList.ghost_list,
      right_turn_position_sample: { x: 0, y: 0, z: -50 },
      house_map: HOUSE_MAP,
    }
  },
  mounted() {},
  methods: {},
  components: {
    Assets,
    Ghost,
    Player,
    PlayerPosDisplay,
    HouseMap
  }
}
</script>

<style lang="css" scoped>
</style>
