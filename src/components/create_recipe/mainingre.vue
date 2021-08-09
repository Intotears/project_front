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
            <v-autocomplete
              v-model="mIngredient.ingredients"
              :items="indredientsItems"
              clearable
              rounded
              solo
              label="Select ingredients"
            >
              ></v-autocomplete
            >
          </v-col>
          <v-col cols="12" md="1" sm="1"></v-col>
          <v-col cols="12" md="1" sm="1">
            <v-text-field
              v-model="mIngredient.amount"
              label="Amount"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="2" sm="2">
            <v-autocomplete
              v-model="mIngredient.units"
              :items="unitItems"
              clearable
              rounded
              solo
              label="Select units"
            >
            </v-autocomplete>
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
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mIngredients: [],
      unitItems: ["กรัม", "กิโลกรัม", "ขีด", "ถ้วย"],
      indredientsItems: ["หมู", "ไก่", "เห็ด", "ใบกะเพรา"],
    };
  },
  name: "Mainingre",
  methods: {
    add() {
      this.mIngredients.push({
        ingredients: "",
        amount: "",
        units: "",
        calories: "",
      });
    },
    remove(index) {
      this.mIngredients.splice(index, 1);
    },
  },
};
</script>

<style></style>
