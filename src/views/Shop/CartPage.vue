<template>
  <div class="cartStyle">
    <img class="cart__img" src="../../../../../../basket@2x.png"/>
    <div class="cart__icon">2</div>
    <div class="cart__price">总价: <span class="price__number">￥128</span></div>
    <span class="cart__checkout">去结算</span>
  </div>
</template>

<script>
export default {
  name: 'CartPage'
}
</script>
<style lang="scss" scoped>
.cartStyle{
    position:absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: .49rem;
    border-top: solid 1px rgb(242, 242, 242) ;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.cart__img{
   width: .28rem;
   height: .26rem;
   padding: .12rem .24rem;
}
.cart__price{
    margin-left: -1.2rem ;
    font-size: 12px;
    color: #333333;
    .price__number{
        font-size: 18px;
        color: #E93B3B;
    }
}
.cart__icon{
    width: .2rem;
    height: .2rem;
    background: #E93B3B;
    color: #fff;
    font-size: .2rem;
    text-align: center;
    line-height: .20rem;
    border-radius:50% ;
    transform: scale(.5);
    position: absolute;
    top:.04rem;
    left: .40rem;
}
.cart__checkout{
   width: .98rem;
   height: .5rem;
   background:#4FB0F9;
   color: #fff;
   text-align: center;
   line-height: .5rem;
}
</style>
