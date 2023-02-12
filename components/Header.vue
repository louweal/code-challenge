<template>
  <div id="header" class="header position-absolute top-0 min-vw-100 pb-lg-5">
    <div class="container-lg">
      <div class="d-flex justify-content-between pt-3 pt-lg-g4">
        <div>
          <nuxt-link to="/" event="" @click.native="scrollToTop()">
            <img
              src="@/images/outhands-wit.svg"
              alt="Outhands"
              width="177"
              height="42.32"
            />
          </nuxt-link>
        </div>
        <div class="align-self-center d-none d-lg-block">
          <ul class="list-inline mb-0">
            <li
              class="list-inline-item fw-regular"
              v-for="(l, i) in $options.menu"
              :key="i"
            >
              <nuxt-link :to="l.url">
                {{ l.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <nuxt-link to="/login" class="btn btn-secondary d-none d-lg-block">
              Login
            </nuxt-link>
          </div>

          <div class="fs-2 text-white d-lg-none" @click="togglePushmenu()">
            <i
              class="bi"
              :class="$store.state.showPushmenu ? 'bi-x-lg' : 'bi-list'"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menu from "@/data/menu.json";

export default {
  menu,

  methods: {
    scrollToTop() {
      if (this.$route.path === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
        this.$router.push("/");
      }
    },
    togglePushmenu() {
      document.body.classList.toggle("disable-scroll");
      this.$store.commit("togglePushmenu");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  z-index: 2000;
}
</style>
