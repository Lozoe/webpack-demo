const demo = {
  bind: function (el, binding, vnode) {
    var s = JSON.stringify
    el.innerHTML = `
      name: ${s(binding.name)}<br>
      value: ${s(binding.value)}<br>
      expression: ${s(binding.expression)}<br>
      argument: ${s(binding.argument)}<br>
      modifiers: ${s(binding.modifiers)}<br>
      vnode keys: ${Object.keys(vnode).join(', ')}
    `
  }
}
export default demo