<template>
  <Button
    size="small"
    :bgcolor="start ? '' : '#bdbdbd'"
    :class="start ? 'btn-hollow' : ''"
    >{{btnText}}
    </Button>
</template>

<script>
import Button from '@/components/Button'
export default {
  name: 'ComCountdownButton',
  extends: Button,
  components: { Button },
  data () {
    return {
      btnText: '获取',
      timer: null,
      start: false,
      runTime: this.second
    }
  },
  props: {
    initStr: String,
    second: {
      default: 60,
      validator (val) {
        return /^\d*$/.test(val)
      }
    },
    runStr: {
      type: String,
      default: '{%s}秒重新开始'
    },
    resetStr: {
      type: String,
      default: '重来'
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    run () {
      this.btnText = this.getStr(this.runTime)
      this.timer = setInterval(() => {
        this.runTime--
        this.btnText = this.getStr(this.runTime)
        this.runTime <= 0 && this.stop()
      }, 1000)
    },
    stop () {
      this.btnText = this.resetStr
      this.start = false
      this.runTime = this.second
      this.$emit('stop')
      clearInterval(this.timer)
      this.timer = null
    },
    getStr (second) {
      return this.runStr.replace(/\{([^{]*?)%s(.*?)\}/g, second)
    }
  },
  watch: {
    value (val) {
      this.start = val
      if (val && !this.timer) {
        this.run()
      }
      this.$emit('input')
    }
  },
  created () {
    if (this.initStr) this.btnText = this.initStr
  },
  destroyed () {
    this.stop()
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
