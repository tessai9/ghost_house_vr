import Vue from 'vue'
import Vuex from 'vuex'
import App from '@/App.vue'
import 'aframe'

Vue.use(Vuex)

Vue.config.productionTip = false
Vue.config.ignoredElements = [
  'a-scene',
  'a-assets',
  'a-camera',
  'a-entity',
]

new Vue({
  render: h => h(App),
}).$mount('#app')
