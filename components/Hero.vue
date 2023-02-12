<template>
  <section class="hero h-100 hero-blob py-lg-5 xxxmy-lg-5">
    <div class="container-lg">
      <div class="row hero__content">
        <div class="col-12 col-lg-6 align-self-center">
          <span class="fw-regular fs-4">Outhands Internet & Media</span>

          <h1>Dé partner in web- <br />sites en applicaties</h1>

          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            <span class="fw-bold">laboris nisi ut aliquip</span> ex ea commodo.
          </p>

          <nuxt-link to="/over-ons" class="btn btn-white">Over ons </nuxt-link>
        </div>
        <div class="col-12 col-lg-6">
          <div class="bg-light ratio ratio-8x5 rounded">
            <div
              class="rounded hero__visual"
              style="background-size: cover; background-position: center 25%"
              :style="{
                backgroundImage: `url(${require('@/images/hero-visual.jpg')}`,
              }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
