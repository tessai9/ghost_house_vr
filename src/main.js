// Vue Components
import Vue from "vue"
import App from "./vue-components/App.vue"
import StartPage from "./vue-components/StartPage.vue"
import store from "./store/Store.js"
import { isVrMode } from "./utils/device-utils.js"

Vue.config.productionTip = false
Vue.config.ignoredElements = [
  "a-scene",
  "a-assets",
  "a-asset-item",
  "a-camera",
  "a-entity",
  "a-text",
]

// Aframe Components
import "./components/index.js"

window.addEventListener("DOMContentLoaded", () => {
  new Vue({
    store: store,
    render: h => h( isVrMode() ? App : StartPage),
  }).$mount("#app");
})
