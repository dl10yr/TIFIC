import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import './plugins/vuetify'
import firebase from './firebase'
 
firebase.init()
firebase.onAuth()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
