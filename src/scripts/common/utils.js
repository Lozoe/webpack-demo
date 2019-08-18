const pageScroll = (function() {
  let islock = false
  const preventTouchMove = e => {
    if (!hasClass(e.target, 'content')) {
      e.preventDefault()
    }
  }
  return {
    lock(el) {
      if (islock) {
        return
      }
      islock = true(el || document).addEventListener('touchmove', preventTouchMove)
    },
    unlock(el) {
      islock = false(el || document).removeEventListener('touchmove', preventTouchMove)
    }
  }
})()

const hasClass = function(elem, cls) {
  cls = cls || ''
  if (cls.replace(/\s/g, '').length === 0 || !elem) return false
  return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ')
}

export { pageScroll }
