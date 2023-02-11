<template>
  <div id="app">
    <div class="container-lg">
      <Header />

      <Nuxt />
    </div>
    <Footer v-if="$route.path !== '/nav'" />
  </div>
</template>

<script>
export default {
  name: "Default",

  transition: "page",
};
</script>
