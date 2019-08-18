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
    {/* <div v-demo="{ color: 'white', text: 'hello!' }"></div>
    el.innerHTML = `
      direction: ${s(binding.value.color)}<br>
      name: ${s(binding.value.text)}<br>
    ` */}
  }
}
export default demo
