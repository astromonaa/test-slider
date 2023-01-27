export const state = () => ({
  products: [],
  settings: {
    "arrows": false,
    "dots": false,
    "infinite": true,
    "initialSlide": 2,
    "speed": 500,
    "slidesToShow": 6,
    "slidesToScroll": 1,
    "swipeToSlide": true,
  }
})

export const getters = {
  //
}

export const mutations = {
  setProducts(state, products) {
    state.products = products
  },
  setCarouselSettings(state, arr) {
    arr.forEach(item => state.settings[item.field] = item.value)
  }
}

export const actions = {
  async fetchProducts({commit}) {
    try {
      const response = await this.$axios.get('/api/test/products/')
      commit('setProducts', response.data)
    }catch(e) {
      console.log(e);
    }
  }
}