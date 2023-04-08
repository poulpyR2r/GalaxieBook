import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from "@/views/AccueilView.vue";
import AstresView from "@/views/AstresView.vue";
import AstresViewId from "@/views/AstresViewId.vue";

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
  {
    path: "/astres/:id",
    
    name : "astresId",
    component: AstresViewId,
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
