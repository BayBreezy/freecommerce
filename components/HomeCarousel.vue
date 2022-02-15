<template>
  <v-carousel height="100vh" hide-delimiter-background>
    <template #prev="{ attrs, on }">
      <v-btn v-bind="attrs" v-on="on" color="transparent" fab depressed>
        <v-icon size="20">mdi-arrow-left</v-icon>
      </v-btn>
    </template>
    <template #next="{ attrs, on }">
      <v-btn v-bind="attrs" v-on="on" color="transparent" fab depressed>
        <v-icon size="20">mdi-arrow-right</v-icon>
      </v-btn>
    </template>
    <template #placeholder>
      <v-row class="fill-height" justify="center" align="center">
        <v-progress-circular
          width="2"
          size="150"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </v-row>
    </template>
    <v-carousel-item v-for="(p, i) in sale_items" :key="`saleitem${i}`">
      <v-img height="100vh" :src="p.image">
        <v-container class="fill-height">
          <v-row dense align="center">
            <v-col md="7">
              <div
                class="pa-md-10 pa-5 rounded-lg black--text text-center text-md-left"
                style="background-color: rgba(255, 255, 255, 0.8)"
              >
                <h2 class="text-md-h3 text-h5">
                  {{ p.name }}
                </h2>
                <p class="text-md-h5 text-subtitle-1 primary--text mt-5">
                  {{ $formatMoney(p.price) }}
                </p>
                <p class="text-md-body-2 mb-7">{{ p.description }}</p>
                <v-btn
                  depressed
                  nuxt
                  :to="`/products/${p.id}`"
                  color="primary"
                  class="text-capitalize"
                  min-height="40"
                  >Check It Out</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: {
    sale_items: Array,
  },
};
</script>

<style></style>
