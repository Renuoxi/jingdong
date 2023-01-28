<template>
  <div class="shop__content" >
    <div class="content__left">
        <div
        v-for="item in categories"
        :key="item.tab"
        @click="() => handleClickTab(item.tab)"
        :class="{'left__tab':true, 'left__tab--active': currentTab === item.tab} "
        >{{ item.name }}</div>
    </div>
    <div class="content__right">
        <div class="right__item" v-for="item in countList " :key="item._id" >
            <img class="item__imgTwo" :src=item.imgUrl>
            <div class="item__txtTwo"  >
                <div class="txtTwo__title">{{item.name}}</div>
                <span class="txtTwo__details"> 月售{{item.sales}}件</span>
                <div class="txtTwo__content">
                    <span class="txtTwo__discount">￥{{item.oldPrice}} </span>
                    <span class="txtTwo__original">￥{{ item.price }}</span>
                </div>
            </div>
            <div class="item__number">
                <span class="number__left"> - </span>
                <span class="number"> {{cartList?.[shopId]?.[item._id]?.count || 0 }} </span>
                <span class="number__right" @click="() => { addItemToCart(shopId, item._id, item) }"> + </span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { get } from '../../utils/request'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const categories = [
  { name: '全部商品', tab: 'all' },
  { name: '秒杀', tab: 'seckill' },
  { name: '新鲜水果', tab: 'fruit' }
]
const useCartEffect = () => {
  const store = useStore()
  const { cartList } = toRefs(store.state)
  return { cartList, store }
}
export default {
  name: 'ShopContennt',
  setup () {
    // 数据的接受地
    const data = reactive({
      currentTab: categories[0].tab,
      countList: []
    })
    const { countList, currentTab } = toRefs(data)
    // 获取页面需要的数据
    const router = useRoute()
    const shopId = router.params.id
    const getContentData = async (tab) => {
      const result = await get(`/api/shop/${shopId}/products`, { tab })
      // console.log(result)
      if (result?.errno === 0 && result?.data?.length) {
        data.countList = result.data
      }
    }
    getContentData(currentTab, shopId)
    // 选项卡点击
    const handleClickTab = (tab) => {
      getContentData(tab)
      data.currentTab = tab
    }
    // vuex实现商品功能，购物车
    const { cartList, store } = useCartEffect()
    const addItemToCart = (shopId, productId, productInfo) => {
      store.commit('addItemToCart', { shopId, productId, productInfo })
      // console.log(shopId, productId, productInfo)
    }
    // 导出所有的数据
    return { categories, countList, currentTab, handleClickTab, shopId, cartList, addItemToCart }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/minxin.scss';
.shop__content{
    display: flex;
    position: absolute;
    top:1.62rem;
    left: 0;
    right: 0;
    bottom:0.5rem ;
}
.content__left{
    width: 0.76rem;
    height: 100%;
    background:#F5F5F5 ;
    font-size: .14rem;
    overflow-y: scroll;
    .left__tab--active{
        background: #fff;
    }
    .left__tab{
        line-height: .40rem;
        text-align: center;
    }
}
.content__right{
   flex: 1;
   overflow-y: scroll;
}
.right__item{
    display: flex;
    padding: .12rem .16rem 0.12rem .16rem;
    border-bottom: 1px solid  #F1F1F1;
    position: relative;
    .item__imgTwo {
        width: 0.68rem;
        height: 0.68rem;
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
        .txtTwo__details{
            display: inline-block;
            margin-right: .16rem;
            line-height: .16rem;
            font-size: 0.12rem;
            color: #333;
            margin: 0.06rem 0;
            }
        .txtTwo__content{
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
