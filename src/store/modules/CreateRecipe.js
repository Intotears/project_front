import axios from "axios";

const localStorageRecipeID = JSON.parse(localStorage.getItem("recipe"));

const createRecipe = {
  namespaced: true,
  state: {
    recipe: {},
    foodtag: [],
    mIngredients: [],
    sIngredients: [],
    flavoring: [],
    processes: [],
    id: "",
    localStorageRecipeID
  },
  getters: {
    getRecipes: (state) => state.recipe,
    findUserID: (state) => state.id,
    findRecipeID: (state) => state.localStorageRecipeID.recipeID
  },
  mutations: {
    SET_Detail: (state, recipe) => {
      state.recipe = recipe;
    },
    LOAD_foodtag: (state, foodtag) => {
      state.foodtag = foodtag;
    },
    SET_MIngredients: (state, mIngredients) => {
      state.mIngredients = mIngredients;
    },
    SET_cookingprocess: (state, processes) => {
      state.processes = processes;
    },
    SET_SIngredients: (state, sIngredients) => {
      state.sIngredients = sIngredients;
    },
    SET_Flavoring: (state, flavoring) => {
      state.flavoring = flavoring;
    },
    StoreUserID: (state, id) => {
      state.id = id;
    },
    RemoveRecipeID: (state) =>{
      state.localStorageRecipeID.recipeID = null;
    }
  },
  actions: {
    async StoreUserID({ commit }, id) {
      commit("StoreUserID", id);
    },
    async loadFoodtag({ commit }) {
      await axios
        .get(`${process.env.VUE_APP_BACKEND}/api/findAll/foodtag`)
        .then((response) => {
          commit("LOAD_foodtag", response.data);
          console.log(response.data);
        })
        .catch((error) => console.log(error.response.data));
    },
    //Cooking Process
    async CreateCookingprocess({ commit }, processes) {
      await axios
        .post(
          `${process.env.VUE_APP_BACKEND}/api/cooking_process/createProcess`,
          processes
        )
        .then((response) => {
          commit("SET_cookingprocess", response.data);
          console.log(response.data);
        })
        .catch((error) => console.log(error.response.data));
    },
    //Main
    async CreateMainIngredients({ commit }, mIngredients) {
      console.log("sdffa");
      console.log(mIngredients);
      await axios
        .post(
          `${process.env.VUE_APP_BACKEND}/api/ingredient/createRecipeIngredients`,
          mIngredients
        )
        .then((response) => {
          commit("SET_MIngredients", response.data);
          console.log(response.data);
        })
        .catch((error) => console.error(error.response.data));
    },
    //Sub
    async CreateSubIngredients({ commit }, sIngredients) {
      console.log(sIngredients);
      await axios
        .post(
          `${process.env.VUE_APP_BACKEND}/api/ingredient/createRecipeIngredients`,
          sIngredients
        )
        .then((response) => {
          commit("SET_SIngredients", response.data);
          console.log(response.data);
        })
        .catch((error) => console.error(error.response.data));
    },
    //Flavoring
    async CreateFlavoring({ commit }, flavoring) {
      console.log(flavoring);
      await axios
        .post(
          `${process.env.VUE_APP_BACKEND}/api/ingredient/createRecipeIngredients`,
          flavoring
        )
        .then((response) => {
          commit("SET_Flavoring", response.data);
          console.log(response.data);
        })
        .catch((error) => console.error(error.response.data));
    },
    async CreateDetail({ commit, getters }, recipe) {
      console.log("vuex createDetail", recipe);
      console.log(recipe);
      const id = getters.findUserID;
      await axios
        .post(`${process.env.VUE_APP_BACKEND}/api/recipe/create/${id}`, {
          shareOption: recipe.shareOption,
          recipeName: recipe.recipeName,
          description: recipe.description,
          time: recipe.time,
          serveNumber: recipe.serveNumber,
          image: recipe.image,
        })
        .then((response) => {
          commit("SET_Detail", response.data);
          if(response.data.recipeID){
            localStorage.setItem("recipe", JSON.stringify(response.data));
          }
          return response.data;
        })
        .catch((error) => console.error(error.response.data));
    },
    async RemoveRecipeID({ commit }) {
      localStorage.removeItem("recipe");
      commit("RemoveRecipeID");
    },
  },
};
export default createRecipe;
