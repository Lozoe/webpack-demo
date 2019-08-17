// 注册一个全局自定义指令 `v-focus`
// Vue.directive('focus', {
//   // 当被绑定的元素插入到 DOM 中
//   inserted: function (el) {
//     // 聚焦元素
//     el.focus()
//   }
// })
const focus = {
  // 指令的定义
  inserted(el) {
    el.focus()
  }
}
export default focus
