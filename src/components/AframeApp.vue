<template lang="html">
  <a-scene>
    <!-- Need to be component? -->
    <a-assets>
      <img id="ghost_woman" src="@/assets/ghost_woman.png">
      <img id="ground_img" src="@/assets/ground.jpg">
    </a-assets>

    <Ghost img_path="#ghost_woman" :cordinate="cordinate" :size="size" isDisplay="true" />

    <!-- Will be component in the future -->
    <a-entity
      v-for="(item, index) in ground_map"
      :key="index"
      geometry="primitive: plane; width: 3; height: 1;"
      material="src: #ground_img"
      rotation="-90 0 0"
      :position="setGroundPosition(index)"
    ></a-entity>
  </a-scene>
</template>

<script>
import Ghost from './Ghost.vue'

export default {
  name: 'AframeApp',
  data(){
    return {
      // demo property data for ghost component
      cordinate: {
        x: 0,
        y: 2,
        z: -5
      },
      size: {
        width: 2,
        height: 3
      },
      // map information
      ground_map: ["gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr", "gr"],
      z_move: 1,
    }
  },
  methods: {
    // Set Ground Position
    setGroundPosition(index) {
      const z_position = index > 0 ? index * this.z_move * -1 : index;
      return { x: 0, y: 0, z: z_position }
    }
  },
  components: {
    Ghost,
  }
}
</script>

<style lang="css" scoped>
</style>
