<template>
  <div class="hello">
    <Button
      size="small"
      bgcolor="#00bcd4"
      class="btn-green"
      @button-click="onButtonClick"
    >按钮一
    </Button>
    <Header
      title="头部文案"
    >
    </Header>
    <Popup ref="pop" v-model="popShow" position="bottom" height="72%" :closeOnMasker="closeOnMasker">
      <div slot="top">
        这是头
      </div>
      <div>
        <div>这是一个pop测试内容</div>
        <div>这是一个pop测试内容</div>
        <div>这是一个pop测试内容</div>
        <div>这是一个pop测试内容</div>
        <div>这是一个pop测试内容</div>
        <div>这是一个pop测试内容</div>
        <div>这是一个pop测试内容</div>
        <div>这是一个pop测试内容</div>
        <div>这是一个pop测试内容</div>
        <div>这是一个pop测试内容</div>
        <div>这是一个pop测试内容</div>
        <div>这是一个pop测试内容</div>
        <div>这是一个pop测试内容</div>
        <div>这是一个pop测试内容</div>
        <div>这是一个pop测试内容</div>
        <div>这是一个pop测试内容</div>
        <div>这是一个pop测试内容</div>
        <div>这是一个pop测试内容</div>
        <div>这是一个pop测试内容</div>
        <div>这是一个pop测试内容</div>
        <div>这是一个pop测试内容</div>
        <div>这是一个pop测试内容</div>
        <div>这是一个pop测试内容</div>
      </div>
    </Popup>
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
import Popup from '@/scripts/components/Popup'

export default {
  name: 'TestPage',
  components: {
    VirtualInput,
    Button,
    Header,
    Popup
  },
  data() {
    return {
      autofocus: true,
      placeholder: '请输入',
      /**
       * pop测试数据 start
      */
      popShow: false,
      closeOnMasker: true
      /**
       * pop测试数据 end
      */
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
    },
    onButtonClick() {
      this.popShow = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
