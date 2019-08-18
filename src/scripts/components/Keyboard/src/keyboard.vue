<template>
    <div :class="['keyboard', keyboardExtCls]">
      <div class="kb-num-left">
        <div class="kb-row" v-for="(rowData, rowDataKey) in keyboardData.leftModel" :key="rowDataKey">
          <div v-touch.canrepeat="onKeyClick.bind(this, itemData)"
               class="kb-col"
               v-for="(itemData, itemDataKey) in rowData"
               :class="itemData.extCls"
               v-html="itemData.value || itemData.key"
               :key="itemDataKey"></div>
        </div>
      </div>
      <div class="kb-num-right">
        <div class="kb-row" v-for="(rowData, rowDataKey) in keyboardData.rightModel" :key="rowDataKey">
          <div v-touch.canrepeat="onKeyClick.bind(this, itemData)"
               class="kb-col"
               v-for="(itemData, itemDataKey) in rowData"
               :class="itemData.extCls"
               v-html="itemData.value"
               :key="itemDataKey"></div>
        </div>
      </div>
    </div>
</template>

<script src="./package"></script>

<style lang='scss' src="./package/index.scss" scoped></style>
