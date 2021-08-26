<template>
  <v-container>
    <h1 class="headline">Collection</h1>
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
            <tbody
              v-for="collection in collectionSam"
              :key="collection.collectionID"
            >
              <tr
                v-for="recipeCol in collection.recipes"
                :key="recipeCol.recipeID"
              >
                <td v-on:click.stop="ViewRecipe(recipeCol.recipeID)">
                  <v-avatar class="ma-3" size="150" tile>
                    <v-img :src="recipeCol.img"></v-img>
                  </v-avatar>
                </td>
                <td v-on:click.stop="ViewRecipe(recipeCol.recipeID)">
                  {{ recipeCol.recipeName }}
                </td>

                <td>
                  <!-- <v-btn
                    class="error"
                    text
                    @click="removeFromCollection(recipeCol.recipeID)"
                  >
                    Remove
                  </v-btn> -->
                  <v-dialog v-model="dialog" persistent max-width="290">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        elevation="2"
                        class="error"
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
                        Are you sure to remove this recipe?
                      </v-card-title>
                      <v-card-text>
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
                          @click="removeFromCollection(recipeCol.recipeID)"
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
  name: "Collection",
  data() {
    return {
      dialog: false,
      activator: null,
    };
  },
  computed: {
    ...mapState("mycollection", ["recipe"]),
    currentUser() {
      return this.$store.state.auth.user;
    },
    collectionSam() {
      return this.$store.state.mycollection.recipeCollection;
    },
  },
  created() {
    this.$store.dispatch(
      "mycollection/loadCollection",
      this.currentUser.userID
    );
  },
  methods: {
    // DeleteRecipe(id){
    //   this.$store.dispatch("collection/deleteRecipeFromCol", id)
    // },
    ViewRecipe(id) {
      this.$store.dispatch("viewRecipe/storeID", id),
        this.$router.push({ path: `/ViewRecipe/${id}` });
    },
    removeFromCollection(id) {
      this.$store.dispatch("mycollection/StoreUserID", this.currentUser.userID);
      this.$store.dispatch("mycollection/removeFromCollection", id);
      this.dialog = false;
      window.location.reload();
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
};
</script>
