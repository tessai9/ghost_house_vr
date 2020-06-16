<template lang="html">
  <div class="">
    <h1>VRお化け屋敷</h1>
    <button type="button" name="button" @click="startApp">Start</button>
  </div>
</template>

<script>
import { PAGE_NAME_LIST } from "../utils/page-name-list.js"

export default {
  name: "StartPage",
  methods: {
    startApp() {
      this.$store.dispatch("updateCurrentPage", PAGE_NAME_LIST.APP)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
