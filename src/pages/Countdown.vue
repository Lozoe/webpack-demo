<template>
  <div class="page-countdown">
    This is countdown page
    <router-link to="/"> Home </router-link>
    <router-link to="todos"> Todos </router-link>
    <router-link to="countdown"> Countdown </router-link>
    <h1 class="title">this is countdown</h1>
    <Countdown :time="time"></Countdown>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Countdown from '@/components/countdown'
export default {
  data: () => {
    return {
      // time: 60
    }
  },
  components: { Countdown },
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
