const dynamic = {
  bind: function (el, binding, vnode) {
    var s = JSON.stringify
    el.innerHTML = `direction: ${s(binding.arg)}<br>`
  }
}
export default dynamic
