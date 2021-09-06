import axios from "axios";
// import { vm } from '@/main'

const viewRecipe = {
  namespaced: true,
  state: {
    ID: "",
    recipe: [],
    MIngredients: [],
    SIngredients: [],
    Flavoring: [],
    cookingprocess: [],
    recipesfoodtag: [],
  },
  getters: {
    editDetail: (state) => state.recipe,
    findRecipeID: (state) => state.ID,
  },
  mutations: {
    recipeID: (state, id) => {
      state.ID = id;
    },
    // gotoEditRecipe: (state, id)=>{
    //   state.recipeID = id;
    // },
    LOAD_DETAIL: (state, detail) => {
      state.recipe = detail;
    },
    LOAD_MAIN_INGRE: (state, mIngre) => {
      state.MIngredients = mIngre;
    },
    LOAD_SUB_INGRE: (state, sIngre) => {
      state.SIngredients = sIngre;
    },
    LOAD_FLAV: (state, flavoring) => {
      state.Flavoring = flavoring;
    },
    LOAD_PROCESS: (state, process) => {
      state.cookingprocess = process;
    },
  },
  actions: {
    storeID({ commit }, id) {
      commit("recipeID", id);
    },
    // gotoEditRecipe({getters}) {
    //   const id = getters.findRecipeID;
    //   // vm.$router.push({ path: `/EditRecipe/${id}` }); //อันนี้มันรับเลข id จากหน้าที่แล้วมาได้เพราะว่าคลิ๊กแล้วเลขตรงกับ recipeID ใน DB
    //   // vm.$router.push({ path: `/EditRecipe/${id}` });
    // },
    async loadDetailByID({ commit }, id) {
      // const id = getters.findRecipeID;
      let response = await axios.get(
        `${process.env.VUE_APP_BACKEND}/api/find/recipe/` + id
      );
      await commit("LOAD_DETAIL", response.data);
      console.log(response.data);
    },
    async loadMainIngre({ commit }, id) {
      let response = await axios.get(
        `${process.env.VUE_APP_BACKEND}/api/find/MainIngre/` + id
      );
      await commit("LOAD_MAIN_INGRE", response.data);
      console.log(response.data);
    },
    async loadSubIngre({ commit }, id) {
      let response = await axios.get(
        `${process.env.VUE_APP_BACKEND}/api/find/SubIngre/` + id
      );
      await commit("LOAD_SUB_INGRE", response.data);
      console.log(response.data);
    },
    async loadFlavoring({ commit }, id) {
      let response = await axios.get(
        `${process.env.VUE_APP_BACKEND}/api/find/Flavoring/` + id
      );
      await commit("LOAD_FLAV", response.data);
      console.log(response.data);
    },
    async loadProcess({ commit }, id) {
      let response = await axios.get(
        `${process.env.VUE_APP_BACKEND}/api/find/cooking_process/` + id
      );
      await commit("LOAD_PROCESS", response.data);
      console.log(response.data);
    },
  },
};

export default viewRecipe;
