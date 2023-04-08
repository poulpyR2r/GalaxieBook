<template>
  <div class="container is-fluid is-flex  is-flex-direction-row" id="container-big">
    <div class="container is-fluid" id="containernav">
      <div class="title is-1" id="link"><router-link to="/systeme-solaire">Le système solaire</router-link></div>
      <div class="title is-1" id="link"><router-link to="/astres">Les astres</router-link></div>
      <div class="title is-1" id="link"><router-link to="/favori">Favoris</router-link></div>
    </div>
    <div class="container is-fluid">
      <PlanetteTerre class="mt-6"></PlanetteTerre>
    </div>
  </div>
</template>
  
<script>
import PlanetteTerre from './PlanetteTerre.vue';
export default {
  name: "NavbarComponent",
  components:{
    PlanetteTerre
  },

  created () {
  },
  mounted () {
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


#container-big{
  /* background-color: red; */
  top: 200px;
}

#background_earth {
  margin-top: 180px;
  width: 600px;
  height: 600px;
  /* background-color: red; */
  background-image: linear-gradient(213deg,transparent 50%,rgba(0,0,0,.8)), url(../assets/earth.webp);
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
</style>