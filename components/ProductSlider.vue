<template>
  <v-slide-group>
    <v-slide-item v-for="(p, i) in products" :key="`hotProduct-${i}`">
      <v-card
        nuxt
        :to="`/products/${p.id}`"
        color="surface"
        width="300"
        class="el ma-2 mb-5 mr-5"
      >
        <v-img :src="p.image" height="300">
          <template #placeholder>
            <v-row class="fill-height" justify="center" align="center">
              <v-progress-circular
                width="2"
                size="100"
                color="primary"
                indeterminate
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <v-card-title class="text-md-body-1 font-weight-bold">{{
          p.name
        }}</v-card-title>
        <v-card-subtitle class="primary--text pb-3">
          ${{ p.price }}
        </v-card-subtitle>
        <v-card-text>
          <v-chip
            x-small
            label
            outlined
            class="mr-1"
            v-for="(t, i) in p.tags"
            :key="`prod${p.id}-${i}`"
          >
            {{ t }}
          </v-chip>
        </v-card-text>
      </v-card>
    </v-slide-item>
  </v-slide-group>
</template>

<script>
export default {
  props: {
    products: Array,
  },
};
</script>

<style></style>
