<template>
  <div class="todos">
    This is todos page
    <router-link to="/"> Home </router-link>
    <router-link to="todos"> Todos </router-link>
    <h1 class="todos-title">this is todos</h1>
    <input type="text" v-model="newTodo.text" @keydown.13="createTodo">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
        <span @click="delTodo(todo)">X</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import Proxy from '@/api/proxy'
export default {
  data: () => {
    return {
      newTodo: {
        text: ''
      }
    }
  },

  computed: {
    ...mapGetters([
      'todos'
    ])
  },

  methods: {
    ...mapActions([
      'addTodo',
      'delTodo'
    ]),
    createTodo () {
      this.addTodo({
        ...this.newTodo
      })
      this.newTodo.text = ''
    }
  },

  mounted () {
    // Proxy.a({m: 1, n: 2}, res => {
    //   console.log(res)
    // })
  }
}
</script>

<style scoped lang="less">
.todos {
    &-title {
        font-size: 28px;
        color: rebeccapurple;
    }
}
</style>
