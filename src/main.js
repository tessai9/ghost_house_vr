import Vue from 'vue'
import App from '@/App.vue'
import 'aframe'
import Store from '@/store/Store.js'

Vue.config.productionTip = false
Vue.config.ignoredElements = [
  'a-scene',
  'a-assets',
  'a-camera',
  'a-entity',
]

new Vue({
  store: Store,
  render: h => h(App),
}).$mount('#app')
