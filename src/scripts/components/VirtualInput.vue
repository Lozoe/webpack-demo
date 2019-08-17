<template>
  <div :class="['virtual-input', extCls]" @click="inputClick">
    <div class="virtual-input-chars" :style="styles">
      <template v-for="(item,index) in inputChars">
        <span :key="index" v-if="item.char === 'cursor'" :index="index" class="virtual-input-cursor"></span>
        <span
          :key="index"
          v-else
          :class="['virtual-input-text', item.splitClass]"
          :index="index > cursorPosition? index-1: index"
        >{{item.char}}</span>
      </template>
    </div>
    <div class="input-placeholder" v-if="!isShowDel">{{placeholder}}</div>
    <div class="virtual-input-del-wrapper" v-if="isShowDel" @click="clearFieldValue">
      <i class="virtual-input-del icon" v-html="delIcon"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VirtualInput',
  data() {
    return {
      delIcon: '&#xf093;',
      cursorPos: 0, // 光标位置
      marginLeft: 0,
      curVal: '',
      isFocus: false
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    maxlength: {
      type: Number,
      default: -1
    },
    splitter: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'number' // identity, tel, number
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    precision: {
      type: Number,
      default: 2
    }
  },
  computed: {
    extCls() {
      return /iphone/i.test(navigator.userAgent) ? 'virtual-input-ios' : ''
    },
    isShowDel() {
      return this.curVal && this.curVal.length > 0
    },
    inputChars() {
      let val = this.curVal || ''
      let charsArray = val.split('')
      let charsArrayWhithSplit = []
      charsArray.forEach((char, i) => {
        charsArrayWhithSplit.push({
          char: char,
          splitClass: this.getSplitClass(i)
        })
      })
      if (this.cursorPos !== -1) {
        if (charsArrayWhithSplit.length === 0) {
          // this.cursorPos = 0
        }
        charsArrayWhithSplit.splice(this.cursorPos, 0, { char: 'cursor' })
      }
      return charsArrayWhithSplit
    },
    styles() {
      if (this.curVal.length <= 1 || this.cursorPos <= 5) {
        // this.marginLeft = 0
      }
      return { 'margin-left': this.marginLeft + 'px' }
    },
    splitRules() {
      return (this.splitter && this.splitter.split('-')) || []
    }
  },
  watch: {
    value(val) {
      if (val !== this.curVal) {
        this.curVal = val || ''
        this.cursorPos = this.isFocus ? this.curVal.length : -1
      }
    },
    type(val) {
      this.showKeyboard()
    },
    curVal(val) {
      this.updateKeyboardOkEnabled(val.length > 0)
    }
  },
  methods: {
    getSplitClass(i) {
      // 3-3-4-4-4”，手机号输入格式:3-4-4
      if (this.splitRules.length === 1) {
        return i !== 2 && (i + 2) % this.splitRules[0] === 2
          ? 'virtual-input-split'
          : ''
      } else {
        let pos = i + 1
        let cls = ''
        this.splitRules.forEach(item => {
          if (pos - item === 1) {
            cls = 'virtual-input-split'
            // return
          } else {
            pos = pos - item
          }
        })
        return cls
      }
    },
    clearFieldValue() {
      let oldValue = this.curVal
      this.curVal = ''
      this.cursorPos = 0
      this.$emit('input', '', oldValue)
    },
    inputClick(event, startXy, endXy) {
      //  let oldPosition = this.cursorPos
      endXy = endXy || { X: event.x, Y: event.y }
      this.curVal = this.curVal || ''
      let target = event.target
      if (!target) {
        this.cursorPos = this.curVal.length
      } else {
        let targetIndex = target.getAttribute('index')
        this.cursorPos = targetIndex
          ? parseInt(targetIndex)
          : this.curVal.length
        // 特殊边界处理
        let offsetLeft =
          target.offsetLeft +
            (target.firstChild && target.firstChild.offsetLeft) || 0
        if (endXy.X < offsetLeft) {
          this.cursorPos = 0
        }
      }

      this.setFocusPrivate()
      //  if(oldPosition !== this.cursorPos && this.cursorPos === this.curVal.length){
      //      this.adjustPositionWhenInputClick()
      //  }
    },
    setFocusPrivate() {
      this.showKeyboard()
      this.$emit('focus')
      if (!this.isFocus) {
        setTimeout(() => this.adjustPage(), 320) // 需要在Blur中的adjustPage后执行
      }
      this.isFocus = true

      if (document.activeElement && document.activeElement.blur) {
        document.activeElement.blur()
      }
    },
    setFocus() {
      this.cursorPos = this.curVal.length
      this.setFocusPrivate()
    },
    setBlur(showKeyboard) {
      this.isFocus = false
      this.cursorPos = -1
      if (!showKeyboard) {
        this.hideKeyboard()
      }
      this.$emit('blur')

      this.adjustPage(true)
    },
    // update 确定 是否可以点击
    updateKeyboardOkEnabled(okEnabled) {
      console.log('updateKeyboardOkEnabled')
      // this.$keyboard('update', { ok: okEnabled })
    },
    showKeyboard() {
      console.log('show')
      //  this.$keyboard({
      //    show: true,
      //    type: this.type,
      //    config: { ok: this.curVal.length > 0 },
      //    keyboardClick: data => this.onKeyClick(data),
      //    arrowClick: data => this.onArrowClick(data),
      //    okClick: data => this.onOkClick(data),
      //    globalClick: e => this.globalClick(e)
      //  })
    },
    hideKeyboard() {
      console.log('hideKeyboard')
      // this.$keyboard(false)
    },
    onKeyClick(data) {
      let oldValue = this.curVal
      let charsArray = this.curVal.split('')
      let pos = this.cursorPos
      if (data === 'delete') {
        charsArray.splice(pos - 1, 1)
        pos = pos <= 0 ? 0 : pos - 1
      } else if (
        data !== 'ok' &&
        (this.maxlength === -1 || this.curVal.length < this.maxlength)
      ) {
        charsArray.splice(pos, 0, data)
        pos = pos + 1
      }
      let tempVal = charsArray.join('')
      if (this.validate(tempVal)) {
        this.curVal = tempVal
        this.cursorPos = pos
        this.adjustPosition(data)
        this.$emit('input', this.curVal, oldValue)
      }
    },
    onArrowClick(data) {
      if (data === 'ArrowDown') {
        this.setBlur()
        return
      }
      let pos = this.cursorPos
      if (data === 'ArrowLeft') {
        pos = pos === 0 ? 0 : pos - 1
      } else if (data === 'ArrowRight') {
        pos = pos >= this.curVal.length ? pos : pos + 1
      }
      this.cursorPos = pos
      this.adjustPosition(data === 'ArrowLeft')
    },
    onOkClick() {
      this.$emit('submit')
      // return false
      this.setBlur()
    },
    validate(tempValue) {
      let validator = this[this.type + 'Validate']
      return validator ? validator.call(this, tempValue) : true
    },
    numberValidate(tempValue) {
      //  首位为0的情况,后面只能为小数点
      //  首位不为0的情况
      if (tempValue === '') {
        return true
      }
      let regExpStr = `^((?=0)[0]|(?!0)[1-9]\\d*)(\\.\\d{0,${this.precision}})?$`
      return new RegExp(regExpStr).test(tempValue)
    },
    //  numberValidate2(curVal, inputKey){
    //      let precision = this.precision
    //      let dotIndex = curVal.indexOf(".")
    //      if(inputKey === "." && (curVal.length === 0 || dotIndex > 0)){
    //          return false
    //      } else if(curVal === "0" && inputKey !== "."){
    //          return false
    //      } else if(dotIndex > 0 && curVal.substr(dotIndex).length >= precision){
    //          return false
    //      }
    //      return true
    //  },
    adjustPosition(data) {
      // 6个字符以内不用调整边界
      if (this.curVal.length <= 1 || !this.$el || this.cursorPos <= 1) {
        return
      }
      let isDeleteAction = data === 'delete'
      this.$nextTick(() => {
        let cursor = this.$el.getElementsByClassName('virtual-input-cursor')[0]
        let cursorPrev = cursor && cursor.previousSibling
        if (!cursorPrev) {
          return
        }
        let clientWidth = cursorPrev.clientWidth
        let offsetLeft = cursorPrev.offsetLeft
        if (isDeleteAction || (offsetLeft < 0 && cursor.offsetLeft < 0)) {
          this.marginLeft += clientWidth
        } else if (offsetLeft <= 0 && cursor.offsetLeft > 0) {
          this.marginLeft -= clientWidth
        }
        if (this.marginLeft > 0) {
          this.marginLeft = 0
        }
      })
    },
    adjustPositionWhenInputClick() {
      // todo 有bug
      if (this.curVal.length <= 1 || !this.$el || this.cursorPos <= 1) {
        this.marginLeft = 0
        return
      }
      this.$nextTick(() => {
        let chars = this.$el.getElementsByClassName('virtual-input-chars')[0]
        var containerWidth = this.$el.clientWidth - 20
        var charsWidth = (chars && chars.clientWidth) || 0
        let delta = containerWidth - charsWidth
        if (delta < 0) {
          this.marginLeft = delta
        }
      })
    },

    adjustPage(isBlur) {
      this.$nextTick(() => {
        setTimeout(() => {
          let bodyHeight =
            document.body.clientHeight || document.documentElement.clientHeight
          let keyboardTop = bodyHeight - 206 // 键盘height = 206
          let input = this.$el
          let detla = 0
          let inputBottom = input.getBoundingClientRect().bottom
          let container = this.getPopupContainer(input)
          //  let inputDom = container ? container.querySelectorAll('.vcode-input') : []
          //  let lastInputBottom = inputDom.length > 0 ? inputDom[inputDom.length - 1].getBoundingClientRect().bottom : inputBottom

          if (inputBottom > bodyHeight) return

          detla = isBlur ? 0 : inputBottom + 20 - keyboardTop
          //  detla = lastInputBottom + 20 - keyboardTop

          if (container) {
            detla = detla > 0 ? detla : 0
            container.style['padding-bottom'] = detla + 'px'
          } else {
            container = this.getChildView(input)
            if (container) {
              detla = detla > 0 ? -detla : 0
              container.style['margin-top'] = detla + 'px'
            }
          }
        }, 200)
      })
    },
    // 待优化 todo
    getChildView(el) {
      return this.whileDo(el, (classNames, parentNode) => {
        return classNames.indexOf('child-view') >= 0 && parentNode
      })
    },
    // 待优化 todo
    getPopupContainer(el) {
      return this.whileDo(el, (classNames, parentNode) => {
        return classNames.indexOf('popup-container') >= 0 && parentNode
      })
    },

    // 需要优化，需要能解绑事件
    globalClick(e) {
      if (!e || !e.target) {
        this.setBlur()
        return
      }
      let el = e.target
      let res = this.isInSide(el) || { ret: false }
      if (!res.ret) {
        this.setBlur(res.showKeyboard)
      }
    },
    isInSide(el) {
      return this.whileDo(el, (classNames, parentNode) => {
        if (
          classNames.indexOf('keyboard') >= 0 ||
          parentNode.getAttribute('keep-keyboard') === 'true'
        ) {
          return { ret: true }
        } else if (classNames.indexOf('virtual-input') >= 0) {
          // 虚拟输入框之间切换，不需要隐藏键盘
          return { ret: parentNode === this.$el, showKeyboard: true }
        }
      })
    },
    whileDo(el, callback) {
      if (!el || !callback) return
      while (el.tagName.toLowerCase() !== 'body') {
        let classNames = (el.className || '').split(' ')
        let res = callback(classNames, el)
        if (res) {
          return res
        } else {
          el = el.parentNode
        }
      }
    }
  },
  mounted() {
    if (this.autofocus) {
      this.curVal = this.value
      this.setFocus()
    } else {
      this.cursorPos = -1
    }
  },
  beforeDestroy() {
    if (this.isFocus) {
      this.setBlur()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
/* keyframes */
@keyframes fade-in-out {
  0% {
    opacity: 0;
  }
  0.1% {
    opacity: 1;
  }
  52% {
    opacity: 1;
  }
  52.1% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes fade-in-out {
  0% {
    opacity: 0;
  }
  0.1% {
    opacity: 1;
  }
  52% {
    opacity: 1;
  }
  52.1% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.virtual-input {
  position: relative;
  text-align: left;
  overflow: hidden;
  padding-right: 20px;
  .virtual-input-chars {
    overflow: hidden;
  }
  .virtual-input-text {
    float: left;
  }
  .virtual-input-split {
    margin-left: 5px;
  }
  .virtual-input-del-wrapper {
    position: absolute;
    right: 0px;
    top: 0;
    text-align: right;
    background: #fff;
    //  top: 50%;
    //  width: 30px;
    //  height: 30px;
    //  margin-top: -15px;
    //  line-height: 30px;
  }
  .virtual-input-del {
    font-size: 18px;
    text-align: center;
    color: #bdbdbd;
  }
  .input-placeholder {
    color: #bdbdbd;
  }
  .virtual-input-cursor {
    position: absolute;
    display: inline-block;
    vertical-align: middle;
    //  margin-left: -2px;
    //  margin-top: -2px;
  }
  .virtual-input-cursor:after {
    content: "|";
    width: 0.3em;
    font-weight: 300;
    font-size: px2rem(60);
    text-align: center;
    color: black;
    animation: fade-in-out 1s linear infinite;
    -webkit-animation: fade-in-out 1s linear infinite;
  }
}

.virtual-input-ios {
  .virtual-input-cursor:after {
    color: #426bf2;
  }
}
</style>
