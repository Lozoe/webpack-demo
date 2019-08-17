<template>
  <div class="hello">
    1222233
    <!-- <VirtualInput
      slot="field"
      class="vcode-input"
      @submit="submit"
      @input="onInput"
      @blur="onBlur"
      type="tel"
      :autofocus="autofocus"
      :placeholder="placeholder"
      v-model="cValue"
      :maxlength="6"
      ref="vCode"
    ></VirtualInput> -->
  </div>
</template>

<script>
import VirtualInput from '@/scripts/components/VirtualInput'

export default {
  name: 'TestPage',
  components: { VirtualInput },
  data() {
    return {
      autofocus: true,
      placeholder: '请输入',
      cValue: '123'
    }
  },
  computed: {
    currentValue: {
      get() {
        return this.cValue
      },
      set(newValue) {
        this.cValue = newValue
        // this.$emit('input', newValue)
      }
    }
  },
  methods: {
    submit() {
      console.log('submit')
    },
    onInput() {
      console.log('onInput')
    },
    onBlur() {
      console.log('onBlur')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
