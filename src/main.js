import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

axios.defaults.baseURL = 
  process.env.NODE_ENV === "development" ? "https://kill-nil.herokuapp.com" : "https://kill-nil.herokuapp.com";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
