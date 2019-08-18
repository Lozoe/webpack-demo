import directives from '@/scripts/directives'
export default {
  name: 'ComKeyboard',
  data() {
    return {
      keyboardData: {
        leftModel: [
          [{ key: 1 }, { key: 2 }, { key: 3 }],
          [{ key: 4 }, { key: 5 }, { key: 6 }],
          [{ key: 7 }, { key: 8 }, { key: 9 }],
          [
            { key: '' },
            { key: 0 },
            {
              key: '' /* value: '&#xf547;', option: 'hideKeyboard' */,
              extCls: 'icon kb-icon'
            }
          ]
        ],
        rightModel: [
          [{ value: '&#xe604;', key: 'delete', extCls: 'icon kb-icon' }],
          [{ value: '确定', key: 'ok', extCls: '' }]
        ]
      },
      inputKeys: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      keyboardExtCls: ''
    }
  },
  // props: ["keyboardText"],
  directives,
  props: {
    type: {
      type: String,
      default: 'tel' // number, identity, tel
    },
    arrowDown: {
      type: Boolean,
      default: true
    },
    config: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  watch: {
    type() {
      this.refreshKeyboardType()
    },
    arrowDown() {
      this.initArrowDown()
    },
    config(val) {
      if (val) {
        this.initOkKeyConfig()
      }
    }
  },
  methods: {
    init() {
      this.kbOpen = true
      this.initRealKeyBoard()
      this.refreshKeyboardType()
      this.initArrowDown()
      this.initOkKeyConfig()
    },
    // 模拟器键盘输入
    initRealKeyBoard() {
      document.addEventListener('keydown', e => {
        if (!this.kbOpen || !e) {
          return
        }
        let key = e.key === 'x' ? 'X' : e.key
        if (this.inputKeys.indexOf(key) >= 0) {
          this.clickKey({ key: key })
        } else if (key == 'Backspace') {
          this.clickKey({ key: 'delete' })
        } else if (
          key == 'ArrowLeft' ||
          key == 'ArrowRight' ||
          key == 'ArrowDown' ||
          key == 'ArrowUp'
        ) {
          this.clickKey(e)
        } else if (key == 'Enter' && this.config && this.config.ok == true) {
          this.clickKey({ key: 'ok' })
        }
        e.preventDefault()
        e.stopPropagation()
      })
    },
    initArrowDown() {
      let arrowDownConfig = this.keyboardData.leftModel[3][2]
      if (this.arrowDown) {
        arrowDownConfig.key = 'ArrowDown'
        arrowDownConfig.value = '&#xf547;'
      } else {
        arrowDownConfig.key = ''
        arrowDownConfig.value = ''
      }
    },
    initOkKeyConfig() {
      let config = this.config || {}
      let okKeyConfig = this.keyboardData.rightModel[1][0]
      okKeyConfig.extCls = config.ok == true ? '' : 'kb-disabled'
    },
    // 刷新键盘类型
    refreshKeyboardType() {
      let exKeyConfig = this.keyboardData.leftModel[3][0]
      this.inputKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
      let typeKeysMap = {
        number: '.',
        tel: '',
        identity: 'X',
      }
      exKeyConfig.key = typeKeysMap[this.type]
      this.inputKeys.push(exKeyConfig.key)
    },
    // 触发click
    clickKey(data) {
      if (!data) {
        return
      }
      if (data.key == 'ok' && !(this.config && this.config.ok == true)) {
        return
      }
      this.$emit('keyclick', data.key)
    },
    onKeyClick(data) {
      debugger
      this.clickKey(data)
    }
  },
  mounted() {
    this.init()
  },
  destroyed() {
    this.kbOpen = false
  }
}
