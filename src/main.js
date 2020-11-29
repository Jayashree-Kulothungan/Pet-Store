import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'

//Axios setup
import axios from 'axios'
// Setting up default vue's http modules for api calls
Vue.prototype.$http = require('axios');
// Load the token from the localStorage
const token = localStorage.getItem("token");
// If there is any token then append default axios authorization headers
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}
Vue.prototype.$axios = axios;

//Vuelidate
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

//SimpleAlert for errors
import VueSimpleAlert from "vue-simple-alert";
Vue.use(VueSimpleAlert);

//Split pane
import splitPane from 'vue-splitpane'
Vue.component('split-pane', splitPane);

import VueSplit from 'vue-split-panel'
Vue.use(VueSplit)

//using vuetify
import Vuetify from 'vuetify';
Vue.use(Vuetify);

//vue-bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
  // Install BootstrapVue
  Vue.use(BootstrapVue)
  // Optionally install the BootstrapVue icon components plugin
  Vue.use(IconsPlugin)

//vue-corousel
import Carousel3d from 'vue-carousel-3d';
Vue.use(Carousel3d);

import BootstrapSelect from 'bootstrap-select'
Vue.use(BootstrapSelect);

Vue.config.productionTip = false

new Vue({
  vuetify : new Vuetify(),
  router,
  store,
  render: h => h(App)
}).$mount('#app')
