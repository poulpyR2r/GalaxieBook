import { createStore } from "vuex";

export default createStore({
  state: {
    astres: [],
  },

  
  mutations: {
    updateAstresData(state, astres){
      state.astres = astres
    },


    



  },
  actions: {
    fetchAstres({commit}){
      const baseURL = 'https://api.le-systeme-solaire.net/rest/bodies/';
      let astresData = [];
      fetch(baseURL).then( response => {
        response.json().then( data => {
          data.bodies.forEach( el => {    
            // console.log(el);
            let details = {
              id: el.id,
              name : el.name,
              englishName : el.englishName,
              isPlanet : el.isPlanet,
              moons : el.moons,
              semimajorAxis : el.semimajorAxis,
              perihelion : el.perihelion,
              aphelion : el.aphelion,
              eccentricity : el.eccentricity,
              inclination : el.inclination,
              mass : el.mass,
              vol : el.vol,
              density : el.density,
              gravity : el.gravity,
              escape : el.escape,
              meanRadius : el.meanRadius,
              equaRadius : el.equaRadius,
              polarRadius : el.polarRadius,
              flattening : el.flattening,
              dimension : el.dimension,
              sideralOrbit : el.sideralOrbit,
              sideralRotation : el.sideralRotation,
              aroundPlanet : el.aroundPlanet,
              discoveredBy : el.discoveredBy,
              discoveryDate : el.discoveryDate,
              alternativeName : el.alternativeName,
              axialTilt : el.axialTilt,
              avgTemp : el.avgTemp,
              mainAnomaly : el.mainAnomaly,
              argPeriapsis : el.argPeriapsis,
              longAscNode : el.longAscNode,
              bodyType : el.bodyType


            }
            astresData.push(details);
          });
          commit('updateAstresData', astresData);
        });
      }).catch( e => console.log(e) );
    },
  },




  getters : {
    getAstreById: (state) => (id) => {
      return state.astres.find(astre => astre.id.toString() === id);
    }
}
})


//faire filtre avec filtre javascript