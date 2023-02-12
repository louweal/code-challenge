<template>
  <div class="team-swiper">
    <div class="team-swiper-wrapper">
      <div class="hstack gap-3">
        <team-card
          :data="person"
          :key="i"
          v-for="(person, i) in $options.team"
        />

        <!-- <template v-for="(person, i) in $options.team">
          <div
            xxxxclass="col"
            xxxclass="`col-${12 / personsPerPage}`"
            :key="i"
            xxxv-if="page * personsPerPage > i && (page - 1) * personsPerPage <= i"
          >
          </div>
        </template> -->
      </div>
    </div>

    <div class="pagination d-flex justify-content-end mt-3">
      <span
        class="pagination-item cursor-pointer"
        :class="page === p ? 'pagination-item--active' : false"
        v-for="(p, i) in numPages"
        :key="i"
        @click="page = p"
      >
      </span>
    </div>
  </div>
</template>

<script>
import team from "@/data/team.json";

export default {
  team,

  data() {
    return {
      page: 1,
      personsPerPage: 3,
    };
  },

  props: {
    personsPerPage: {
      type: Number,
      default: 3,
    },
  },

  computed: {
    numPersons() {
      return this.$options.team.length;
    },
    numPages() {
      return Math.ceil(this.numPersons / this.personsPerPage);
    },
  },
};
</script>

<style lang="scss" scoped>
.team-swiper {
  overflow: hidden;
  width: auto;

  &-wrapper {
    max-width: 100%;
    overflow-y: scroll;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      width: 0 !important;
      height: 0 !important;
      background: transparent;
    }
  }
}
</style>
