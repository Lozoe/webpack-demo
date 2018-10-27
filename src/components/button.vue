<template>
    <button class="com-button" :class="classes" :style="{backgroundColor: bgcolor, color: color, width: width}" :type="actiontype" @click="buttonClick">
        <slot></slot>
    </button>
</template>

<script type="text/babel">
import { throttle } from '@/api/utils'
export default {
  name: 'ComButton',
  props: {
    disabled: Boolean,
    actiontype: {
      validator (value) {
        return ['button', 'submit', 'reset'].indexOf(value) > -1
      },
      default: 'button'
    },
    type: {
      validator (value) {
        return ['primary', 'gray', 'hollow'].indexOf(value) > -1
      },
      default: 'primary'
    },
    size: {
      validator (value) {
        return ['small', 'normal'].indexOf(value) > -1
      },
      default: 'normal'
    },
    bgcolor: String,
    color: String,
    width: {
      type: String
    }
  },
  computed: {
    classes () {
      return `btn-${this.size} btn-${this.type}`
    }
  },
  methods: {
    trrigerClick () {
      this.$emit('button-click', this)
    },
    buttonClick () {
      throttle(this.trrigerClick, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
.com-button {
  /* display: block;
  margin: 0 auto;
  border-radius: 3px;
  outline: none;
  border: none;

  &.btn-normal {
    width: 355px;
    height: 39px;
    font-size: 16px;
  }

  &.btn-small {
    height: 24px;
    padding: 0 6px;
    line-height: 24px;
    font-size: 14px;
  }

  &.btn-primary {
    color: #fff;
    background-color: green;
  }

  &.btn-gray {
    color: #9e9e9e;
    background-color: #dcdcdd;
  }

  &.btn-hollow {
    opacity: 0.5;
    border: 1px solid #bbb;
    background-color: #fff;
    color: #888;
    text-transform: uppercase;
  } */
  display: block;
    margin: 0 auto;
    border-radius: 3px;
    outline: none;
    border: none;

    &.btn-normal {
        width: 355px;
        height: 39px;
        font-size: 16px;
    }

    &.btn-small {
        height: 24px;
        padding: 0 6px;
        line-height: 24px;
        font-size: 14px;
    }

    &.btn-primary {
        color: #fff;
        background-color: #ff9800;
    }

    &.btn-gray {
        color: #9e9e9e;
        background-color: #dcdcdd;
    }

    &.btn-hollow {
        opacity: 0.5;
        border: 1px solid #bbb;
        background-color: #fff;
        color: #888;
        text-transform: uppercase;
    }
}
</style>
