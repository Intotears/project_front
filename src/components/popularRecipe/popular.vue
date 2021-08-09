<template>
  <div>
      <v-container>
       <h1>Popular recipes</h1>
    </v-container>

    <v-card class="mx-auto">
    <v-container>
      <v-row dense >
        <v-col v-for="pop in rating,allRecipes" :key="pop.recipeID" 
          cols="12"
          align="center"
        >
          <v-card
            color="#1F7087"
            dark
            max-width="600" 
          >
            <div 
                class="d-flex flex-no-wrap"
            >   
              <v-avatar 
                class="ma-3"
                size="150"
                tile
              >
                <v-img :src="pop.img"></v-img>
              </v-avatar>
              <div>
                <v-card-title
                  class="text-h5"
                  v-text="pop.recipeName"
                  align="left"
                ></v-card-title>

                <v-card-subtitle v-text="`By `+ pop.userName" align="left"></v-card-subtitle>

                <v-card-subtitle v-text="`Description : ` + pop.description" align="left"></v-card-subtitle>
                <div>
                    <v-card-subtitle v-text="`Rating : `+ pop.ratingStars" align="left"></v-card-subtitle>
                </div>
                <!-- <v-card-actions>
                  <v-btn
                    v-if="recipe.collection === null"
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                  >
                   <v-icon>mdi-bookmark</v-icon> Add to collection
                  </v-btn>

                  <v-btn
                    v-else
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                  >
                     <v-icon>mdi-bookmark-check</v-icon> 
                  </v-btn>
                </v-card-actions> -->
              </div>
            </div>
          </v-card>
        </v-col> 
      </v-row>
    </v-container>
  </v-card>
  </div>
</template>

<script>

import { mapState } from "vuex";

export default {
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState('allrecipes', ['allRecipes']),
        ...mapState('allrecipes', ['rating']),
        thisRating(){
            return this.allRecipes.find((v) => v.recipeID == this.rating.recipeID);
        }
    },
    created() {
        this.$store.dispatch('allrecipes/loadAllRecipes');
        this.$store.dispatch('allrecipes/loadRating');
    },
    methods: {
        ShowRating(){
            return this.rating.find((v) => v.recipeID == this.allRecipes.recipeID);
        }
    },
}   
</script>

<style>

</style>