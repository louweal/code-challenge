<template>
  <div
    class="pushmenu min-vh-100 min-vw-100 position-absolute top-0"
    v-if="$store.state.showPushmenu"
  ></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.pushmenu {
  z-index: 1;
  background: #ffcc00;
  background: linear-gradient(328deg, #ffcc00 0%, #ffa200 100%) 0% 0% no-repeat;
}
</style>
