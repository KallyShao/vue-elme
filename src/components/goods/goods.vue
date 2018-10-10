<template>
    <div class="wrapper">
        <div class="left-wrapper">
        </div>
        <div class="foods-wrapper"></div>
    </div>
</template>

<script>
const ERR_OK = 0;
export default {
    props: {
        seller: {
            type: Object
        }
    },
    data() {
        return {
            goods: []
        };
    },
    created() {
        this.$http.get('/api/goods').then((res) => {
            console.log(res);
            res = res.body;
            if (res.errno === ERR_OK){
                this.goods = res.data;
            }
        });
    }
};
</script>

<style lang="stylus" scoped>
.wrapper
    display: flex
    position: absolute
    top: 174px
    bottom: 46px
    width: 100%
    overflow: hidden
    .left-wrapper
        flex: 0 0 80px
        width: 80px //兼容安卓浏览器
        background: #f3f5f7
    .foods-wrapper
        flex: 1
</style>
