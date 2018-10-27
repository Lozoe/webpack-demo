<template>
  <div class="page-countdown">
    This is countdown page
    <router-link to="/"> Home </router-link>
    <router-link to="todos"> Todos </router-link>
    <router-link to="countdown"> Countdown </router-link>
    <h1 class="title">this is countdown</h1>
    <Countdown :time="time"></Countdown>
    <CountdownButton :initStr="initStr" :second="second" :runStr="runStr" :resetStr="resetStr" @stop="onCountdownEnd" @click.native="nativeClick" v-model="start"></CountdownButton>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Countdown from '@/components/Countdown'
import CountdownButton from '@/components/CountdownButton'
export default {
  data: () => {
    return {
      start: false,
      initStr: '倒计时开始',
      second: 50,
      runStr: `{%s}秒结束`,
      resetStr: '重新点过'
    }
  },
  components: { Countdown, CountdownButton },
  computed: {
    ...mapGetters([
      'time'
    ])
  },

  methods: {
    ...mapActions([
      'addTodo',
      'delTodo',
      'updateTime'
    ]),
    updateCountDownTime (time) {
      this.updateTime(time)
    },
    onCountdownEnd () {

    },
    nativeClick () {
      this.start = true
      console.log('native click')
    }
  },

  mounted () {
    /* Proxy.b({m: 1, n: 2}, res => {
      console.log(res)
    }) */
    this.updateCountDownTime(50)
  }
}
</script>

<style scoped lang="less">
.page-countdown {
  .title {
      font-size: 28px;
      color: rebeccapurple;
  }
}
</style>
