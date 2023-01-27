<template>
  <VueSlickCarousel v-bind="settings" ref="carousel">
    <SliderItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </VueSlickCarousel>
</template>

<script>
import SliderItem from './SliderItem.vue';
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import {mapState} from 'vuex'

export default {
  components: {
    SliderItem, VueSlickCarousel
  },
  mounted() {
    this.$emit('setCarousel', this.$refs.carousel)
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapState({
      settings: state => state.settings
    })
  },
}
</script>

<style lang="scss" scoped>

</style>