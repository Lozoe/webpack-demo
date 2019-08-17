<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <ul class="contents">
      <li><router-link :to="{ name: 'HelloWorld' }">HelloWorld</router-link></li>
      <li><router-link :to="{ name: 'TestPage' }">TestPage</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .contents {
    width: 300px;
    list-style: none;
    li {
      text-align: left;
    }
  }
}
</style>
