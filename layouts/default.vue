<template>
  <div id="app" class="position-relative top-0">
    <Header />
    <div id="pushdown"></div>
    <Nuxt />
    <Footer />

    <pushmenu />
  </div>
</template>

<script>
export default {
  name: "Default",

  transition: "page",

  async mounted() {
    let headerHeight = document.querySelector("#header").offsetHeight; //refs ?
    let pushdown = document.querySelector("#pushdown"); // refs?
    pushdown.style.height = headerHeight + "px";
  },
};
</script>
