<template>
  <div class="bg-light pt-lg-5">
    <div class="container-lg">
      <div class="row pb-lg-5">
        <div class="col-lg-3">
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
        <div class="col-lg-3">
          <p>
            <br />
            Tel. 071 78 53215 <br />
            Mail. squad@outhands.nl
          </p>
        </div>
        <div class="col-lg-3">
          <p>
            <span class="fw-bold">Werktijden</span><br />
            Ma - Vr: 09:00-17:00 <br />
            Weekend gesloten
          </p>
        </div>
      </div>

      <div class="row font-small pt-lg-4">
        <div class="col-12 col-lg-8">
          <p class="text-center text-lg-start">
            Copyright 2022 · Alle rechten voorbehouden · Algemene Voorwaarden ·
            Privacyverklaring
          </p>
          <!-- <ul class="bullet-list-inline">
            <li>Copyright {{ new Date().getFullYear() }}</li>
            <li>Alle rechten voorbehouden</li>
            <li>
              <nuxt-link to="/algemene-voorwaarden"
                >Algemene voorwaarden</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/privacyverklaring">Privacyverklaring</nuxt-link>
            </li>
          </ul> -->
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
