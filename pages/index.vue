<template>
  <main>
    <!-- Hero -->
    <hero />

    <!-- Diensten -->
    <section>
      <div class="container-lg my-5 mt-lg-5 py-lg-5">
        <div class="row">
          <div class="col-12 col-lg-6 mb-5 mb-lg-0">
            <h2 class="text-dark">
              Sed ut perspiciatis <br />
              unde omnis iste
            </h2>

            <p class="text-dark">
              Lorem ipsum dolor sit amet, consectetur
              <span class="fw-bold">adipiscing</span> elit, sed do eiusmod
              <span class="fw-bold">tempor incididunt</span> ut labore et dolore
              magna aliqua consectetur adipiscing .
            </p>

            <text-link title="Bekijk al onze diensten" path="/diensten" />
          </div>

          <div
            class="col-12 col-sm-8 col-lg-3"
            v-for="(d, i) in $options.diensten"
            :key="i"
          >
            <service-card :data="d" />
          </div>
        </div>
      </div>
    </section>

    <!-- Nieuws / USPS / CTA -->
    <section class="section-blob">
      <div class="container-lg my-5 py-lg-5 my-lg-5">
        <div class="row h-100 d-flex-row align-items-lg-end">
          <div class="col-12 col-12-np col-lg-6">
            <div
              class="bg-light-90 border-radius-c mb-4 mb-lg-0 py-4 py-lg-5 px-4"
            >
              <h2 class="mb-3">Het laatste nieuws</h2>

              <nuxt-link
                to="/news/news-slug"
                v-for="(n, i) in $options.news"
                :key="i"
                class="d-block mb-3"
              >
                <h4 class="fs-6 mb-1 lh-base">
                  {{ n.title.slice(0, maxNewsTitleLength) }}
                  {{ n.title.length > maxNewsTitleLength ? "..." : "" }}
                </h4>
                <time :datetime="n.date">
                  {{
                    new Date(n.date * 1000).toLocaleDateString("nl-DU", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  }}
                </time>
              </nuxt-link>

              <text-link
                title="Bekijk al onze nieuwsberichten"
                path="/nieuws"
              />
            </div>
          </div>
          <div class="col-12 col-12-np col-lg-6 h-100">
            <div class="px-4 py-3 py-lg-0">
              <h4 class="fw-semibold">De voordelen van Outhands</h4>

              <ul class="list-unstyled mb-4 mb-lg-5">
                <li class="d-flex align-items-center lh-1">
                  <i class="bi bi-check-lg text-success fs-3 me-2"></i>Cras
                  justo odio
                </li>
                <li class="d-flex align-items-center lh-1">
                  <i class="bi bi-check-lg text-success fs-3 me-2"></i>Dapibus
                  ac facilisis in
                </li>
                <li class="d-flex align-items-center lh-1">
                  <i class="bi bi-check-lg text-success fs-3 me-2"></i>Morbi leo
                  risus
                </li>

                <li class="d-flex align-items-center lh-1">
                  <i class="bi bi-check-lg text-success fs-3 me-2"></i
                  >Vestibulum at eros
                </li>
              </ul>
            </div>

            <!-- CTA -->
            <div class="bg-linear-gradient border-radius-c mt-3 p-4 p-lg-5">
              <h4 class="text-dark">Teruggebeld worden?</h4>

              <p class="text-dark">
                Wij geven de voorkeur aan een persoonlijk gesprek. Laat je
                telefoonnummer achter.
              </p>

              <div class="form-inline my-2 my-lg-0 position-relative">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Telefoonnummer"
                  aria-label="Telefoonnummer"
                />
                <button
                  type="submit"
                  class="btn btn-secondary position-absolute d-none d-lg-block end-0 top-0 text-white"
                >
                  Bel mij terug
                </button>

                <button
                  type="submit"
                  class="btn btn-secondary d-lg-none text-white mt-2"
                >
                  Bel mij terug
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Over ons -->
    <section>
      <div class="container-lg pb-4 py-lg-5 my-lg-5">
        <div class="row">
          <div class="col-12 col-lg-5 mb-4">
            <h2>Kennis van ons vak en dat van u</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>

            <text-link title="Meer over ons" path="/over-ons" />
          </div>
          <div class="col-12 col-12-nrp col-lg-6 offset-lg-1">
            <team-swiper :persons-per-page="2" class="d-lg-none" />
            <team-swiper :persons-per-page="3" class="d-none d-lg-block" />
          </div>
        </div>
      </div>
    </section>

    <!-- Over ons 2 -->
    <section>
      <div
        class="container-lg bg-linear-gradient border-radius-c-large position-relative"
      >
        <div
          class="d-none d-lg-block position-absolute w-100 h-100"
          style="background-repeat: no-repeat; background-position: top right"
          :style="{
            backgroundImage: `url(${require('@/images/Hand.svg')}`,
          }"
        ></div>
        <div class="row py-5 px-1 p-lg-5">
          <div class="col-12 col-lg-8">
            <h2 class="mb-3">
              Dit is Outhands Internet & Media Full Service Digital Agency
            </h2>

            <p>
              Binnen ons gevarieerde team brengt ieder persoon zijn eigen mening
              en specialisatie mee. Samen vormt dit de basis om een goed en
              uniek product neer te zetten. De een ontwerpt een huisstijl die
              perfect aansluit bij jouw bedrijf, terwijl de ander zorgt dat de
              website pixel-perfect in elkaar zit.
            </p>

            <p>
              Werken bij Outhands betekent werken in een creatieve en informele
              organisatie. De combinatie van creativiteit, professionaliteit en
              een prettige sfeer maakt werken bij en met Outhands een ervaring
              op zich. Met een gedreven team specialisten werken we met passie
              aan jouw product. Het product staat centraal, of het nu gaat om
              een website op maat of het drukwerk van jouw bedrijf. Ook na 13
              jaar blijven we ontwikkelen en staat flexibiliteit bij ons voorop.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Werken bij -->
    <section>
      <div class="container-lg pt-5 pb-lg-5">
        <div class="row">
          <div class="col-12 col-lg-5 align-self-center pb-5 pb-lg-0">
            <h3 class="h4">Onze kernwaarde</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate veli.
            </p>

            <nuxt-link to="/werken-bij" class="btn btn-secondary text-white"
              >Kom werken bij Outhands</nuxt-link
            >
          </div>
          <div class="col-12 col-12-np col-lg-7">
            <div class="bg-light ratio ratio-10x7">
              <div
                class="border-radius-c"
                style="background-size: cover; background-position: center"
                :style="{
                  backgroundImage: `url(${require('@/images/kernwaarde-visual.webp')}`,
                }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import news from "@/data/news.json";
import diensten from "@/data/diensten.json";

export default {
  news: news.sort((a, b) => (a.date > b.date ? -1 : 1)),
  diensten,

  data() {
    return {
      maxNewsTitleLength: 55,
    };
  },
};
</script>
