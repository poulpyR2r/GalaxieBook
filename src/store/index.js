import { createStore } from "vuex";

export default createStore({
  state: {
    astres: []
  },
  mutations: {
    updateAstresData(state, astres){
      // here set your state
      state.astres = astres
    }
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
              englisName : el.englisName,
              density : el.density,
              gravity : el.gravity  
           
            }
            astresData.push(details);
          });
          commit('updateAstresData', astresData);
        });
      }).catch( e => console.log(e) );
    }
  }
})