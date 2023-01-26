<template>
  <div class="position">
          <span class="iconfont  position_icon">&#xe61f;</span>
          北京理工大学国防科技园2号楼10层
          <span class="iconfont position_notice">&#xe63f;</span>
        </div>
        <div class="search">
          <span class="iconfont">&#xe86e;</span>
          <input class="input__content" placeholder="山姆会员商店优惠商品" type="text"  />
        </div>
        <div class="banner">
          <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" >
        </div>
        <div class="icons" >
          <div class="icons__item" v-for="item in iconsList" :key="item.desc" >
            <img class="icons__item__img"  :src="`http://www.dell-lee.com/imgs/vue3/${ item.imgName }.png`" />
            <p class="icons__item__desc">{{ item.desc }}</p>
          </div>
        </div>
        <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconsList = [
      { imgName: '超市', desc: '超市便利' },
      { imgName: '菜市场', desc: '菜市场' },
      { imgName: '水果店', desc: '水果店' },
      { imgName: '鲜花', desc: '鲜花绿植' },
      { imgName: '家居', desc: '家居时尚' },
      { imgName: '医药健康', desc: '医药健康' },
      { imgName: '蛋糕', desc: '烘焙蛋糕' },
      { imgName: '签到', desc: '签到' },
      { imgName: '大牌免运', desc: '大牌到家' },
      { imgName: '红包', desc: '红包套餐' }
    ]
    return { iconsList }
  }
}
</script>

<style lang="scss">
@import "../../style/viriables.scss";
@import "../../style/minxin.scss";

.position{
    color:$content-fontcolor;
    @include ellipsis;
    padding:.16rem .24rem .16rem 0;
    line-height: .22rem;
    font-size: .16rem;
    .position_icon{
      font-size: .18rem;
      margin-right: .08rem;
    };
    .position_notice{
      font-size: .17rem;
      position: absolute;
      right: .18rem;
    }
  }
.search{
    margin-bottom: .12rem;
    line-height: .32rem;
    background: #f5f5f5;
    border-radius: 16rem;
    color: #B7B7B7;
    font-size: .14rem;
    .iconfont{
      display: inline-block;
      position: relative;
      top:.02rem;
      padding: 0 .08rem 0 .14rem;
    }
    .input__content{
      width: 84%;
      margin: 0 auto;
      background: none;
      outline: none;
      border: 0;
      line-height: .44rem;
      color: rgba(0,0,0,0.50);
      &::placeholder{
        color: rgba(0,0,0,0.50);
      }
    }
  }
.banner{
    height:0 ;
    overflow: hidden;
    padding-bottom: 25.4%;
    margin-bottom: 0.16rem;
    &__img{
      width:100%
    }
}
.icons{
    display: flex;
    flex-wrap:wrap;
    &__item{
      width:20%;
      &__img{
        width: .4rem;
        height: .4rem;
        display: block;
        margin: 0 auto;
      }
      &__desc{
        text-align: center;
        margin:0.06rem 0 0.16rem  0;
        color: $content-fontcolor;
      }
    }
}
.gap{
    margin: 0  -.18rem 0 -.18rem;
    height: 0.1rem;
    background-color: #f1f1f1;
  }
</style>
