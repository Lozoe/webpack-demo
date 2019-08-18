<template>
    <button class="button" :class="classes" :style="{backgroundColor: bgcolor, color: color, width: width}" :type="actiontype" v-touch="buttonClick">
        <slot></slot>
    </button>
</template>

<script src="./package"></script>

<style lang='scss' src="./package/index.scss" scoped></style>
