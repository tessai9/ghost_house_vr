<template lang="html">
  <a-scene>
    <a-assets>
      <img id="ghost_woman" src="@/assets/ghost_woman.png" />
      <img id="ground_img" src="@/assets/floor.png" />
      <img id="wall_img" src="@/assets/wall.jpg" />
      <img id="ceiling_img" src="@/assets/ceiling.jpg" />
      <audio id="world_sound" src="@/assets/sound/world_sound.mp3" preload="auto" />
      <audio id="walk_sound" src="@/assets/sound/walk_sound.mp3" preload="auto" />
      <audio id="ghost_voice_1" src="@/assets/sound/ghost_voice_1.mp3" preload="auto" />
      <audio id="ghost_voice_2" src="@/assets/sound/ghost_voice_2.mp3" preload="auto" />
      <audio id="ghost_scream_1" src="@/assets/sound/ghost_scream_1.mp3" preload="auto" />
      <audio id="ghost_scream_2" src="@/assets/sound/ghost_scream_2.mp3" preload="auto" />
    </a-assets>

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
    <RoadForRightTurn
      :position="right_turn_position_sample"
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
import Ghost from "@/components/Ghost.vue"
import RoadForStraight from "@/components/RoadForStraight.vue"
import RoadForRightTurn from "@/components/RoadForRightTurn.vue"
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
    Ghost,
    RoadForStraight,
    RoadForRightTurn,
    Player,
    PlayerPosDisplay
  }
}
</script>

<style lang="css" scoped>
</style>
