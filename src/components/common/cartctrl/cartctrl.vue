<template>
    <div class="wrapper">
        <i v-if="count > 0" class="icon-remove_circle_outline" @click="_decreaseCart"></i>
        <span v-if="count > 0" class="number">{{ count }}</span>
        <i class="icon-add_circle" @click="_addCart"></i>
    </div>
</template>
<script>
    export default {
       data() {
           return {
               count: 0
           };
       },
        methods: {
            _addCart() {
                this.count++;
                this.$emit('handleAddCart');
            },
            _decreaseCart() {
                if (this.count > 0) {
                    this.count--;
                }
                this.$emit('handleDecreaseCart');
            }
        }
    };
</script>
<style lang="stylus" scoped>
.wrapper
    position: absolute
    bottom: 0
    right: 0
    display: flex
    align-items: center
    .icon-remove_circle_outline, .icon-add_circle
        font-size: 24px
        color: #00a0dc
    .number
        padding: 0 5px
        font-size: 10px
</style>