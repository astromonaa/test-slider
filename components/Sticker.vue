<template>
  <div class="sticker">
    <slot/>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .sticker {
    min-width: 74px;
    background: #7F65B7;
    border-radius: 22px;
    padding: 3px 14px;
    display: inline-block;
    font-weight: 500;
    font-size: 12px;
    line-height: 28px;
    color: #FFFFFF;
    position: absolute;
    top: 30px;
    left: 60px;
  }
</style>