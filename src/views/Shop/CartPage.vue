<template>
  <div class="cart">
    <div class="content__right">
        <div class="right__item" v-for="item in countList " :key="item._id" v-show="item.count>0" >
            <input type="checkbox" class="checktype" >
            <img class="item__imgTwo" :src=item.imgUrl>
            <div class="item__txtTwo"  >
                <div class="txtTwo__title">{{item.name}}</div>
                <div class="txtTwo__content">
                    <span class="txtTwo__discount">￥{{item.oldPrice}} </span>
                    <span class="txtTwo__original">￥{{ item.price }}</span>
                </div>
            </div>
            <div class="item__number">
                <span class="number__left" @click="() => { changeItemToCart(shopId, item._id, item, -1) } "> - </span>
                <span class="number"> {{item.count || 0 }} </span>
                <span class="number__right" @click="() => { changeItemToCart(shopId, item._id, item, 1) }"> + </span>
            </div>
        </div>
    </div>
  <div class="cartStyle">
    <img class="cart__img" src="../../../../../../basket@2x.png"/>
    <div class="cart__icon">{{ total  }}</div>
    <div class="cart__price">总价: <span class="price__number">￥{{totalPrice}}</span></div>
    <span class="cart__checkout">去结算</span>
  </div>
</div>

</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'CartPage',
  setup () {
    const store = useStore()
    const route = useRoute()
    const shopId = route.params.id
    const cartList = store.state.cartList
    // 计算购物车内容数量
    const total = computed(() => {
      const productList = cartList[shopId]
      let count = 0
      if (productList) {
        for (const i in productList) {
          const productInfo = productList[i]
          count = count + productInfo.count
        }
      }
      return count
    })
    // 计算价格
    const totalPrice = computed(() => {
      const productList = cartList[shopId]
      let count = 0
      if (productList) {
        for (const i in productList) {
          const productInfo = productList[i]
          count += (productInfo.count * productInfo.price)
        }
      }
      return count.toFixed(2)
    })
    // 获取购物车物品列表
    const countList = computed(() => {
      const productList = cartList[shopId]
      return productList
    })
    return { total, totalPrice, countList }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/minxin.scss';

.cart{
  position:absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.cartStyle{
    height: .49rem;
    border-top: solid 1px rgb(242, 242, 242) ;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.checktype{
  border-radius: 50%;
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
    min-width: .2rem;
    height: .2rem;
    background: #E93B3B;
    color: #fff;
    font-size: .2rem;
    text-align: center;
    line-height: .20rem;
    border-radius: 0.1rem ;
    transform: scale(.5);
    transform-origin:left center ;
    position: absolute;
    bottom:.28rem;
    left: .42rem;
}
.cart__checkout{
   width: .98rem;
   height: .5rem;
   background:#4FB0F9;
   color: #fff;
   text-align: center;
   line-height: .5rem;
}
.content__right{
   flex: 1;
   overflow-y: scroll;
   background: #fff;
}
.right__item{
    display: flex;
    padding: .12rem .16rem 0.12rem .16rem;
    border-bottom: 1px solid  #F1F1F1;
    position: relative;
    .item__imgTwo {
        width: 0.46rem;
        height: 0.46rem;
        margin-right: 0.16rem;
    }
    .item__txtTwo{
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        .txtTwo__title{
            font-size: 0.16rem;
            color: #333;
            line-height: .22rem;
            @include ellipsis;
            }
        .txtTwo__content{
            margin-top:.06rem;
            .txtTwo__discount{
                color:#E93B3B;
                line-height: .16rem;
                font-size: .14rem;
                margin-right: .06rem ;
            }
            .txtTwo__original{
                color:#999;
                line-height: .16rem;
                font-size: .10rem;
                text-decoration: line-through;
            }
        }
    }
}
.item__number{
    position:absolute;
    right: .16rem;
    bottom: .12rem;
    .number {
        display: inline-block;
        width:.34rem;
        text-align: center;
    }
    .number__left, .number__right{
        display: inline-block;
        width: .20rem;
        height: .20rem;
        font-size: .2rem;
        text-align: center;
        line-height: .16rem;
        border-radius: 50%;
    }
    .number__left{
        border: .01rem solid #666;
        color: #666;
    }
    .number__right{
        color: #fff;
        background: #0091FF;
    }
  }
</style>
