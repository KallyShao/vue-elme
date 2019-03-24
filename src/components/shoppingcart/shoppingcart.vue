<template>
    <div class="container">
        <div class="left">
            <div class="outer active">
                <span class="inner">
                    <i class="icon-shopping_cart"></i>
                </span>
                <span class="cart-count">99</span>
            </div>
            <div class="curr-price">￥8.98</div>
            <div class="shipping-fee">
                <p>另需配送费￥{{ shippingFee }}元</p>
            </div>
        </div>
        <div class="right">
            <p>￥{{ minPrice }}起送</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            shippingFee: {
                type: Number,
                default: 0
            },
            minPrice: {
                type: Number,
                default: 0
            },
            selectedGoods: {
                type: Array,
                default() {
                    return [];
                }
            }
        }
    };
</script>

<style lang="stylus" scoped>
.container
    position: fixed
    left: 0
    right: 0
    bottom: 0
    height: 48px
    background: #141d27
    display: flex
    .left
        flex: 1
        font-size: 0
        display: flex
        align-items: center
        .outer
            display: inline-block
            width: 56px
            height: 56px
            padding: 6px
            position: relative
            left: 10px
            top: -10px
            background: #141d27
            border-radius: 50%
            box-sizing: border-box
            margin-right: 16px
            vertical-align: top
            .inner
                display: block
                width: 100%
                height: 100%
                background: #2b343c
                border-radius: 50%
                text-align: center
                .icon-shopping_cart
                    line-height: 44px
                    font-size: 24px
                    color: #80858a
            .cart-count
                position: absolute
                top: 0
                right: 0
                padding: 5px 10px
                background: red
                z-index: 9
                font-size: 10px
                color: #fff
                border-radius: 12px
            &.active
                .inner
                    background: rgb(0, 160, 220)
                    .icon-shopping_cart
                        color: #fff
        .curr-price
            display: inline-block
            color: #ccc
            font-size: 16px
            font-weight: 700
            padding: 5px 10px 5px 0
            border-right: 1px solid #ccc
        .shipping-fee
            display: inline-block
            font-size: 10px
            color: #ccc
            padding-left: 10px
    .right
        flex: 0 0 105px
        width: 105px
        background: #2b343c
        p
            color: #80858a
            font-size: 12px
            text-align: center
            line-height: 48px
            font-weight: 700
</style>