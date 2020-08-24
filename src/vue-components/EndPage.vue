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

    <a-text 
      id="ty" value="Thank you for playing." align="center" position="0 -38 -4" color="white"
      font="mozillavr"
      scale="4 4 4"
      animation="property: object3D.position.y; to: 2; dur: 20000;"
    ></a-text>

    <a-entity 
      id="restart" 
      text="value: RESTART; align: center; color: white; width: 4"
      position="0 -40 -4" 
      geometry="primitive:plane; width: 2;"
      class="endmenu"
      animation="property: object3D.position.y; to: 0; dur: 20000;"
      selectable="action: restart"
    ></a-entity>
  </a-entity>
</template>

<script>
import { PAGE_NAME_LIST } from "../utils/page-name-list.js"
import { END_ROLL_TEXT } from "../EndRollText.js"
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
    startApp() {
      this.$store.dispatch("updateCurrentPage", PAGE_NAME_LIST.START)
    },
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
  }
}
</script>

<style lang="css" scoped>
</style>
