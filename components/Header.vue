<template>
  <div id="header" ref="header" class="header w-100 pb-3 mb-lg-3 fixed-top">
    <div class="container-lg">
      <div class="d-flex justify-content-between pt-3 pt-lg-g4">
        <div>
          <nuxt-link to="/" event="" @click.native="scrollToTop()">
            <img
              :src="
                $route.path === '/'
                  ? require('@/images/outhands-wit.svg')
                  : require('@/images/outhands.svg')
              "
              alt="Outhands"
              width="177"
              height="42.32"
            />
          </nuxt-link>
        </div>
        <div class="align-self-center d-none d-lg-block">
          <ul class="list-inline mb-0">
            <li
              class="list-inline-item fw-regular"
              v-for="(l, i) in $options.menu"
              :key="i"
            >
              <nuxt-link :to="l.url">
                {{ l.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <nuxt-link
              to="/login"
              class="btn btn-secondary d-none d-lg-block text-white"
            >
              Login
            </nuxt-link>
          </div>

          <div
            class="fs-2 d-lg-none"
            :class="$route.path === '/' ? 'text-white' : false"
            @click="togglePushmenu()"
          >
            <i
              class="bi"
              :class="$store.state.showPushmenu ? 'bi-x-lg' : 'bi-list'"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menu from "@/data/menu.json";

export default {
  menu,

  data() {
    return {
      prevPosY: 0,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.aosHeader);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.aosHeader);
  },

  methods: {
    scrollToTop() {
      if (this.$route.path === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
        this.$router.push("/");
      }
    },
    togglePushmenu() {
      document.body.classList.toggle("disable-scroll");
      this.$store.commit("togglePushmenu");
    },

    aosHeader() {
      let header = this.$refs["header"];

      if (header) {
        let scrollY = window.pageYOffset;
        let direction = scrollY > this.prevPosY ? "down" : "up";

        if (
          direction === "down" &&
          scrollY > 0 &&
          !header.classList.contains("move-up")
        ) {
          header.classList.remove("move-down");
          header.classList.add("move-up");
        }

        if (direction === "up" && !header.classList.contains("move-down")) {
          header.classList.remove("move-up");
          header.classList.add("move-down");
        }

        if (
          direction === "up" &&
          scrollY > 100 &&
          !header.classList.contains("add-background")
        ) {
          header.classList.add("add-background");
        }

        if (
          direction === "up" &&
          scrollY <= 100 &&
          header.classList.contains("add-background")
        ) {
          header.classList.remove("add-background");
        }

        // update previous scroll positon
        this.prevPosY = window.scrollY;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.move-up {
  transform: translateY(-100%);
  background-color: transparent;
}

.move-down {
  transform: translateY(0);
}

.add-background {
  background-color: #ffcc00 !important; // primary
  background: linear-gradient(80deg, #e2b500 0%, #ffcc00 100%);
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%); // bootstrap shadow-sm
  // transition: background-color 0.4s 0.4s ease-in-out;
}

.header {
  z-index: 2000;
  background-color: transparent;
  transition: all 0.4s cubic-bezier(0.2, 0, 0.1, 1); //ease-in-out;
}
</style>
