<template>
  <div id="app">
    <Header />

    <div class="min-vh-100 d-flex flex-column justify-content-between">
      <!-- pushes content below absolute positioned header -->
      <div id="pushdown" />

      <Nuxt />
      <Footer />
    </div>

    <pushmenu />
  </div>
</template>

<script>
export default {
  name: "Default",

  transition: "page",

  watch: {
    $route(to, from) {
      if (this.$store.state.showPushmenu) {
        document.body.classList.toggle("disable-scroll");
        this.$store.commit("togglePushmenu");
      }
    },
  },

  async mounted() {
    let header = document.querySelector("#header");
    let pushdown = document.querySelector("#pushdown");
    if (header && pushdown) {
      pushdown.style.height = header.offsetHeight + "px";
    }
  },
};
</script>
