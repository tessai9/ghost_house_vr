<template lang="html">
  <a-scene>
    <!-- Asset Files -->
    <Assets />

    <!-- Ghost Component -->
    <Ghost
      v-for="ghost in ghost_list"
      :key="ghost.no"
      :img_path="ghost.image_id"
      :size="ghost.size"
      :position="ghost.position"
      :event_area="ghost.event_area"
      :sound_id="ghost.sound_id"
      :aframe_component="ghost.aframe_component"
    />
    <!-- Map Ground Component -->
    <RoadForStraight
      v-for="i in map_length"
      :key="i"
      :index="i"
      direction="vertical"
      ceiling_img_path="#ceiling_img"
      ground_img_path="#ground_img"
      wall_img_path="#wall_img"
    />
    <!-- Sample turn road to left -->
    <RoadForTurn
      :position="right_turn_position_sample"
      direction="left"
      ceiling_img_path="#ceiling_img"
      ground_img_path="#ground_img"
      wall_img_path="#wall_img"
    />
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
import Assets from "@/components/Assets.vue"
import Ghost from "@/components/Ghost.vue"
import RoadForStraight from "@/components/RoadForStraight.vue"
import RoadForTurn from "@/components/RoadForTurn.vue"
import Player from "@/components/Player.vue"
import PlayerPosDisplay from "@/components/PlayerPosDisplay.vue"
import GhostList from "@/GhostList.js"

export default {
  name: "AframeApp",
  data(){
    return {
      map_length: 10,
      ghost_list: GhostList.ghost_list,
      right_turn_position_sample: { x: 0, y: 0, z: -50 }
    }
  },
  mounted() {},
  methods: {},
  components: {
    Assets,
    Ghost,
    RoadForStraight,
    RoadForTurn,
    Player,
    PlayerPosDisplay
  }
}
</script>

<style lang="css" scoped>
</style>
