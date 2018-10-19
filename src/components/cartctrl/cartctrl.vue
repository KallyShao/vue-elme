<template>
    <div class="btn-wrap">
        <transition name="move">
            <div>
                <i v-show="food.count > 0" class="inner icon-remove_circle_outline" @click="handleDecreaseCart">
                </i>
            </div>
        </transition>
        <span v-show="food.count > 0" class="count">{{ food.count }}</span>
        <i class="icon-add_circle" @click="handleAddCart"></i>
    </div>
</template>

<script>
import Vue from 'vue';
export default {
    props: {
        food: {
            type: Object
        }
    },
    // created() {
    //     console.log(this.food);
    // },
    methods: {
        handleAddCart() {
            if (!this.food.count){
                Vue.set(this.food, 'count', 1);
            } else {
                this.food.count++;
            }
        },
        handleDecreaseCart() {
            if (this.food.count){
                this.food.count--;
            }
        }
    }
};
</script>

<style lang="stylus" scoped>
.btn-wrap
    position: absolute
    right: 0
    bottom: 18px
    width: 72px
    height: 24px
    .icon-remove_circle_outline
        position: absolute
        left: 0
        bottom: 0
        color: rgb(0, 160, 220)
        line-height: 24px
        font-size: 24px
        // transition: all .4s linear
        opacity: 1
        &.move-enter-active, &.move-leave-active
            transition: all 3s linear
        &.move-enter, &.move-leave-to
            opacity: 0
            transform: translate3d(24px, 0, 0)
    .icon-add_circle
        position: absolute
        right: 0
        bottom: 0
        line-height: 24px
        font-size: 24px
        color: rgb(0, 160, 220)
    .count
        display: inline-block
        width: 24px
        line-height: 24px
        margin-left: 24px
        text-align: center
        color: rgb(147, 153, 159)
        font-size: 10px
</style>
