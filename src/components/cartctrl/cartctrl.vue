<template>
    <div class="btn-wrap">
        <transition name="move">
            <div v-show="food.count > 0" class="cart-remove">
                <i class="inner icon-remove_circle_outline" @click="handleDecreaseCart">
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
    .cart-remove
        width: 24px
        height: 100%
        transform: translate3d(0, 0, 0)
        opacity: 1
        .icon-remove_circle_outline
            position: absolute
            left: 0
            bottom: 0
            color: rgb(0, 160, 220)
            line-height: 24px
            font-size: 24px
            // transition: all 4s linear //如果旋转和translate的时间和方式一样，这里不用写。这里是控制旋转的。
            transform: rotate(0)
        &.move-enter-active, &.move-leave-active
            transition: all .4s linear
        &.move-enter, &.move-leave-to
            opacity: 0
            transform: translate3d(48px, 0, 0)
            .icon-remove_circle_outline
                transform: rotate(180deg)
    .icon-add_circle
        position: absolute
        right: 0
        bottom: 0
        line-height: 24px
        font-size: 24px
        color: rgb(0, 160, 220)
    .count
        position: absolute
        bottom: 0
        left: 24px
        width: 24px
        line-height: 24px
        text-align: center
        color: rgb(147, 153, 159)
        font-size: 10px
</style>
