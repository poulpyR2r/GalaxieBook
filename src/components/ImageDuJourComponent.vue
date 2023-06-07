<template>
    <div class="container is-fluid ">
        <div class="container is-fluid is-flex is-justify-content-center mt-4 ">
            <div class="title has-text-white">Explorez l'espace avec l'image du Jour</div>
        </div>
        <div class="container is-fluid is-flex is-justify-content-center mt-6">
            <img :src=imagedujour.url alt="Image du jour ">
        </div>
        <div class="container is-fluid is-flex  mt-4 is-flex-direction-column">
            <div class="subtitle has-text-white is-align-self-center">{{ imagedujour.title }}</div>
            <div class="subtitle has-text-white is-align-self-center">{{ imagedujour.copyright }}</div>
        </div>





    </div>


    <!-- 

    <h1>NASA IMAGE DU JOUR</h1>
    <img :src=imagedujour.url alt="image du jour">
    <p>{{ imagedujour.date }}</p>
    <p>{{ imagedujour.copyright }}</p>
    <p>{{ imagedujour.explanation }}</p>
    <p>{{ imagedujour.url }}</p>
    <p>{{ imagedujour.media_type }}</p>
    <p>{{ imagedujour.service_version }}</p>
    <p>{{ imagedujour.title }}</p>
    <p>{{ imagedujour.hdurl }}</p>
     -->
</template>

<script>

export default {
    name: "ImageDuJourComponent",
    components: {

    },

    created() {
    },


    computed: {
        imagedujour() {
            return this.$store.state.imagedujour.imagedujour
        },
    },


    mounted() {
        (this.$store.dispatch('imagedujour/fetchImagedujour'))
    },

};




</script>


<style scoped></style>