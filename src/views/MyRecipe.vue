<template>
      <v-container>
        <h1 class="headline">This is my recipes</h1>
        <div>
          <v-container>
            <v-simple-table class="justify-space-around">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th>Recipe image</th>
                    <th>Recipe name</th>
                    <th class="has-text-centered">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="myRecipes in recipe" :key="myRecipes.recipeID" >
                    <td v-on:click.stop="ViewRecipe(myRecipes.recipeID)">
                      <v-avatar 
                        class="ma-3"
                        size="150"
                        tile
                      >
                        <v-img :src="myRecipes.img"></v-img>
                      </v-avatar>
                    </td>
                    <td v-on:click.stop="ViewRecipe(myRecipes.recipeID)">{{ myRecipes.recipeName }}</td>

                    <td class="text-left">
                      <v-btn
                        color="primary"
                        @click="EditRecipe(myRecipes.recipeID)"
                        class="margin-right:20p"
                        >Edit
                      </v-btn>
                      &nbsp;
                      <v-dialog v-model="dialog" persistent max-width="290">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            elevation="2"
                            color="error"
                            dark
                            v-bind="attrs"
                            v-on="on"
                            @click="dialog = true"
                          >
                            Delete
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title class="headline">
                            Are you sure to delete this recipe?
                          </v-card-title>
                          <v-card-text
                            >If you delete it, you cannot restore this recipe.
                            <v-icon> mdi-emoticon </v-icon></v-card-text
                          >
                          <v-card-actions>
                            <v-btn
                              color="green darken-1"
                              text
                              @click="dialog = false"
                            >
                              Cancel
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="error"
                              text
                              @click="DeleteRecipe(myRecipes.recipeID)"
                            >
                              Delete
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-container>
        </div>
      </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MyRecipe",
  data() {
    return {
      dialog: false,
      activator: null,
    };
  },
  computed: {
    ...mapState("myrecipes", ["recipe"]),
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  created() {
    this.$store.dispatch("myrecipes/loadMyRecipes");
  },
  methods: {
    EditRecipe(id) {
      this.$store.dispatch('editRecipe/storeID', id),
      // this.$store.dispatch('editRecipe/gotoEditRecipe')
      this.$router.push({ path: `/EditRecipe/${id}` });
    },
    DeleteRecipe(id) {
      this.$store.dispatch("myrecipes/DeleteRecipe", id)
    },
    ViewRecipe(id){
      this.$store.dispatch('viewRecipe/storeID', id),
      this.$router.push({ path: `/ViewRecipe/${id}` });
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
};
</script>
