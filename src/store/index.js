import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        text: 'One'
      },
      {
        id: 2,
        text: 'Two'
      }
    ],
    time: 30
  },
  getters,
  actions,
  mutations
})
