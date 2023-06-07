<template>
    <div class="container is-fluid">
        <button class="button mt-2 ml-2" id="button-card" @click="$router.push('/')">Accueil</button>

        <div class="container is-fluid is-flex is-justify-content-center mt-4 ">

            <div class="title has-text-white">Plongez dans l'univers des API de la NASA </div>
        </div>

        <div class="columns mt-6">
            <div class="column">
                <div class="box is-flex is-flex-direction-column">
                    <div class="subtitle is-align-self-center">Photo du jour</div>
                    <div class="container">
                        <p>Découvrez les images époustouflantes de l'espace grâce à notre sélection quotidienne des
                            meilleures
                            photos prises par les satellites et télescopes de la NASA. Admirez la beauté de l'univers et
                            apprenez-en davantage sur les phénomènes spatiaux fascinants.</p>
                    </div>

                    <router-link to="/nasa/image-du-jour" custom v-slot="{ navigate }">
                        <button class="button mt-6" @click="navigate" role="link">
                            Explorer
                        </button>
                    </router-link>

                </div>

            </div>

        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.box {
    height: 100%;
}
</style>