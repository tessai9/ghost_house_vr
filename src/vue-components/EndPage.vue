<template lang="html">
<a-entity id="end-page">
  <!-- Endroll Contents -->
  <a-entity
    id="endroll-text"
    endroll
    animation="property: object3D.position.y; to: 80; dur: 20000;"
    >
    <a-text
      v-for="(content, content_index) in end_roll_text"
      :key="`title-${content_index}`"
      :value="content.title"
      :position="titlePosition(content_index, content.name.length)"
      font="mozillavr"
      color="yellow"
      scale="10 10 10"
      >
      <a-text
        v-for="(name, name_index) in content.name"
        :key="`name-${name_index}`"
        :value="name.text"
        :font="name.is_multi_byte ? name.font : `mozillavr`"
        :negate="!name.is_multi_byte"
        :position="namePosition(name_index)"
        scale="0.5 0.5 0.5"
        ></a-text>
    </a-text>
  </a-entity>
  
  <!-- Thanks message & Restart Button -->
  <a-entity
    position="0 -38 -4"
    animation="property: object3D.position.y; to: 2; dur: 20000;"
    >
    <a-text 
      id="ty"
      value="Thank you for playing."
      align="center"
      color="white"
      font="mozillavr"
      scale="4 4 4"
    ></a-text>
    <a-entity 
      id="restart_button"
      @click="restartGame"
      text="value: RESTART; align: center; color: white; width: 4"
      position="0 -2 0" 
      geometry="primitive:plane; width: 2;"
      class="endmenu"
      animation__mouseenter="property: scale; to: 1.5 1.5 1.5; startEvents: mouseenter; dur: 200"
      animation__mouseleave="property: scale; to: 1 1 1; startEvents: mouseleave; dur: 200"
      animation__intersected="property: scale; to: 1.5 1.5 1.5; startEvents: raycaster-intersected; dur: 200"
      animation__intersected-cleared="property: scale; to: 1 1 1; startEvents: raycaster-intersected-cleared; dur: 200"
      ></a-entity>
  </a-entity>
</a-entity>
</template>

<script>
import { PAGE_NAME_LIST } from "../utils/page-name-list.js"
import { END_ROLL_TEXT } from "../const/EndRollText.js"
const TITLE_INTERVAL = 5
const NAME_INTERVAL = 0.25
const TITLE_INTERVAL_BUFF = 3
let prevNameLength = 1

export default {
  name: "EndPage",
  data() {
    return {
      end_roll_text: END_ROLL_TEXT,
    }
  },
  methods: {
    textEndPosition(index) {
      return -1 * TITLE_INTERVAL * index + 80
    },
    titlePosition(index, nameLength) {
      const titlePosition = {
        x: -4,
        y: (-1 * TITLE_INTERVAL * index) + (-1 * TITLE_INTERVAL_BUFF * prevNameLength),
        z: -10
      }
      prevNameLength = nameLength

      return titlePosition
    },
    namePosition(index) {
      return {
        x: 0.15,
        y: index > 0 ? -1 * (NAME_INTERVAL * index + NAME_INTERVAL) : -1 * NAME_INTERVAL,
        z: 0
      }
    },
    restartGame() {
      this.$store.dispatch("updatePlayerMovableStatus", false)
      this.$store.dispatch("updateCurrentPage", PAGE_NAME_LIST.START)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
