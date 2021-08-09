<template>
 <v-row >
   <v-col xs12 sm12 md12 lg12 shrink>
    <v-container>
      <v-stepper v-model="step">
        <v-stepper-header>
          <v-stepper-step :complete="step > 1" step="1">
            Recipe detail
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="step > 2" step="2">
            Ingredients
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="step > 3" step="3">
            Cooking processes
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="4"> Others </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card-title>
              <h2 class="font-weight-bold">Create your recipe</h2>
            </v-card-title>

            <detail />
            <br />

            <v-col class="text-right">
              <v-btn color="primary" @click="step = 2">
                Next step <v-icon>mdi-menu-right</v-icon>
              </v-btn>
            </v-col>
          </v-stepper-content>

          <v-stepper-content step="2">
            <div style="margin-top: 10px">
              <v-container>
                <v-card-title>
                  <h2 class="font-weight-bold">Ingredients</h2>
                </v-card-title>

                <mainingre />

                <v-divider></v-divider>

                <subingre />

                <v-divider></v-divider>

                <flavoring />
              </v-container>
            </div>

            <br />

            <v-row>
              <v-col class="text-left">
                <v-btn color="error" @click="step = 1"
                  ><v-icon>mdi-menu-left</v-icon> Back to step 1
                </v-btn>
              </v-col>
              <v-col class="text-right">
                <v-btn color="primary" @click="step = 3">
                  Next step <v-icon>mdi-menu-right</v-icon></v-btn
                >
              </v-col>
            </v-row>
          </v-stepper-content>

          <v-stepper-content step="3">
            <div style="margin-top: 10px">
              <v-container>
                <v-card-title>
                  <h2 class="font-weight-bold">Cooking process</h2>
                </v-card-title>
                <process />
              </v-container>
            </div>

            <br />

            <v-row>
              <v-col class="text-left">
                <v-btn color="error" @click="step = 2"
                  ><v-icon>mdi-menu-left</v-icon> Back to step 2
                </v-btn>
              </v-col>
              <v-col class="text-right">
                <v-btn color="primary" @click="step = 4">
                  Next step <v-icon>mdi-menu-right</v-icon></v-btn
                >
              </v-col>
            </v-row>
          </v-stepper-content>

          <v-stepper-content step="4">
            <div style="margin-top: 10px">
              <v-card-title>
                <h2 class="font-weight-bold">Others</h2>
              </v-card-title>

              <others />
            </div>

            <br />
            <v-row class="ma-2">
              <v-col class="text-left">
                <v-btn color="error" @click="step = 3"
                  ><v-icon>mdi-menu-left</v-icon> Back to step 3
                </v-btn>
              </v-col>
              <v-col class="text-right">
                <savebutton />
              </v-col>
            </v-row>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-container>
   </v-col>
 </v-row>
</template>

<script>
//import axios from “axios”;

export default {
  name: "CreateRecipe",
  data() {
    return {
      todos: [],
      step: 1,
    };
  },
  methods: {
    //addRecipe(recipes){
    //  let result = await axios.post("", recipes)
    //  this.todos.push(recipes);
    //}
  },

  components: {
    Detail: () => import("../components/create_recipe/detail.vue"),
    Mainingre: () => import("../components/create_recipe/mainingre.vue"),
    Subingre: () => import("../components/create_recipe/subingre.vue"),
    Flavoring: () => import("../components/create_recipe/flavoring.vue"),
    Process: () => import("../components/create_recipe/process.vue"),
    Others: () => import("../components/create_recipe/others.vue"),
    Savebutton: () => import("../components/create_recipe/savebutton.vue"),
  },
};
</script>

<style></style>
