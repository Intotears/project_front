import Vue from "vue";
import Vuex from "vuex";
import myrecipes from "./modules/MyRecipe";
import auth from "./modules/auth.module";
import editRecipe from './modules/EditRecipe';
import allrecipes from './modules/AllRecipe';
import viewRecipe from './modules/ViewRecipe';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    myrecipes,
    auth,
    editRecipe,
    allrecipes,
    viewRecipe,
  },
});
