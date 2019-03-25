<template>
    <div class="container">
        <div class="left">
            <div class="outer" :class="{'active': totalPrice.totalCount > 0 }">
                <span class="inner">
                    <i class="icon-shopping_cart"></i>
                </span>
                <span v-if="totalPrice.totalCount > 0" class="cart-count">{{ totalPrice.totalCount }}</span>
            </div>
            <div class="curr-price">￥{{ totalPrice.totalPrice }}</div>
            <div class="shipping-fee">
                <p>另需配送费￥{{ shippingFee }}元</p>
            </div>
        </div>
        <div class="right">
            <p v-if="totalPrice.totalPrice === 0">￥{{ minPrice }}起送</p>
            <p v-else-if="totalPrice.totalPrice > 0 && totalPrice.totalPrice < minPrice">还差{{ minPrice - totalPrice.totalPrice }}起送</p>
            <p v-else class="check">去结算</p>
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
        },
        computed: {
            totalPrice() {
                let obj = {
                    totalCount: 0,
                    totalPrice: 0
                }
                let res =this.selectedGoods.reduce((acc, currVal) => {
                    return {
                        totalCount: acc.totalCount + currVal.count,
                        totalPrice: acc.totalPrice + currVal.price * currVal.count
                    };
                }, obj);
                return res;
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
        .check
            background: green
            color: #fff
</style>