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
      :event_listener="ghost.event_listener"
      is_display=false
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

    <!-- Player Component -->
    <Player />
  </a-scene>
</template>

<script>
import Ghost from "@/components/Ghost.vue"
import StraightRoad from "@/components/StraightRoad.vue"
import Player from '@/components//Player.vue'
import GhostList from "@/GhostList.js"
import EventListenerStore from "@/EventListenerStore.js"
import 'aframe'

export default {
  name: "AframeApp",
  data(){
    return {
      map_length: 20,
      ghost_list: GhostList.ghost_list
    }
  },
  mounted() {
    Object.keys(EventListenerStore).forEach(function(eventListener) {
      AFRAME.registerComponent(eventListener, EventListenerStore[eventListener])
    })
  },
  components: {
    Ghost,
    StraightRoad,
    Player
  }
}
</script>

<style lang="css" scoped>
</style>
