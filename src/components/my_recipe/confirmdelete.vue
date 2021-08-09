<template>
  <v-dialog v-model="dialog" persistent max-width="290">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            elevation="2"
            color="error"
            dark
            v-bind="attrs"
            v-on="on"
            @click="dialog= true"
          >
            <v-icon> Delete </v-icon>
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
            <v-btn color="green darken-1" text @click="dialog = false" to="/MyRecipe">
              Cancel
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="error" text @click="DeleteRecipe(myRecipes.recipeID)" >
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
</template>

<script>
import { mapState } from "vuex";
export default {
name: "ConfirmDelete",
  data() {
    return {
      dialog: false,
      activator: null,
    };
  },
  computed: {
    ...mapState("myrecipes", ["recipe"]),
  },
  methods: {
    DeleteRecipe(id){
      this.$store.dispatch('myrecipes/DeleteRecipe',id)
    }
  },
}
</script>

<style>

</style>