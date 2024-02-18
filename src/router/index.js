import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Main-Home.vue";
import Abilities from "@/views/Main-Abilities.vue";
import About from "@/views/Main-About.vue";
import Magic from "@/views/Magic.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/Abilities",
      name: "abilities",
      component: Abilities,
    },
    {
      path: "/About",
      name: "About",
      component: About,
    },
    {
      path: "/Magic",
      name: "Magic",
      component: Magic,
    },
  ],
});
export default router;
