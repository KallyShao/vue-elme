<template>
    <div>
        <div class="outer-wrapper">
            <div class="left-wrapper" ref="leftWrapper">
                <ul class="menu-list">
                    <li class="menu-item" v-for="(item, index) in goods" :key="index" :class="{'active': index == getCurrentMenuIndex}" @click="selectCategoryItem(index)">
                        <span class="text border-1px">
                            <span v-show="item.type >= 0" class="icon">
                                <v-icon :size="24" :type="item.type" :voidFlag="1"></v-icon>
                            </span>
                            {{ item.name }}
                        </span>
                    </li>
                </ul>
            </div>
            <div class="foods-wrapper" ref="foodsWrapper">
                <div>
                    <div v-for="(goodsItem, index) in goods" class="category-item category-item-hook" :key="index">
                        <h1 class="category-item-title">{{ goodsItem.name }}</h1>
                        <ul class="foods-list">
                            <li class="foods-item border-1px" v-for="(foodsItem, index) in goodsItem.foods" :key="index">
                                <div class="img-wrap">
                                    <img :src="foodsItem.icon">
                                </div>
                                <div class="text-wrap">
                                    <h2 class="text-title">{{ foodsItem.name }}</h2>
                                    <p class="description">{{ foodsItem.description }}</p>
                                    <p class="rating-wrap">
                                        <span class="sell-count">月售{{ foodsItem.sellCount }}份</span><span class="rating">好评率{{ foodsItem.rating }}%</span>
                                    </p>
                                    <div class="price">
                                        <span class="current-price"><span class="money-flag">￥</span>{{ foodsItem.price }}</span>
                                        <s class="old-price" v-if="foodsItem.oldPrice">￥{{ foodsItem.oldPrice }}</s>
                                    </div>
                                    <i class="icon-add_circle"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <v-shoppingcart></v-shoppingcart>
    </div>
</template>

<script>
import icon from 'components/common/icon/icon';
import shoppingcart from 'components/shoppingcart/shoppingcart';
import BScroll from 'better-scroll';

const ERR_OK = 0;
export default {
    props: {
        seller: {
            type: Object
        }
    },
    data() {
        return {
            goods: [],
            heightList: [],
            scrollY: 0
        };
    },
    components: {
        'v-icon': icon,
        'v-shoppingcart': shoppingcart
    },
    computed: {
        getCurrentMenuIndex() {
            for (let i = 0; i < this.heightList.length; i++){
                let height1 = this.heightList[i];
                let height2 = this.heightList[i + 1];
                if (!height2 || (this.scrollY < height2 && this.scrollY >= height1)){
                    return i;
                }
            }
            return 0;
        }
    },
    methods: {
        _initScroll() {
            let leftWrapper = this.$refs.leftWrapper;
            this.leftScroll = new BScroll(leftWrapper, {
                click: true
            });

            let foodsWrapper = this.$refs.foodsWrapper;
            this.foodsScroll = new BScroll(foodsWrapper, {
                probeType: 3
            });
        },
        _calculateHeight() {
            let height = 0;
            let foodsWrapper = this.$refs.foodsWrapper;
            let categoryItemList = foodsWrapper.getElementsByClassName('category-item-hook');
            this.heightList.push(height);
            for (let i = 0; i < categoryItemList.length; i++){
                height += categoryItemList[i].offsetHeight;
                this.heightList.push(height);
            }
        },
        selectCategoryItem(index) {
            let foodsWrapper = this.$refs.foodsWrapper;
            let categoryItemList = foodsWrapper.getElementsByClassName('category-item-hook');
            let el = categoryItemList[index];
            this.foodsScroll.scrollToElement(el, 300);
        }
    },
    created() {
        this.$http.get('/api/goods').then((res) => {
            res = res.body;
            if (res.errno === ERR_OK){
                this.goods = res.data;
                // 从接口中取到的数据是异步更新的，而dom的更新是在nextTick()中进行
                this.$nextTick(() => {
                    this._initScroll();
                    this._calculateHeight();
                    this.foodsScroll.on('scroll', (pos) => {
                        this.scrollY = Math.abs(Math.round(pos.y));
                        // console.log(this.scrollY);
                    });
                });
            }
        });
    }
};
</script>

<style lang="stylus" scoped>
@import '~stylus/mixin.styl';
.outer-wrapper
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
            overflow: hidden
            .menu-item
                display: table
                width: 56px
                height: 54px
                padding: 0 12px
                line-height: 14px
                color: #666
                &.active
                    position: relative
                    background: #fff
                    z-index: 10
                    margin-top: -1px
                    font-weight: 700
                    .text
                        border-none()
                .text
                    display: table-cell
                    vertical-align: middle
                    line-height: 14px
                    border-1px(rgba(7, 17, 27, .1))
                    font-size: 12px
                .icon
                    display: inline-block
                    margin-right: 1px
                    vertical-align: top
    .foods-wrapper
        flex: 1
        .category-item-title
            height: 26px
            line-height: 26px
            padding-left: 14px
            font-size: 12px
            color: rgb(147, 153, 159)
            background: #f3f5f7
            border-left: 2px solid #d9dde1
        .foods-list
            .foods-item
                display: flex
                position: relative
                margin: 18px
                padding-bottom: 18px
                font-size: 0
                border-1px(rgba(7, 17, 27, .1))
                &:last-child
                    margin-bottom: 0
                    border-none()
                .icon-add_circle
                    position: absolute
                    right: 0
                    bottom: 18px
                    line-height: 24px
                    font-size: 24px
                    color: rgb(0, 160, 220)
                .img-wrap
                    display: inline-block
                    flex: 0 0 57px
                    img
                        width: 57px
                        height: 57px
                .text-wrap
                    flex: 1
                    display: inline-block
                    vertical-align: top
                    padding-left: 10px
                    .text-title
                        line-height: 14px
                        margin-top: 2px
                        font-size: 14px
                        color: rgb(7, 17, 27)
                    .description, .rating-wrap
                        line-height: 12px
                        margin-top: 8px
                        font-size: 10px
                        color: rgb(147, 153, 159)
                    .rating-wrap
                        .sell-count
                            margin-right: 12px
                    .price
                        height: 24px
                        line-height: 24px
                        .current-price
                            margin-right: 8px
                            color: #f01414
                            font-size: 14px
                            font-weight: 700
                            .money-flag
                                font-size: 10px
                                font-weight: normal
                        .old-price
                            font-weight: 700
                            font-size: 10px
                            color: #93999f
</style>
