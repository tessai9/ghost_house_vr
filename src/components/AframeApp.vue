<template lang="html">
  <a-scene>
    <!-- component化が必要？ -->
    <a-assets>
      <img id="sample_ghost" src="@/assets/animal_hone_hitsuji_zugaikotsu.png" />
    </a-assets>

    <Ghost img_path="#sample_ghost" :cordinate="cordinate" :size="size" isDisplay="true" />
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
        y: 1,
        z: -5
      },
      size: {
        width: 2,
        height: 2
      }
    }
  },
  components: {
    Ghost,
  }
}
</script>

<style lang="css" scoped>
</style>
