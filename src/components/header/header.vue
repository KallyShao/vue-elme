<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="left">
                <img :src="seller.avatar" alt="avatar" width="64" height="64">
            </div>
            <div class="right">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{ seller.name }}</span>
                </div>
                <div class="description">
                    {{ seller.description }} / {{ seller.deliveryTime }}分钟送达
                </div>
                <div class="supports" v-if="seller.supports">
                    <v-icon class="icon" :size="24" :type="seller.supports[0].type" :voidFlag="0"></v-icon>
                    <span class="text">{{ seller.supports[0].description }}</span>
                </div>
            </div>
            <div v-if="seller.supports" class="support-count" @click="showDetail">
                <span class="count">{{ seller.supports.length }}个</span>
                <i class="icon-keyboard_arrow_right"></i>
            </div>
        </div>
        <div class="bulletin-wrapper" @click="showDetail">
            <span class="icon"></span>
            <span class="text">{{ seller.bulletin }}</span>
            <i class="icon-keyboard_arrow_right"></i>
        </div>
        <div class="background">
            <img :src="seller.avatar" width="100%" height="300%">
        </div>
        <transition name="fade">
            <div v-show="detailShow" class="detail">
                <div class="detail-wrapper clearfix">
                    <div class="detail-main">
                        <h1 class="seller-name">{{ seller.name }}</h1>
                        <div class="rating">
                            <v-star :size="48" :score="seller.score"></v-star>
                        </div>
                        <div class="content onsale-info">
                            <div class="title">
                                <div class="line"></div>
                                <h2 class="text">优惠信息</h2>
                                <div class="line"></div>
                            </div>
                            <ul v-if="seller.supports" class="onsale-list">
                                <li v-for="(item, index) in seller.supports" :key="index" class="onsale-item">
                                    <v-icon class="icon" :size="32" :type="seller.supports[index].type" :voidFlag="0"></v-icon>
                                    <span class="onsale-text">{{ item.description }}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="content seller-bulletin">
                            <div class="title">
                                <div class="line"></div>
                                <h2 class="text">商家公告</h2>
                                <div class="line"></div>
                            </div>
                            <p class="bulletin-text">{{ seller.bulletin }}</p>
                        </div>
                    </div>
                </div>
                <div class="detail-close">
                    <i class="icon-close" @click="hideDetail"></i>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import star from 'components/star/star';
import icon from 'components/common/icon/icon';
export default {
    props: {
        seller: {
            type: Object
        }
    },
    components: {
        'v-star': star,
        'v-icon': icon
    },
    data() {
        return {
            detailShow: false
        };
    },
    methods: {
        showDetail() {
            this.detailShow = true;
        },
        hideDetail() {
            this.detailShow = false;
        }
    }
};
</script>

<style lang="stylus" scoped>
@import '~stylus/mixin.styl';
@import '~stylus/base.styl';
.header
    position: relative
    color: #fff
    background: rgba(7, 17, 27, .5)
    .content-wrapper
        position: relative
        padding: 24px 12px 18px 24px
        font-size: 0
        .left
            display: inline-block
            img
                border-radius: 2px
        .right
            display: inline-block
            margin-left: 16px
            vertical-align: top
            .title
                margin: 2px 0 8px 0
                .brand
                    display: inline-block
                    vertical-align: top
                    width: 30px
                    height: 18px
                    bg-image('brand')
                .name
                    margin-left: 6px
                    font-size: 16px
                    line-height: 18px
                    font-weight: bold
            .description
                margin-bottom: 10px
                font-size: 12px
                line-height: 12px
            .supports
                font-size: 0
                line-height: 12px
                .icon
                    vertical-align: top
                    margin-right: 4px
                .text
                    line-height: 12px
                    font-size: 10px
        .support-count
            position: absolute
            right: 12px
            bottom: 18px
            padding: 0 8px
            height: 24px
            line-height: 24px
            border-radius: 14px
            background: rgba(0, 0, 0, .2)
            font-size: 0
            .count
                vertical-align: top
                margin-right: 2px
                font-size: 10px
            .icon-keyboard_arrow_right
                font-size: 10px
                line-height: 24px
    .bulletin-wrapper
        position: relative
        height: 28px
        line-height: 28px
        padding: 0 22px 0 12px
        background: rgba(7, 17, 27, .2)
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
        .icon
            display: inline-block
            width: 22px
            height: 14px
            margin-right: 4px
            bg-image('bulletin')
            vertical-align: middle
        .text
            margin-right: 4px
            font-size: 10px
        &:after
            content: ''
            height: 100%
        .icon-keyboard_arrow_right
            position: absolute
            right: 12px
            top: 9px
            font-size: 10px
    .background
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        overflow: hidden
        z-index: -1
        filter: blur(10px)
    .detail
        position: fixed
        top: 0
        right: 0
        bottom: 0
        left: 0
        z-index: 99
        overflow: auto
        opacity: 1
        background: rgba(7, 17, 27, .8)
        backdrop-filter: blur(10px)
        &.fade-enter-active, &.fade-leave-active
            transition: all .5s
        &.fade-enter, &.fade-leave-to
            opacity: 0
            background: rgba(7, 17, 27, 0)
        .detail-wrapper
            min-height: 100%
            .detail-main
                margin-top: 64px
                // padding-bottom: 64px  // 这里padding是必须的，是底部sticky部分所占的高度
                padding: 0 36px 64px
                .seller-name
                    line-height: 16px
                    text-align: center
                    font-weight: 700
                    font-size: 16px
                .rating
                    margin: 16px auto 0
                    text-align: center
                .content
                    margin-top: 28px
                    .title
                        display: flex
                        margin-bottom: 24px
                        .line
                            flex: 1
                            position: relative
                            top: -6px
                            border-bottom: 1px solid rgba(255, 255, 255, .2)
                        .text
                            padding: 0 12px
                            line-height: 14px
                            font-size: 14px
                            font-weight: 700
                .onsale-list
                    padding: 0 12px;
                    .onsale-item
                        margin-bottom: 12px
                        height: 16px
                        font-size: 0
                        &:last-child
                            margin-bottom: 0
                        .icon
                            vertical-align: middle
                            margin-right: 6px
                        .onsale-text
                            display: inline-block
                            vertical-align: middle
                            line-height: 16px
                            font-size: 12px
                            font-weight: 200
                .seller-bulletin
                    .bulletin-text
                        line-height: 24px
                        font-size: 12px
                        font-weight: 200

        .detail-close
            position: relative
            width: 32px
            height: 32px
            margin: -64px auto 0 auto  //很关键
            clear: both  //关键
            font-size: 32px
</style>
