<template>
  <nuxt-link
    :to="path"
    class="text-primary fw-semibold d-inline-flex align-items-center gap-3 text-link"
  >
    <span> {{ title }} </span>
    <span class="arrow-right" />
  </nuxt-link>
</template>

<script>
// currently only for internal links!
export default {
  props: {
    title: {
      type: String,
      default: "Meer informatie",
    },
    path: {
      type: String,
      default: "/",
    },
  },
};
</script>

<style lang="scss" scoped>
.text-link {
  .arrow-right {
    transition: transform 0.3s 0.1s ease-out;
    transform: translateX(0);
  }

  &:hover {
    color: var(--primary-c);

    .arrow-right {
      transform: translateX(8px);
    }
  }
}
</style>
