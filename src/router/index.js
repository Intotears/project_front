import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/CreateRecipe",
    name: "CreateRecipe",
    component: () => import("@/views/CreateRecipe.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/components/test.vue"),
  },
  {
    path: "/MyRecipe",
    name: "MyRecipe",
    component: () => import("@/views/MyRecipe.vue"),
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import("@/views/Register.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/EditRecipe/:id", 
    name: "EditRecipe",
    component: () => import("@/views/EditRecipe.vue"),
  },
  {
    path: "/Profile", 
    name: "Profile",
    component: () => import("@/views/Profile.vue"),
  },
  {
    path: "/ViewRecipe/:id", 
    name: "ViewRecipe",
    component: () => import("@/views/ViewRecipe.vue"),
  },
  {
    path: "/index",
    name: "Index",
    component:() => import("@/views/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/index', '/test'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/index');
  } else {
    next();
  }
});
