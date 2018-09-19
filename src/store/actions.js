import * as Types from './mutations-types'

export default {
  addTodo ({ commit }, todo) {
    commit(Types.ADDTODO, todo)
  },

  delTodo ({ commit }, todo) {
    commit(Types.DELTODO, todo)
  },

  updateTime ({ commit }, time) {
    commit(Types.UPDATETIME, time)
  }
}
