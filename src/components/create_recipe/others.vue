<template>
  <div>
    <v-row class="margin: 10px">
      <v-col cols="12" md="6">
        <h3>Time</h3>
        <v-text-field
          label="Time"
          placeholder="time cooking"
          solo
          class="mx-2"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <h3>Serving</h3>
        <v-text-field
          label="Serving"
          placeholder="For ... person"
          solo
          class="mx-2"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="margin: 10px">
      <v-col cols="12" md="3"></v-col>
      <v-col cols="12" md="6">
        <foodtag />
      </v-col>
    </v-row>
    <v-row class="margin: 10px">
      <v-col cols="12" md="3"></v-col>
      <v-col cols="12" md="6">
        <h3>Status</h3>
        <v-text-field
          label="status"
          placeholder="time cooking"
          solo
          class="mx-2"
        ></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  components: {
    foodtag: () => import("./foodtag.vue"),
  },
  name: "Others",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
