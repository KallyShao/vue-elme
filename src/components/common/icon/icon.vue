<template>
    <span class="icon" :class="[iconSize, iconType[type], isVoid[voidFlag]]"></span>
</template>

<script>
export default {
    props: {
        size: {
            type: Number
        },
        type: {
            type: Number
        },
        voidFlag: {
            type: Number
        }
    },
    computed: {
        iconSize() {
            return 'icon-' + this.size;
        },
        iconType() {
            return ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
        },
        isVoid() {
            return ['void', 'full'];
        }
    }
};
</script>

<style lang="stylus" scoped>
@import '~stylus/mixin.styl';
.icon
    display: inline-block
    &.icon-24
        width: 12px
        height: 12px
        &.decrease
            &.void
                bg-image('decrease_1')
            &.full
                bg-image('decrease_3')
        &.discount
            &.void
                bg-image('discount_1')
            &.full
                bg-image('discount_3')
        &.guarantee
            &.void
                bg-image('guarantee_1')
            &.full
                bg-image('guarantee_3')
        &.invoice
            &.void
                bg-image('invoice_1')
            &.full
                bg-image('invoice_3')
        &.special
            &.void
                bg-image('special_1')
            &.full
                bg-image('special_3')
    &.icon-32
        width: 16px
        height: 16px
       &.decrease
           &.void
               bg-image('decrease_2')
           &.full
               bg-image('decrease_4')
       &.discount
           &.void
               bg-image('discount_2')
           &.full
               bg-image('discount_4')
       &.guarantee
           &.void
               bg-image('guarantee_2')
           &.full
               bg-image('guarantee_4')
       &.invoice
           &.void
               bg-image('invoice_2')
           &.full
               bg-image('invoice_4')
       &.special
           &.void
               bg-image('special_2')
           &.full
               bg-image('special_4')
</style>
