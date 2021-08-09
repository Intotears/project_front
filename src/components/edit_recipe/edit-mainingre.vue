<template>
  <div>
    <v-container>
      <h4>Main ingredient</h4>
    </v-container>
    <v-container class="ma-2">
      <div id="Mainingredient" class="text-center">
        <v-row
          v-for="(mIngredient, i) in MIngredients"
          :key="i"
          align-content-center
          num = i
        >
          <v-col cols="1" lg="1" md="1" sm="1">
            <v-text-field readonly v-text="num = i+1"></v-text-field>
          </v-col>
          <v-col cols="12" lg="4" md="4" sm="3">
            <v-text-field
              v-model="mIngredient.ingredientsName"
              label="วัตถุดิบหลัก"
            >
              </v-text-field
            >
          </v-col>

          <v-col cols="12" lg="3" md="3" sm="2">
            <v-text-field
              v-model="mIngredient.quantityValue"
              label="ปริมาณ"
            ></v-text-field>
          </v-col>

          <v-col cols="12" lg="2" md="2" sm="2">
            <v-text-field
              v-model="mIngredient.calories"
              label="Calories"
              readonly
            ></v-text-field>
          </v-col>
          <v-col cols="1" lg="1" md="1" sm="1">
            <v-btn @click="remove(i)" class="error"
              ><v-icon>mdi-delete</v-icon>delete</v-btn
            >
          </v-col>
        </v-row>
        <br>
      </div>
      <div class="text-center">
        <v-btn @click="add" width="100px" rounded class="primary" 
          ><v-icon>mdi-plus </v-icon>add</v-btn
        >
      </div>
    </v-container>
  </div>
</template>

<script>

import router from '@/router'
import { mapState } from "vuex";

export default {
  name: "Mainingre",
  data() {
    return {
      // mIngredients: [],
      // unitItems: [],
      // indredientsItems: [],
      // num: ''
    };
  },
  methods: {
    add() {
      this.MIngredients.push({
        number: null,
        ingredientsName: "",
        quantityValue: "",
        calories: "",
      });
    },
    remove(index) {
      this.MIngredients.splice(index, 1);
    },
  },
  computed: {
    ...mapState('editRecipe', ['MIngredients']),
  },
  created() {
    this.$store.dispatch("editRecipe/loadMainIngre",router.currentRoute.params.id);
  },
};
</script>

<style></style>
