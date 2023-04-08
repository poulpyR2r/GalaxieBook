<template>
    <div class="container is-fluid">
        <input class="input" type="text"  v-model="search" placeholder="Rechercher un astre">
        <div class="container is-fluid">


            <div class="columns is-multiline">
                <div class="column is-4" v-for="astre in filteredAstres" :key="astre.id">
                    <div class="container" id="card_astres">
                        <div class="container p-2 is-flex is-flex-direction-column" id="card_perspective">
                            <div class="subtitle is-align-self-center"><strong>{{ astre.name }}</strong></div>
                            <button class="button mt-2" id="button-card">
                                <router-link :to="{ name: 'astresId', params: { id:astre.id }}">Détails</router-link>
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



export default {
    name: "AstresComponent",
    data() {
        return {
            search: ''
        }
    },

    computed: {
        astresliste() {
            return this.$store.state.astres
        },

        filteredAstres() {
            return this.astresliste.filter(astre => astre.name.toLowerCase().includes(this.search.toLowerCase()));
        },

    },
    created() {

    },
    mounted() {
        // dispatch 'fetchProducts' to fetch data
        (this.$store.dispatch('fetchAstres'))
    },
};





</script>

<style scoped>
#card_astres {
    background-color: white;
    z-index: 99;
    border-radius: 8px;
}

#button-card {
        
}


#card_perspective{
  
}

#card_perspective:hover{
 
}

</style>