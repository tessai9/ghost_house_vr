<template>
  <AframeApp></AframeApp>
</template>

<script>
import AframeApp from "./AframeApp.vue"
import { PAGE_NAME_LIST } from "../utils/page-name-list.js"

export default {
  name: "app",
  data() {
    return {
      page_list: PAGE_NAME_LIST,
    }
  },
  computed: {
    currentPage() {
      return this.$store.state.current_page
    }
  },
  mounted() {},
  components: {
    AframeApp,
  }
}
</script>
