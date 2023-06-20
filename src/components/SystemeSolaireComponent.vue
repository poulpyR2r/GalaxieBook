<template>
  <div class="container mb-6">
    <div data-aos="fade-up" class="container is-flex " id="title">
      <div class="is-size-1 has-text-white">Scroll to discover</div>
    </div>
    <div class="container">

      <div class="solar-system mt-5">
        <div id="sun" class="brilliance"></div>


        <div v-for="planet in planets" :key="planet.id" class="">

          <div class="planet is-clickable"
            :style="{ marginTop: (scaleDistance(planet.semimajorAxis) + 25) + 'px', width: scaleSize((planet.meanRadius) * 2) + 'px', height: scaleSize((planet.meanRadius) * 2) + 'px', backgroundColor: planetColor(planet) }"
            @mouseover="showPlanetInfo(planet.id)" @mouseleave="hidePlanetInfo(planet.id)">
            <div v-show="hoveredPlanet === planet.id" class="planet-info box">
              <p>Information sur {{ planet.name }}</p>
              <p>Distance du Soleil : {{ planet.semimajorAxis }} km</p>
              <p>Radius : {{ ((planet.meanRadius) * 2) }} km</p>
              <img :src="planetImage(planet)" alt="Image de {{ planet.name }}" />
            </div>
          </div>


          <div data-aos="fade-left" class="info-container has-text-white">{{ planet.semimajorAxis }} km</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
export default {
  name: 'SystemeSolaire',
  data() {
    return {
      scale: 1e-6,
      sizeScale: 1e-3,
      hoveredPlanet: null,
    };
  },
  computed: {
    astres() {
      return this.$store.state.astres.astres;
    },
    planets() {
      // Note: nous avons inversé le tri ici
      return this.astres.filter((astre) => astre.isPlanet).sort((a, b) => a.semimajorAxis - b.semimajorAxis);
    },
  },
  methods: {
    scaleDistance(distance) {
      return distance * this.scale;
    },
    scaleSize(size) {
      return size * this.sizeScale;
    },
    showPlanetInfo(planetId) {
      this.hoveredPlanet = planetId;
    },
    hidePlanetInfo(planetId) {
      if (this.hoveredPlanet === planetId) {
        this.hoveredPlanet = null;
      }
    },
    planetImage(planet) {
      return require(`@/assets/planete/${planet.name.toLowerCase()}.jpg`);
    },
    planetColor(planet) {
      switch (planet.name.toLowerCase()) {
        case 'mercure':
          return '#aaa';
        case 'la terre':
          return '#4f82c7';
        case 'mars':
          return '#c7694d';
        case 'jupiter':
          return '#c7a24d';
        case 'saturne':
          return '#c7c04d';
        case 'uranus':
          return '#4dc7b0';
        case 'neptune':
          return '#4d6ac7';
        case 'vénus':
          return '#4d6ac7';
        default:
          return '#888';
      }
    },
  },
  mounted() {
    this.$store.dispatch('astres/fetchAstres');
  },
};
</script>

<style scoped>
.container {
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column-reverse;
}



.solar-system {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50vh;
}
.info-container{
  position: absolute;
  margin-left: 70vh;
  width: 20vh;
  font-family: Neo-bold;
  font-style: italic;
  margin-bottom: -0.5vh;
  font-size: larger;
  
}

#sun {
  width: 50px;
  height: 50px;
  background-color: #ff0;
  margin-bottom: 1rem;
  border-radius: 50%;
  box-shadow: 0 0 10px 10px #ff0;
  filter: brightness(150%);
}




.planet {
  background-color: rgb(255, 31, 31);
  border-radius: 50%;
}

.planet-name {
  z-index: 1;
}

.planet-info {
  margin-left: 5vh;
  width: 300px;
  background-color: rgba(255, 255, 255, 0.9);
  color: #000;
  text-align: center;
  border-radius: 5px;
}

.planet:hover .planet-info {
  display: block;
}
</style>
