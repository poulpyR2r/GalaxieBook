<template>
    <div class="container is-fluid">
        <input class="input" type="text" placeholder="Rechercher un astre">
        <div class="container">

            <div>
                <h1>Liste des astres</h1>
                <ul>
                    <li v-for="astre in astresliste" :key="astre.id">
                        {{ astre.name }} ({{ astre.englisName }})
                        <ul>
                            <li>Densité : {{ astre.density }}</li>
                            <li>Gravité : {{ astre.gravity }}</li>
                        </ul>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>



export default {
    name: "AstresComponent",

    computed: {
        astresliste() {
            return this.$store.state.astres
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