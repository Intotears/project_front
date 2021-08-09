import axios from "axios"

const myrecipes = {
  namespaced: true,
  state: {
    recipe: [],
  },
  getters: {
    allMyRecipes: (state) => state.recipe,
  },
  mutations: {
    LOAD_MYRECIPES: (state, recipe)=>{
        state.recipe = recipe;
    },
    EDIT_MYRECIPES: (state, recipe)=>{
        state.recipe = recipe;
        // var todos = state.todos
        // todos.splice(todos.indexOf(todo), 1)
        // state.todos = todos
        // state.newTodo = todo.body
    },
    DELETE_MYRECIPES: (state, id)=>{
        const index = state.recipe.findIndex(r => r.recipeID == id)
        state.recipe.splice(index, 1)
    },
},
  actions: {
    async loadMyRecipes({ commit }) {
      await axios
        .get(`${process.env.VUE_APP_BACKEND}/api/findAll/recipe`)
        .then((response) => {
          commit("LOAD_MYRECIPES", response.data);
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    },
    async DeleteRecipe({ commit }, id) {
      await axios
        .delete(`${process.env.VUE_APP_BACKEND}/api/recipe/delete/` + id ,
        )
        .then((response) => {
          commit("DELETE_MYRECIPES", id);
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    },
  },
};

export default myrecipes;
