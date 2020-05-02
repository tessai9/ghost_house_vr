import Vue from "vue"
import App from "./App.vue"
import AframeComponentStore from "./AframeComponentStore.js"
import Aframe from "aframe"
import Store from "./store/Store.js"

Vue.config.productionTip = false
Vue.config.ignoredElements = [
  "a-scene",
  "a-assets",
  "a-camera",
  "a-entity",
  "a-text",
]

// event listenerの登録
Object.keys(AframeComponentStore).forEach(function(component) {
  Aframe.registerComponent(component, AframeComponentStore[component])
})

window.addEventListener("DOMContentLoaded", () => {
  new Vue({
    store: Store,
    render: h => h(App),
  }).$mount("#app")
})
