<template>
    <div class="popup">
        <transition name="fade">
            <div class="mask" v-if="show" v-touch.prevent.stop="close"></div>
        </transition>
        <transition name="popup">
            <div class="popup-container" v-if="show" :style="styles" ref="box">
                <div class="popup-header" v-if="!!$slots.top" ref="top">
                    <slot name="top"></slot>
                </div>
                <div class="popup-content">
                    <div ref="content">
                        <slot></slot>
                    </div>
                </div>
                <div class="popup-footer" v-if="!!$slots.bottom" ref="bottom">
                    <slot name="bottom"></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script src="./package"></script>
<style lang='scss' src="./package/index.scss" scoped></style>
