<template>
  <div class="service-card">
    <div
      class="service-card__icon icon-gradient bg-primary rounded-circle d-flex justify-content-center align-items-center mb-3"
    >
      <img
        :src="require(`@/images/icons/${data.icon}.svg`)"
        width="48"
        height="48"
        :alt="data.icon"
      />
    </div>
    <h4 class="service-card__title">{{ data.title }}</h4>

    <span class="service-card__hr bg-primary my-3" />

    <p>{{ data.content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: [Object, Array],
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.service-card {
  &__icon {
    width: 79px;
    height: 79px;
    box-shadow: 0px 0px 15px #00000029;
  }

  &__hr {
    display: block;
    width: 79px;
    height: 2px;
  }

  &__title {
    font-size: 1.125rem;
  }
}
</style>
