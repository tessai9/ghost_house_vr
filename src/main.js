import Vue from 'vue'
import Vuex from 'vuex'
import App from '@/App.vue'
import AframeComponentStore from "@/AframeComponentStore.js"
import 'aframe'

Vue.use(Vuex)

Vue.config.productionTip = false
Vue.config.ignoredElements = [
  'a-scene',
  'a-assets',
  'a-camera',
  'a-entity',
]

// event listenerの登録
Object.keys(AframeComponentStore).forEach(function(component) {
  AFRAME.registerComponent(component, AframeComponentStore[component])
})

new Vue({
  render: h => h(App),
}).$mount('#app')
