<template>
  <div>
    <v-container>
      <h4>Sub ingredient</h4>
    </v-container>
    <v-container class="ma-2">
      <div id="Subingredient" class="text-center">
        <div
          v-for="(sIngredient, i) in sIngredients"
          :key="i"
          class="text-fields-row"
          align-content-center
        >
          <v-col cols="12" md="4" sm="2">
            <v-autocomplete
              v-model="sIngredient.ingredients"
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
              v-model="sIngredient.amount"
              label="Amount"
              hint="number only"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="2" sm="2">
            <v-autocomplete
              v-model="sIngredient.units"
              :items="unitItems"
              clearable
              rounded
              solo
              label="Select units"
            >
              ></v-autocomplete
            >
          </v-col>
          <v-col cols="12" md="2" sm="2">
            <v-text-field
              v-model="sIngredient.calories"
              label="Calories"
              readonly
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="1">
            <v-btn @click="remove2(i)" class="error"
              ><v-icon>mdi-delete</v-icon>delete</v-btn
            >
          </v-col>
        </div>
        <div>
          <v-btn @click="add2" width="100px" rounded class="primary"
            ><v-icon>mdi-plus </v-icon>add</v-btn
          >
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Subingre",
  data() {
    return {
      sIngredients: [],
      unitItems: ["กรัม", "กิโลกรัม", "ขีด", "ถ้วย"],
      indredientsItems: ["หมู", "ไก่", "เห็ด", "ใบกะเพรา"],
    };
  },
  methods: {
    add2() {
      this.sIngredients.push({
        ingredients: "",
        amount: "",
        units: "",
        calories: "",
      });
    },
    remove2(index) {
      this.sIngredients.splice(index, 1);
    },
  },
};
</script>

<style></style>
