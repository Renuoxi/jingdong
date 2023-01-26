<template>
    <div class="shop">
        <img class="item__img" :src=item.imgUrl >
        <div :class="{'item__txt':true, 'item__txt--border':hiderBorder? false: true}"  >
          <div class="txt__title">{{ item.name }}</div>
          <div class="txt__content">
            <span class="content__details"> 月售{{ item.sales }}</span>
            <span class="content__details">起送{{ item.expressLimit }}</span>
            <span class="content__details">基础运费{{ item.expressPrice }}</span>
          </div>
          <p class="txt__highlight">{{  item.slogan }}</p>
        </div>
      </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: ['item', 'hiderBorder']
}
</script>

<style lang="scss" scoped>
@import "../style/viriables.scss";
@import "../style/minxin.scss";
.shop{
    display: flex;
    margin-bottom: 0.12rem;
    .item__img {
        width: 0.56rem;
        height: 0.56rem;
        margin-right: 0.16rem;
    }
    .item__txt--border{border-bottom: 1px solid  #F1F1F1;}
    .item__txt{
        flex: 1;
        .txt__title{
            font-size: 16px;
            color: #333;
            line-height: .22rem;
            }
        .txt__content{
            line-height: .18rem;
            font-size: 13px;
            color: #333;
            padding-top: .08rem;
            .content__details{
                display: inline-block;
                margin-right: .16rem;
                }
            }
        .txt__highlight{
            color:#E93B3B;
            line-height: .18rem;
            font-size: .13rem;
            margin: .08rem  0 .12rem 0;
            }
        }
}

</style>
