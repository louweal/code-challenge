<template>
  <div class="bg-light pt-5 mt-lg-5">
    <div class="container-lg">
      <div class="row pb-lg-5 text-center text-lg-start">
        <div class="col-lg-3 mb-4">
          <nuxt-link to="/" event="" @click.native="scrollToTop()">
            <img
              src="@/images/outhands.svg"
              alt="outhands"
              width="174"
              height="41.6"
            />
          </nuxt-link>
        </div>
        <div class="col-lg-3">
          <address>
            <span class="fw-bold">Outhands Internet & Media</span> <br />
            Rijnsburgerweg 88C <br />
            2231 AG Rijnsburg <br />
            Zuid-Holland
          </address>
        </div>
        <div class="col-lg-3 pb-3">
          <p>
            <br class="d-none d-lg-block" />
            Tel. <a href="tel:071 78 53215">071 78 53215</a> <br />
            Mail. <a href="mailto:squad@outhands.nl">squad@outhands.nl</a>
          </p>
        </div>
        <div class="col-lg-3 pb-5">
          <p>
            <span class="fw-bold">Werktijden</span><br />
            Ma - Vr: 09:00-17:00 <br />
            Weekend gesloten
          </p>
        </div>
      </div>

      <div class="row font-small pt-lg-4 pb-4 pb-lg-0">
        <div class="col-12 col-lg-8">
          <p class="text-center text-lg-start">
            Copyright {{ new Date().getFullYear() }} · Alle rechten voorbehouden
            ·
            <nuxt-link to="/algemene-voorwaarden"
              >Algemene Voorwaarden</nuxt-link
            >
            ·
            <nuxt-link to="/privacyverklaring">Privacyverklaring</nuxt-link>
          </p>
        </div>
        <div class="col-12 col-lg-4 text-center text-lg-end">
          Ontwikkeling door
          <a
            href="https://www.codesparks.nl"
            target="_blank"
            class="text-uppercase fw-bold"
            >codesparks</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      if (this.$route.path === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
        this.$router.push("/");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.font-small {
  font-size: 14px;
}
</style>
