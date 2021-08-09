<template>
  <div>
    <v-container>
      <h3>Recipe cover</h3>
      <v-row>
        <v-col col="5"></v-col>
        <v-col col="2">
          <v-img :src="url" contain max-height="300px" max-width="500"></v-img>
          <v-file-input
            @change="Preview_image"
            v-model="image"
            label="Input"
            prepend-icon="mdi-camera"
          ></v-file-input>
        </v-col>
        <v-col col="5"></v-col>
      </v-row>
    </v-container>
    <v-container>
      <h3>Recipe name</h3>
      <v-text-field
        label="Name"
        placeholder="Name your recipe"
        solo
      ></v-text-field>
    </v-container>
    <v-container>
      <h3>Recipe description</h3>
      <v-textarea
        solo
        counter
        label="Descript your recipe"
        
        maxlength="250"
      ></v-textarea>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      url: null,
      image: null,
    };
  },
  methods: {
      Preview_image() {
      this.url = URL.createObjectURL(this.image);
    },
  },
};
</script>

<style></style>
