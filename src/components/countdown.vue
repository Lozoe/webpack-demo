<template>
  <div class="countdown" v-if="isShow">{{msg}}</div>
</template>

<script>
export default {
  name: 'my-countdown',
  // template: tpl,
  data () {
    return {
      remainTime: this.time,
      interval: ''
    }
  },
  props: {
    time: {
      validator (value) {
        return typeof value === 'number'
      },
      default: 5
    }
  },
  computed: {
    isShow () {
      return this.remainTime > 0
    },
    msg () {
      return `等待${this.remainTime}秒`
    }
  },
  methods: {
    init () {
      this.run()
    },
    // 启动倒计时
    run () {
      setTimeout(this.start, 500)
    },
    start () {
      // 显示初始值
      this.remainTime--
      // 隔1秒改变一次，直到remainTime为0
      this.interval = setInterval(this.dis, 1000)
    },
    dis () {
      if (this.remainTime === 0 || this.remainTime === -1) {
        this.$emit('end', this)
        clearInterval(this.interval)// 清除定时任务
        return
      }
      this.remainTime--
    }
  },
  /**
  * life cycle
  */
  mounted () {
    this.init()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
