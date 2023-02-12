<template>
  <div
    class="pushmenu min-vh-100 min-vw-100 position-absolute top-0 d-flex justify-content-center align-items-center"
    v-if="$store.state.showPushmenu"
  >
    <div>
      <ul class="list-unstyled text-center">
        <li class="fs-4 fw-bold py-2" v-for="(l, i) in $options.menu" :key="i">
          <nuxt-link :to="l.url" class="text-dark">
            {{ l.title }}
          </nuxt-link>
        </li>
      </ul>

      <nuxt-link to="/login" class="btn btn-secondary mt-4"> Login </nuxt-link>
    </div>
  </div>
</template>

<script>
import menu from "@/data/menu.json";

export default {
  menu,
};
</script>

<style lang="scss" scoped>
.pushmenu {
  z-index: 1;
  background: #ffcc00;
  background: linear-gradient(328deg, #ffcc00 0%, #ffa200 100%) 0% 0% no-repeat;
  transform: translateY(-100%);
  opacity: 0.2;
  animation: slideDown 0.4s ease-out forwards;
}

@keyframes slideDown {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
