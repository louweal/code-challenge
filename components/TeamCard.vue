<template>
  <nuxt-link to="/team/lorem-ipsum" class="team-card">
    <div class="bg-light ratio ratio-3x4 mb-2 team-card__visual">
      <div
        class="rounded"
        style="background-size: cover; background-position: center"
        :style="{
          backgroundImage: `url(${require('@/images/team/' +
            data.visual +
            '.jpg')}`,
        }"
      ></div>
    </div>
    <span class="fw-regular">{{ data.name }}</span>
  </nuxt-link>
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

<style lang="scss">
.team-card {
  max-width: 173px !important;
  min-width: 173px !important;

  &__visual {
    transition: filter 0.3s linear;
    &:hover {
      filter: brightness(1.2);
    }
  }
}
</style>
