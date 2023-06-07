export default {
    namespaced: true,
  
    state: {
      imagedujour: [],
    },
  
    mutations: {
      updateAstresData(state, imagedujour) {
        state.imagedujour = imagedujour;
      },
    },
    actions: {
        fetchImagedujour({ commit }) {
          const baseURL = "https://api.nasa.gov/planetary/apod?api_key=IsqHPWPDFd5s2pbs3A9Ff6aoHZAdginIVjU6Hooc";
          fetch(baseURL)
            .then((response) => {
              if (!response.ok) {
                throw Error(response.statusText);
              }
              return response.json();
            })
            .then((data) => {
              const details = {
                copyright: data.copyright,
                date: data.date,
                explanation: data.explanation,
                hdurl: data.hdurl,
                media_type: data.media_type,
                service_version: data.service_version,
                title: data.title,
                url: data.url
              };
              commit("updateAstresData", details);
            })
            .catch((error) => {
              console.log(error);
            });
        },
      },
  
    // getters: {
    //   getAstreById: (state) => (id) => {
    //     return state.astres.find((astre) => astre.id.toString() === id);
    //   },
    // },
  };
  