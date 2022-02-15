<template>
  <v-fab-transition>
    <v-btn
      v-show="showFab"
      v-scroll="checkScroll"
      @click="goUp"
      color="primary"
      fab
      fixed
      bottom
      right
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  data() {
    return {
      showFab: false,
    };
  },
  methods: {
    checkScroll() {
      const h = window.scrollY;
      if (h > 300) {
        this.showFab = true;
      } else {
        this.showFab = false;
      }
    },
    goUp() {
      this.$vuetify.goTo(0, {
        duration: 1000,
      });
    },
  },
};
</script>

<style></style>
