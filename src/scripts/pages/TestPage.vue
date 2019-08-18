<template>
  <div class="hello">
    <Button 
      size="small"
      bgcolor="#00bcd4"
      class="btn-green"
    >按钮一
    </Button>
    <Header 
      title="头部文案"
    >
    </Header>
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
import Button from '@/scripts/components/Button'
import Header from '@/scripts/components/Header'

export default {
  name: 'TestPage',
  components: { 
    VirtualInput,
    Button,
    Header
  },
  data() {
    return {
      autofocus: true,
      placeholder: '请输入'
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
