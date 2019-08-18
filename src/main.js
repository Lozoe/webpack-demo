// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './scripts/App'
import router from './scripts/router'
import Keyboard from './scripts/components/Keyboard'
import vueTouch from './scripts/directives/touch'

// require('./scripts/directives/focus')
// import './styles/base/index.scss'

Vue.use(vueTouch)
Vue.component('Keyboard', Keyboard);

// 键盘显示控制函数 Bug TODO
Vue.prototype.$keyboard = function(opt) {
  let showTimeSpan = opt.show ? 500 : 0 // 延迟500ms，平滑过渡
  setTimeout(() => {
    if (this._isDestroyed) {
      this.$root.keyboardOptions.show = false
    } else {
      this.$root.keyboardOptions = opt
    }
  }, showTimeSpan);
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data() {
    return {
      keyboardOptions: {
        show: false,
        type: 'tel',
        config: {}
      }
    }
  },
  components: { App },
  template: '<App/>'
})
