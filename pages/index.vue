<template>
  <div class="wrapper">
    <div class="slider-top">
      <h2>Новые поступления</h2>
      <div class="arrows">
        <img src="@/static/Left.svg" alt="icon" @click="showPrev">
        <img src="@/static/Right.svg" alt="icon" @click="showNext">
      </div>
    </div>
    <Slider
      :products="products"
      @setCarousel="setCarousel"
    />
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Slider from '../components/Slider.vue';

export default {
  name: 'IndexPage',
  data: () => ({
    carousel: null,
  }),
  components: {
    Slider
  },
  methods: {
    setCarousel(carousel) {
      this.carousel = carousel
    },
    showNext() {
      this.carousel.next()
    },
    showPrev() {
      this.carousel.prev()
    }
  },
  async fetch({store}) {
    if (!store.state.products.length) {
      await store.dispatch('fetchProducts')
    }
  },
  computed: {
    ...mapState({
      products: state => state.products
    })
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap');
  * {
    font-family: 'Jost', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .wrapper {
    padding-left: 100px;
    padding-right: 100px;
  }
  .slider-top {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 30px;
    .arrows {
      display: grid;
      grid-gap: 30px;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
    }
  }
</style>