<template>
  <section class="hero h-100 hero-blob py-lg-5">
    <div class="container-lg">
      <div class="row hero__content text-dark">
        <div class="col-12 col-lg-6 align-self-center my-4 my-lg-0">
          <span class="fw-regular fs-4 fade-in delay-1"
            >Outhands Internet & Media</span
          >

          <h1 class="fade-in-up delay-1">
            Dé partner in web- <br />sites en applicaties
          </h1>

          <p class="fade-in-up delay-2">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            <span class="fw-bold">laboris nisi ut aliquip</span> ex ea commodo.
          </p>

          <nuxt-link to="/over-ons" class="btn btn-white fade-in delay-2"
            >Over ons
          </nuxt-link>
        </div>
        <div class="col-12 col-lg-6">
          <div class="bg-light ratio ratio-8x5 rounded">
            <div
              class="rounded hero__visual"
              style="background-size: cover; background-position: center 25%"
              :style="{
                backgroundImage: `url(${require('@/images/hero-visual.webp')}`,
              }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
