// store/ModuleFavoris.js
const state = {
    favoris: [],
};

const mutations = {
    ADD_FAVORI(state, astre) {
        state.favoris.push(astre);
    },
    REMOVE_FAVORI(state, astreId) {
        state.favoris = state.favoris.filter((astre) => astre.id !== astreId);
    },
};

const actions = {
    addFavori({ commit }, astre) {
        commit('ADD_FAVORI', astre);
    },
    removeFavori({ commit }, astreId) {
        commit('REMOVE_FAVORI', astreId);
    },
};

const getters = {
    favoris: (state) => state.favoris,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
