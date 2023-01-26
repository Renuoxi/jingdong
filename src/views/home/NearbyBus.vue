<template>
  <div class="nearby">
      <h3 class="nearby__title">附近商家</h3>
      <router-link  v-for="(item) in nearbyList" :key="item._id" :to="`/shop/${item._id}`" >
        <shop-info  :item="item" />
      </router-link>
     <!--  <div class="nearby__item" v-for="(item) in nearbyList" :key="item._id">
        <img class="item__img" :src=item.imgUrl >
        <div class="item__txt">
          <div class="txt__title">{{ item.name }}</div>
          <div class="txt__content">
            <span class="content__details"> 月售{{ item.sales }}</span>
            <span class="content__details">起送{{ item.expressLimit }}</span>
            <span class="content__details">基础运费{{ item.expressPrice }}</span>
          </div>
          <p class="txt__highlight">{{  item.slogan }}</p>
        </div>
      </div> -->

  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo.vue'

const userNearByListEffect = () => {
  const nearbyList = ref([])
  const getNearbyList = async () => {
    const result = await get('/api/shop/hot-list')
    console.log(result.data)
    if (result?.errno === 0 && result?.data?.length) {
      nearbyList.value = result.data
    }
  }
  return { nearbyList, getNearbyList }
}

export default {
  name: 'NearBy',
  components: { ShopInfo },
  setup () {
    const { nearbyList, getNearbyList } = userNearByListEffect()
    getNearbyList()
    // eslint-disable-next-line no-sequences
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
    a{
      text-decoration: none;
    }
}
</style>
