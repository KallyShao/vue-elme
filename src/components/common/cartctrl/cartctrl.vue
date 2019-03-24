<template>
    <div class="wrapper">
        <i class="icon-remove_circle_outline"></i>
        <span class="number">190</span>
        <i class="icon-add_circle" @click="_addCart"></i>
    </div>
</template>
<script>
    export default {
        methods: {
            _addCart() {
                this.$emit('handleAddCart');
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