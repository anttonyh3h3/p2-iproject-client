import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/Register.vue";
import AgentList from "../views/AgentList.vue";
import AgentDetail from "../views/AgentDetail.vue";
import ProList from "../views/Pros.vue";
import HirePage from "../views/HireCoach.vue"
import DiscordLogin from "../views/DiscordLogin.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/discord-login",
      name: "discord-login",
      component: DiscordLogin,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
    },
    {
      path: "/agents",
      name: "agents",
      component: AgentList,
    },
    {
      path: "/agents/:uuid",
      name: "agents-details",
      component: AgentDetail,
    },
    {
      path: "/pros",
      name: "pros",
      component: ProList,
    },
    {
      path: "/pros/hire/:uuid",
      name: "hire-pros",
      component: HirePage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (localStorage.access_token && to.name === "login") {
    next({ name: "home" });
  } else if (localStorage.access_token && to.name === "register") {
    next({ name: "home" });
  }
  // else if (!localStorage.access_token && to.name === "bookmark") {
  //   next({ name: "login" });
  // }
  else {
    next();
  }
});

export default router;
