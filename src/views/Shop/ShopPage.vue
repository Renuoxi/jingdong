<template>
  <div class="wrapper">
    <div class="top__style">
      <div class="style__back iconfont" @click="handleBack" >&#xe601;</div>
      <div class="search">
          <span class="iconfont">&#xe86e;</span>
          <input class="input__content" placeholder="山姆会员商店优惠商品" type="text"  />
      </div>
    </div>
    <ShopIonfo  :item="data.item" :hiderBorder= true />
    <ShopContennt/>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { get } from '../../utils/request'
import ShopIonfo from '../../components/ShopInfo.vue'
import ShopContennt from './ShopContennt.vue'

export default {
  name: 'ShopPage',
  components: { ShopIonfo, ShopContennt },
  setup () {
    const route = useRoute()
    const data = reactive({ item: {} })
    const getShopItem = async () => {
      const result = await get(`/api/shop/${route.params.id}`)

      if (result?.errno === 0 && result?.data) {
        data.item = result.data
      }
    }
    getShopItem()
    const router = useRouter()
    const handleBack = () => {
      router.back()
    }
    return { data, handleBack }
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  padding:0 .18rem;
}
.top__style{
  display: flex;
  align-items: center;
  .style__back{
    font-size: .26rem;
    color: #B6B6B6 ;
  }
  .iconfont{
      top:.02rem;
    }
}

.search{
    flex: 1;
    margin: .16rem 0;
    line-height: .32rem;
    background: #f5f5f5;
    border-radius: 16rem;
    color: #B7B7B7;
    font-size: .14rem;
    .iconfont{
      display: inline-block;
      position: relative;
      padding: 0 .08rem 0 .14rem;
      top:.02rem;
    }
    .input__content{
      width: 84%;
      margin: 0 auto;
      background: none;
      outline: none;
      border: 0;
      line-height: .32rem;
      color: rgba(0,0,0,0.50);
      &::placeholder{
        color: rgba(0,0,0,0.50);
      }
    }
  }
</style>
