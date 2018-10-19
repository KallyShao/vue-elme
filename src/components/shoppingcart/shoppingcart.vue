<template>
    <div class="shopping-cart">
        <div class="left-wrap" :class="{acitve: total.totalCount > 0}">
            <span v-show="total.totalCount > 0" class="count">{{ total.totalCount }}</span>
            <span class="logo-out-wrap">
                <i class="icon-shopping_cart"></i>
            </span>
            <span class="shoppingcart-total-price">￥{{ total.totalPrice }}</span>
            <span class="delivery-price border-1px-left">另需配送费￥{{ deliveryPrice }}元</span>
        </div>
        <div class="right-checkout-wrap" :class="payClass">
            <span class="min-price">{{ payDesc }}</span>
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
        },
        selectedFoods: {
            type: Array,
            default() {
                return [
                    {
                        price: 10,
                        count: 0
                    },
                    {
                        price: 3.44,
                        count: 1
                    }
                ];
            }
        }
    },
    computed: {
        total() {
            let totalCount = 0;
            let totalPrice = 0;
            this.selectedFoods.forEach((value, index) => {
                totalPrice += value.price * value.count;
                totalCount += value.count;
            });
            totalPrice = Math.round(totalPrice * 100) / 100;
            return {
                totalPrice,
                totalCount
            };
        },
        payDesc() {
            if (this.total.totalPrice === 0){
                return `￥${this.minPrice}起送`;
            } else if (this.total.totalPrice < this.minPrice){
                let diff = this.minPrice - this.total.totalPrice;
                diff = Math.round(diff * 100) / 100;
                return `还差￥${diff}元起送`;
            } else {
                return '去结算';
            }
        },
        payClass() {
            if (this.total.totalPrice < this.minPrice){
                return 'not-enough';
            } else {
                return 'enough';
            }
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
        .count
            position: absolute
            left: 44px
            top: -10px
            width: 24px
            line-height: 16px
            font-weight: 700
            font-size: 9px
            background-color: rgb(240, 20, 20)
            color: #fff
            z-index: 11
            border-radius: 16px
            text-align: center
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .4)
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
        &.acitve
            .icon-shopping_cart
                color: #fff
                background-color: rgb(0, 160, 220)
        .shoppingcart-total-price
            position: absolute
            left: 80px
            bottom: 12px
            font-size: 16px
            color: rgba(255, 255, 255, .4)
            font-weight: 700
            line-height: 24px
        &.acitve
            .shoppingcart-total-price
                color: #fff
        .delivery-price
            position: absolute
            left: 130px
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
        &.not-enough
            background-color: #2b333b
        &.enough
            background-color: #00b43c;
            color: #fff
        .min-price
            font-size: 12px
            font-weight: 700
</style>
