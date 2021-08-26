<template>
  <div>
    <v-container>
      <h4>Main ingredient</h4>
    </v-container>
    <v-container class="ma-2">
      <div id="Mainingredient" class="text-center">
        <div
          v-for="(mIngredient, i) in mIngredients"
          :key="i"
          class="text-fields-row"
          align-content-center
        >
          <v-col cols="12" md="4" sm="2">
            <v-text-field
              v-model="mIngredient.ingredientsName"
              label="Your ingredients"
            >
              ></v-text-field
            >
          </v-col>
          <v-col cols="12" md="1" sm="1"></v-col>
          <v-col cols="12" md="1" sm="1">
            <v-text-field
              v-model="mIngredient.quantityValue"
              label="Amount"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="2" sm="2">
            <v-text-field
              v-model="mIngredient.calories"
              label="Calories"
              readonly
            ></v-text-field>
          </v-col>
          <v-col cols="1" sm="1">
            <v-btn @click="remove(i)" class="error"
              ><v-icon>mdi-delete</v-icon>delete</v-btn
            >
          </v-col>
        </div>
        <div>
          <v-btn @click="add" width="100px" rounded class="primary"
            ><v-icon>mdi-plus </v-icon>add</v-btn
          >
        </div>
      </div>
      <div>
      <v-btn elevation="2" color="success" fab dark @click="addmIngredient()">
      <v-icon> mdi-content-save </v-icon>
    </v-btn>
    </div>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      //mIngredients: [],
      //categoryID: "1",
      //calories:"",
    };
  },
  name: "Mainingre",
  methods: {
    add() {
      this.mIngredients.push({
        categoryID: "1",
        ingredientsName: "",
        quantityValue: "",
        calories: "",
      });
    },
    remove(index) {
      this.mIngredients.splice(index, 1);
    },
    addmIngredient() {
      const mIngredients = this.mIngredients;
      console.log(this.mIngredients);
      this.$store.dispatch("createRecipe/CreateMainIngredients", mIngredients);
      console.log(this.$store.state.recipe);
    },
  },
  computed: {
    ...mapState("createRecipe", ["mIngredients"]),
  },
};
</script>

<style></style>