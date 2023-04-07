import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from "@/views/AccueilView.vue";
import AstresView from "@/views/AstresView.vue";

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: AccueilView,
  },

  {
    path: "/astres",
    name : "astres",
    component: AstresView,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
