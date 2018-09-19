import * as Types from './mutations-types'

let idStarter = 2
export default {
  [Types.ADDTODO] (state, todo) {
    if (!todo.id) {
      todo.id = ++idStarter
    }
    state.todos.push(todo)
  },

  [Types.DELTODO] (state, todo) {
    state.todos.forEach((item, index) => {
      if (item.id === todo.id) {
        state.todos.splice(index, 1)
      }
    })
  },

  [Types.UPDATETIME] (state, time) {
    state.time = time
  }
}
