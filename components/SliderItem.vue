<template>
  <b-card
    :img-src="product.image"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem"
    class="mb-2"
  >
    <Sticker>{{ product.stickers[0].text }}</Sticker>
    <span class="article">{{ product.article }}</span>
    <b-card-text>
      {{ product.category }}
    </b-card-text>
    <div class="rating">
      <div class="rating-item" v-for="rate in maxRates" :key="rate">
        <img
          src="@/static/active_star.svg"
          v-if="rate <= product.rating"
          alt="icon"
        />
        <img src="@/static/disable_star.svg" v-else alt="icon" />
      </div>
    </div>
    <div class="old-price">
      {{
        product.prices.rrc.old_price &&
        product.prices.rrc.old_price.toLocaleString("ru") + " руб."
      }}
    </div>
    <div class="current-price">
      {{ product.prices.rrc.price.toLocaleString("ru") }} руб.
    </div>

    <div class="card-bottom">
      <div class="cart">
        <img src="@/static/Cart.svg" alt="cart" />
      </div>
      <img src="@/static/Heart.svg" alt="icon">
      <img src="@/static/Chart.svg" alt="icon">
    </div>
  </b-card>
</template>

<script>
import Sticker from '@/components/Sticker'
export default {
  components: {
    Sticker
  },
  data: () => ({
    maxRates: 5
  }),
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>

.card {
  min-height: 559px;
  width: 16rem!important;
  display: grid!important;
  grid-template-rows: 240px 1fr;
  position: relative;
  @media(max-width: 720px) {  width: 20rem!important;}
  @media(max-width: 600px) {  width: 18rem!important;}
  @media(max-width: 540px) {  width: 17rem!important;}
  &-body {
    display: grid;
  }
}
.card-img-top {
  max-width: 193px;
  max-height: 220px;
  margin: 23px auto;
  display: block;
}
.rating {
  display: flex;
  margin-top: 5px;
  margin-bottom: 7px;
  img {
    margin-right: 2px;
  }
}
.article {
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #969696;
}
.card-text {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
  margin-top: 6px;
  margin-bottom: 0;
}
.old-price {
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  text-decoration-line: line-through;
  color: #959595;
}
.current-price {
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
  margin-top: 2px;
}
.card-bottom {
  display: flex;
  align-items: center;
  margin-top: 13px;
  img:nth-child(2) {
    margin-left: auto;
    margin-right: 20px;
  }
}
.cart {
  transition: all 0.4s;
  padding: 20px 40px;
  background: #2e3b6e;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: #414e81;
  }
}

</style>