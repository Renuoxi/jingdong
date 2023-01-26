<template>
  <div class="wrapper">
    <ShopIonfo  :item="item" :hiderBorder= true />
  </div>
</template>

<script>
import ShopIonfo from '../../components/ShopInfo.vue'

export default {
  name: 'ShopPage',
  components: { ShopIonfo },
  setup () {
    const item = {
      expressLimit: 0,
      expressPrice: 5,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      name: '沃尔玛',
      sales: 10000,
      slogan: 'VIP尊享满89元减4元运费券',
      _id: '1'
    }
    return { item }
  }
}
</script>

<style style="scss" scoped>
.wrapper{
  padding:0 .18rem;
}
</style>
