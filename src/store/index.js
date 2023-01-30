import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {

    }
  },
  getters: {
  },
  mutations: {
    changeItemToCart (state, payload) {
      const { shopId, productId, productInfo, num } = payload
      //
      let shopInfo = state.cartList[shopId]
      if (!shopInfo) { shopInfo = {} }

      let product = shopInfo[productId]
      if (!product) {
        product = productInfo
        product.count = 0
      }
      console.log(product)
      product.count = product.count + num
      if (num > 0) { product.check = true }
      if (product.count < 0) { product.count = 0 }
      shopInfo[productId] = product
      state.cartList[shopId] = shopInfo
    },
    handleChangChenck (state, payload) {
      const { shopId, productid } = payload
      const product = state.cartList[shopId][productid]
      product.check = !product.check
    },
    handleCleanProduct (state, payload) {
      const { shopId } = payload
      state.cartList[shopId] = {}
    },
    ChangeAll (state, payload) {
      const { shopId } = payload
      const productList = state.cartList[shopId]
      if (productList) {
        for (const i in productList) {
          productList[i].check = true
        }
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
