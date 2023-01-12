<template>
  <div class="nearby">
      <h3 class="nearby__title">附近商家</h3>

      <div class="nearby__item" v-for="(item,index) in nearbyList" :key="index">
        <img class="item__img" :src=item.imgsrc >
        <div class="item__txt">
          <div class="txt__title">{{ item.title }}</div>
          <div class="txt__content">
            <span v-for=" (innerhtml ,index ) in  item.tags" :key="index" class="content__details">{{ innerhtml }}</span>
          </div>
          <p class="txt__highlight">{{ item.highlight }}</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'NearBy',
  setup () {
    const nearbyList = [
      { id: 0, title: '沃尔玛', tags: ['月售1万+', '起送¥0', '基础运费¥5'], highlight: 'VIP尊享满89元减4元运费券（每月3张）', imgsrc: 'http://www.dell-lee.com/imgs/vue3/near.png' },
      { id: 1, title: '沃尔玛', tags: ['月售1万+', '起送¥0', '基础运费¥5'], highlight: 'VIP尊享满89元减4元运费券（每月3张）', imgsrc: 'http://www.dell-lee.com/imgs/vue3/near.png' },
      { id: 2, title: '沃尔玛', tags: ['月售1万+', '起送¥0', '基础运费¥5'], highlight: 'VIP尊享满89元减4元运费券（每月3张）', imgsrc: 'http://www.dell-lee.com/imgs/vue3/near.png' }
    ]
    return { nearbyList }
  }
}
</script>

<style lang="scss" scoped >
@import "../../style/viriables.scss";
@import "../../style/minxin.scss";

.nearby{
    position: relative;
    &__title{
        font-size: .18rem;
        color: $content-fontcolor;
    }
    &__item{
        display: flex;
        margin-bottom: 0.12rem; ;
        .item__img{
        width: 0.56rem;
        height: 0.56rem;
        margin-right: 0.16rem;
        }
        .item__txt{
        flex: 1;
        border-bottom: 1px solid  #F1F1F1;
        .txt__title{
            font-size: 16px;
            color: $content-fontcolor;
            line-height: .22rem;
        }
        .txt__content{
            line-height: .18rem;
            font-size: 13px;
            color: $content-fontcolor;
            padding-top: .08rem ;
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
}
</style>
