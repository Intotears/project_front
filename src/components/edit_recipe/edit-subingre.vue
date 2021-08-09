<template>
  <div>
    <v-container>
      <h4>Sub ingredient</h4>
    </v-container>
    <v-container class="ma-2">
      <div id="Subingredient" class="text-center">
        <v-row
          v-for="(sIngredient, i) in SIngredients"
          :key="i"
          class="text-fields-row"
          align-content-center
          num = i
        >
          <v-col cols="1" md="1" sm="1">
             <v-text-field readonly v-text="num = i+1"></v-text-field>
          </v-col>
          <v-col cols="12" md="4" sm="3">
            <v-text-field
              v-model="sIngredient.ingredientsName"
              label="วัตถุดิบรอง"
            >
              </v-text-field
            >
          </v-col>
          <v-col cols="12" md="3" sm="2">
            <v-text-field
              v-model="sIngredient.quantityValue"
              label="ปริมาณ"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="2" sm="2">
            <v-text-field
              v-model="sIngredient.calories"
              label="Calories"
              readonly
            ></v-text-field>
          </v-col>
          <v-col cols="1" sm="1">
            <v-btn @click="remove2(i)" class="error"
              ><v-icon>mdi-delete</v-icon>delete</v-btn
            >
          </v-col>
        </v-row>
        <br>    
      </div>
      <div class="text-center">
        <v-btn @click="add2" width="100px" rounded class="primary" 
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
  name: "Subingre",
  data() {
    return {

    };
  },
  methods: {
    add2() {
      this.SIngredients.push({
        number: null,
        ingredientsName: "",
        quantityValue: "",
        calories: "",
      });
    },
    remove2(index) {
      this.SIngredients.splice(index, 1);
    },
  },
  computed: {
    ...mapState('editRecipe', ['SIngredients']),
  },
  created() {
    this.$store.dispatch("editRecipe/loadSubIngre",router.currentRoute.params.id);
  },
};
</script>

<style></style>
