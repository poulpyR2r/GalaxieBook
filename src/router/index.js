import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from "@/views/AccueilView.vue";
import AstresView from "@/views/AstresView.vue";
import AstresViewId from "@/views/AstresViewId.vue";
import NasaHomeView from "@/views/NasaHomeView.vue";
import ImageDuJourView from "@/views/ImageDuJourView.vue";
import SystemeSolaire from "@/views/SystemeSolaireView.vue";
import FavorisView from "@/views/FavorisView.vue";


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
  },
  {
    path: "/nasa",
    
    name : "nasa",
    component: NasaHomeView,
  },

  {
    path: "/nasa/image-du-jour",
    
    name : "image-du-jour",
    component: ImageDuJourView,
  },

  {
    path : "/systeme-solaire",
    name : "systeme-solaire",
    component: SystemeSolaire
  },

  {
    path: '/favoris',
    name: 'favoris',
    component: FavorisView,
  }
 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
