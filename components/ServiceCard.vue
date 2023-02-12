<template>
  <div class="service-card">
    <div class="service-card__icon bg-primary rounded-circle">ico</div>

    <h4 class="service-card__title">{{ data.title }}</h4>

    <span class="service-card__hr bg-primary" />

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
    // border-radius: 50%;
    width: 79px;
    height: 79px;
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
