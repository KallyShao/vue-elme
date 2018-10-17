<template>
    <div class="shopping-cart">
        <div class="left-wrap">
            <span class="logo-out-wrap">
                <i class="icon-shopping_cart"></i>
            </span>
            <span class="shoppingcart-total-price">￥0</span>
            <span class="delivery-price border-1px-left">另需配送费￥{{ deliveryPrice }}元</span>
        </div>
        <div class="right-checkout-wrap">
            <span class="min-price">￥{{ minPrice }}起送</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        minPrice: {
            type: Number,
            default: 0
        },
        deliveryPrice: {
            type: Number,
            default: 0
        }
    }
};
</script>

<style lang="stylus" scoped>
@import '~stylus/mixin.styl';
.shopping-cart
    position: fixed
    left: 0
    bottom: 0
    right: 0
    z-index: 9
    display: flex
    width: 100%
    height: 48px
    background-color: #141d27
    .left-wrap
        flex: 1
        position: relative
        .logo-out-wrap
            position: absolute
            left: 12px
            bottom: 2px
            z-index: 10
            width: 58px
            height: 58px
            border-radius: 50%
            background-color: #141d27
            .icon-shopping_cart
                position: absolute
                left: 7px
                bottom: 7px
                z-index: 11
                width: 44px
                height: 44px
                line-height: 44px
                text-align: center
                border-radius: 50%
                font-size: 24px
                background-color: #2b343c
                color: rgba(255, 255, 255, .4)
        .shoppingcart-total-price
            position: absolute
            left: 80px
            bottom: 12px
            font-size: 16px
            color: rgba(255, 255, 255, .4)
            font-weight: 700
            line-height: 24px
        .delivery-price
            position: absolute
            left: 115px
            top: 12px
            height: 24px
            line-height: 24px
            padding-left: 12px
            border-1px-left(rgba(255, 255, 255, .1))
            font-size: 10px
            color: rgba(255, 255, 255, .4)
    .right-checkout-wrap
        flex: 0 0 105px
        line-height: 48px
        text-align: center
        color: rgba(255, 255, 255, .4)
        background-color: #2b333b
        .min-price
            font-size: 12px
            font-weight: 700
</style>
