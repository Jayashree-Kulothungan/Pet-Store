import Vue from 'vue'
import Vuex from 'vuex'

import Auth from '../Warehouse/Auth';
import Cart from '../Warehouse/Cart';
import DayCare from '../Warehouse/DayCare';
import Services from '../Warehouse/Services';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth,
    Services,
    Cart,
    DayCare
  },
  state: {

  }, 
  mutations: {

  },
  actions: {

  },
})
