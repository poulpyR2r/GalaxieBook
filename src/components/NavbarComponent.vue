<template>
  <div class="container is-flex is-fluid is-justify-content-center mt-6">

    <div class="title has-text-white" id="titreGalaxie" data-aos="fade-down">Galaxie Book</div>

  </div>

  <div class="container is-fluid is-flex  is-flex-direction-row " id="container-big">
    <div class="container is-fluid" id="containernav">
      <div data-aos="fade-right" class="title is-1" id="link"><router-link to="/systeme-solaire">Le système
          solaire</router-link></div>
      <div data-aos="fade-right" class="title is-1" id="link"><router-link to="/astres">Les astres</router-link></div>
      <div data-aos="fade-right" class="title is-1" id="link"><router-link to="/favoris">Favoris</router-link></div>
      <div data-aos="fade-right" class="title is-1" id="link"><router-link to="/nasa">Nasa</router-link></div>

    </div>
    <div class="container is-fluid">
      <PlanetteTerre data-aos="fade-left" class="mt-6"></PlanetteTerre>
    </div>
  </div>
  <div class=" container is-fluid" id="desc">
    <div class="columns">
      <div class="column" data-aos="fade-right">
        <p class="has-text-white" id="text">GalaxieBook est un site web fascinant conçu pour vous permettre de découvrir et
          d'explorer l'univers incroyable qui nous entoure. Grâce à une intégration étroite avec une API spécialisée,
          GalaxieBook vous offre un accès privilégié à une multitude de données et d'informations sur les merveilles de
          l'espace.</p>
      </div>
      <div class="column" data-aos="fade-left">
        <figure class="image">
          <img id="images" src="../assets/astres.jpg">
        </figure>
      </div>
    </div>
    <div class="columns mt-6">
      <div class="column" data-aos="fade-right">
        <figure class="image" >
          <img id="images" src="../assets/spiral.jpg">
        </figure>
      </div>
      <div class="column" data-aos="fade-left">
        <p class="has-text-white" id="text">Imaginez pouvoir plonger au cœur des galaxies lointaines, explorer les mystères des
          trous noirs, et admirer les images époustouflantes capturées par les télescopes les plus avancés de notre
          époque. GalaxieBook est votre billet d'entrée vers cette expérience cosmique captivante.</p>
      </div>

    </div>
  </div>
</template>
  
<script>
import PlanetteTerre from './PlanetteTerre.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
export default {
  name: "NavbarComponent",
  components: {
    PlanetteTerre,
  },

  created() {
  },
  mounted() {
  },
};

</script>



<style scoped>
#containernav {
  margin-top: 170px;
  font-family: Neo-bold;
  font-style: italic;
  text-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

}
#text{
  font-size: 3vh;
  font-family: Neo-bold;
  font-style: italic;
}

#images{
  border-radius: 5px;
}

#container-big {
  /* background-color: red; */
  margin-top: 60px;
}

#titreGalaxie {
  font-size: 20vh;
  font-family: Neo-bold;
  font-style: italic;
}

#background_earth {
  margin-top: 180px;
  width: 600px;
  height: 600px;
  /* background-color: red; */
  background-image: linear-gradient(213deg, transparent 50%, rgba(0, 0, 0, .8)), url(../assets/earth.webp);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;

}

#link {
  font-size: 4rem;
}



a {
  color: white;
  display: inline-block;
}

a:hover {
  color: rgb(199, 199, 199);
  transform: scale(1.03);
}

#titlegalaxie {
  font-family: Neo-bold;
  color: white;
  font-size: 80px;
}

#desc {
    margin-top: 200px;
}

</style>