<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <ul class="contents">
      <li><router-link :to="{ name: 'HelloWorld' }">HelloWorld</router-link></li>
      <li><router-link :to="{ name: 'TestPage' }">TestPage</router-link></li>
    </ul>
    <router-view/>
    <transition name="popup" mode="out-in">
      <Keyboard v-if="keyboardOptions.show" @keyclick="onKeyboardClick" :type="keyboardOptions.type" :config="keyboardOptions.config"></Keyboard>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      keyboardOptions: {
        show: false,
        type: 'tel',
        config: {}
      }
    }
  },
  mounted() {
    setTimeout(() => {
      //  this.$keyboard({
      //    show: true,
      //    type: this.type,
      //    config: { ok: this.curVal.length > 0 },
      //    keyboardClick: data => this.onKeyClick(data),
      //    arrowClick: data => this.onArrowClick(data),
      //    okClick: data => this.onOkClick(data),
      //    globalClick: e => this.globalClick(e)
      //  })
      this.keyboardOptions = {
        show: true,
        type: 'tel',
        config: { ok: true }
      }
    }, 1000)
  },
  methods: {
    onKeyboardClick(key) {
      let opt = this.keyboardOptions
      if (key === 'ArrowLeft' || key === 'ArrowRight') {
        opt.arrowClick && opt.arrowClick(key)
      } else if (key === 'ArrowDown') {
        opt.arrowClick && opt.arrowClick(key)
        this.$keyboard(false)
      } else if (key === 'Enter' || key === 'ok') {
        let ret = opt.okClick && opt.okClick(key)
        if (ret !== false) {
          this.$keyboard(false)
        }
      } else {
        opt.keyboardClick && opt.keyboardClick(key)
      }
    }
  }
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
