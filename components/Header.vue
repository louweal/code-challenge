<template>
  <div id="header" class="header position-absolute top-0 w-100 pb-lg-5">
    <div class="container-lg">
      <div class="row pt-3">
        <div class="col-3">
          <nuxt-link to="/" event="" @click.native="scrollToTop()">
            <img
              src="@/images/outhands-wit.svg"
              alt="Outhands"
              width="177"
              height="42.32"
            />
          </nuxt-link>
        </div>
        <div class="col-6 text-center align-self-center d-none d-lg-block">
          <ul class="list-inline mb-0">
            <li
              class="list-inline-item"
              v-for="(l, i) in $options.menu"
              :key="i"
            >
              <nuxt-link :to="l.url">
                {{ l.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="col-3 text-end">
          {{ $store.state.showPushmenu }}
          <div class="btn btn-white" @click="togglePushmenu()">toggle</div>
        </div>
      </div>
    </div>
  </div>
  <!-- <nav class="navbar navbar-expand-lg p-md-3 px-lg-5 xxxbg-primary">
    <div class="container-lg">
      <nuxt-link to="/" event="" @click.native="scrollToTop()">
        <img
          src="@/images/outhands-wit.svg"
          alt="Outhands"
          width="177"
          height="42.32"
        />
      </nuxt-link>
      <div
        @click="$route.path === '/nav' ? $router.back() : $router.push('/nav')"
        class="navbar-toggler"
        aria-label="toggle pushmenu"
      >
        <span
          class="navbar-toggler-icon"
          :class="$route.path === '/nav' ? 'navbar-toggler-icon-close' : false"
        ></span>
      </div>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item px-lg-2" v-for="(l, i) in $options.menu" :key="i">
            <nuxt-link :to="{ path: l.url, hash: l.hash }" class="nav-link">
              {{ l.title }}
            </nuxt-link>
          </li>

          <li class="ms-lg-4 mt-4 mt-lg-0">
            <nuxt-link class="btn btn-secondary text-white" to="/login">
              Login
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav> -->
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
      // document.body.classList.toggle("disable-scroll");

      this.$store.commit("togglePushmenu");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  z-index: 2000 !important;
}

.navbar .navbar-toggler {
  border: none;
  box-shadow: none;
  padding: 0;
}

.navbar-toggler-icon {
  width: 2.25rem;
}

$btn-close-color: #fff;
$btn-close-bg: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='white'><path d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/></svg>");

.navbar-toggler-icon-close {
  width: 1.3rem;
  height: 1.3rem;
  background-image: $btn-close-bg;
}
</style>
