<template>
  <div class="">
    <StartPage v-if="currentPage == page_list.START"></StartPage>
    <AframeApp v-if="currentPage == page_list.APP"></AframeApp>
    <EndPage v-if="currentPage == page_list.END"></EndPage>
  </div>
</template>

<script>
import StartPage from "./StartPage.vue"
import EndPage from "./EndPage.vue"
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
    StartPage,
    EndPage,
    AframeApp,
  }
}
</script>
