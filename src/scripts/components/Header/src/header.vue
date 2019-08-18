<template>
    <header class="my-header border-bottom">
        <span class="regret" v-touch:tap="regret" v-if="showback">
            <i class="iconfont" v-html="lefttext"></i>
        </span>
        <span class="regret" v-else></span>
        <div class="title">{{title}}</div>
        <span class="affirm" v-html="righttext"></span>
    </header>
</template>

<style src="./package/header.scss" lang="scss"></style>
<script src="./package"></script>
