import axios from "axios";

const myrecipes = {
  namespaced: true,
  state: {
    recipe: [],
    ingredient: [],
    process: [],
    recipeProfile: [],
  },
  getters: {
    allMyRecipes: (state) => state.recipe,
  },
  mutations: {
    LOAD_MYRECIPES: (state, recipe) => {
      state.recipe = recipe;
    },
    LOAD_RECIPEPROFILE: (state, recipeProfile) => {
      state.recipeProfile = recipeProfile;
    },
    LOAD_INGREDIENT: (state, ingredient) => {
      state.ingredient = ingredient;
    },
    LOAD_PROCESS: (state, process) => {
      state.process = process;
    },
    EDIT_MYRECIPES: (state, recipe) => {
      state.recipe = recipe;
      // var todos = state.todos
      // todos.splice(todos.indexOf(todo), 1)
      // state.todos = todos
      // state.newTodo = todo.body
    },
    DELETE_DETAIL: (state, id) => {
      const index = state.recipe.findIndex((r) => r.recipeID == id);
      state.recipe.splice(index, 1);
    },
    DELETE_INGREDIENT: (state, id) => {
      const index = state.ingredient.findIndex((r) => r.recipeID == id);
      state.ingredient.splice(index, 1);
    },
    DELETE_PROCESS: (state, id) => {
      const index = state.process.findIndex((r) => r.recipeID == id);
      state.process.splice(index, 1);
    },
  },
  actions: {
    async loadMyRecipes({ commit }, userID) {
      console.log("userID in vuex ", userID);
      let response = await axios.get(
        `${process.env.VUE_APP_BACKEND}/api/find/recipeByUserID/${userID}`
      );
      await commit("LOAD_MYRECIPES", response.data);
      console.log(response.data);
    },
    async loadRecipesInProfile({ commit }, userID) {
      let response = await axios.get(
        `${process.env.VUE_APP_BACKEND}/api/find/RecipeInUserProfile/${userID}`
      );

      commit("LOAD_RECIPEPROFILE", response.data);
      console.log(response.data);
    },
    async loadIngredient({ commit }) {
      let response = await axios.get(
        `${process.env.VUE_APP_BACKEND}/api/find/All/ingredient`
      );
      await commit("LOAD_INGREDIENT", response.data);
      console.log(response.data);
    },
    async loadProcess({ commit }) {
      let response = await axios.get(
        `${process.env.VUE_APP_BACKEND}/api/find/all/cooking_process`
      );
      await commit("LOAD_PROCESS", response.data);
      console.log(response.data);
    },
    async DeleteDetail({ commit }, id) {
      let response = await axios.delete(
        `${process.env.VUE_APP_BACKEND}/api/detail/delete/${id}`
      );
      await commit("DELETE_DETAIL", id);
      console.log(response.data);
    },
    async DeleteIngredient({ commit }, id) {
      let response = await axios.delete(
        `${process.env.VUE_APP_BACKEND}/api/ingredient/deleteByRecipeID/${id}`
      );
      await commit("DELETE_INGREDIENT", id);
      console.log(response.data);
    },
    async DeleteProcess({ commit }, id) {
      let response = await axios.delete(
        `${process.env.VUE_APP_BACKEND}/api/cooking_process/delete/${id}`
      );
      await commit("DELETE_PROCESS", id);
      console.log(response.data);
    },
  },
};

export default myrecipes;
