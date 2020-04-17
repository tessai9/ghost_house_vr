<template lang="html">
  <a-scene>
    <a-assets>
      <img id="ghost_woman" src="@/assets/ghost_woman.png" />
      <img id="ground_img" src="@/assets/floor.png" />
      <img id="wall_img" src="@/assets/wall.jpg" />
      <img id="ceiling_img" src="@/assets/ceiling.jpg" />
    </a-assets>

    <!-- Ghost Component -->
    <Ghost
      v-for="ghost in ghost_list"
      :key="ghost.no"
      :img_path="ghost.image_id"
      :size="ghost.size"
      :position="ghost.position"
      :event_area="ghost.event_area"
      :aframe_component="ghost.aframe_component"
    />
    <!-- Map Ground Component -->
    <StraightRoad
      v-for="i in map_length"
      :key="i"
      :index="i"
      ceiling_img_path="#ceiling_img"
      ground_img_path="#ground_img"
      wall_img_path="#wall_img"
    />
    <!-- light -->
    <a-entity light="type: ambient; intensity: 0.2;"></a-entity>

    <!-- Player Component -->
    <Player />
    <PlayerPosDisplay />
  </a-scene>
</template>

<script>
import Ghost from "@/components/Ghost.vue"
import StraightRoad from "@/components/StraightRoad.vue"
import Player from "@/components/Player.vue"
import PlayerPosDisplay from "@/components/PlayerPosDisplay.vue"
import GhostList from "@/GhostList.js"

export default {
  name: "AframeApp",
  data(){
    return {
      map_length: 20,
      ghost_list: GhostList.ghost_list
    }
  },
  components: {
    Ghost,
    StraightRoad,
    Player,
    PlayerPosDisplay
  }
}
</script>

<style lang="css" scoped>
</style>
