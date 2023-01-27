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
import {mapState, mapMutations} from 'vuex'
import Slider from '../components/Slider.vue';

export default {
  name: 'IndexPage',
  data: () => ({
    carousel: null,
  }),
  components: {
    Slider
  },
  mounted() {
    if (process.client) {
      window.onresize = () => this.onResize()
    }
    this.onResize()
  },
  methods: {
    onResize() {
      this.setCarouselSettings([{field: 'centerMode', value: false}, {field: 'centerPadding', value: '0'}])
      if (window.innerWidth <= 720) {
        this.setCarouselSettings([
          {field: 'slidesToShow', value: 1},
          {field: 'centerMode', value: true},
          {field: 'centerPadding', value: '20px'}
        ])
      }else if (window.innerWidth <= 980) {
        this.setCarouselSettings([{field: 'slidesToShow', value: 2}])
      }else if (window.innerWidth <= 1250) {
        this.setCarouselSettings([{field: 'slidesToShow', value: 3}])
      }else if (window.innerWidth <= 1480) {
        this.setCarouselSettings([{field: 'slidesToShow', value: 4}])
      }else if (window.innerWidth <= 1700) {
        this.setCarouselSettings([{field: 'slidesToShow', value: 5}])
      } else {
        this.setCarouselSettings([{field: 'slidesToShow', value: 6}])
      }
    },
    setCarousel(carousel) {
      this.carousel = carousel
    },
    showNext() {
      this.carousel.next()
    },
    showPrev() {
      this.carousel.prev()
    },
    ...mapMutations({
      setCarouselSettings: 'setCarouselSettings'
    })
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
  },
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
    @media(max-width: 540px) {padding-left: 18px; padding-right: 18px;}
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
      @media(max-width: 600px) {display: none;}
    }
  }
  @media(max-width: 540px) {
    h2 {
      font-size: 20px;
    }
  }
</style>