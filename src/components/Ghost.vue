<template lang="html">
  <a-entity
    v-if="isDisplay"
    :geometry="geometry"
    :position="cordinate"
    :material="material"
  />
</template>

<script>
export default {
  name: 'Ghost',
  props: ['img_path', 'cordinate', 'size', 'isDisplay'],
  data(){
    return {
      // geometry information
      geometry: {
        primitive: "plane",
        width: this.size.width,
        height: this.size.height,
      },
      // material information
      material: {
        src: this.img_path
      }
    }
  },
  methods: {
    // Some movement for ghost component
    // Need some event listner ?
  }
}
</script>

<style lang="css" scoped>
</style>
