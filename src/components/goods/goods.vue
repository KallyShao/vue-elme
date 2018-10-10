<template>
    <div class="wrapper">
        <div class="left-wrapper">
            <ul class="menu-list">
                <li class="menu-item" v-for="(item, index) in goods" :key="index">
                    <span class="text">
                        <span v-show="item.type >= 0" class="icon">
                            <v-icon :size="32" :type="item.type" :voidFlag="1"></v-icon>
                        </span>
                        {{ item.name }}
                    </span>
                </li>
            </ul>
        </div>
        <div class="foods-wrapper"></div>
    </div>
</template>

<script>
import icon from 'components/common/icon/icon';
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
    components: {
        'v-icon': icon
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
        .menu-list
            padding: 0 12px
            .menu-item
                width: 56px
                height: 54px
                line-height: 14px
                font-size: 12px
                color: #666
                .text
                    line-height: 14px
                    // vertical-align: middle
                    .icon
                        display: inline-block
                        vertical-align: bottom
    .foods-wrapper
        flex: 1
</style>
