<template>
    <button class="button mt-2 ml-2" id="button-card" @click="$router.push('/')">Accueil</button>


    <div class="container is-fluid">
        <div class="container is-fluid is-flex is-justify-content-center " id="bg-container">
            <div class="title p-5 has-text-white" id="title">Les Astres</div>
        </div>
        <div class="container is-flex mt-6 mb-6">
            <input class="input" type="text" v-model="search" placeholder="Rechercher un astre">
            <div class="select ml-5">
                <select v-model="filterType">
                    <option value="all" disabled>Filtre</option>
                    <option value="all">Tous</option>
                    <option value="planet">Planète</option>
                    <option value="moon">Lune</option>

                </select>
            </div>
        </div>

        <div class="container is-fluid">
            <button class="button mt-2 ml-2" id="scroll" @click="scrollToTop">scrool top</button>


            <div class="columns is-multiline">
                <div class="column is-4" v-for="astre in filteredAstres" :key="astre.id">
                    <div class="container" id="card_astres">
                        <div class="container p-2 is-flex is-flex-direction-column" id="card_perspective">
                            <div class="subtitle is-align-self-center has-text-black" id="subtitle"><strong>{{ astre.name }}</strong></div>
                            <div v-if="astre.moons === null">
                                <p>Cette astre ne possède pas de lune</p>
                            </div>

                            <div v-if="astre.isPlanet">{{ astre.name }} est une planète</div>
                            <div v-else> <span class=" has-text-weight-bold " id="warning">Attention</span> {{ astre.name
                            }} n'est pas une planete mais une lune</div>

                            <div class="container mt-3 mb-3">
                                <router-link :to="{ name: 'astresId', params: { id: astre.id } }" custom
                                    v-slot="{ navigate }">
                                    <button class="button mt-2 is-info" id="button-card" @click="navigate" role="link">
                                        Explorer
                                    </button>
                                    
                                </router-link>

                                   
                                    
                            </div>

                            <button class="button mt-2 is-info" @click="toggleFavori(astre)">
    {{ isFavori(astre) ? "Retirer des favoris" : "Ajouter aux favoris" }}
  </button>
                            
                        </div>
                        
                    </div>

                </div>

            </div>








            <div class="columns">

                <div class="column is-3">

                </div>
            </div>


        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "AstresComponent",
    data() {
        return {
            search: '',
            filterType: 'all',
        };
    },
    computed: {
        ...mapState('favoris', ['favoris']),
        astresliste() {
            return this.$store.state.astres.astres;
        },
        filteredAstres() {
            return this.astresliste.filter(astre => {
                const nameMatch = astre.name.toLowerCase().includes(this.search.toLowerCase());
                const filterMatch = this.filterType === 'all' ||
                    (this.filterType === 'planet' && astre.isPlanet) ||
                    (this.filterType === 'moon' && !astre.isPlanet);

                return nameMatch && filterMatch;
            });
        },
    },
    methods: {
        toggleFavori(astre) {
            if (this.isFavori(astre)) {
                this.$store.dispatch('favoris/removeFavori', astre.id);
            } else {
                this.$store.dispatch('favoris/addFavori', astre);
            }
        },
        isFavori(astre) {
            return this.favoris.some((favori) => favori.id === astre.id);
        },
        scrollToTop() {
            // ...
        },
    },
    mounted() {
        this.$store.dispatch('astres/fetchAstres');
    },
};
</script>

<style scoped>
@font-face {
    font-family: Neo-bold;
    src: url(@/fonts/Neo\ Sans\ Std\ Bold.otf);

}
#warning{
    
}

#title {
    font-family: Neo-bold;
    font-size: 88px;
    font-style: italic;
}

#subtitle {
    font-family: Neo-bold;
    font-size: 40px;
    font-style: italic;

}

#card_astres {
    background-color: white;
    z-index: 98;
    border-radius: 8px;
    
}

#bg-container {}

#button-card {
    background-color: #824d9b;
    color: rgb(255, 255, 255) !important;
    font-family: Neo-regular;
    width: 100px;
    border: black !important;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
}

#scroll{
    background-color: #824d9b;
    color: rgb(255, 255, 255) !important;
    font-family: Neo-regular;
    width: 100px;
    border: black !important;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    z-index: 99;
    position: fixed !important;
    right: 25px;
    bottom: 20px;
}


#card_perspective {}

#card_perspective:hover {}
</style>