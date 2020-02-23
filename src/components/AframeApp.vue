<template lang="html">
  <a-scene>
    <a-assets>
      <img id="ghost_woman" src="@/assets/ghost_woman.png" />
      <img id="ground_img" src="@/assets/floor.png" />
      <img id="wall_img" src="@/assets/wall.jpg" />
      <img id="ceiling_img" src="@/assets/ceiling.jpg" />
    </a-assets>

    <!-- Ghost Component -->
    <Ghost img_path="#ghost_woman" :cordinate="cordinate" :size="size" isDisplay="true" />
    <!-- Map Ground Component -->
    <StraightRoad
      v-for="i in map_length"
      :key="i"
      :index="i"
      ceiling_img_path="#ceiling_img"
      ground_img_path="#ground_img"
      wall_img_path="#wall_img"
    />
  </a-scene>
</template>

<script>
import Ghost from "@/components/Ghost.vue"
import StraightRoad from "@/components/StraightRoad.vue"

export default {
  name: "AframeApp",
  data(){
    return {
      // demo property data for ghost component
      cordinate: {
        x: 0,
        y: 2,
        z: -10
      },
      size: {
        width: 2,
        height: 3
      },
      map_length: 20,
    }
  },
  components: {
    Ghost,
    StraightRoad,
  }
}
</script>

<style lang="css" scoped>
</style>
