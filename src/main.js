import Vue from "vue"
import App from "./vue-components/App.vue"
import store from "./store/Store.js"

Vue.config.productionTip = false
Vue.config.ignoredElements = [
  "a-scene",
  "a-assets",
  "a-camera",
  "a-entity",
  "a-text",
]

window.addEventListener("DOMContentLoaded", () => {
  new Vue({
    store: store,
    render: h => h(App),
  }).$mount("#app")
})
